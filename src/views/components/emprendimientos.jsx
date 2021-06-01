import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBannerEmprendimientos from "../../components/banner/bannerEmprendimientos.jsx";
import Footer2 from "../../components/footer/footer2.jsx";

// secciones

import img3 from "../../assets/images/oficios/flechaDer.svg";
import img4 from "../../assets/images/oficios/flachaIzq.svg";

const Emprendimientos = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid empleoHeight">
          <HeaderBannerEmprendimientos />
          <div className="spacer-Header"></div>
          <div className={classes.contenedorPrincipal}>
            <Container>
              <Row xs="12" className="justify-content-center flex mx-3">
                <Col lg="6" md="6" xs="12" className="justify-content-center">
                  <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto cont1Izq contIzqResponsive">
                      <div
                        className={`${classes.contenedor1} lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start contLeft`}
                      >
                        {" "}
                        <h1
                          className={`${classes.titulo}flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 titulo1Cont`}
                        >
                          {" "}
                          Te brindamos herramientas de promoción, <br />
                          comercialización y financiamiento.
                        </h1>
                      </div>

                      <hr className={`${classes.lineahr}`} />
                      <Container>
                        <Row>
                          <Col
                            className={`${classes.contenedor2} justify-content-center`}
                          >
                            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftPEmpleo">
                              <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">
                                Te facilitamos instrumentos para la promoción de
                                tu emprendimiento y la comercialización de tus
                                productos, además de capacitaciones para que
                                puedas mejorar diferentes aspectos de tu
                                negocio.
                              </p>
                            </div>
                            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftP">
                              <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">
                                Buscamos potenciar el desarrollo de
                                emprendimientos que incorporen valor agregado en
                                su proceso de producción, para contribuir al
                                fortalecimiento del entramado productivo de la
                                provincia del Chaco.
                              </p>
                            </div>
                            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftP">
                              <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">
                                Registrá tu emprendimiento para que podamos
                                acompañarte.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </section>
                </Col>
                <Col
                  lg="6"
                  md="6"
                  xs="12"
                  className="text-center justify-content-center"
                >
                  {/* <Row className="justify-content-center row-banner rowBtnRed">
                                    <a href="#" className="text-white linking bg-success-gradiant btnRedSer"><i className="ti-angle-right iDerecha"></i><i className="ti-angle-right iDerecha"></i>Registrarme<i className="ti-angle-left iZquierda"></i><i className="ti-angle-left iZquierda"></i></a>
                                </Row> */}
                  <Row
                    md="8"
                    className={`${classes.contenedorCard} colRequerimientos`}
                  >
                    <a
                      className="linkRedirecciones"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdmgQi-o9ScNzxUKeGMl7-1ODUKWyfN5UxBFOz-10MMQIcZmA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card
                        className={`${classes.cardBtn} card-reqBoton cardReqBotonCapMargin`}
                      >
                        {" "}
                        <CardBody className=" card-body-reqBtn">
                          <Col>
                            <span className="img-ho cont-img cont-img1BtnEmprend">
                              <img
                                src={img3}
                                alt="img"
                                className="img-responsive img-thumbnail img-redireccionesBtn"
                                width="200"
                              />
                            </span>
                            <Col className="colbtnBtn">
                              <h5 className="font-medium m-b-0 tituloRequerimientosResponsive3 titulo-requerimientosBtn">
                                Quiero registrar
                              </h5>
                              <h5 className="font-medium m-b-0 tituloRequerimientosResponsive3 titulo-requerimientosBtn">
                                mi emprendimiento
                              </h5>
                            </Col>

                            <span
                              to="/oficios"
                              className="img-ho cont-img cont-img2BtnEmprend"
                            >
                              <img
                                src={img4}
                                alt="img"
                                className="img-responsive img-thumbnail img-redireccionesBtn1"
                                width="200"
                              />
                            </span>
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
};

const useStyles = makeStyles((theme) => ({
  contenedorPrincipal: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "2%",
    },
  },
  contenedor1: {
    width: "100%",
    marginLeft: "3%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: " 3.5%!important",
      width: "64%",
    },
  },
  contenedor2: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
    },
  },
  titulo: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  lineahr: {
    backgroundColor: "black",
    marginLeft: "3%",
    border: "1pxsolid",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2%",
      border: "1pxsolid",
      width: "65%",
    },
  },
  contenedorParrafo1: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "4%",
      width: "62%",
    },
  },
  contenedorCard: {
    marginLeft: "3%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2%",
      marginLeft: "-5%",
      marginTop: "-4%",
    },
  },
}));

Emprendimientos.propTypes = {
  classes: PropTypes.object,
};

export default Emprendimientos;
