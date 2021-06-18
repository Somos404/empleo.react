import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
// core components
import HeaderCapacitaciones from "../../components/header/headerCapacitaciones";
import HeaderBannerCapacitaciones from "../../components/banner/bannerCapacitaciones.jsx";
import Footer3 from "../../components/footer/footer3.jsx";
import CardCategorias from "../custom-components/sections/cardCategorias";
import Cursosfuturos from "../custom-components/sections/cursosfuturos";
import CardCursos from "../custom-components/sections/cardCursos";
import BlogComponent from "./informatorioCapacitaciones";

import { Card, CardTitle, CardText, CardGroup, CardBody } from "reactstrap";

import img1 from "../../assets/images/capacitaciones/iconoGratis.svg";
import img2 from "../../assets/images/capacitaciones/iconoCertificados.svg";
import img3 from "../../assets/images/capacitaciones/iconoTutorados.svg";
import img4 from "../../assets/images/capacitaciones/iconoHorarios.svg";
import imgInfo from "../../assets/images/capacitaciones/logoCapHeaderv2.png";
import Slider from "../custom-components/sections/slider/Slider";
import UserService from "../../services/UserService";
import { makeStyles } from "@material-ui/core/styles";

const checkDate = (fecha) => {
  let valido = false;
  if (fecha.length > 0) {
    fecha.forEach((element) => {
      let d1 = element.empieza.split("/");
      let d2 = element.termina.split("/");

      let from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
      let to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
      let check = new Date();

      if (check > from && check < to) {
        valido = true;
      }
    });
  } else {
    valido = true;
  }
  return valido;
};

const CapacitacionesDemo = (props) => {
  const classes = useStyles();
  const [categoria, setCategoria] = useState(
    props.location.categoria ? props.location.categoria : "Todos"
  );

  const [cursosSlider, setCursosSlider] = useState([]);

  useEffect(() => {
    let array = [];
    props.cursosAndCategias.forEach((categoria) => {
      categoria.Cursos.forEach((curso) => {
        if (checkDate(curso.fechaInscrpcion) && curso.active != 0) {
          array.push(curso);
        }
      });
    });
    setCursosSlider(array);
  }, []);

  return (
    <div>
      <HeaderCapacitaciones />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBannerCapacitaciones />
          <Row className={classes.imagenRowCenit}>
            <img
              src={imgInfo}
              alt="img"
              className="img-responsive img-thumbnail imgResponsiveInformatMun imgResponsiveInformatCap imgResponsiveInformatCapHeader"
              width="200"
            />
          </Row>
          <div className="spacer-Header spacer-HeaderCap">
            <Container className={`${classes.containerPCapDemo} containerPCap`}>
              {/* 1 columna para el titulo */}
              <Row className="justify-content-center flex">
                <Col lg="12" md="12" xs="12" className="justify-content-center">
                  <Row>
                    <h1 className={classes.titulo}>
                      Cursos para tu formación laboral y emprendedora
                    </h1>
                  </Row>
                </Col>
              </Row>
              {/* 2 columnas de texto */}
              <Row className="justify-content-center flex">
                <Col lg="6" md="6" xs="12" className="justify-content-center">
                  <Row>
                    <h2 className={classes.parrafoCursos}>
                      Desde el Gobierno del Chaco ponemos a tu disposición una
                      plataforma online de capacitaciones con cursos cortos,
                      dinámicos y entretenidos para que puedas desarrollar tus
                      capacidades, mejorar tus posibilidades para conseguir
                      empleo, e iniciar o fortalecer tu emprendimiento
                    </h2>
                  </Row>
                </Col>
                <Col lg="6" md="6" xs="12" className="justify-content-center">
                  <Row>
                    <h2 className={classes.parrafoCursos}>
                      Trabajamos para que cada persona de la comunidad chaqueña
                      encuentre inspiración y herramientas concretas para
                      mejorar su situación laboral. Acompañarte en tu desarrollo
                      personal, en el mejoramiento de tu presente y la
                      construcción de tu futuro es lo que nos moviliza.
                    </h2>
                  </Row>
                </Col>
              </Row>
            </Container>
            <div className="container-fluid segContRed">
              <Container className="containerInfoCursosCap">
                <CardGroup>
                  <Card className="cardsecondContRed">
                    {/* <CardImg top width="100%" src={img1} alt="Card image cap" className="cardImgRed" /> */}
                    <CardBody className="d-flex no-block cardBodyRed">
                      <Col className="col-md-2">
                        <div className="m-r-20">
                          <img
                            src={img1}
                            width="55"
                            className="rounded"
                            alt="img"
                          />
                        </div>
                      </Col>
                      <Col
                        className={`${classes.tituloDesc}col-md-10 colDescripcionInfoResponsive`}
                      >
                        <Row className="justify-content-left">
                          <CardTitle
                            className="card-title-red card-title-redResponsive"
                            tag="h5"
                          >
                            Gratuitos
                          </CardTitle>
                          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                          <hr className="lineaCard lineaCard1 linaDescripcionREsponsiveCap" />
                          <CardText className="card-sub-title-red card-sub-title-redResponsive">
                            Se trata de una inversión que realizan 1.200.000
                            chaqueñas y chaqueños para el desarrollo laboral de
                            la población.
                          </CardText>
                        </Row>
                      </Col>
                    </CardBody>
                  </Card>
                  <Card className="cardsecondContRed">
                    {/* <CardImg top width="100%" src={img1} alt="Card image cap" className="cardImgRed" /> */}
                    <CardBody className="d-flex no-block cardBodyRed">
                      <Col className="col-md-2">
                        <div className="m-r-20">
                          <img
                            src={img2}
                            width="55"
                            className="rounded"
                            alt="img"
                          />
                        </div>
                      </Col>
                      <Col
                        className={`${classes.tituloDesc}col-md-10 colDescripcionInfoResponsive`}
                      >
                        <Row className="justify-content-left">
                          <CardTitle
                            className="card-title-red card-title-redResponsive"
                            tag="h5"
                          >
                            Certificados
                          </CardTitle>
                          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                          <hr className="lineaCard lineaCard2  linaDescripcionREsponsiveCap" />
                          <CardText className="card-sub-title-red card-sub-title-redResponsive">
                            Por cada curso que finalices obtendrás un
                            certificado validado por el Ministerio de
                            Producción, Industria y Empleo de la provincia del
                            Chaco. Cada certificación es personalizada, con un
                            identificador único que sirve para verificar su
                            autenticidad.
                          </CardText>
                        </Row>
                      </Col>
                    </CardBody>
                  </Card>
                </CardGroup>
                <CardGroup>
                  <Card className="cardsecondContRed">
                    {/* <CardImg top width="100%" src={img1} alt="Card image cap" className="cardImgRed" /> */}
                    <CardBody className="d-flex no-block cardBodyRed">
                      <Col className="col-md-2">
                        <div className="m-r-20">
                          <img
                            src={img3}
                            width="55"
                            className="rounded"
                            alt="img"
                          />
                        </div>
                      </Col>
                      <Col
                        className={`${classes.tituloDesc}col-md-10 colDescripcionInfoResponsive`}
                      >
                        <Row className="justify-content-left">
                          <CardTitle
                            className="card-title-red  card-title-redResponsive"
                            tag="h5"
                          >
                            Tutorados
                          </CardTitle>
                          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                          <hr className="lineaCard lineaCard3  linaDescripcionREsponsiveCap" />
                          <CardText className="card-sub-title-red card-sub-title-redResponsive">
                            Tendrás el acompañamiento de una persona que te
                            facilitará el proceso de aprendizaje, guiándote en
                            el recorrido, y aclarando todas las dudas que
                            tengas.
                          </CardText>
                        </Row>
                      </Col>
                    </CardBody>
                  </Card>
                  <Card className="cardsecondContRed">
                    {/* <CardImg top width="100%" src={img1} alt="Card image cap" className="cardImgRed" /> */}
                    <CardBody className="d-flex no-block cardBodyRed">
                      <Col className="col-md-2">
                        <div className="m-r-20">
                          <img
                            src={img4}
                            width="55"
                            className="rounded"
                            alt="img"
                          />
                        </div>
                      </Col>
                      <Col
                        className={`${classes.tituloDesc}col-md-10 colDescripcionInfoResponsive`}
                      >
                        <Row className="justify-content-left">
                          <CardTitle
                            className="card-title-red card-title-redResponsive"
                            tag="h5"
                          >
                            Sin días ni horarios fijos
                          </CardTitle>
                          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                          <hr className="lineaCard lineaCard4  linaDescripcionREsponsiveCap" />
                          <CardText className="card-sub-title-red card-sub-title-redResponsive">
                            Podrás realizarlo manejando tus propios tiempos,
                            pero siempre tendrás objetivos semanales que
                            cumplir.
                          </CardText>
                        </Row>
                      </Col>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Container>
            </div>
            {cursosSlider.length > 0 && <Slider content={cursosSlider} />}
            {categoria === "categoria" ? (
              <CardCategorias
                cursosAndCategias={props.cursosAndCategias}
                changeCategory={(categ) => {
                  setCategoria(categ);
                }}
              />
            ) : (
              <CardCursos
                categoria={categoria}
                cursosAndCategias={props.cursosAndCategias}
              />
            )}
            <Cursosfuturos />
          </div>
        </div>
      </div>
      <div>
        <BlogComponent
          cardCursosInfo={props.cursosAndCategias.find(
            (object) => object.categoria === "Informatorio"
          )}
        />
        {/* <Footer3 /> */}
      </div>
    </div>
  );
};

CapacitacionesDemo.propTypes = {
  classes: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  titulo: {
    fontSize: "17px",
    lineHeight: "23px",
    fontWeight: "900",
    color: "black",
  },
  /*  contDescrip: {
    [theme.breakpoints.up("xl")]: {
      marginLeft: "0em",
    },
  }, */
  parrafoCursos: {
    lineHeight: "23px",
    fontWeight: "400",
    fontSize: "0.8rem",
  },
  /*  value         |0px     600px    960px    1280px   1920px
      key           |xs      sm       md       lg       xl
      screen width  |--------|--------|--------|--------|-------->
      range         |   xs   |   sm   |   md   |   lg   |   xl */
  imagenRowCenit: {
    justifyContent: "center",
    // portrait and landscape
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
    },
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      marginTop: "6rem",
    },
    // portrait and landscape
    [theme.breakpoints.only("sm")]: {
      marginTop: "-13%",
      marginBottom: "2rem",
    },
    [`${theme.breakpoints.only("sm")} and (orientation: landscape)`]: {
      marginTop: "8rem",
    },
    // portrait and landscape
    [theme.breakpoints.only("lg")]: {
      marginBottom: "5rem",
    },
    // portrait and landscape
    [theme.breakpoints.up("lg")]: {
      marginTop: "3rem",
      marginBottom: "5rem",
    },
  },
  containerPCapDemo: {
    [theme.breakpoints.down("sm")]: {
      /* padding: 25px 50px 75px 100px;
        top padding is 25px
        right padding is 50px
        bottom padding is 75px
        left padding is 100px */

      padding: "0px 2rem 0px 2rem",
    },
  },
  tituloDesc: {
    marginLeft: "0em!important",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "0em!important",
      textAlign: "left",
    },
  },
}));

export default CapacitacionesDemo;
