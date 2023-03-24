import { createStore ,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import Rootreducer from "./Services/Reducers/Rootreducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    Rootreducer,composeEnhancers(applyMiddleware(thunk))
)

export default store;