import logo from './logo.svg';
import './App.css';
import Productcontainer from './Component/Productcontainer';
import {Provider} from 'react-redux'
import store from './Redux/Product/store';
import Product from './Component/Product';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
     <Productcontainer></Productcontainer>
     <Product></Product>
    </div>
    </Provider>
  );
}

export default App;
