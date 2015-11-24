import globby from 'globby';

const urlSymbol = Symbol('url');
const methodSymbol = Symbol('method');

export default async function (patterns, stategy, ...params) {

    const stategyInstance = stategy(...params);

    const paths = await globby(patterns)

    paths.map(require)
        .forEach(obj => {
            Object.keys(obj)
                .map(name => obj[name])
                .forEach(action => {
                    stategyInstance({
                        action: action,
                        url: action[urlSymbol],
                        method: action[methodSymbol],
                    });
                });
        });
};

export const httpGet = decoratorFactory('get');
export const httpPost = decoratorFactory('post');
export const httpPut = decoratorFactory('put');
export const httpDelete = decoratorFactory('delete');
export const httpHead = decoratorFactory('head');

function decoratorFactory(method){
    return function decorator(url){
        return function(target, name, descriptor){
            descriptor.value[urlSymbol] = url;
            descriptor.value[methodSymbol] = method;
        };
    };
}
