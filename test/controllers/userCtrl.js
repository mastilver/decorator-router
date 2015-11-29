import {httpGet, httpPost, httpPut, httpDelete} from '../../index';

import noParamsMiddleware from '../middlewares/noParamsMiddleware';
import paramsMiddleware from '../middlewares/paramsMiddleware';

export default {

    @httpGet('/user')
    getAllUsers() {
        return 'getAllUsers';
    },

    @httpGet('/user/:id')
    getUser() {
        return 'getUser';
    },

    @paramsMiddleware('admin')
    @httpPost('/user')
    createUser() {
        return 'createUser';
    },

    @httpPut('/user/:id')
    updateUser() {
        return 'updateUser';
    },

    @noParamsMiddleware
    @httpDelete('/user/:id')
    deleteUser() {
        return 'deleteUser';
    }
};
