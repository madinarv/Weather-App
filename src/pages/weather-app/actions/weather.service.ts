import {API} from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';

export const getWeathersService = ( location :any) => {
        // console.log(location);
    return axiosInstance.get(`${API.weather}?q=${location}&cnt=10&mode=json&units=metric&appid=6b5de11b3f571fe925473f5508ae0233`).then(res => {
        return res.data;
    });
};
