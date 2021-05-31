import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer2 from "../../components/footer/footer2.jsx";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import img1 from "../../assets/images/capacitaciones/icon1Red.svg";
import img2 from "../../assets/images/capacitaciones/icon3Red.svg";
import img3 from "../../assets/images/capacitaciones/img2Red.svg";
import img4 from "../../assets/images/capacitaciones/img4Red.svg";

import img5 from "../../assets/images/oficios/flechaDer.svg";
import img6 from "../../assets/images/oficios/flachaIzq.svg";
import img7 from "../../assets/images/capacitaciones/logo_membrete.png";

const Empresas = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className="">
        <div className="">
          <HeaderBanner />

          <div className="spacer-Header">
            <Col lg="12">
              <Row className="justify-content-center flex mx-5">
                <Col lg="6" md="6" xs="12" className="justify-content-center">
                  <Row>
                    <h1 className={`${classes.titulo}`}>
                      INCENTIVOS AL EMPLEO.
                    </h1>
                  </Row>
                  <Row>
                    <h1 className={`${classes.subtitulo}`}>
                      Beneficios para contratar y capacitar personal.
                    </h1>
                  </Row>
                  <hr className={`${classes.lineahr}`} />
                  <Row>
                    <h2 className={`${classes.parrafo1}`}>
                      Ponemos a disposición de empresas chaqueñas distintos
                      programas que ofrecen incentivos económicos para la
                      contratación de personal, y para su capacitación.{" "}
                    </h2>
                  </Row>
                  <Row>
                    <h2 className={`${classes.parrafo1}`}>
                      Trabajamos para que cada empresa y emprendimiento obtenga
                      facilidades para la generación de empleo genuino en
                      nuestra provincia, y encuentre instrumentos que ayuden a
                      encontrar la persona adecuada para el trabajo requerido.{" "}
                    </h2>
                  </Row>
                  <Row>
                    <h2 className={`${classes.parrafo1}`}>
                      Si necesitás contratar personal, o querés conocer los
                      programas de incentivos que tenemos para ofrecerte,
                      escribinos para que podamos asistirte.
                    </h2>
                  </Row>
                  <Row className="justify-content-center">
                    <Link className="linkRedirecciones" to="/contacto-empresas">
                      <Card
                        className={`${classes.cardBtn} card-reqBoton cardReqBotonCap cardReqBotonCapMargin`}
                      >
                        <CardBody className=" card-body-reqBtn">
                          <Col>
                            <span
                              to="/informatorio"
                              className="img-ho cont-img cont-img1BtnCap"
                            >
                              <img
                                src={img5}
                                alt="img"
                                className={`${classes.flechaBtn1} img-responsive img-thumbnail img-redireccionesBtn`}
                                width="200"
                              />
                            </span>
                            <Col
                              className={`${classes.botonTexto} colbtnBtnEmpleo`}
                            >
                              <h5
                                className={`${classes.tituloBtn} font-medium m-b-0 tituloBtnSP titulo-requerimientosBtn`}
                              >
                                Quiero que <br /> me contacten
                              </h5>
                            </Col>
                            <span
                              to="/informatorio"
                              className="img-ho cont-img cont-img2Btn"
                            >
                              <img
                                src={img6}
                                alt="img"
                                className={`${classes.flechaBtn2} img-responsive img-thumbnail img-redireccionesBtn2`}
                                width="200"
                              />
                            </span>
                          </Col>
                        </CardBody>
                      </Card>
                    </Link>
                  </Row>
                </Col>
                <Col lg="6" md="6" xs="12" className="justify-content-center">
                  <Row>
                    <h1 className={`${classes.titulo}`}>ACOMPAÑAR CHACO.</h1>
                  </Row>
                  <Row>
                    <h1 className={`${classes.subtitulo}`}>
                      Asistencia para los sectores más afectados por la
                      pandemia.{" "}
                    </h1>
                  </Row>
                  <hr className={`${classes.lineahr}`} />

                  <Row>
                    <h2 className={`${classes.parrafo2}`}>
                      La provincia del Chaco pone en marcha un beneficio
                      complementario para empresas, trabajadoras y trabajadores
                      independientes de los sectores más afectados por la
                      pandemia, que no logren acceder al REPRO II, otorgando los
                      mismos beneficios.
                    </h2>
                  </Row>
                  <Row>
                    <h2 className={`${classes.parrafo3}`}>
                      Además, las empresas inscriptas a la iniciativa nacional
                      automáticamente verán diferidos los vencimientos de sus
                      créditos con el NBCH, sin penalidades y por 9 meses, con 3
                      de gracia.
                    </h2>
                  </Row>
                  <Row className={`${classes.rowBtn} justify-content-center`}>
                    <a
                      className="linkRedirecciones"
                      href="https://gobiernodigital.chaco.gob.ar/login"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card
                        className={`${classes.cardBtn} card-reqBoton cardReqBotonCap cardReqBotonCapMargin`}
                      >
                        <CardBody className=" card-body-reqBtn">
                          <Col>
                            <span
                              to="/informatorio"
                              className="img-ho cont-img cont-img1BtnCap"
                            >
                              <img
                                src={img5}
                                alt="img"
                                className={`${classes.flechaBtn1} img-responsive img-thumbnail img-redireccionesBtn`}
                                width="200"
                              />
                            </span>
                            <Col
                              className={`${classes.botonTexto} colbtnBtnEmpleo`}
                            >
                              <h5
                                className={`${classes.tituloBtn} font-medium m-b-0 tituloBtnSP titulo-requerimientosBtn`}
                              >
                                Quiero acceder a <br /> GOBIERNO DEL CHACO
                              </h5>
                            </Col>
                            <span
                              to="/informatorio"
                              className="img-ho cont-img cont-img2Btn"
                            >
                              <img
                                src={img6}
                                alt="img"
                                className={`${classes.flechaBtn2} img-responsive img-thumbnail img-redireccionesBtn2`}
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
            </Col>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  titulo: {
    fontSize: "1.6rem",
    color: "#01B7E8",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
  subtitulo: {
    fontSize: "1.5rem",
    color: "#01B7E8",
    fontWeight: 600,
    lineHeight: "20px",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "28px",
      fontSize: "1.3rem",
    },
  },
  lineahr: {
    backgroundColor: "black",
    marginLeft: "-2%",
    border: "1pxsolid",
    width: "65%",
  },
  parrafo1: {
    fontSize: "1rem",
    marginBottom: "5%",
    fontWeight: 500,
    lineHeight: "25px",
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  parrafo2: {
    fontSize: "1rem",
    marginBottom: "5%",
    fontWeight: 500,
    lineHeight: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  titulolista: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  lista: {
    fontSize: "1rem",
    color: "#3e4555",
    marginBottom: "5%",
    fontWeight: 500,
    lineHeight: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  parrafo3: {
    fontSize: "1rem",
    marginBottom: "5%",
    fontWeight: 500,
    lineHeight: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  rowBtn: {
    position: "relative",
    marginTop: "11.2%",
  },
  cardBtn: {
    marginLeft: "0%",
  },
  botonTexto: {
    marginTop: "2em",
  },
  tituloBtn: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: ".5em",
    },
  },
  flechaBtn1: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-5",
    },
  },
  flechaBtn2: {
    marginTop: "-9%",
    marginLeft: "-9%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-13%!important",
      marginLeft: "70%!important",
    },
  },
}));

Empresas.propTypes = {
  classes: PropTypes.object,
};

export default Empresas;
