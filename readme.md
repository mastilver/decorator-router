# decorator-router [![Build Status](https://travis-ci.org/mastilver/decorator-router.svg?branch=master)](https://travis-ci.org/mastilver/decorator-router)

> Framework agnostic router using es7 decorators


## Install

```
$ npm install --save decorator-router
```


## Usage

Given a controller  `controller/homeCtrl.js`

```js
import {httpGet, middlewareFactory} from 'decorator-router';

const isLoggedIn = middlewareFactory(function(res, req, next){
    /*   check if user is logged in   */
    next();
});

const isRole = middlewareFactory(role => function(res, req, next){
    /*   check if user have the right role   */
    next();
});

const

export default {

    @isLoggedIn
    @httpGet('/')
    getIndex(req, res){
        res.ok();
    },

    @isRole('admin')
    @httpGet('/admin')
    getAdminPortal(req, res){
        res.ok();
    }
}
```

You can register those routes by doing

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


### middlewareFactory(middleware)

Returns a decorator.

## middleware

*Required*  
Type: `Function`

Can be a middleware or a middleware factory depending if you need to pass parameters to your middleware or not.


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
