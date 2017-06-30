import ActionBundle from '../../actions/actionbundle.js';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Store from '../../store.js'


export default class TokenMiddlware {

    static RemoveToken() {
        return (dispatch) => {
            dispatch(ActionBundle.clearToken());
        }
    }

    static isUserAuthentic(userCredentail) {
        return (dispatch) => {

            var resOfsuccess;
            var resOfToken;

            axios.post('http://localhost:3050/api/adminLogin', userCredentail)
                .then((response) => {
                    resOfsuccess = response.data.success;
                    resOfToken = JSON.parse(response.request.response).token
                })
                .then(() => {
                    if (resOfsuccess === false) {
                        alert("You are Unauthorize");
                    }
                    else {
                        var token = resOfToken;
                        Store.dispatch(ActionBundle.adminToken(token))
                        browserHistory.push('/admin/adminpanel');
                    }
                })

        }
    }
}


