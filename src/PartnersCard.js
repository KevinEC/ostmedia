import React, { Component } from 'react';
import './variables.scss';
import styles from './PartnersCard.module.scss';

class PartnersCard extends Component {

  render() { 
    const css_order = {
      order: this.props.order
    };
    if(this.props.link){
      return (
        <a className={styles.card} href={this.props.link} style={css_order}>
          <img className={styles.cardIcon} src={this.props.icon} alt={"not found"} />
          <div className={styles.title}>
            <h3 className={styles.hoverLess}>{this.props.title}</h3>
          </div>
        </a>
      );
    }
    else{
      return (
        <div className={styles.cardInactive} style={css_order}>
          <img className={styles.cardIconInactive} src={this.props.icon} alt={"not found"} />
          <div className={styles.title}>
            <h3 className={styles.hoverLess}>{this.props.title}</h3>
          </div>
        </div>
      );
    }

  }
}

export default PartnersCard;
