//import {legacy_createStore} from 'redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {batreducer,padreducer} from './ProductReducer'

const rootreducer=combineReducers({bat:batreducer,pad:padreducer})

const store=configureStore({reducer:rootreducer});
export default store;