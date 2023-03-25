import { fetchImageList } from "../Redux/Img/Action";
import {connect} from 'react-redux'
import {useEffect} from 'react'
const Imggallery = (props) => {
    useEffect(()=>{
        props.fetchimages()
    },[])
    return props.imglist.loading?(
      
            <h2>Loading</h2>
    ):props.imglist.error?
    (
        <h2>{props.imglist.error}</h2>
    ):(
        <div>
            <h2>Image List</h2>
            {
                props.imglist && props.imglist.data &&
                props.imglist.data.map(item=><div><h1>{item.title}</h1><img src={item.url
                }></img></div>)
            }
        </div>
    )
}

const mapStatetoprops = (state) => {
    return {
        imglist: state.imglist
    }
}

const mapDispatchtoprops=(dispatch)=>{
    return{
        fetchimages:()=>dispatch(fetchImageList())
    }
}

export default connect(mapStatetoprops,mapDispatchtoprops)(Imggallery);
