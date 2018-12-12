import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { HashLink as AnchorLink } from "react-router-hash-link";

import styles from './NavItem.module.scss';

class NavItem extends Component {
	render() {

		

		if(this.props.anchor == true)
		{
			return(
				<AnchorLink className={styles.link} to={this.props.link}>
					{this.props.title}
				</AnchorLink>
			);
		} else 
		{
			return(
				<Link className={styles.link} to={this.props.link}>
					{this.props.title}
				</Link>
			);
		}
	}

};

export default NavItem;