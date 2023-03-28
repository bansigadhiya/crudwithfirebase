import { ADD_BOOK_FAIL, ADD_BOOK_SUCCESS, GET_SINGLE_DATA_SUCCESS ,GET_SINGLE_DATA_FAIL, UPDATE_BOOK_SUCCESS, UPDATE_BOOK_FAIL} from "../Constants/Action.type";
import { database } from "../../Firebase";
import {get, ref, remove, set,update} from 'firebase/database'

export const AddbookSuccess = (data) => {
    return{
        type : ADD_BOOK_SUCCESS,
        payload : data
    }
}

export const AddbookFail = (error) => {
    return{
        type : ADD_BOOK_FAIL,
        payload : error
    }
}

export const GetSingleBookSuccess = (data) => {
    return{
        type : GET_SINGLE_DATA_SUCCESS,
        payload : data
    }
}

export const GetSingleBookFail = (error) => {
    return{
        type : GET_SINGLE_DATA_FAIL,
        payload : error
    }
}

export const UpdatebookSuccess = (data) => {
    return{
        type : UPDATE_BOOK_SUCCESS,
        payload : data
    }
}

export const UpdatebookFail = (error) => {
    return{
        type : UPDATE_BOOK_FAIL,
        payload : error
    }
}


export const AddBookData = (data) => {
  
    return dispatch => {
        set(ref(database,'books/' + data.id), data).then(() => {
            dispatch(ViewBookData(data));
        }).catch((error) => {
            dispatch(AddbookFail(error))
        })
    }
}

export const ViewBookData = (data) => {
    return dispatch => {
        get(ref(database , '/books')).then((res) => {
            const data = res.val();
            const newData = Object.keys(data).map((d) => {
                return{
                    id : d,
                    ...data[d]
                }
            })
            dispatch(AddbookSuccess(newData))
        }).catch((error) => {
            console.log(error,"error");
        })
    }
}

export const GetSingleBook = (id) => {
    return dispatch => {
        get(ref(database , `/books/${id}`)).then((res) => {
            const data = res.val()
            dispatch(GetSingleBookSuccess(data))
        }).catch((error) => {
            dispatch(GetSingleBookFail(error))
        })
    }
}

export const UpdateBook = (data) => {
    return dispatch => {
        update(ref(database,`/books/${data.id}/`),data).then(() => {
            dispatch(ViewBookData(data))
        }).catch((error) => {
            dispatch(UpdatebookFail(data))
        })
    }
}

export const DeleteBook = (id) => {
    return dispatch => {
        remove(ref(database,`/books/${id}`)).then(() => {
            dispatch(ViewBookData())
        }).catch((err) => {
            console.log(err);
        })
    }
}