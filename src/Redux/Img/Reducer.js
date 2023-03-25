import { FETCH_IMG_FAILURE, FETCH_IMG_REQUEST, FETCH_IMG_SUCCESS } from "./ActionType"

const initialstate={
    loading:true,
    data:[],
    error:''
}

export const Reducer=(state=initialstate,action)=>{
    switch(action.type){
        case FETCH_IMG_REQUEST:return{
            ...state,
            loading:true
        }
        case FETCH_IMG_SUCCESS:return{
            loading:false,
            data:action.payload,
            error:''
        }
        case FETCH_IMG_FAILURE:return{
            loading:false,
            data:[],
            error:action.payload
        }
        default: return state
    }
}