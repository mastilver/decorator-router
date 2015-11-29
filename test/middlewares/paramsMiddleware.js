import {middlewareFactory} from '../../index';

export default middlewareFactory(role => () => role);
