//import {legacy_createStore} from 'redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {batreducer,padreducer} from './ProductReducer'
import logger from 'redux-logger'

const rootreducer=combineReducers({bat:batreducer,pad:padreducer})

const store=configureStore({reducer:rootreducer,middleware:[logger]});
export default store;