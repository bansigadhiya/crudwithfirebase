import { ADD_BOOK_FAIL, ADD_BOOK_SUCCESS } from "../Constants/Action.type"

const initialState = {
    books : [],
    error: null
}

const Bookreducer = (state= initialState,action) => {
    switch(action.type){
        case ADD_BOOK_SUCCESS :
            return {
                ...state,
                books : [...state.books,action.payload],
                error : null
            };
            break;
        case ADD_BOOK_FAIL :
            return{
                ...state,
                books : [],
                error : action.payload
            }
            break;
        default :
            return state;
    }
}

export default Bookreducer;