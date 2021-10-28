import axiosService from '../services/axios_service';

const obj = new axiosService();
const baseurl = "https://new-bookstore-backend.herokuapp.com/bookstore_user/"
const token = localStorage.getItem("token");
const headerconfig = {
    headers: {
    Authorization: token,
    }
};

class UserService {
    signup(data) {
        let response = obj.postMethod(`${baseurl}registration`, data, headerconfig);
        return response;
    }
    login(data) {
        let response = obj.postMethod(`${baseurl}login`, data, headerconfig);
        return response;
    }
    getAllbooks(data){
        let response = obj.getMethod(`${baseurl}get/book`, headerconfig);
        return response;

    }
   
}

export default UserService