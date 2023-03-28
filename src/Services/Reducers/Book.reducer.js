import { ADD_BOOK_FAIL, ADD_BOOK_SUCCESS, GET_SINGLE_DATA_FAIL, GET_SINGLE_DATA_SUCCESS, UPDATE_BOOK_SUCCESS } from "../Constants/Action.type"

const initialState = {
    books: [],
    book: null,
    error: null,
    isEdit: false
}

const Bookreducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_SUCCESS:
            return {
                ...state,
                books: action.payload,
                book : null,
                error: null,
                isEdit: false

            };
            break;
        case ADD_BOOK_FAIL:
            return {
                ...state,
                books: [],
                error: action.payload,
                isEdit: false

            }
            break;
        case GET_SINGLE_DATA_SUCCESS:
            return {
                ...state,
                book: action.payload,
                isEdit: true,
                error: null
            }
            break;
        case GET_SINGLE_DATA_FAIL:
            return {
                ...state,
                books: [],
                book: null,
                isEdit: false,
                error: action.payload
            }
            break;
        default:
            return state;
    }
}

export default Bookreducer;