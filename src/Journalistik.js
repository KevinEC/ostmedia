import React, {Component} from 'react';
import { HashLink as AnchorLink } from "react-router-hash-link";

import splash from './Splash.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from './Nav';

class Journalistik extends Component {

    
  constructor(props) {
    super(props);

    this.state = {
    };
    }

    render(){
        return (
            [<Nav absolute={true} key={'nav-bar'} />,
            <div key={'news-body'} className={[splash.container].join(' ')} id={splash.bg_journalistik}>
            <div className={splash.splash} >
              <max>
                <h1 className={splash.title}>
                  Såhär arbetar vi med dina nyheter
                </h1>
              </max>
            </div>
            <div className={splash.description} id="description">
              <max>
                <h5 className={splash.descriptionText}> </h5>
                <AnchorLink to="#description"> 
                  <FontAwesomeIcon icon={["fas", "angle-down"]} size="9x" color="white" className={splash.scroll_journalistik} />
                </AnchorLink>
              </max>
 
            </div>
              <max>
                <div className={splash.articleContainer}>
                  <h6 className={splash.articleSubTitle}>Lagar och regler för våra mediekanaler</h6>
                  <p className={splash.articleParagraph}>
                    Öst Medias samtliga nyhetsmedier, både tryckta tidningar och nyhetsplattformar online, sorterar under grundlagen: 
                    Tryckfrihetsförordningen och Yttrandefrihetsgrundlagen. Enligt dessa ska våra medier ha ansvariga utgivare som tar 
                    ansvar för att vi följer såväl grundlagen som de pressetiska reglerna i vår nyhetsverksamhet. 
                    </p>
                  <a className={splash.articleLink} href="https://po.se/pressetik/">
                  Klicka här för att komma till de pressetiska reglerna.
                  </a>
                  <p className={splash.articleParagraph}>
                    Allmänhetens Pressombudsman, PO, prövar klagomål från enskilda som känner sig orättvist behandlade av pressen. 
                    Både privatpersoner, företag och organisationer kan anmäla en publicering till PO och få den prövad.
                  </p>
                  <a className={splash.articleLink} href="https://po.se/vill-du-anmala/">
                    Klicka här för att läsa mer om hur du gör en PO-anmälan.
                  </a>

                  <hr></hr>

                  <h6 className={splash.articleSubTitle}>Vår publicistiska inriktning</h6>
                  <p className={splash.articleParagraph}>
                  Förutom att följa lagen och de pressetiska reglerna arbetar vi i enlighet med journalistisk praxis, där allmänintresse, 
                  källkritik och faktagranskning är några av grundpelarna. Men också respekt, hänsyn till individen och hög lokal relevans.
                  Vi har formulerat några punkter som vi håller oss till i vårt dagliga arbete.
                  </p>
                  <ul className={splash.articleList}>
                    <li className={splash.articleListItem}>Vi ska vara så nära vår publik som möjligt. Det är alltid allmänheten som är vår uppdragsgivare. Aldrig någon annan.</li>
                    <li className={splash.articleListItem}>Vår journalistik ska vara saklig, tydlig och underbyggd. Vi väljer inte sida, utan strävar efter att ge en så nyanserad 
                      bild som möjligt. När vi lyfter fram kritik mot makthavare, chefer, organisationer och företag ska de alltid ges möjlighet 
                      att svara på tydliga och raka frågor; kritik och bemötande ska publiceras samtidigt. Men det ska inte löna sig att hålla sig undan. 
                      Vi kommer att ge rimlig tid för kritiserade parter att svara – men det är fortfarande vi som avgör om det blir en publicering. 
                      Ingen annan.</li>
                    <li className={splash.articleListItem}>Vi strävar efter att alltid sätta våra läsare och användare i första rummet. Det innebär att vi publicerar namn på makthavare, 
                      näringsidkare och restauranger som agerar på ett sätt som drabbar allmänheten. Och samtidigt ska kritiserade parter alltid ges 
                      möjlighet att bemöta kritiken, rakt och tydligt.</li>
                    <li className={splash.articleListItem}>Människor som begår brott hanteras av rättsväsendet, inte av media. Vi gör våra publiceringar utifrån allmänintresset, 
                    inte för att döma individer. Därför publicerar vi inte slentrianmässigt namn på dömda brottslingar, vi gör det om vi anser att allmänintresset motiverar det.</li>
                    <li className={splash.articleListItem}>Som seriös nyhetsförmedlare tar vi hänsyn till drabbade, offer och anhöriga. Vi strävar alltid efter att berätta så mycket 
                    som möjligt, men av hänsyn till drabbade och anhöriga avstår vi ibland ifrån att publicera vissa detaljer. Den hänsynen gäller oavsett vad människor har för 
                    socioekonomisk status, etnicitet eller religion.</li>
                    <li className={splash.articleListItem}>Det ingår i vår roll att utkräva ansvar från människor i maktpositioner i samhället. Som politiker eller chef inom det 
                    offentliga och inom näringslivet har man ett förtroendeuppdrag att ta ansvar för. Vi behandlar människor olika beroende på deras maktposition – 
                    men inte beroende på etnicitet, religion eller politiska åsikter.</li>
                    <li className={splash.articleListItem}>Vi ska inte moralisera och döma, utan sträva efter en nykter och genomtänkt bevakning. Vi ska inte moralisera över människors åsikter, värderingar och livsval.</li>
                    <li className={splash.articleListItem}>Som krönikör i våra kanaler får man gärna roa och även oroa. Men även här ska man vara tydlig, saklig och underbyggd i fakta – samtidigt som man kan ta ut svängarna i sina åsikter.</li>
                  </ul>

                  <hr></hr>
                  <h6 className={splash.articleSubTitle}>Rapportera frågor eller fel</h6>
                  <p className={splash.articleParagraph}>
                  Du som användare och läsare ska kunna lita på det vi skriver. Och när vi gör fel, ska vi erkänna det, be om ursäkt och rätta våra fel. Du som läsare är alltid 
                  välkommen att höra av dig, inte minst om du upptäcker faktiska fel i vår rapportering. <br/>
                  Skicka gärna med en länk till den specifika artikeln så att vi snabbare kan åtgärda felet.
                  </p>
                  <a className={splash.articleLink} href="mailto:ansvarigutgivare@ostgotamedia.se">Klicka här för att skicka ett mail till ansvarig utgivare.</a>
                  <p className={splash.articleParagraph}>
                  Vill du rapportera om stavfel eller liknande i någon av våra artiklar?  <br/>
                  Skicka gärna med en länk till den specifika artikeln så att vi snabbare kan åtgärda felet.
                  </p>
                  <a className={splash.articleLink} href="mailto:tipsa@corren.se">Klicka här för att skicka ett mejl till redaktionen. </a>
                </div>
              </max>
            </div>] 
            
        );

    }
}

export default Journalistik;