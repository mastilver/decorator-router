import path from 'path';

import test from 'ava';
import 'babel-core/register';

import fn from '../index';

test('the strategy should be called with the right route', async t => {

    t.plan(2);

    const strategy = () => {
        return ({ url, method }) => {
            t.is(url, '/');
            t.is(method, 'get');
        };
    };

    await fn(path.join(__dirname, 'controllers/homeCtrl.js'), strategy);
});
