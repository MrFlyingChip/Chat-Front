import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    LOGOUT,
    FETCH_CHATS,
    FETCH_FRIENDS,
    FETCH_USERS,
    REQUEST_FRIEND
} from '../constants/User';

const initialState = {
    token: '',
    name: '',
    id: '',
    isAuthenticated: false,
    chats: [],
    friends: [],
    users: [],
    friendsRequests: []
};
export default function userstate(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                name: action.payload.name,
                id: action.payload.id,
                isAuthenticated: action.payload.isAuthenticated,
                chats: action.payload.chats,
                friends: action.payload.friends,
                friendsRequests: action.payload.friendsRequests
            };
        case FETCH_FRIENDS:
            return {
                ...state,
                friends: action.payload.friends
            };
        case FETCH_CHATS:
            return{
                ...state,
                chats: action.payload.chats
            };
        case FETCH_USERS:
            return{
                ...state,
                users: action.payload.users
            };
        case LOGOUT:
            return {
                ...state,
                name: '',
                role: '',
                id: '',
                isAuthenticated: false,
                chats: [],
                friends: [],
                users: [],
                friendsRequests: []
            };
        case LOGIN_FAIL:
            return {
                ...state, name: '', id: '', isAuthenticated: false
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                name: action.payload.name,
                id: action.payload.id,
                isAuthenticated: action.payload.isAuthenticated,
                chats: action.payload.chats,
                friends: action.payload.friends,
                friendsRequests: action.payload.friendsRequests
            };

        case SIGNUP_FAIL:
            return {
                ...state, token: '', isAuthenticated: false
            };
        case REQUEST_FRIEND:
            return {
                ...state
            };
        default:
            return state
    }
}
