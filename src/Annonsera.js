import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Nav from './Nav.js';
import styles from './Annonsera.module.scss';

class Annonsera extends Component {
	render() {
		return([
		  <Nav absolute={true} />,
			<header>
				<div className={styles.videoContainer}>

				</div>
					<div className={styles.headerText}>
						<h1 className={styles.headerText}>Vi skapar dina möjligheter</h1>
						<h4>Vår försäljningsavdelning är en unik sammansatt grupp av reklamkunniga medierådgivare, 
							kreatörer & analytiker som tillsammans ger dina affärer en god skjuts framåt inom allt från 
							digital och traditionell annonsering i  nyhetsmedier, till sociala medier, Google Ads och Native.
							Kontakta oss på <a className={styles.mailLink} href="mailto:foretagsannons@ostmedia.se">foretagsannons@ostmedia.se</a> så hjälper vi dig direkt!

						</h4>
						<ButtonToolbar className={styles.btns}>
							<Button size="lg" className={styles.leftBtn} href={'https://ocast.com/sv-se/groups/ostgota-media-3261'}>
							Läs mer om våra produkter och medieslag här
							</Button>
						</ButtonToolbar>
					</div>

            </header>
        ]
		);
	}

};

export default Annonsera;