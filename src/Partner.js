import React, { Component } from 'react';
import { HashLink as AnchorLink } from "react-router-hash-link";
import styles from './Partner.module.scss';
import splash from './Splash.module.scss';
import Nav from './Nav';
import ContactInfoCard from './ContactInfoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Partner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      partnerData: [],
      cardData: [],
      wpRestUrl: "http://api.ostmedia.se/wp-json/wp/v2/",
      slug: this.props.match.params.name
    };
  }

  componentDidMount() {

    let dataURL = this.state.wpRestUrl + "nyhetsmedia?slug=" + this.state.slug + "&_embed&per_page=100";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          partnerData: res
        })
    })

    let cardDataUrl = this.state.wpRestUrl + "contactcard?per_page=100";
    fetch(cardDataUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          cardData: res
        })
    })
  }

  setBg(url){
    document.getElementById("bg").style.backgroundImage = "url('" + url + "')";
  }




  render() {

    const headerCard = this.state.partnerData.map((data,i) => {
      let mailto = "mailto:" + data.acf.mail;
      return <div key={i} className={styles.headerTitleContact}>
              <ul>
                <li><b>Telefon:</b> {data.acf.phone}</li>
                <li><b>Öppettider:</b> {data.acf.openhours}</li>
                <li><b>Besöksaddress:</b>{data.acf.address}</li>
                <li><b>Epost:</b> <a className={styles.mailLink} href={mailto}>{data.acf.mail}</a></li>
              </ul>
             </div>
    });

    const title = this.state.partnerData.map((data,i) => {
      this.setBg(data.acf.bg);
      return <h1 key={i}>{data.acf.name}</h1>
    });

    const contactCards = this.state.cardData.map((card,i) => {
      
      //remove spaces and replace with -. Also covert to lowercase
      // + EDIT: Added second replace to fix error when having a / in the slug.
      const dataTitle = card.acf.parent_nyhetsmedie.post_title.toLowerCase().replace(/\s/g, "-").replace(/\/.*/g,'');
      if (dataTitle === this.state.slug){
        return <ContactInfoCard
                  key={card.id}
                  name={card.acf.title}
                  fullName={card.title.rendered}
                  description={card.acf.description}
                />
      }
    })

    return (
    	[
      <Nav absolute={true} partner={true} />,
      <div>
        <div className={styles.header}>
        <div className={styles.headerBg} id="bg"></div>
          <max>

            <div className={styles.headerTitle} >
              {title}
              {headerCard}
              <AnchorLink to="#cards"> 
                <FontAwesomeIcon icon={["fas", "angle-down"]} size="medium" color="white" className={splash.scroll} />
              </AnchorLink>
            </div>
            <AnchorLink to="#cards"> 
                <FontAwesomeIcon icon={["fas", "angle-down"]} size="9x" color="white" className={splash.scroll} />
              </AnchorLink>
          </max>
        </div>
        <div className={styles.cardsContainer} id="cards" >
          {contactCards}

        </div>
      </div>
      ]
    );
  }
}

export default Partner;