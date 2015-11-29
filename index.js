import globby from 'globby';

const urlSymbol = Symbol('url');
const methodSymbol = Symbol('method');
const isRouteSymbol = Symbol('isRoute');
const middlewaresSymbol = Symbol('middlewares');

export default async function (patterns, stategy, ...params) {
    const stategyInstance = stategy(...params);

    const paths = await globby(patterns);

    paths.map(require)
        .forEach(obj => {
            Object.keys(obj)
                .map(name => obj[name])
                .filter(x => x[isRouteSymbol])
                .forEach(action => {
                    stategyInstance({
                        action,
                        url: action[urlSymbol],
                        method: action[methodSymbol],
                        middlewares: action[middlewaresSymbol]
                    });
                });
        });
};

export const httpGet = decoratorFactory('get');
export const httpPost = decoratorFactory('post');
export const httpPut = decoratorFactory('put');
export const httpDelete = decoratorFactory('delete');
export const httpHead = decoratorFactory('head');

export function middlewareFactory(middleware) {
    return function decorator(...params) {
        const isCalledWithoutParams = params[2] !== undefined && 'value' in params[2];

        if (isCalledWithoutParams) {
            addMidleware(params[2], middleware);
        } else {
            middleware = middleware(...params);

            return function (target, name, descriptor) {
                addMidleware(descriptor, middleware);
            };
        }
    };
}

function addMidleware(descriptor, middleware) {
    if (!descriptor.value[middlewaresSymbol]) {
        descriptor.value[middlewaresSymbol] = [];
    }

    descriptor.value[middlewaresSymbol].push(middleware);
}

function decoratorFactory(method) {
    return function decorator(url) {
        return function (target, name, descriptor) {
            descriptor.value[isRouteSymbol] = true;
            descriptor.value[urlSymbol] = url;
            descriptor.value[methodSymbol] = method;
        };
    };
}
