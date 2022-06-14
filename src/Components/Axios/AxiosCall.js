import axios from 'axios';

const baseURL = "http://localhost:3000/"

function axiosApiCall(url,method,data){
    console.log("test");
    return axios[method.toLowerCase()]
    (`${baseURL}${url}`, data);

}


export default axiosApiCall;