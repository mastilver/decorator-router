# decorator-router [![Build Status](https://travis-ci.org/mastilver/decorator-router.svg?branch=master)](https://travis-ci.org/mastilver/decorator-router)[![Coverage Status](https://coveralls.io/repos/mastilver/decorator-router/badge.svg?branch=master&service=github)](https://coveralls.io/github/mastilver/decorator-router?branch=master)

> Framework agnostic router using es7 decorators


## Install

```
$ npm install --save decorator-router
```


## Usage

Having a controller like `controller/homeCtrl.js`

```js
import { httpGet } from 'decorator-router';

export default {
    @httpGet('/')
    getIndex(req, res){
        res.ok();
    }
}
```

You will register route that way

```js
import decoratorRouter = from 'decorator-router';
import decoratorRouterExpress = from 'decorator-router-express';
import express from 'express';

let app = express();

decoratorRouter('controller/*Ctrl.js', decoratorRouterExpress, app)
.then(x => {
    console.log('done');
});
```


## API

### decoratorRouter(patterns, strategy, ...strategyParameters)

#### patterns

*Required*  
Type: `string|Array`

[globby](https://github.com/sindresorhus/globby) patterns

#### strategy

*Required*  
Type: `Function`

the strategy used to register routes. See [available strategies](#strategies)

#### strategyParameters

Type: `Array`

This will be passed to instantiate the strategy.


### @httpGet(url)  
### @httpPost(url)  
### @httpPut(url)  
### @httpDelete(url)  
### @httpHead(url)  

#### url

*Required*  
Type: `string`


## Strategies

* [express](https://github.com/mastilver/decorator-router-express)


## Inspiration

I originaly wrote [node-annotation-router](https://github.com/mastilver/node-annotation-router)
Annotations names are inspired by Microsoft's MVC


## License

MIT © [Thomas Sileghem](https://mastilver.com)
