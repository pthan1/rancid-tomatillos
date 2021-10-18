import React from 'react';
import './Header.css';
import tomatillo from './assets/johnny-automatic-tomatillo.svg';

const Header = () => {
	return (
		<header className="header">
			<h1>rancid tomatillos</h1>
			<div className="tomatillo-container"><img src={tomatillo} alt="" /></div>
		</header>
	)
};

export default Header;
