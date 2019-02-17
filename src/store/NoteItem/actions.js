export const ACTION_EDIT_SUBMIT_GET  = 'ACTION_EDIT_SUBMIT_GET'
export const ACTION_EDIT_SUBMIT_SET  = 'ACTION_EDIT_SUBMIT_SET'

export const editSubmit = (payLoad) => ({
    type: ACTION_EDIT_SUBMIT_GET,
    payLoad: payLoad
})

export const setEditSubmit = (updatedResponse) => ({
    type: ACTION_EDIT_SUBMIT_SET,
    updatedResponse
})
