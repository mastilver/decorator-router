import { httpGet, httpPost, httpPut, httpDelete } from '../../index';


export default {

    @httpGet('/user')
    getAllUsers(req, res) {
        return 'getAllUsers';
    },

    @httpGet('/user/:id')
    getUser(){
        return 'getUser';
    },

    @httpPost('/user')
    createUser(){
        return 'createUser';
    },

    @httpPut('/user/:id')
    updateUser(){
        return 'updateUser';
    },

    @httpDelete('/user/:id')
    deleteUser(){
        return 'deleteUser';
    },
}
