import axios from "axios";

const Api = axios.create({
    baseURL:"http://10.133.52.11:3000",
});

export default Api;