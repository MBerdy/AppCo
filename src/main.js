import React from 'react';
import IPhoneX from './img/iPhoneX.png';
import {Link} from 'react-router-dom';
import cleanDesign from './icons/clean.png';
import secureData from './icons/secure.png';
import retinaReady from './icons/retina.png';
import { Container, Row, Col } from 'react-bootstrap';

function Main() {
  
    return (  
      <div>
      <div className ="promo">
      <div className="container">
        <div className="app"> AppCo </div>
        <div className="descr">
            <div className="descr__title">
                <span>Brainstorming</span> for desired perfect Usability
            </div>
            <div className="descr__text"> Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</div>
        </div>
        <Link to='/stats'>
        <button className="button">Views Stats</button>
        </Link>
        <img src={IPhoneX}alt="iPhoneX" className="promo__img" /> 
        </div>  
    </div> 
     <div className="advantages">
     <div className="container">
         <div className="descr__title descr__title_center ">
             Why <span>small business owners love</span> AppCo?
         </div>
         <div className="descr__text descr__text_center ">
             Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!s
         </div>
         <Container>
         <Row>
             <Col md={4}>
                 <div className="block">
                     <img className="block__img" src={cleanDesign} alt="clean design" />
                     <div className="block__descr">
                         <div className="block__header">Clean Design</div>
                         <div className="block__text">
                             Increase sales by showing true dynamics of your website.
                         </div>
                     </div>
                 </div>
             </Col>
             <Col md={4}>
                 <div className="block">
                     <img className="block__img" src={secureData} alt="secure data" />
                     <div className="block__descr">
                         <div className="block__header">Secure Data</div>
                         <div className="block__text">
                             Build your online store’s trust using Social Proof & Urgency.
                         </div>
                     </div>
                 </div>
             </Col>
             <Col md={4}>
                 <div className="block">
                     <img className="block__img" src={retinaReady} alt="retina ready" />
                     <div className="block__descr">
                         <div className="block__header">Retina Ready</div>
                         <div className="block__text">
                             Realize importance of social proof in customer’s purchase decision.
                         </div>
                     </div>
                 </div>
             </Col>
         </Row>
         </Container>
     </div>
 </div> 
 <div className="footer">
 <div className="container">
     <form className="footer__form " action="#" >
         <input name="email" required placeholder="Ваш E-mail" type="email" />
         <button className="button button_submit">Subscribe</button>
     </form>
     <div className="footer__bottom">
         <div className="app app_footer">AppCo</div>
         <div className="footer__text">All rights reserved by ThemeTags</div>
         <div className="footer__text">Copyrights © 2019. </div>
     </div>
 </div>
</div>
</div>
    );
  }

export default Main;
