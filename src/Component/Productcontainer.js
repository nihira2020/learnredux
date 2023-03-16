import { connect } from 'react-redux';
import {makeOrder} from '../Redux/Product/ProductAction'
const Productcontainer = (props) => {
    return (
        <div>
            <h2>Welcome to Nihira Techiees</h2>
            <h3>Available product qty: {props.noOfProducts}</h3>
            <button onClick={props.makeOrder}>Make Order</button>
        </div>
    );
}

const mapStatetoprops = (state) => {
    return {
        noOfProducts: state.noOfProducts
    }
}

const mapDispatchtoprops = (dispatch) => {
    return {
        makeOrder: () => dispatch(makeOrder())
    }
}

export default connect(mapStatetoprops,mapDispatchtoprops)(Productcontainer);