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

  constructor(props) {
    super(props);

    this.state = {
      cardData: [],
      wpRestUrl: "http://api.ostmedia.se/wp-json/wp/v2/"
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


  render() {


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
            
            <Card title="Digital" 
                  icon={digitalIcon} 
                  links={[
                        "https://ocast.com/sv-se/groups/ostgota-media-3261/adspecs",
                        "https://ocast.com/sv-se/groups/ostgota-media-3261/adspecs"
                        ]} 
                  linkTitles={["Materialinformation", "Lämna in material"]}
            />
            <Card title="Print" 
                  icon={printIcon} 
                  links={[
                          "https://ocast.com/sv-se/groups/ostgota-media-3261/adspecs/print-3056",
                          "http://193.234.168.39/cargo/CargoForms_3.0.html;jsessionid=82F11E690DED3E626DE9E6D9AB298545?t=1542014462096&uuid=9fff4e99-a756-4657-b44a-9d32991ef662&sid=9da1ba94-71f&cargoRequest=openProfile&PUID=fc45b984-8ac1-46bd-a066-16aa909dc619",
                          "http://www.ostgotamedia.eu/material-inlamning/",
                          "http://media.ostgotamedia.eu/Modulkarta.pdf"
                        ]}
                  linkTitles={["Materialinformation", "Lämna in material", "Guide till inlämning", "Modulkarta"]}
                  />
            <Card title="WebbTV"
                  icon={webbTvIcon} 
                  links={[
                          "https://ocast.com/sv-se/groups/ostgota-media-3261/adspecs/webb-tv-2988",
                          "https://ocast.com/sv-se/groups/ostgota-media-3261/adspecs/webb-tv-2988"
                        ]}
                  linkTitles={["Materialinformation", "Lämna in material"]}
                         />
            <Card title="Utomhus" 
                  icon={utomhusIcon} 
                  links={[
                          "https://ocast.com/sv-se/groups/ostgota-media-3261/adspecs/ooh-2968",
                          "https://ocast.com/sv-se/groups/ostgota-media-3261/adspecs/utomhus-ooh-2968"
                        ]} 
                  linkTitles={["Materialinformation", "Lämna in material"]}
                  />
            
          </div>
        </max>
      </div>
      ]
    );
  }
}

export default Inlamning;
