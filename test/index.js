import test from 'ava';
import 'babel-core/register';

import fn from '../index';

test('strategy should receive params to instantiate', async t => {

    t.plan(1);

    const strategy = x => t.is(x, 'test');

    await fn('', strategy, 'test');
});
