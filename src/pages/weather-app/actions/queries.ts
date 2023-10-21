import {useQuery} from 'react-query';
import { getWeathersService } from './weather.service';

export const useWeathers = ( location:any )=>{
    return useQuery<any[], Error>(['weather', location ], () => {
        return getWeathersService( location );
    });
};
