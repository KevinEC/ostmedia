import React, { Component } from 'react';
import styles from './Nav.module.scss';
import { slide as Menu } from 'react-burger-menu'
import NavItem from './NavItem.js';
import { Link } from "react-router-dom";

class Nav extends Component {

	constructor(props) {
		super(props);

		this.state = {
			style: { position: 'relative' },
			partnerStyle: "",
			width: window.innerWidth, 
			height: window.innerHeigh
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	

	componentDidMount() {

		const absoluteStyle = {
			position: 'absolute',
			width: '100%'
		};
		const regularStyle = {
			position: 'relative',
			background: 'rgb(0, 82, 140)'
			/*background: '#1d1d1d'*/
		};


		if(this.props.absolute) {
			this.setState({style: absoluteStyle})
		} else {
			this.setState({style: regularStyle})
		}

		this.updateWindowDimensions();
  		window.addEventListener('resize', this.updateWindowDimensions);

	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	render() {

		if(this.state.width < 1233){

			var menu = {
				bmBurgerButton: {
				  position: 'relative',
				  width: '36px',
				  height: '30px',
				  marginTop: "-45px"
				},
				bmBurgerBars: {
				  background: 'white'
				},
				bmCrossButton: {
				  height: '36px',
				  width: '36px',
				  marginTop: "-30%",
				},
				bmCross: {
				  background: '#bdc3c7'
				},
				bmMenu: {
				  background: 'rgb(0, 82, 140)',
				  padding: '2.5em 1.5em 0',
				  fontSize: '1.15em',
				  height: '100vh',
				  marginTop: "-34%"
				},
				bmMorphShape: {
				  fill: '#373a47'
				},
				bmItemList: {
				  color: '#b8b7ad',
				  padding: '0.8em'
				},
				bmOverlay: {
				  background: 'rgba(0, 0, 0, 0.3)'
				}
			  }

			return (
				<div id="top" style={this.state.style} >
				
					<nav className={styles.nav} >
					<Link to="/" className={styles.logo}></Link>
						 <Menu right styles={ menu } noOverlay >
							<NavItem title="Annonsera" link="/annonsera"/>
							<NavItem title="Journalistik" link="/journalistik" />
							<NavItem title="Karriär" link="/karriar"/>
							<NavItem title="Kontakt" link="/nyhetsmedier" />
							<NavItem title="Materialinlämning" link="/Inlamning" />
							<NavItem title="Prenumerera" link="/prenumerera"/>
						</Menu> 
					</nav>
				</div>
			  );
		}
		else{
			if(this.props.absolute){
				if(this.props.partner) {
					/* partner with anchor link */
	
					const partnerLogo = {
						display: 'block'
					}
	
	
					return(
						<div id="top" style={this.state.style} >
							<nav className={styles.nav} >
								<Link to="/" className={styles.logo} style={partnerLogo} ></Link>
								<NavItem title="Annonsera" link="/annonsera"/>
								<NavItem title="Journalistik" link="/journalistik" />
								<NavItem title="Karriär" link="/karriar"/>
								<NavItem title="Kontakt" link="/nyhetsmedier" />
								<NavItem title="Materialinlämning" link="/Inlamning" />
								<NavItem title="Prenumerera" link="/prenumerera"/>
							</nav>
						</div>
					);
				} else {
					return(
						<div id="top" style={this.state.style} >
							<nav className={styles.nav} >
								<Link to="/" className={styles.logo}></Link>
								<NavItem title="Annonsera" link="/annonsera"/>
								<NavItem title="Journalistik" link="/journalistik" />
								<NavItem title="Karriär" link="/karriar"/>
								<NavItem title="Kontakt" link="/nyhetsmedier" />
								<NavItem title="Materialinlämning" link="/Inlamning" />
								<NavItem title="Prenumerera" link="/prenumerera"/>
							</nav>
						</div>
					);
				}
			} else {
				if (this.props.partner) {
	
					const partnerLogo = {
						width: '170px',
						height: '100px',
						marginRight: '85%',
						order: '4',
						alignSelf: 'flexStart'
					}
	
	
					return(
						<div id="top">
							<nav className={styles.nav} style={this.state.style} >
								<Link to="/" className={styles.logo} style={partnerLogo} ></Link>
								<NavItem title="Annonsera" link="/annonsera"/>
								<NavItem title="Journalistik" link="/journalistik" />
								<NavItem title="Karriär" link="/karriar"/>
								<NavItem title="Kontakt" link="/nyhetsmedier" />
								<NavItem title="Materialinlämning" link="/Inlamning" />
								<NavItem title="Prenumerera" link="/prenumerera"/>
							</nav>
						</div>
					);
				}
				return(
					<div id="top">
						<nav className={styles.nav} style={this.state.style} >
							<Link to="/" className={styles.logo} ></Link>
							<NavItem title="Annonsera" link="/annonsera"/>
								<NavItem title="Journalistik" link="/journalistik" />
								<NavItem title="Karriär" link="/karriar"/>
								<NavItem title="Kontakt" link="/nyhetsmedier" />
								<NavItem title="Materialinlämning" link="/Inlamning" />
								<NavItem title="Prenumerera" link="/prenumerera"/>
						</nav>
					</div>
	
				);
			}
		}
	}

};

export default Nav;