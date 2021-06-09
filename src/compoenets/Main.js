import {Component}from 'react';
import Header from './Header';
import Aboutus from './Aboutus';
import TheMain from './TheMain';
import Registration from './Registration';
import BookShop from './BookShop';

import { Switch, Route, Redirect } from 'react-router-dom';

class  Main  extends Component {
  render () {
      return <div> 
<Header/>
<Switch>
<Route path='/aboutus' component={Aboutus} />
<Route path='/home' component={TheMain} />
<Route path='/Registration' component={Registration} />
<Route path='/BookShop' component={BookShop} />



<Redirect to="/home"  />
</Switch>


          </div>


  }
  }


export default Main;
