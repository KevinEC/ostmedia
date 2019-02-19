import React, { Component } from 'react';
import styles from './Footer.module.scss';

class Footer extends Component {
  render() {
    return (

      <footer>
        <max className={styles.logoContainer} >
          <div className={styles.logo}></div>
          <div className={styles.slogan}></div>
        </max>
        
      </footer>
      
    );
  }
}

export default Footer;
