import test from 'ava';
import 'babel-core/register';

import fn from '../index';

test('strategy should receive params to instantiate', async t => {
    t.plan(2);

    const strategy = (p1, p2) => {
        t.is(p1, 'param1');
        t.is(p2, 'params2');
    };

    await fn('', strategy, 'param1', 'params2');
});
