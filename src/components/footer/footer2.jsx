/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import img1 from '../../assets/images/logos/subse.svg';
import img2 from '../../assets/images/logos/min.svg';
import img3 from '../../assets/images/logos/chaco.svg';


const Footer2 = () => {
    return (
        <div className="footer4 ">
            <Row className="contenedor-logos-footer">
                   
                   <Col lg="4" md="6" sm="4" className="col-subse">
                       <div className="contenedor contenedor-subse">
                       <img src={img1} alt="img" className="img-subse" />                       
                       </div>
                   </Col>
                   <Col lg="4" md="6" sm="4" className="col-subse">
                       <div className="contenedor contenedor-min">
                       <img src={img2} alt="img" className="img-min"  />                       
                       </div>
                   </Col>
                   <Col lg="4" md="6" sm="4" className="col-subse">
                       <div className="contenedor contenedor-chaco">
                       <img src={img3} alt="img" className="img-chaco"  />                       
                       </div>
                   </Col>
               </Row>
               <Row className="contenedor-logos-footerResponsive">
                   
                
               </Row>
        </div>
    );
}
export default Footer2;
