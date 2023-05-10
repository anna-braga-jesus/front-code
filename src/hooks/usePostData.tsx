import {useQuery} from "@tanstack/react-query";
import axios, { AxiosPromise } from 'axios';
import { PostData } from '../interface/PostData';

const API_URL = 'http://localhost:8080';
//https://dev.codeleap.co.uk/careers/   

const fetchData = async (): AxiosPromise<PostData[]> => {
    const response = axios.get(API_URL + '/careers/');
    return response;
}

export function usePostData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey:['post-data'],
        retry: 2
    })

    return {
    ...query,
    data: query.data?.data}
    
}