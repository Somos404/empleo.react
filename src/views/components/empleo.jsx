import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

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
import HeaderBannerEmpleo from "../../components/banner/bannerEmpleo.jsx";
import Footer2 from "../../components/footer/footer2.jsx";

// secciones

import img3 from "../../assets/images/oficios/flechaDer.svg";
import img4 from "../../assets/images/oficios/flachaIzq.svg";

const Empleo = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid empleoHeight">
          <HeaderBannerEmpleo />
          <div className="spacer-Header"></div>
          <div>
            <Container>
              <Row xs="12" className="justify-content-center flex mx-3">
                <Col lg="6" md="6" xs="12" className="justify-content-center">
                  <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto cont1Izq contIzqResponsive">
                      <div
                        className={`${classes.contenedor1} lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start contLeft`}
                      >
                        {" "}
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 titulo1Cont">
                          Te ayudamos en tus búsquedas laborales
                        </h1>
                      </div>

                      <hr className={`${classes.lineahr}`} />
                      <Container>
                        <Row>
                          <Col
                            className={`${classes.contenedor2} justify-content-center`}
                          >
                            <div
                              className={`${classes.contenedorParrafo1} lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start ContLeftPEmpleo`}
                            >
                              {" "}
                              <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">
                                Ofrecemos a la población chaqueña un servicio de
                                vinculación laboral, conectando a la gente que
                                busca empleo con las empresas que necesitan
                                personal; además contamos con programas de
                                incentivos económicos para la contratación de
                                trabajadoras y trabajadores.
                              </p>
                            </div>
                            <div
                              className={`${classes.contenedorParrafo1} lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start ContLeftPEmpleo`}
                            >
                              {" "}
                              <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">
                                Queremos que toda persona encuentre un empleo
                                que le permita mejorar su calidad de vida, y nos
                                movilizamos fuertemente para conseguirlo. Si
                                estás buscando trabajo, contactanos para que
                                podamos ayudarte.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </section>
                </Col>
                <Col lg="6" className="text-center">
                  {/* <Row className="justify-content-center row-banner rowBtnRed">
                                    <a href="#" className="text-white linking bg-success-gradiant btnRedSer"><i className="ti-angle-right iDerecha"></i><i className="ti-angle-right iDerecha"></i>Registrarme<i className="ti-angle-left iZquierda"></i><i className="ti-angle-left iZquierda"></i></a>
                                </Row> */}
                  <Row md="8" className="colRequerimientos">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf2BKiBwquELxdINd3iM_VMC7bFh-35umaWa_VhEjxNk50sjg/viewform"
                      className="linkRedirecciones"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card
                        className={`${classes.btn} card-reqBoton cardReqBotonCapMargin`}
                      >
                        <CardBody className=" card-body-reqBtn">
                          <Col>
                            <span
                              to="/oficios"
                              className="img-ho cont-img cont-img1BtnEmpleo"
                            >
                              <img
                                src={img3}
                                alt="img"
                                className="img-responsive img-thumbnail img-redireccionesBtn"
                                width="200"
                              />
                            </span>
                            <Col className="colbtnBtnEmpleo">
                              <h5 className="font-medium m-b-0 tituloRequerimientosResponsive2 tituloRequerimientosResponsiveSP titulo-requerimientosBtn">
                                Busco empleo
                              </h5>
                            </Col>
                            <span
                              to="/oficios"
                              className="img-ho cont-img cont-img1BtnEmpleo2"
                            >
                              <img
                                src={img4}
                                alt="img"
                                className="img-responsive img-thumbnail img-redireccionesBtn2"
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
        <Footer2 />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  contenedor1: {
    marginLeft: "-1%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: " 0%!important",
      width: "64%",
    },
  },
  contenedor2: {
    marginLeft: "-2%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
    },
  },
  lineahr: {
    backgroundColor: "black",
    marginLeft: "0%",
    border: "1pxsolid",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2%",
      border: "1pxsolid",
      width: "65%",
    },
  },
  contenedorParrafo1: {
    marginLeft: "0%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2%",
      width: "62%",
    },
  },
  cardBtn: {
    marginLeft: "0%",
  },
}));

Empleo.propTypes = {
  classes: PropTypes.object,
};

export default Empleo;
