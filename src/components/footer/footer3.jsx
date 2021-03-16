/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import img1 from '../../assets/images/logos/subse.svg';
import img2 from '../../assets/images/capacitaciones/logosInfoCap.svg';
import img3 from '../../assets/images/logos/chaco.svg';


const Footer3 = () => {
    return (
        <div className="footer4 ">
            <Row className="contenedor-logos-footerInfoCap contenedor-logos-footerInfoCapResponsive">
               
                   <Col lg="12" md="12" sm="4" className="col-subse">
                       <div className="contenedor contenedor-min">
                       <img src={img2} alt="img" className="imgRepsonsiveInfoCap"  />                       
                       </div>
                   </Col>
               
               </Row>
              
        </div>
    );
}
export default Footer3;
