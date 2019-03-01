import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';

/* componenets */
import Home from './Home';
import Inlamning from './Inlamning';
import Journalistik from './Journalistik';
import Partners from './Partners';
import Partner from './Partner';
import Prenumerera from './Prenumerera';
import Karriar from './Karriar';

/* font awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import Annonsera from './Annonsera';

library.add(faAngleDown, faBars);

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

  render() {



    return (
    	
    	<Router>
			<div key={"mainNav"}>
		      	<Route exact={true} path="/" component={Home} />
		        <Route key={"Inlamning"} path="/inlamning" component={Inlamning} />
				<Route path="/journalistik" component={Journalistik} />
				<Route path="/prenumerera" component={Prenumerera} />
				<Route path="/karriar" component={Karriar} />
				<Route path="/annonsera" component={Annonsera} />
		        <Switch>
			        <Route path="/nyhetsmedier/:name" component={Partner} />

			        <Route path="/nyhetsmedier" component={Partners} />
		        </Switch>
	        </div>
        </Router>
        	
    );
  }
}

export default App;
