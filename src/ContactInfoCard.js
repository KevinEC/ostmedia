import React, { Component } from 'react';
import './variables.scss';
import styles from './ContactInfoCard.module.scss';
import splash from './Splash.module.scss'

class ContactInfoCard extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      cardData: [],
      wpRestUrl: "http://api.ostmedia.se/wp-json/wp/v2/"
    };
  }

  componentDidMount(){

    let cardDataUrl = this.state.wpRestUrl + "contactcard_section?per_page=100";
    fetch(cardDataUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          cardData: res
        })
    })
  }

  render() {

    let sections = this.state.cardData.map((data, i) => {
      //console.log(this.props.fullName == data.acf.parent_contactcard.post_title, this.props.fullName, data.acf.parent_contactcard.post_title);
      let phone = "";
      let mail = "";
      let webb = "";

      if (this.props.fullName === data.acf.parent_contactcard.post_title) {
        
        if(data.acf.phone) {
          
          phone = <li>Telefon: <b>{data.acf.phone}</b></li>; 
        }
        if(data.acf.mail) {
          let mailto = "mailto:" + data.acf.mail + "";
          mail = <li>Epost:<b><a href={mailto}> {data.acf.mail}</a></b></li>;
        }
        if(data.acf.webb){
          let webAdress = data.acf.webb;
          webb =  <li>Webb:<b><a href={webAdress}> {data.acf.webb}</a></b></li>;
        }
        return <div key={i} className={styles.section} >
                  <h4>{data.acf.title}</h4>
                  <ul>
                    {mail}
                    {phone}
                    {webb}
                  </ul>
                </div>
      }
    });


    return (
      <div className={styles.card}>
        <max>
          <div className={styles.cardContent} >
            <h2>{this.props.name}</h2>
            <div className={styles.text} >
              {sections}
            </div>
            <hr className={splash.infoCardLine}></hr>
            <p className={styles.description}>{this.props.description}</p>
          </div>
        </max>
      </div>
    );
  }
}

export default ContactInfoCard;
