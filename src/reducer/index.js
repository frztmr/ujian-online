import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { userReducer } from './userReducer'; 
import * as reduxThunk  from 'redux-thunk';
export const rootStore = configureStore({

    //gabung semua reducer kesini
    reducer: {
        userReducer
    }
    
}, applyMiddleware(reduxThunk));


