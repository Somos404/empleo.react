import React, { Component } from "react";
import PropTypes from "prop-types";

import { withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';

// core components
import Header from "../../components/header/header.jsx";
import HeaderBannerOficios from "../../components/banner/bannerOficios.jsx";
import Footer2 from "../../components/footer/footer2.jsx";

// secciones


import img3 from '../../assets/images/oficios/flechaDer.svg';
import img4 from '../../assets/images/oficios/flachaIzq.svg';


const Oficios = (props) => {


    console.log(props);

    return (
        <div>
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid empleoHeight">
                    <HeaderBannerOficios />
                    <div className="spacer-Header"></div>
                    <div>
                        <Container>
                            <Row xs="2">
                                <Col lg="6">
                                    <section className="text-gray-600 body-font">
                                        <div className="container px-5 py-24 mx-auto cont1Izq  contIzqResponsive">
                                            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft">
                                                <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 titulo1Cont"> Herramientas para la promoción y <br />
                                            comercialización de tus servicios</h1>
                                            </div>

                                            <hr className="lineaDivisorRedEmpleo lineaDivisorRedEmpleoWidth" />
                                            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftPEmpleo">
                                                <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">Incorporate a nuestro Registro de Oficios para que podamos brindarte herramientas que contribuyan al desarrollo de tu trabajo.


                                        </p>
                                            </div>
                                            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftP">
                                                <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">
                                                    Nos moviliza potenciar el empleo autónomo, para que cada persona que se dedica a un oficio encuentre instrumentos útiles para mejorar la calidad de sus trabajos, obtenga más visibilización y aproveche diferentes canales de
                                                    comercialización.



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
                                        <a className="linkRedirecciones" href="https://docs.google.com/forms/d/e/1FAIpQLSdI_-U-i2_UemVLFX23auRufzVvd-m6ZY_Uic3uEixAZaqyDA/viewform" target="_blank" rel="noopener noreferrer">
                                            <Card className="card-reqBoton cardReqBotonCapMargin">
                                                <CardBody className=" card-body-reqBtn">
                                                    <Col>
                                                        <span className="img-ho cont-img cont-img1BtnOF"><img src={img3} alt="img" className="img-responsive img-thumbnail img-redireccionesBtn" width="200" /></span>
                                                        <Col className="colbtnBtn colbtnBtnRespOf">
                                                            <h5 className="font-medium m-b-0 tituloRequerimientosResponsive3 titulo-requerimientosBtn">Quiero inscribirme en</h5>
                                                            <h5 className="font-medium m-b-0 tituloRequerimientosResponsive3 titulo-requerimientosBtn">el Registro de Oficios</h5>
                                                        </Col>

                                                        <span className="img-ho cont-img cont-img2Btn"><img src={img4} alt="img" className="img-responsive img-thumbnail img-redireccionesBtn1" width="200" /></span>
                                                    </Col>
                                                </CardBody>
                                            </Card>
                                        </a>
                                    </Row>
                                </Col>

                            </Row>
                        </Container>

                    </div>

                </div>

            </div>
            <Footer2 />
        </div>
    );
}


export default withRouter(Oficios);

