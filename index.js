import globby from 'globby';

const urlSymbol = Symbol('url');
const methodSymbol = Symbol('method');

export default async function (patterns, stategy, ...params) {

    const stategyInstance = stategy(...params);

    const paths = await globby(patterns)

    paths.map(require)
        .forEach(obj => {
            Object.keys(obj)
                .map(x => obj[x])
                .forEach(x => {
                    stategyInstance({
                        url: x[urlSymbol],
                        method: x[methodSymbol]
                    });
                });
        });
};

export function httpGet(url){
    return function(target, name, descriptor){
        descriptor.value[urlSymbol] = url;
        descriptor.value[methodSymbol] = 'get';
    };
}
