import logo from './logo.svg';
import './App.css';
import Productcontainer from './Component/Productcontainer';
import {Provider} from 'react-redux'
import store from './Redux/Product/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Productcontainer></Productcontainer>
    </div>
    </Provider>
  );
}

export default App;
