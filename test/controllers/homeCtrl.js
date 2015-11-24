import { httpGet } from '../../index';


@httpGet('/');
function getIndex(req, res){
    res.ok('ok');
}
