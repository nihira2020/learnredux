import {useSelector,useDispatch} from 'react-redux'
import { BUY_BAT, BUY_PAD } from '../Redux/Product/ActionTypes';
import {makeOrder} from '../Redux/Product/ProductAction'

const Product = () => {
   const noOfBats= useSelector(state=>state.bat.noOfBats);
   const dispatch=useDispatch();
    return ( 
        <div>
            <h1>Hooks Example</h1>
            <div>
            <h3>Available Cricket Bat: {noOfBats} </h3>
            <button onClick={()=>{dispatch(makeOrder(BUY_PAD))}}>Buy Bat</button>
            </div>
        </div>
     );
}
 
export default Product;