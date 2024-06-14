import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { userReducer } from './userReducer'; 
import  reduxThunk  from 'redux-thunk';
export const rootStore = configureStore({

    //gabung semua reducer kesini
    reducer: {
        userReducer
    }
    
}, applyMiddleware(reduxThunk));


