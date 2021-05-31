import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
// core components
import Header from "../../../components/header/header.jsx";
import HeaderBanner from "../../../components/banner/banner.jsx";
import Footer2 from "../../../components/footer/footer2.jsx";

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
import img1 from "../../../assets/images/capacitaciones/icon1Red.svg";
import img2 from "../../../assets/images/capacitaciones/icon3Red.svg";
import img3 from "../../../assets/images/capacitaciones/img2Red.svg";
import img4 from "../../../assets/images/capacitaciones/img4Red.svg";

import img5 from "../../../assets/images/oficios/flechaDer.svg";
import img6 from "../../../assets/images/oficios/flachaIzq.svg";
import img7 from "../../../assets/images/capacitaciones/logo_membrete.png";

const AcompañarChaco = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className="">
        <div className="">
          <HeaderBanner />

          <div className="spacer-Header">
            <Row className="justify-content-center flex mx-5">
              <Col lg="12" md="12" xs="12" className="justify-content-center">
                <Row>
                  <h1 className={`${classes.titulo}`}>ACOMPAÑAR CHACO</h1>
                </Row>
                <Row>
                  <h1 className={`${classes.subtitulo}`}>
                    Programa de asistencia a los sectores más afectados por la
                    pandemia.
                  </h1>
                </Row>
                <hr className={`${classes.lineahr}`} />
              </Col>
              <Col lg="6" md="6" xs="12" className="justify-content-center">
                <Row>
                  <h2 className={`${classes.parrafo1}`}>
                    Se trata de un programa que complementa las medidas lanzadas
                    por el Gobierno Nacional para los sectores más afectados.{" "}
                  </h2>
                </Row>
                <Row>
                  <h2 className={`${classes.titulolista}`}>
                    Alcanzará a los trabajadoras y trabajadores más afectados
                  </h2>
                  <ul className={`${classes.lista}`}>
                    <li>Gastronómicos</li>
                    <li>Agencia de viajes</li>
                    <li>Trasporte Automotor Turístico.</li>
                    <li>Gimnasios</li>
                    <li>Peluquerías y centros de belleza</li>
                    <li>Peloteros y salones de fiestas infantiles</li>
                  </ul>
                </Row>
              </Col>
              <Col lg="6" md="6" xs="12" className="justify-content-center">
                <Row>
                  <h2 className={`${classes.parrafo2}`}>
                    Consiste en un beneficio complementario para empresas,
                    trabajadoras y trabajadores independientes de los sectores
                    antes mencionados que no logren acceder al REPRO II,
                    otorgando los mismos beneficios.
                  </h2>
                </Row>
                <Row>
                  <h2 className={`${classes.parrafo3}`}>
                    Recibirán por única vez un aporte de $22.000 por cada
                    empleada y empleado que se haya inscripto en el Programa
                    Nacional REPRO II y que no haya percibido el beneficio. Las
                    y los monotributistas también podrán aplicar a la
                    iniciativa.
                  </h2>
                </Row>
              </Col>
            </Row>

            <Container>
              <Row className="justify-content-center">
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
                            Quiero acceder a <br /> ACOMPAÑAR CHACO
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
            </Container>
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
  },
  subtitulo: {
    fontSize: "1.5rem",
    color: "#01B7E8",
    fontWeight: 600,
    lineHeight: "20px",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "28px",
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
  },
  parrafo2: {
    fontSize: "1rem",
    marginBottom: "5%",
    fontWeight: 500,
    lineHeight: "25px",
  },
  titulolista: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "25px",
    width: "100%",
  },
  lista: {
    fontSize: "1rem",
    color: "#3e4555",
    marginBottom: "5%",
    fontWeight: 500,
    lineHeight: "25px",
  },
  parrafo3: {
    fontSize: "1rem",
    marginBottom: "5%",
    fontWeight: 500,
    lineHeight: "25px",
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

AcompañarChaco.propTypes = {
  classes: PropTypes.object,
};

export default AcompañarChaco;
