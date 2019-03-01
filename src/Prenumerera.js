import React, {Component} from 'react';
import { HashLink as AnchorLink } from "react-router-hash-link";

import styles from './Partners.module.scss';
import splash from './Splash.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from './Nav';
import PartnersCard from './PartnersCard';

class Prenumerera extends Component {

    
  constructor(props) {
    super(props);
  
    this.state = {
      partners: []
    };
  }

  componentDidMount() {
    let dataURL = "http://api.ostmedia.se/wp-json/wp/v2/nyhetsmedia";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          partners: res
        })
      })
  }
  render(){
    const partners = this.state.partners.map((nyhetsmedia, i) => {
      return <PartnersCard key={i} title={nyhetsmedia.acf.name} link={nyhetsmedia.acf.subscription} icon={nyhetsmedia.acf.logo.url} order={nyhetsmedia.acf.order} />
    });

    return (
      [
        <Nav absolute={true}/>,
        <div className={[splash.container].join(' ')} id={splash.bg_fire}>
          <div className={splash.splash}>
            <max>
              <h1 className={splash.title}>
                ​Kvalitativ journalistik kostar pengar att driva
  
              </h1>
            </max>
          </div>
          <div className={splash.description} id="description">
            <max>
              <h5 className={splash.descriptionText_prenumerera}> Därför tar vi betalt för vårt innehåll. Som prenumerant finansierar du den vassaste och mest angelägna lokala nyhetsbevakningen. Sett över tid blir du dessutom en av dem som bidrar till den fria och oberoende journalistiken. Den som gör skillnad. </h5>
              <AnchorLink to="#description"> 
                  <FontAwesomeIcon icon={["fas", "angle-down"]} size="9x" color="white" className={splash.scroll} />
              </AnchorLink>
            </max>
  
          </div>
          <max className={styles.cardMaxContainer} >
            <div className={[styles.cardContainer, splash.cardContainer].join(' ')}>
              {partners}
              
            </div>
          </max>
        </div>
        ]
    );
  }
}

export default Prenumerera;
