import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    LOGOUT,
    FETCH_CHATS,
    FETCH_FRIENDS,
    REQUEST_FRIEND
} from '../constants/User';

import {API_URL} from "../constants/Library";
import {browserHistory} from 'react-router';

export function checkCookie() {
    return (dispatch) => {
        const name = window.localStorage.getItem('rr_name') || '';
        const id = window.localStorage.getItem('rr_id') || '';
        if (name !== '') {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    name: name,
                    id: id,
                    isAuthenticated: true,
                    chats: [],
                    friends: [],
                    friendsRequests: []
                }
            })
        }
    }
}

export function login(payload) {
    return (dispatch) => {
        let xhr = new XMLHttpRequest();
        let url = API_URL + '/auth';
        xhr.open('POST', url, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        let data = JSON.stringify(payload);
        xhr.send(data);
        const result = JSON.parse(xhr.response);
        if (!result.error) {
            browserHistory.push('/');
            window.localStorage.setItem('rr_name', result.userName);
            window.localStorage.setItem('rr_id', result.id);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    name: result.userName,
                    id: result.id,
                    isAuthenticated: true,
                    chats: result.chats,
                    friends: result.friends,
                    friendsRequests: result.friendsRequests
                }
            })
        } else {
            alert(result.error);
            window.localStorage.clear();
            dispatch({
                type: LOGIN_FAIL,
                payload: {
                    name: '',
                    id: '',
                    role: '',
                    isAuthenticated: false,
                }
            })
        }
    }
}

export function logout(payload) {
    return (dispatch) => {
        let xhr = new XMLHttpRequest();
        let url = API_URL + '/logout';
        xhr.open('POST', url, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        let data = JSON.stringify(payload);
        xhr.send(data);
        const result = JSON.parse(xhr.response);
        if (!result.error) {
            browserHistory.push('/');
            window.localStorage.clear();
            dispatch({
                type: LOGOUT,
                payload: {
                    name: '',
                    id: '',
                    role: '',
                    isAuthenticated: false,
                }
            })
        } else {
            browserHistory.push('/');
            window.localStorage.clear();
            dispatch({
                type: LOGOUT,
                payload: {
                    name: '',
                    id: '',
                    role: '',
                    isAuthenticated: false,
                }
            })
        }
    }
}

export function signUp(payload) {
    return (dispatch) => {
        let xhr = new XMLHttpRequest();
        let url = API_URL + '/user';
        xhr.open('POST', url, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        let data = JSON.stringify(payload);
        xhr.send(data);
        const result = JSON.parse(xhr.response);
        if (!result.error) {
            browserHistory.push('/');
            window.localStorage.setItem('rr_name', result.userName);
            window.localStorage.setItem('rr_name', result.id);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: {
                    name: result.userName,
                    id: result.id,
                    isAuthenticated: true,
                    chats: result.chats,
                    friends: result.friends,
                    friendsRequests: result.friendsRequests
                }
            })
        } else {
            alert(result.error);
            dispatch({
                type: SIGNUP_FAIL,
                payload: {
                    name: '',
                    role: '',
                    id: '',
                    isAuthenticated: false,
                }
            })
        }
    }
}

export function fetchUsers(data) {
    let xhr = new XMLHttpRequest();
    let url = API_URL + '/users/' + data;
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    console.log(xhr.response);
    const result = JSON.parse(xhr.response);
    if (!result.error) {
        return result;
    }
    return [];
}

export function fetchUser(userID, userName) {
    let xhr = new XMLHttpRequest();
    let url = API_URL + '/user/' + userID + '/' + userName;
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    const result = JSON.parse(xhr.response);
    if (!result.error) {
        return result;
    }
    console.log(result);
    return [];
}

export function requestFriend(payload) {
    return (dispatch) => {
        let xhr = new XMLHttpRequest();
        let url = API_URL + '/requestFriend';
        xhr.open('POST', url, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        let data = JSON.stringify(payload);
        xhr.send(data);
        const result = JSON.parse(xhr.response);
        if (!result.error) {
            dispatch({
                type: REQUEST_FRIEND,
                payload: {
                }
            })
        } else {
            alert(result.error);
            dispatch({
                type: REQUEST_FRIEND,
                payload: {
                }
            })
        }
    }
}




