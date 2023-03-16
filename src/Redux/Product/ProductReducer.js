import { MAKE_ORDER } from "./ActionTypes"

const initialstate = {
    noOfProducts: 100
}

const productreducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_ORDER: return {
            ...state,
            noOfProducts: state.noOfProducts - 1
        }
        default: return state
    }
}
export default productreducer;