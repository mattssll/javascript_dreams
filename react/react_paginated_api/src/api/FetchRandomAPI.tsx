
import axios from 'axios';

export const FetchRandomAPI = (pageNumber: number) => {
    
    const fetchData = () => {
        const req = axios
        .get(`https://randomuser.me/api?page=${pageNumber}`)
        .then(({ data }) =>{
            console.log(data);
            return data;
        })
        .catch(err => {
            console.log(err);
        });
        return req; // data will be returned from our api to our client here
    }

    return fetchData();
    
}