import axios from "axios";

// Exportable axios-instance with set config, to  

const axiosInstance = axios.create({
    baseURL: "https://cms.majgullaxelsson.se/items"
})

// 401 Http interceptor

axiosInstance.interceptors.response.use((res) => {
    console.log(res);

    return res;
}, (err) => {
    console.log(err);
    
    return Promise.reject(error);
});

export default axiosInstance