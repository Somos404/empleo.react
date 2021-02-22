import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody,  Container, Row, Col
  } from 'reactstrap';


// core components
import Header from "../../components/header/header.jsx";
import HeaderBannerEmpresas from "../../components/banner/bannerEmpresas.jsx";
import Footer2 from "../../components/footer/footer2.jsx";

// secciones


import img3 from '../../assets/images/oficios/flechaDer.svg';
import img4 from '../../assets/images/oficios/flachaIzq.svg';



const Empresas = (props) => {
    return (
        <div>
        <Header />
         <div className="page-wrapper">
            <div className="container-fluid empleoHeight">
                <HeaderBannerEmpresas />
                <div  className="spacer-Header"></div>
                <div>
                    <Container>
                        <Row xs="2">
                            <Col lg="6">
                            <section class="text-gray-600 body-font">
                                <div class="container px-5 py-24 mx-auto cont1Izq">
                                    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft">
                                        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 titulo1Cont"> Te brindamos beneficios para contratar y
                                                                                                                                    <br/>
                                                                                                                                    capacitar personal
                                        </h1>
                                    </div>
                                    <hr class="lineaDivisorRedEmpleo" />
                                    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftPEmpleo">
                                        <p class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">Ponemos a disposición de empresas chaqueñas distintos 
                                            programas que ofrecen incentivos económicos para la 
                                            contratación de personal, y para su capacitación.
                                        </p>
                                    </div>
                                    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftP">
                                        <p class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">
                                        Trabajamos para que cada empresa y emprendimiento 
                                            obtenga facilidades para la generación de empleo genuino en nuestra provincia, y encuentre instrumentos que ayuden a encontrar la persona adecuada para el trabajo requerido.
                                        </p>
                                    </div>
                                    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftP">
                                        <p class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">
                                        Si necesitás contratar personal, o querés conocer los 
                                            programas de incentivos que tenemos para ofrecerte, 
                                            escribinos para que podamos asistirte.

                                        </p>
                                    </div>
                                </div>
                            </section>
                            </Col>
                            <Col lg="6" className="text-center">
                                {/* <Row className="justify-content-center row-banner rowBtnRed">
                                    <a href="#" className="text-white linking bg-success-gradiant btnRedSer"><i className="ti-angle-right iDerecha"></i><i className="ti-angle-right iDerecha"></i>Registrarme<i className="ti-angle-left iZquierda"></i><i className="ti-angle-left iZquierda"></i></a>
                                </Row> */}
                                <Row md="8" className="colRequerimientos">
                                <Link className="linkRedirecciones" to="/contacto-empresas">
                                    <Card className="card-reqBoton">
                                        <CardBody className=" card-body-reqBtn">
                                            <Col>
                                                <span className="img-ho cont-img cont-img1BtnEmp"><img src={img3} alt="img" className="img-responsive img-thumbnail img-redireccionesBtn" width="200" /></span>
                                                <Col className="colbtnBtn">
                                                <h5 className="font-medium m-b-0 tituloRequerimientosResponsive3 titulo-requerimientosBtn">Quiero que</h5>
                                                <h5 className="font-medium m-b-0 tituloRequerimientosResponsive3 titulo-requerimientosBtn">me contacten</h5>
                                                </Col>
                                          
                                                <span className="img-ho cont-img cont-img2BtnEmp"><img src={img4} alt="img" className="img-responsive img-thumbnail img-redireccionesBtn1" width="200" /></span>
                                            </Col>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </Row>
                            </Col>
                        </Row>
                    </Container>
                   
                </div>
                
            </div>
            <Footer2 /> 
        </div> 
   
    </div>
    );
}

Empresas.propTypes = {
    classes: PropTypes.object
};

export default Empresas;
