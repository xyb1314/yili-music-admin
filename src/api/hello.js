import {get} from "./request";


export const sayhello = () => {
    return get('/users/hello') ;   //  /users/hello
}