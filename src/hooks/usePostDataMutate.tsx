import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios, { AxiosPromise } from 'axios';
import { PostData } from '../interface/PostData';

const API_URL = 'http://localhost:8080';

const postData = async (data: PostData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/careers', data);
    return response;
}


export function usePostDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,      
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['post-data'])
        }
    })

    return mutate;
    
}