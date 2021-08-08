
import {createStore} from "redux";
import productReducer from "../Reducers/productreducer";
// import singleReducer from "../Reducers/singleproducts";


// import addReducer from "../Reducers/reducers.js"
//to use this store edit index.js with provider and store

// const rootReducer = combineReducers(
//     {singleReducer, productReducer}
// )
const store = createStore(productReducer);

export default store;