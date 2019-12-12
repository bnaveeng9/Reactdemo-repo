
import { createStore, applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const initialState ={};

const middleWare = [ 
    thunk,
    logger
];
 

export const SepStore = createStore(null,initialState, applyMiddleware(...middleWare));


