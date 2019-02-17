export const ACTION_LOGIN_SUBMIT_GET  = 'ACTION_LOGIN_SUBMIT_GET'
export const ACTION_LOGIN_SUBMIT_SUCCESS_SET  = 'ACTION_LOGIN_SUBMIT_SUCCESS_SET'
export const ACTION_LOGIN_SUBMIT_FAILURE_SET = 'ACTION_LOGIN_SUBMIT_FAILURE_SET'

export const loginSubmit = (username, password) => ({
    type: ACTION_LOGIN_SUBMIT_GET,
    authDetails: {username: username, password: password}
})

export const loginAuthSucessResposne = (loginResponse) => ({
    type: ACTION_LOGIN_SUBMIT_SUCCESS_SET,
    loginResponse
})

export const loginAuthFailureResposne = (loginResponse) => ({
    type: ACTION_LOGIN_SUBMIT_FAILURE_SET,
    loginResponse
})