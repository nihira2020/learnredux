import { BUY_BAT, BUY_PAD, MAKE_ORDER } from "./ActionTypes"

const initialstate = {
    noOfBats: 100,
    noOfPads: 50
}

const initialbatstate={
    noOfBats: 100
}
const initialpadstate={
    noOfPads: 100
}

export const productreducer = (state = initialstate, action) => {
    switch (action.type) {
        case BUY_BAT: return {
            ...state,
            noOfBats: state.noOfBats - 1
        }
        case BUY_PAD: return {
            ...state,
            noOfPads: state.noOfPads - 1
        }
        default: return state
    }
}
export const batreducer = (state = initialstate, action) => {
    switch (action.type) {
        case BUY_BAT: return {
            ...state,
            noOfBats: state.noOfBats - action.payload
        }
        default: return state
    }
}
export const padreducer = (state = initialstate, action) => {
    switch (action.type) {
       
        case BUY_PAD: return {
            ...state,
            noOfPads: state.noOfPads - 1
        }
        default: return state
    }
}
//export default productreducer;