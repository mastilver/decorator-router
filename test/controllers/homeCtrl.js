import { httpGet } from '../../index';

export default {
    @httpGet('/')
    getIndex(){
        return 'ok';
    }
}
