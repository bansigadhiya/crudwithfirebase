import { ADD_BOOK_FAIL, ADD_BOOK_SUCCESS } from "../Constants/Action.type";
import { database } from "../../Firebase";
import {ref, set} from 'firebase/database'

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

export const AddBookData = (data) => {
  
    return dispatch => {
        set(ref(database,'books/' + data.id),{data}).then(() => {
            console.log(data,"data");
            dispatch(AddbookSuccess(data));
        }).catch((error) => {
            dispatch(AddbookFail(error))
        })
    }
}