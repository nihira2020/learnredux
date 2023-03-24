import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {buyBat} from '../Redux/Product/ProductAction'

const Payloadproduct = () => {
    const noOfBats= useSelector(state=>state.bat.noOfBats);
    const dispatch=useDispatch();
    const[productcount,countchange]=useState(1);
    return ( 
        <div>
            <h2>Available Bat : {noOfBats}</h2>
            <br>
            </br>
            <input value={productcount} onChange={e=>countchange(e.target.value)}></input>
            <button onClick={()=>{dispatch(buyBat(productcount))}}>Buy Bat</button>
        </div>
     );
}
 
export default Payloadproduct;