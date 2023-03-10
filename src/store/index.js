import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

// const store = createStore(rootReducer, applyMiddleware(thunk));

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
};

export default configureStore;