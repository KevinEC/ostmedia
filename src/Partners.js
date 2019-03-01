import React, { Component } from 'react';
import { HashLink as AnchorLink } from "react-router-hash-link";
import styles from './Partners.module.scss';
import splash from './Splash.module.scss';
import Nav from './Nav';
import PartnersCard from './PartnersCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Partners extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      partners: []
    };
  }


  componentDidMount() {
    let dataURL = "http://api.ostmedia.se/wp-json/wp/v2/nyhetsmedia?_fields=acf";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          partners: res
        })
      })
  }


  render() {
    const url = this.props.match.url;

    const partners = this.state.partners.map((nyhetsmedia, i) => {
      //remove spaces and replace with -. Also covert to lowercase
      const link = url + "/" + nyhetsmedia.acf.name.toLowerCase().replace(/\s/g, "-");
      return <PartnersCard key={nyhetsmedia.acf.name} title={nyhetsmedia.acf.name} link={link} icon={nyhetsmedia.acf.logo.url} order={nyhetsmedia.acf.order} />
    });


    return (
    	[
      <Nav absolute={true} />,
      <div className={[splash.container].join(' ')} id={splash.bg_interview}>
        <div className={splash.splash}>
          <max>
            <h1 className={splash.title}>
              Nyhetsmedier

            </h1>
          </max>
        </div>
        <div className={splash.description} id="description">
          <max>
            <h5 className={splash.descriptionText}> Vi är aldrig mer än ett telefonsamtal eller mail bort. Här hittar du alla uppgifter du behöver för att nå oss och vi ser fram emot att höra från dig.</h5>
            <AnchorLink to="#description"> 
                <FontAwesomeIcon icon={["fas", "angle-down"]} size="9x" color="white" className={splash.scroll_partners} />
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

export default Partners;
