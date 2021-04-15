export const addUser = (user) => {
    return{
        type: 'ADD_USER',
        payload: user
    }
}

export const deleteUser = (user_id) => {
    return{
        type: 'DELETE_USER',
        payload: user_id
    }
}

export const addAcceptedUser = (user) => {
    return{
        type: 'ADD_ACCEPTED_USER',
        payload: user
    }
}