import { REGISTER, DELETE, UPDATE } from "../actionType";

export const addUser = (val) => {
   
    return{
        type: REGISTER,
        credentials: val
    }
}

export const deleteUser = (index) => {
    return{
        type: DELETE,
        delete: index
    }
}

export const updateUser = (val, index) => {
    console.log("update action")
    return{
        type: UPDATE,
        credentials: val,
        update: index
    }
}