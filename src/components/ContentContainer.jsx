import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Who from '../pages/Who';
import How from '../pages/How';
import Help from '../pages/Help';
import Resources from '../pages/Resources';

const ContentContainer = (props) => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/who-we-are" component={Who} />
				<Route path="/how-we-work" component={How} />
				<Route path="/helping-out" component={Help} />
				<Route path="/resources" component={Resources} />
			</Switch>
		</div>
	)
}

export default ContentContainer;