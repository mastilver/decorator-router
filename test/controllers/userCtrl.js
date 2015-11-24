import { httpGet, httpPost, httpPut, httpDelete } from '../../index';


@httpGet('/user');
function getAllUsers(req, res) {
    res.ok('getAllUsers');
}

@httpGet('/user/:id');
function getUser(){
    res.ok('getUser');
}

@httpPost('/user');
function createUser(){
    res.ok('createUser')
}

@httpPut('/user/:id');
function updateUser(){
    res.ok('updateUser')
}

@httpDelete('/user/:id');
function deleteUser(){
    res.ok('deleteUser');
}
