import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../index.css';

const TopNavBar = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="flex-center-row ">
			<Tabs value={value} onChange={handleChange}>
				<Tab label="Who We Are" value={0} to="/who-we-are" component={Link} />
				<Tab label="How We Work" value={1} to="/how-we-work" component={Link} />
				<Tab label="How to Help" value={2} to="/helping-out" component={Link} />
				<Tab label="Resources" value={3} to="/resources" component={Link} />
			</Tabs>
		</div>
	)
}

export default TopNavBar;
