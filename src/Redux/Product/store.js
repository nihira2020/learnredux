//import {legacy_createStore} from 'redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {batreducer,padreducer} from './ProductReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Reducer } from '../Img/Reducer'

const rootreducer=combineReducers({bat:batreducer,pad:padreducer,imglist:Reducer})

const store=configureStore({reducer:rootreducer,middleware:[logger,thunk]});
export default store;