import React, { Component } from 'react';
import './variables.scss';
import styles from './PartnersCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PartnersCard extends Component {
  render() {

    return (
      <a className={styles.card} href={this.props.link}>
        <img className={styles.cardIcon} src={this.props.icon} />
        <div className={styles.title}>
          <h5>{this.props.type}</h5>
          <h3>{this.props.title}</h3>
        </div>
      </a>
    );
  }
}

export default PartnersCard;