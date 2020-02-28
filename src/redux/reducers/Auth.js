import { REGISTER, DELETE, UPDATE } from "../actionType";

const initialState = {
    credentials: []
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case REGISTER:
            return{
                ...state,
                credentials: action.credentials
            }
        case DELETE:
            return{
                credentials: state.credentials.filter((item, index) => index !== action.delete)
            }
        case UPDATE:
            console.log("update", state.credentials.splice(action.update, 1, action.credentials))
            return{
                ...state,
                credentials: state.credentials.splice(action.update, 1, action.credentials)
            }
            // const index = state.credentials.findIndex(c => c.name === action.credentials.name)
            // let arr  = []
            // return [
            //     ...state.credentials.slice(0, index), 
            //     {
            //         ...state.credentials[index],
            //         username: action.credentials.username,
            //         address: action.credentials.address
            //     },
             
            //     // ...state.credentials.slice(index + 1), 
            //     console.log(...state.credentials.slice(index + 1))
            // ]
            default:
                return state;
    }
}

export default AuthReducer