import axios from "axios";

class axiosService {
    postMethod(url, data, header=false) {
        return axios.post(url, data, header);
    }
    getMethod(url, header=false) {
        return axios.get(url, header);
    }
}

export default axiosService;