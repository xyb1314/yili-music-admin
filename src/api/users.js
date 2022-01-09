import { post, get } from './request';

export const login = (username, password) => {
    return post('/login', { username, password });
};

export const search = paging => {
    return get('/users/hello', { params: paging });
};