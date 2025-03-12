export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const login = (user) => {
    return ({
        type: LOGIN_SUCCESS,
        payload: user
    })
}

export default login;