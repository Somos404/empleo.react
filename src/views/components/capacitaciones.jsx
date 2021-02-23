import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Container, Row, Col } from 'reactstrap';
// core components
import Header from "../../components/header/header.jsx";
import HeaderBannerCapacitaciones from "../../components/banner/bannerCapacitaciones.jsx";
import Footer2 from "../../components/footer/footer2.jsx";

import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

  import img1 from '../../assets/images/capacitaciones/icon1Red.svg';
  import img2 from '../../assets/images/capacitaciones/icon3Red.svg';
  import img3 from '../../assets/images/capacitaciones/img2Red.svg';
  import img4 from '../../assets/images/capacitaciones/img4Red.svg';

  import img5 from '../../assets/images/oficios/flechaDer.svg';
  import img6 from '../../assets/images/oficios/flachaIzq.svg';
  import img7 from '../../assets/images/capacitaciones/logo_membrete.png';

  
const Capacitaciones = (props) => {
    return (
        <div>
            <Header />
             <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBannerCapacitaciones />

                    <div  className="spacer-Header">
                        <Container>
                            <Row xs="2">
                                <Col lg="6" className="">
                                <section className="text-gray-600 body-font">
                                    <div className="container px-5 py-24 mx-auto cont1Izq contIzqResponsive">
                                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft">
                                            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 titulo1ContCap">Te brindamos cursos para tu formación <br/>                    laboral y emprendedora
                                            </h1>
                                            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 titulo1ContResponsive">Te brindamos cursos para tu formación laboral y emprendedora
                                            </h1>
                                        </div>

                                        <hr className="lineaDivisorRed" />
                                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftP">
                                            <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">Ponemos a disposición de la población chaqueña una 
                                            plataforma online de capacitaciones con cursos cortos, 
                                            dinámicos y entretenidos para que puedas desarrollar tus capacidades, mejorar tus posibilidades para conseguir empleo, e iniciar o fortalecer tu emprendimiento.
                                            </p>
                                        </div>
                                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftP">
                                            <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">Buscamos que cada persona de la comunidad chaqueña encuentre inspiración y herramientas concretas para 
                                            mejorar su situación laboral. Acompañarte en tu 
                                            desarrollo personal, en el mejoramiento de tu presente
                                            y la construcción de tu futuro es lo que nos moviliza.

                                            </p>
                                        </div>
                                    </div>
                                </section>
                                </Col>
                                <Row md="8" lg="12" className="colRequerimientosCap">
                                    <Row className="imagenInfo">
                                    <img src={img7} alt="img" className="img-responsive img-thumbnail imgResponsiveInformat" width="200" />
                                    </Row>
                                    <Row className="textoInfo" >
                                    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContDereCap">
                                            <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">Espacio de formación intensiva en programación, para que tengas más y mejores oportunidades de incorporarte a la Economía del Conocimiento, especíﬁcamente en el sector de Software y Servicios Informáticos, a través del empleo en empresas de la industria o iniciando tu propio emprendimiento de base tecnológica.

Es un programa del Gobierno del Chaco, trabajando en conjunto con las empresas del Polo IT Chaco, Globant, la UTN-FRRe y la UNCAUS.

                                            </p>
                                        </div>
                                    </Row>
                               
                                <Link className="linkRedirecciones" to="/informatorio">
                                    <Card className="card-reqBoton cardReqBotonCap cardReqBotonCapMargin">
                                        <CardBody className=" card-body-reqBtn">
                                            <Col>
                                                <span to="/informatorio" className="img-ho cont-img cont-img1BtnCap"><img src={img5} alt="img" className="img-responsive img-thumbnail img-redireccionesBtn" width="200" /></span>
                                                <Col className="colbtnBtnEmpleo">
                                                <h5 className="font-medium m-b-0 tituloBtnSP titulo-requerimientosBtn">Quiero capacitarme</h5>
                                                </Col>
                                                <span to="/informatorio" className="img-ho cont-img cont-img2Btn"><img src={img6} alt="img" className="img-responsive img-thumbnail img-redireccionesBtn2" width="200" /></span>
                                            </Col>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </Row>
                            </Row>
                        </Container>
                        <div className="container-fluid segContRed">
                        <Container>
                            <CardGroup>
                                <Card className="cardsecondContRed">
                                    <CardImg top width="100%" src={img1} alt="Card image cap" className="cardImgRed"/>
                                    <CardBody  className="cardBodyRed">
                                    <CardTitle className="card-title-red" tag="h5">Gratuitos</CardTitle>
                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                    <hr className="lineaCard"/>
                                    <CardText className="card-sub-title-red">Se trata de una inversión que realizan 1.200.000 chaqueñas y chaqueños para el desarrollo laboral de la población.</CardText>
                                   
                                    </CardBody>
                                </Card>
                                <Card className="cardsecondContRed2">
                                    <CardImg top width="100%" src={img2} alt="Card image cap" className="cardImgRed" alt="Card image cap" />
                                    <CardBody className="cardBodyRed">
                                    <CardTitle className="card-title-red" tag="h5">Certificados</CardTitle>
                                    <hr className="lineaCard"/>
                                    <CardText className="card-sub-title-red">Por cada curso que finalices obtendrás un certificado validado por el Ministerio de Producción, Industria y Empleo de la 
                                    provincia del Chaco. Cada certificación es personalizada, con un identificador único que sirve para verificar su autenticidad.</CardText>
                                 
                                    </CardBody>
                                </Card>
                            </CardGroup>
                            <CardGroup>
                                <Card className="cardsecondContRed">
                                    <CardImg top width="100%" src={img3} alt="Card image cap" className="cardImgRed" alt="Card image cap" />
                                    <CardBody  className="cardBodyRed">
                                    <CardTitle className="card-title-red" tag="h5">Tutorados</CardTitle>
                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                    <hr className="lineaCard"/>
                                    <CardText className="card-sub-title-red">
                                    Tendrás el acompañamiento de una persona que te acompañará facilitando el proceso de aprendizaje, guiándote en el recorrido, y aclarando todas las dudas que tengas.
                                    </CardText>
                                   
                                   
                                    </CardBody>
                                </Card>
                                <Card className="cardsecondContRed2">
                                    <CardImg top  width="100%"  src={img4} alt="Card image cap" className="cardImgRed" alt="Card image cap" />
                                    <CardBody  className="cardBodyRed">
                                    <CardTitle className="card-title-redUlt" tag="h5">Sin días y horarios fijos</CardTitle>
                                    <hr className="lineaCard"/>
                                    <CardText className="card-sub-title-red">Podrás realizarlo manejando tus propios tiempos, pero siempre
                                    tendrás objetivos semanales que cumplir.
                                    </CardText>
                                 
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Container>
                        </div>
                    </div> 
                </div>
            </div> 
            <Footer2 /> 
        </div>
    );
}

Capacitaciones.propTypes = {
    classes: PropTypes.object
};

export default Capacitaciones;
