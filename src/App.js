import { Component } from 'react';
import Header from './compoenets/Header';
import Main from './compoenets/Main';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor (props){
   super(props);
  }
  render() {
   
   return  <BrowserRouter>
    <div className="App">
      <Main />
    </div>
  </BrowserRouter>

  }



}


export default App;
