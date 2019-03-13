import React, { Component } from 'react';
import { HashLink as AnchorLink } from "react-router-hash-link";

import splash from './Splash.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from './Nav';
import Card from './Card';

import printIcon from './assets/icons/print.png';
import digitalIcon from './assets/icons/digital.PNG';
import webbTvIcon from './assets/icons/WEBB-TV.PNG';
import utomhusIcon from './assets/icons/Utomhus.PNG';

class Inlamning extends Component {

  // Digital
  digitalLinks = [];
  digitalLinkTitles = [];

  // Print
  printLinks = [];
  printLinkTitles = [];

  // Webb 
  webLinks = [];
  webLinkTitles = [];

  // Outside
  outsideLinks = [];
  outsideLinkTitles = [];

  constructor(props) {
    super(props);

    this.state = {
      cardData: [],
      wpRestUrl: "https://api.ostmedia.se/wp-json/wp/v2/"
    };
  }

  componentDidMount(){

    let cardDataUrl = this.state.wpRestUrl + "inlamning?per_page=100";
    fetch(cardDataUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
            cardData: res
        })
    })


  }

  // Translating field names to the ones shown on the web.
  translateFieldNames(list) {
    let listToReturn = [];
    list.forEach(element => {
      switch(element) {
        case "material_info":
          listToReturn.push("Materialinformation");
          break;
        case "link_submission":
          listToReturn.push("Lämna in material");
          break;
        case "submission_guide":
          listToReturn.push("Guide till inlämning");
          break;
        case "module_map":
          listToReturn.push("Modulkarta");
          break;
        default:
          break;
      }
    })
    return listToReturn;
  }


  render() {  

    // Fetching latest link data from backend, this aint pretty
    this.state.cardData.forEach( data => {
      switch(data.title.rendered){
        case "Digital":
            this.digitalLinkTitles = this.translateFieldNames(Object.keys(data.acf).filter(element => {
              return data.acf[element] !== "";
            }));
            this.digitalLinks = Object.keys(data.acf).map(e => data.acf[e]).filter(element => {
              return element !== "";
            });
          break;
        case "Print" : 
          this.printLinkTitles = this.translateFieldNames(Object.keys(data.acf).filter(element => {
            return data.acf[element] !== "";
          }));
          this.printLinks = Object.keys(data.acf).map(e => data.acf[e]).filter(element => {
            return element !== "";
          });
          break;
        case "WebbTV" : 
          this.webLinkTitles = this.translateFieldNames(Object.keys(data.acf).filter(element => {
            return data.acf[element] !== "";
          }));
          this.webLinks = Object.keys(data.acf).map(e => data.acf[e]).filter(element => {
            return element !== "";
          });
          break;
        case "Utomhus" : 
          this.outsideLinkTitles = this.translateFieldNames(Object.keys(data.acf).filter(element => {
            return data.acf[element] !== "";
          }));
          this.outsideLinks = Object.keys(data.acf).map(e => data.acf[e]).filter(element => {
            return element !== "";
          });
          break;
        default:
          break;
      }

    })

    return (
    	[
      <Nav absolute={true} />,
      <div className={[splash.container].join(' ')} >
        <div className={splash.splash}>
          <max>
            <h1 className={splash.title}>
              Materialinlämning
            </h1>
          </max>
        </div>
        <div className={splash.description} id="description">
          <max>
            <h5 className={splash.descriptionText}>
              Här hittar du info om hur du levererar material till din bokade annons. Om du inte bokat ännu gör du det först via din ordinarie kontakta hos oss. Saknar du kontaktperson? Kontakta <a href="mailto:foretagsannons@ostmedia.se">foretagsannons@ostmedia.se</a> så hjälper vi dig.
            </h5>
            <AnchorLink to="#description"> 
              <FontAwesomeIcon icon={["fas", "angle-down"]} size="9x" color="white" className={splash.scroll} />
            </AnchorLink>
          </max>
        </div>
        <max>
          <div className={splash.cardContainer}>
            
            <Card key={"digital"} title="Digital" 
                  icon={digitalIcon} 
                  links={Object.keys(this.digitalLinks).map(e => this.digitalLinks[e])}
                  linkTitles={Object.keys(this.digitalLinkTitles).map(e => this.digitalLinkTitles[e])}
            />
            <Card key={"print"} title="Print" 
                  icon={printIcon} 
                  links={Object.keys(this.printLinks).map(e => this.printLinks[e])}
                  linkTitles={Object.keys(this.printLinkTitles).map(e => this.printLinkTitles[e])}
                  />
            <Card key={"webbTv"} title="WebbTV"
                  icon={webbTvIcon} 
                  links={Object.keys(this.webLinks).map(e => this.webLinks[e])}
                  linkTitles={Object.keys(this.webLinkTitles).map(e => this.webLinkTitles[e])}
                         />
            <Card key={"outside"} title="Utomhus" 
                  icon={utomhusIcon} 
                  links={Object.keys(this.outsideLinks).map(e => this.outsideLinks[e])}
                  linkTitles={Object.keys(this.outsideLinkTitles).map(e => this.outsideLinkTitles[e])}
                  />
            
          </div>
        </max>
      </div>
      ]
    );
  }
}

export default Inlamning;
