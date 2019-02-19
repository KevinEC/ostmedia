import React, { Component } from 'react';
import './variables.scss';
import styles from './Card.module.scss';

class Card extends Component {
  render() {

    const linkTitles = this.props.linkTitles;
    const links = this.props.links.map( (link, i) =>
      <li><a href={link}>{linkTitles[i]}</a></li>
    );

    return (
      <div className={styles.card}>
        <div className={styles.cardIcon}>
          <img src={this.props.icon} alt="icon"/>
        </div>
        <div className={styles.cardText}>
          <h3>{this.props.title}</h3>
          <ul>
            {links}
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
