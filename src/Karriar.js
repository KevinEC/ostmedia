import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import styles from './Karriar.module.scss';
import Nav from './Nav';

class Karriar extends Component {
  render() {
		return([
		  <Nav absolute={true} />,
			<header>
				<div className={styles.videoContainer}>

				</div>
					<div className={styles.headerText}>
						<h1 className={styles.headerText}>Karriär</h1>
						<div className={styles.columnText}>
						
						Öst Media är nutidens mediebolag som ger ut sju prenumererade morgontidningar, sju nyhetssajter, nischsajter samt ett antal gratistidningar, digitala tjänster och plattformar. Vi jobbar också med event. Våra varumärken är flera hundra år gamla, men vi är starkt utvecklingsorienterade och är i ständig och dynamisk förändring. Hos oss finns stora möjligheter att göra både karriär inom försäljning som redaktionellt arbete.

						Vill du vara med och utveckla och driva försäljningen på en av regionens mest dynamiska och spännande arbetsplatser? Eller gillar du hög nyhetspuls, hög kvalitet och ständigt ökande läsning? Då kanske du är en framtida medarbetare i Öst Media.

            Vi jobbar med de starkaste medieprodukterna och varumärkena och är en del av  NTM-koncernen vilket ger oss starka muskler för utveckling och hållbarhet. Vi eftersträvar jämställdhet och mångfald och värdesätter därför sökande med olika bakgrunder och erfarenheter.
						</div>
						<ButtonToolbar className={styles.btns}>
							<Button size="lg" className={styles.leftBtn} href="https://jobb.plus/sok?&comp=2772814">
							Lediga tjänster
							</Button>
              <Button size="lg" href="mailto:fredrik.lagerqvist@ostmedia.se">
							Spontanansökan
							</Button>
						</ButtonToolbar>
					</div>

            </header>
        ]
		);
	}
}

export default Karriar;