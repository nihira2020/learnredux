import { connect } from 'react-redux';
import { BUY_BAT, BUY_PAD } from '../Redux/Product/ActionTypes';
import {makeOrder} from '../Redux/Product/ProductAction'
const Productcontainer = (props) => {
    return (
        <div>
            <h2>Welcome to Nihira Techiees</h2>
            <div>
            <h3>Available Cricket Bat: {props.noOfBats}</h3>
            <button onClick={()=>{props.makeOrder(BUY_BAT)}}>Make Order</button>
            </div>
            <div>
            <h3>Available Cricket Pad: {props.noOfPads}</h3>
            <button onClick={()=>{props.makeOrder(BUY_PAD)}}>Make Order</button>
            </div>
          
        </div>
    );
}

const mapStatetoprops = (state) => {
    return {
        noOfBats: state.bat.noOfBats,
        noOfPads: state.pad.noOfPads
    }
}

const mapDispatchtoprops = (dispatch) => {
    return {
        makeOrder: (Producttype) => dispatch(makeOrder(Producttype))
    }
}

export default connect(mapStatetoprops,mapDispatchtoprops)(Productcontainer);