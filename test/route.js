import path from 'path';

import test from 'ava';
import 'babel-core/register';

import fn from '../index';

test('strategy should be called with the right route', async t => {
    t.plan(2);

    const strategy = () => ({url, method}) => {
        t.is(url, '/');
        t.is(method, 'get');
    };

    await fn(path.join(__dirname, 'controllers/homeCtrl.js'), strategy);
});

test('strategy shoud be called for all the routes', async t => {
    const result = {};

    const strategy = () => ({url, method, action}) => {
        result[`${ method } ${ url }`] = action();
    };

    await fn(path.join(__dirname, 'controllers/*Ctrl.js'), strategy);

    const nbRegistedRoutes = Object.keys(result).length;

    t.is(nbRegistedRoutes, 6);

    t.is('ok', result['get /']);
    t.is('getAllUsers', result['get /user']);
    t.is('getUser', result['get /user/:id']);
    t.is('createUser', result['post /user']);
    t.is('updateUser', result['put /user/:id']);
    t.is('deleteUser', result['delete /user/:id']);
});
