import React, { useState } from "react";

import PropTypes from "prop-types";
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
  Collapse,
} from "reactstrap";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBannerEmpresas from "../../components/banner/bannerEmpresas.jsx";
import Footer2 from "../../components/footer/footer2.jsx";

// secciones

import img3 from "../../informatorio/img/ico-1.png";
import img4 from "../../informatorio/img/ico-2.png";
import img5 from "../../informatorio/img/btn_2.png";
import img6 from "../../informatorio/img/ico-3.png";
import img7 from "../../informatorio/img/subrayado.png";
import img8 from "../../informatorio/img/p-1.svg";
import img9 from "../../informatorio/img/separador.png";
import img10 from "../../informatorio/img/btnInfoLet.png";
import img11 from "../../informatorio/img/p-2.svg";
import img12 from "../../informatorio/img/separador2.png";
import img13 from "../../informatorio/img/p-3.svg";
import img14 from "../../informatorio/img/separador2.png";
import img15 from "../../informatorio/img/p-4.svg";
import img16 from "../../informatorio/img/separador.png";
import img17 from "../../informatorio/img/subrayado.png";
import img18 from "../../informatorio/img/fondoResultados.png";
import img19 from "../../informatorio/img/chaco2.png";
import img20 from "../../informatorio/img/subrayado.png";
import img21 from "../../informatorio/img/insta.png";
import img22 from "../../informatorio/img/facebook.png";
import img23 from "../../informatorio/img/logo-fut.png";
import img24 from "../../informatorio/img/utn.png";
import img25 from "../../informatorio/img/uncaus.png";
import img26 from "../../informatorio/img/globant.png";
import img27 from "../../informatorio/img/poloit.png";
import img28 from "../../informatorio/img/empleo.png";
import img29 from "../../informatorio/img/produccion.png";
import img30 from "../../informatorio/img/chacogob.png";
import img31 from "../../informatorio/img/insta.png";
import img32 from "../../informatorio/img/facebook.png";
import img33 from "../../informatorio/img/logo-fut.png";
import img34 from "../../informatorio/img/utn.png";
import img35 from "../../informatorio/img/uncaus.png";
import img36 from "../../informatorio/img/globant.png";
import img37 from "../../informatorio/img/poloit.png";
import img38 from "../../informatorio/img/empleo.png";
import img39 from "../../informatorio/img/produccion.png";
import img40 from "../../informatorio/img/chacogob.png";

import img41 from "../../assets/images/oficios/flechaDer.svg";
import img42 from "../../assets/images/oficios/flachaIzq.svg";
import img43 from "../../informatorio/img/RectánguloVideo.png";

import "../../informatorio/css/styles.css";

const Informatorio = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const classes = useStyles();

  return (
    <div>
      <Header />

      <div className="container-fluid empleoHeight">
        {/* <div  className="spacer-Header"></div> */}
        <div>
          <div className="informatorio">
            <section className="home d-flex align-items-center">
              <div className="container">
                <div className="col-md-12">
                  <div className="text-home">
                    <h2 className="h2Informatorio">
                      <strong>Lo mejor de estudiar</strong>
                      <br />
                      un curso del futuro
                      <br />
                      es encontrar un
                      <br />
                      <strong>trabajo en el presente</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </section>
            <section className="botones">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="ico">
                      <img src={img3} alt="" />
                    </div>
                    <h4 className="tituloInfoIngresar">
                      INSCRIPCIONES ABIERTAS
                      <br />
                      lntroducción a la Programación
                    </h4>
                  </div>
                  <div className="col-md-4 bg-primary">
                    <div className="ico">
                      <img src={img4} alt="" />
                    </div>
                    <a
                      className="linkRedirecciones"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeoQZDA6kK-4qI-32Egn_Lo__IUME0crib8S2JaAFOFKOxOnQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="card-reqBoton card-reqBotonInform">
                        <CardBody className="card-body-reqBtn card-body-reqBtnInfor">
                          <Col>
                            <span
                              to="/informatorio"
                              className="img-ho cont-img cont-img1BtnCap"
                            >
                              <img
                                src={img41}
                                alt="img"
                                className="img-responsive img-thumbnail img-redireccionesBtn img-redireccionesBtnInform"
                                width="200"
                              />
                            </span>
                            <Col
                              className={`${classes.TextoCol} colbtnBtnEmpleo`}
                            >
                              <h5
                                className={`${classes.TextoBoton} font-medium m-b-0 tituloBtnSP titulo-requerimientosBtn titulo-requerimientosBtnInform`}
                              >
                                quiero inscribirme
                              </h5>
                            </Col>
                            <span
                              to="/informatorio"
                              className="img-ho cont-img cont-img2Btn"
                            >
                              <img
                                src={img42}
                                alt="img"
                                className={`${classes.TextoImg} img-responsive img-thumbnail img-redireccionesBtn2 img-redireccionesBtnInform2`}
                                width="200"
                              />
                            </span>
                          </Col>
                        </CardBody>
                      </Card>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <div className="ico">
                      <img src={img6} alt="" />
                    </div>
                    <h4 className="tituloInfoIngresar">
                      Tenés tiempo para completar hasta el
                      <br />
                      31/07 inclusive
                    </h4>
                  </div>
                </div>
              </div>
            </section>
            <section className="ques d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h2>¿Qué es el Informatorio?</h2>
                    <div className="subrayado">
                      <img src={img7} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                  <div className="w-100"></div>
                  <div className="col-md-6">
                    <div className="txt">
                      <p>
                        Es un programa creado para que chaqueñas y chaqueños
                        tengan más y mejores oportunidades de incorporarse a la
                        economía del conocimiento, especíﬁcamente en el sector
                        de Software y Servicios Informáticos a través de la
                        formación en programación. Se trata de un espacio de
                        aprendizaje práctico, con clases innovadoras y
                        creativas, que persiguen la inclusión social, digital y
                        laboral a través del empleo en empresas de la industria
                        del software, o iniciando sus propios emprendimientos de
                        base tecnológica.
                      </p>
                      <p>
                        Es un programa del Gobierno del Chaco que se implementa
                        desde el año 2012, llevado adelante por la Subsecretaría
                        de Empleo, dependiente del Ministerio de Producción,
                        Industria y Empleo, trabajando en conjunto con las
                        empresas del Polo IT Chaco, Globant, la UTN-FRRe y la
                        UNCAUS.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="video">
                      <img className="img-fluid imgFondo" src={img43} alt="" />
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                          src="https://www.youtube.com/watch?v=pPnEqtnaLmQ"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="cursos">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="tit-cursos">Cursos del Informatorio</div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="paso-1">
                      <div className="paso-head">
                        <img className="p1" src={img8} alt="" />
                      </div>
                      <div className="paso-tit">
                        Introducción a la Programación
                      </div>
                      <div className="paso-p">
                        Para conocer de qué se trata el mundo de la programación
                        e iniciarte en sus lenguajes, darás tus primeros pasos
                        en Gobstones y JavaScript. La 2da edición 2021 de este
                        curso se realizará del 05/08 al 05/09, y tenés plazo
                        para inscribirte hasta el 31/07 inclusive.
                      </div>
                      <div className="linea">
                        <img className="img-fluid" src={img9} alt="" />
                      </div>
                      <ul className="pas">
                        <li className="modalio">Modalidad: Online</li>
                        <li className="dura">Duración: 1 mes</li>
                        <li className="requi">
                          Requisitos:
                          <br />
                          - Ser mayor de edad.
                          <br />- Residir en Chaco.
                        </li>
                      </ul>
                      <a
                        className="linkRedirecciones"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeoQZDA6kK-4qI-32Egn_Lo__IUME0crib8S2JaAFOFKOxOnQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Card className="card-reqBoton card-reqBotonInform card-reqBotonInformResponsive">
                          <CardBody className="card-body-reqBtn card-body-reqBtnInfor">
                            <Col>
                              <span
                                to="/informatorio"
                                className="img-ho cont-img cont-img1BtnCap"
                              >
                                <img
                                  src={img41}
                                  alt="img"
                                  className="img-responsive img-thumbnail img-redireccionesBtn img-redireccionesBtnInform img-redireccionesBtnInscribirme"
                                  width="200"
                                />
                              </span>
                              <Col
                                className={`${classes.TextoCol} colbtnBtnEmpleo colbtnBtnInscribirm`}
                              >
                                <h5
                                  className={`${classes.TextoBoton} font-medium m-b-0 tituloBtnSP titulo-requerimientosBtn titulo-requerimientosBtnInform`}
                                >
                                  quiero inscribirme
                                </h5>
                              </Col>
                              <span
                                to="/informatorio"
                                className="img-ho cont-img cont-img2Btn"
                              >
                                <img
                                  src={img42}
                                  alt="img"
                                  className={`${classes.TextoImg} img-responsive img-thumbnail img-redireccionesBtn2 img-redireccionesBtnInform2 img-redireccionesBtnInform2Responsive`}
                                  width="200"
                                />
                              </span>
                            </Col>
                          </CardBody>
                        </Card>
                      </a>{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="paso-2">
                      <div className="paso-head">
                        <img className="p2" src={img11} alt="" />
                      </div>
                      <div className="paso-tit">
                        Programación y Desarrollo Web
                      </div>
                      <div className="paso-p">
                        Podrás profundizar en herramientas básicas para
                        desarrollar aplicaciones web con bases de datos, y
                        adquirir conocimientos que te permitan seguir
                        construyendo tu perﬁl profesional para el sector
                        Software y Servicios Informáticos.
                      </div>
                      <div className="linea">
                        <img className="img-fluid" src={img12} alt="" />
                      </div>
                      <ul className="pas">
                        <li className="modalio">Modalidad: Online</li>
                        <li className="dura">Duración: 4 meses</li>
                        <li className="requi">
                          Requisitos:
                          <br />
                          - Haber aprobado curso de Introducción a la
                          Programación. <br />- Residir en Chaco
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-100">
                    <hr className="visible-mobile" />
                  </div>
                  <div className="col-md-6">
                    <div className="paso-1">
                      <div className="paso-head">
                        <img className="p3" src={img13} alt="" />
                      </div>
                      <div className="paso-tit">
                        Especialización en Lenguajes de Programación
                      </div>
                      <div className="paso-p">
                        Podrás continuar con tu perfeccionamiento en lenguajes
                        especíﬁcos, y orientar tu fomación hacia los perﬁles
                        laborales requeridos por las empresas locales.
                      </div>
                      <div className="linea">
                        <img className="img-fluid" src={img14} alt="" />
                      </div>
                      <ul className="pas">
                        <li className="modalis">Modalidad: Online</li>
                        <li className="dura">
                          Duración: 4 meses, (dependiendo de la temática)
                        </li>
                        <li className="requi">
                          Requisitos: <br />- Haber aprobado curso Programación
                          y Desarrollo Web. <br />- Residir en Chaco.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="paso-2">
                      <div className="paso-head">
                        <img className="p4" src={img15} alt="" />
                      </div>
                      <div className="paso-tit">
                        Talleres para Emprender en TICs
                      </div>
                      <div className="paso-p">
                        Adquirirás herramientas que te permitan iniciar un
                        emprendimiento vinculado a las TICs, y podrás acceder a
                        ﬁnanciamiento para su puesta en marcha al ﬁnalizar el
                        ciclo.
                      </div>
                      <div className="linea">
                        <img className="img-fluid" src={img16} alt="" />
                      </div>
                      <ul className="pas">
                        <li className="modalis">Modalidad: Semipresencial</li>
                        <li className="dura">Duración: 2 meses</li>
                        <li className="requi">
                          Requisitos: <br />- Haber aprobado curso Programación
                          y Desarrollo Web. <br />- Residir en Chaco.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tit-cursos2"></div>
            </section>
            <section
              className={`${classes.resutadosJs} resultados d-flex align-items-end`}
            >
              <div className="container containerResutlados">
                <div className="row">
                  <div className="col-md-6">
                    {/* <h2>Resultados</h2>
                    <div className="subrayado">
                      <img src={img17} alt="" />
                    </div> */}
                  </div>
                  <div className="col-md-6"></div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-5">
                    <img className="img-fluid" src={img18} alt="" />
                  </div>
                  {/* <div className="col-md-6">
                                            <img className="img-fluid" src={img19} alt="" />
                                        </div> */}
                </div>
              </div>
            </section>
            <section className="preguntas">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h2>Preguntas Frecuentes</h2>
                    <div className="subrayado">
                      <img src={img20} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                  <div className="w-100"></div>
                  <div className="col-12">
                    <div className="accordion" id="preguntasFrecuentes">
                      {/* <div className="card">
                                                    <div className="card-header" id="pregunta1">
                                                        <h2 className="mb-0">
                                                            <Button className="btn btn-link btn-block text-left" onClick={toggle}>
                                                                ¿Los cursos tienen algún costo o arancel?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen={isOpen}>
                                                    <div id="respuesta1" className="collapse show" aria-labelledby="pregunta1" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            Todos los cursos del Informatorio son y serán siempre gratuitos, porque es una política del Gobierno Provincial que busca formar a chaqueños y chaqueñas en programación, para potenciar la industria del software y servicios informáticos.
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                      <div className={classes.root}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className={classes.heading}>
                              {" "}
                              ¿Los cursos tienen algún costo o arancel?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Todos los cursos del Informatorio son y serán
                              siempre gratuitos, porque es una política del
                              Gobierno Provincial que busca formar a chaqueños y
                              chaqueñas en programación, para potenciar la
                              industria del software y servicios informáticos.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography className={classes.heading}>
                              ¿Al ﬁnalizar el cursado obtengo algún certiﬁcado?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Sí, por cada curso/taller que realices y finalices
                              satisfactoriamente obtendrás un certificado que
                              valide tus conocimientos.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* <div className="card">
                                                    <div className="card-header" id="pregunta2">
                                                        <h2 className="mb-0">
                                                            <Button  className="btn btn-link btn-block text-left collapsed"  onClick={toggle2}>
                                                                ¿Al ﬁnalizar el cursado obtengo algún certiﬁcado?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen2={isOpen2}>
                                                    <div id="respuesta2" className="collapse" aria-labelledby="pregunta2" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            Sí, por cada curso/taller que realices y finalices satisfactoriamente obtendrás un certificado que valide tus conocimientos. 
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                          >
                            <Typography className={classes.heading}>
                              ¿Qué requisitos se exigen para participar del
                              Informatorio?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Para participar de los cursos del Informatorio
                              sólo es necesario que residas en la provincia del
                              Chaco y que tengas 18 años o más al momento de
                              iniciar el curso.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* <div className="card">
                                                    <div className="card-header" id="pregunta3">
                                                        <h2 className="mb-0">
                                                            <Button className="btn btn-link btn-block text-left collapsed" onClick={toggle}>
                                                                ¿Qué requisitos se exigen para participar del Informatorio?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen={isOpen}>
                                                    <div id="respuesta3" className="collapse" aria-labelledby="pregunta3" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            Para participar de los cursos del Informatorio sólo es necesario que residas en la provincia del Chaco y que tengas 18 años o más al momento de iniciar el curso. 
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                          >
                            <Typography className={classes.heading}>
                              ¿Se requieren conocimientos previos para
                              participar?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              No es un requisito. Los contenidos del
                              Informatorio están diseñado tanto para quienes se
                              acercan a la programación por primera vez como
                              también para quienes tienen conocimientos en el
                              tema, ya que los cursos van de lo más simple a lo
                              más complejo. Esto no significa que será fácil,
                              tendrás que dedicarle tiempo y empeño.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* <div className="card">
                                                    <div className="card-header" id="pregunta4">
                                                        <h2 className="mb-0">
                                                            <Button className="btn btn-link btn-block text-left collapsed" onClick={toggle}>
                                                                ¿Se requieren conocimientos previos para participar?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen={isOpen}>
                                                    <div id="respuesta4" className="collapse" aria-labelledby="pregunta4" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            No es un requisito. Los contenidos del Informatorio están diseñado tanto para quienes se acercan a la programación por primera vez como también para quienes tienen conocimientos en el tema, ya que los cursos van de lo más simple a lo más complejo. Esto no significa que será fácil, tendrás que dedicarle tiempo y empeño.
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5a-content"
                            id="panel5a-header"
                          >
                            <Typography className={classes.heading}>
                              ¿Puedo inscribirme si estoy cursando una carrera
                              universitaria o terciaria?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              No existe impedimento alguno. Los cursos del
                              Informatorio son complementarios con cualquier
                              carrera terciaria o universitaria. Sin embargo,
                              tenés que considerar que el Informatorio al ser un
                              curso intensivo, requerirá que le dediques mucho
                              tiempo.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* <div className="card">
                                                    <div className="card-header" id="pregunta5">
                                                        <h2 className="mb-0">
                                                            <Button className="btn btn-link btn-block text-left collapsed" onClick={toggle}>
                                                                ¿Puedo inscribirme si estoy cursando una carrera universitaria o terciaria?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen={isOpen}>
                                                    <div id="respuesta5" className="collapse" aria-labelledby="pregunta5" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            No existe impedimento alguno. Los cursos del Informatorio son complementarios con cualquier carrera terciaria o universitaria. Sin embargo, tenés que considerar que el Informatorio al ser un curso intensivo, requerirá que le dediques mucho tiempo. 
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel6a-content"
                            id="panel6a-header"
                          >
                            <Typography className={classes.heading}>
                              ¿Los cursos del Informatorio me sirven para
                              reparar computadoras?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              No. En los cursos del Informatorio aprenderás a
                              manejar herramientas necesarias para desempeñarte
                              como programador o programadora en la industria
                              local. Estos cursos no abarcan conceptos
                              relacionados a reparación de PC o cualquier otro
                              dispositivo electrónico.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* <div className="card">
                                                    <div className="card-header" id="pregunta6">
                                                        <h2 className="mb-0">
                                                            <Button className="btn btn-link btn-block text-left collapsed" onClick={toggle}>
                                                                ¿Los cursos del Informatorio me sirven para reparar computadoras?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen={isOpen}>
                                                    <div id="respuesta6" className="collapse" aria-labelledby="pregunta6" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            No. En los cursos del Informatorio aprenderás a manejar herramientas necesarias para desempeñarte como programador o programadora en la industria local. Estos cursos no abarcan conceptos relacionados a reparación de PC o cualquier otro dispositivo electrónico. 
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel7a-content"
                            id="panel7a-header"
                          >
                            <Typography className={classes.heading}>
                              ¿Qué cursos tienen inscripción abierta?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              El recorrido que proponemos se inicia con el curso
                              Introducción a la Programación, cuya inscripción
                              estará abierta desde el 20/02/2021 hasta el
                              05/03/2021, y su cursado se realizará de manera
                              online del 10/03/2021 al 10/04/2021.{" "}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* <div className="card">
                                                    <div className="card-header" id="pregunta7">
                                                        <h2 className="mb-0">
                                                            <Button className="btn btn-link btn-block text-left collapsed" onClick={toggle}>
                                                                ¿Qué cursos tienen inscripción abierta?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen={isOpen}>
                                                    <div id="respuesta7" className="collapse" aria-labelledby="pregunta7" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            El recorrido que proponemos se inicia con el curso Introducción a la Programación, cuya inscripción estará abierta desde el 1 al 20 de julio de 2020, y su cursado se realizará de manera online durante el mes de agosto.
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel8a-content"
                            id="panel8a-header"
                          >
                            <Typography className={classes.heading}>
                              ¿Qué necesito para hacer el curso de Introducción
                              a la programación?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Debés contar con un dispositivo con acceso a
                              internet, ya que la capacitación es a través de
                              una plataforma educativa online.{" "}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* <div className="card">
                                                    <div className="card-header" id="pregunta8">
                                                        <h2 className="mb-0">
                                                            <Button className="btn btn-link btn-block text-left collapsed" onClick={toggle}>
                                                                ¿Qué necesito para hacer el curso de Introducción a la programación?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen={isOpen}>
                                                    <div id="respuesta8" className="collapse" aria-labelledby="pregunta8" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            Debés contar con un dispositivo con acceso a internet, ya que la capacitación es a través de una plataforma educativa online. 
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel9a-content"
                            id="panel9a-header"
                          >
                            <Typography className={classes.heading}>
                              ¿Cómo me inscribo al curso Introducción a la
                              programación?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Debés completar el formulario online con todos los
                              datos requeridos, luego iniciar sesión en la
                              plataforma con los datos que recibirás por correo,
                              y completar los ejercicios propuestos; al
                              finalizarlos habrás terminado el proceso de
                              inscripción.{" "}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* <div className="card">
                                                    <div className="card-header" id="pregunta9">
                                                        <h2 className="mb-0">
                                                            <Button className="btn btn-link btn-block text-left collapsed" onClick={toggle}>
                                                                ¿Cómo me inscribo al curso Introducción a la programación?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen={isOpen}>
                                                    <div id="respuesta9" className="collapse" aria-labelledby="pregunta9" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            Debés completar el formulario online con todos los datos requeridos, y tener en cuenta que la inscripción se confirma con el envío de dos archivos: imagen de tu DNI y un video de presentación personal o carta de motivación.
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel10a-content"
                            id="panel10a-header"
                          >
                            <Typography className={classes.heading}>
                              {" "}
                              Ingresé mal los datos en el formulario, ¿cómo hago
                              para cambiarlo?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Comunicate con nosotros a través del{" "}
                              <strong>
                                <a href="mailto:informatorio@chaco.gob.ar">
                                  correo
                                </a>
                                ,
                              </strong>{" "}
                              con el asunto “SOLICITUD DE CAMBIO DE DATOS” y
                              contanos cuáles son los datos que necesitas
                              modificar.{" "}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* <div className="card">
                                                    <div className="card-header" id="pregunta10">
                                                        <h2 className="mb-0">
                                                            <Button className="btn btn-link btn-block text-left collapsed" onClick={toggle}>
                                                                Ingresé mal los datos en el formulario, ¿cómo hago para cambiarlo?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen={isOpen}>
                                                    <div id="respuesta10" className="collapse" aria-labelledby="pregunta10" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            Comunicate con nosotros a través del <strong><a href="mailto:informatorio@chaco.gob.ar">correo</a>,</strong> con el asunto “SOLICITUD DE CAMBIO DE DATOS” y contanos cuáles son los datos que necesitas modificar.
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel11a-content"
                            id="panel11a-header"
                          >
                            <Typography className={classes.heading}>
                              ¿Puedo inscribirme a cualquier curso durante el
                              período de inscripción?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              No, los cursos del Informatorio están diseñados
                              por etapas correlativas. Es necesario aprobar el
                              curso de “Introducción a la Programación” para
                              luego poder cursar “Programación y Desarrollo
                              Web”, y aprobar este último para iniciar los
                              “Talleres de Especialización en Lenguajes de
                              Programación” o el “Taller para Emprender en
                              TICs”.{" "}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* <div className="card">
                                                    <div className="card-header" id="pregunta11">
                                                        <h2 className="mb-0">
                                                            <Button className="btn btn-link btn-block text-left collapsed" onClick={toggle}>
                                                                ¿Puedo inscribirme a cualquier curso durante el período de inscripción?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen={isOpen}>
                                                    <div id="respuesta11" className="collapse" aria-labelledby="pregunta11" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            No, los cursos del Informatorio están diseñados por etapas correlativas. Es necesario aprobar el curso de “Introducción a la Programación” para luego poder cursar “Programación y Desarrollo Web”, y aprobar este último para iniciar los “Talleres de Especialización en Lenguajes de Programación” o el “Taller para Emprender en TICs”.
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel12a-content"
                            id="panel12a-header"
                          >
                            <Typography className={classes.heading}>
                              ¿Cuánto tiempo tendré que dedicarle al curso de
                              Introducción a la Programación?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              El curso de Introducción a la Programación tiene
                              una duración de un mes, con una carga semanal de
                              12 hs que deberás dedicarle. Lógicamente el tiempo
                              podrá ser menor o mayor dependiendo de si tenés o
                              no conocimientos previos y de qué tan rápido le
                              agarres la mano.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                      {/* <div className="card">
                                                    <div className="card-header" id="pregunta12">
                                                        <h2 className="mb-0">
                                                            <Button className="btn btn-link btn-block text-left collapsed" onClick={toggle}>
                                                                ¿Cuánto tiempo tendré que dedicarle al curso de Introducción a la Programación?
                                                            </Button>
                                                        </h2>
                                                    </div>
                                                    <Collapse isOpen={isOpen}>
                                                    <div id="respuesta12" className="collapse" aria-labelledby="pregunta12" data-parent="#preguntasFrecuentes">
                                                        <div className="card-body">
                                                            El curso de Introducción a la Programación se realizará durante todo el mes de agosto, y  tiene una duración total de 50 hs. Por lo tanto, tendrás que dedicarle no menos de 12 hs semanales. Lógicamente el tiempo podrá ser menor o mayor dependiendo de si tenés o no conocimientos previos y de qué tan rápido le agarres la mano.
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`${classes.footJs} foot d-flex align-items-end`}
            >
              <div className="container">
                <div className="row">
                  {/*<!-- desktop -->*/}
                  <div className="col visible-mobile">
                    <div className="redes d-flex justify-content-center">
                      <span className="red">
                        <a
                          href=" https://www.instagram.com/empleochaco/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img width="48" src={img21} alt="" />
                        </a>
                      </span>
                      <span className="red">
                        <a
                          href="https://web.facebook.com/empleochaco"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img width="24" src={img22} alt="" />
                        </a>
                      </span>
                    </div>
                    <div className="logo-informatorio">
                      <span>
                        <img className="log" src={img23} alt="" />
                      </span>
                    </div>
                    <div className="los-cumpa">
                      <h4>ACOMPAÑAN:</h4>
                      <div className="d-flex justify-content-around">
                        <span>
                          <img src={img24} alt="" />
                        </span>
                        <span>
                          <img width="100" src={img25} alt="" />
                        </span>
                        <span>
                          <img width="100" src={img26} alt="" />
                        </span>
                        <span>
                          <img width="100" src={img27} alt="" />
                        </span>
                      </div>
                    </div>
                    <div className="gobierno d-flex justify-content-between">
                      <span>
                        <img width="150" src={img28} alt="" />
                      </span>
                      <span>
                        <img width="320" src={img29} alt="" />
                      </span>
                      <span>
                        <img width="150" src={img30} alt="" />
                      </span>
                    </div>
                  </div>
                  {/*<!-- Mobile -->*/}
                  <div className="col visible-desktop">
                    <div className="redes d-flex justify-content-center">
                      <span className="red">
                        <img width="24" src={img31} alt="" />
                      </span>
                      <span className="red">
                        <img width="12" src={img32} alt="" />
                      </span>
                    </div>
                    <div className="logo-informatorio">
                      <span>
                        <img className="log" src={img33} alt="" />
                      </span>
                    </div>
                    <div className="los-cumpa">
                      <h4>ACOMPAÑAN:</h4>
                      <div
                        className={`${classes.colLogosSp} d-flex justify-content-around`}
                      >
                        <span>
                          <img width="70" src={img34} alt="" />
                        </span>
                        <span>
                          <img width="70" src={img35} alt="" />
                        </span>
                        <span>
                          <img width="70" src={img36} alt="" />
                        </span>
                        <span>
                          <img width="70" src={img37} alt="" />
                        </span>
                      </div>
                    </div>
                    <div
                      className={`${classes.colLogosSp} d-flex justify-content-around`}
                    >
                      <span>
                        <img width="100" src={img38} alt="" />
                      </span>
                      <span>
                        <img width="200" src={img39} alt="" />
                      </span>
                      <span>
                        <img width="100" src={img40} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Optional JavaScript -->
		<!-- jQuery first, then Popper.js, then Bootstrap JS --> */}
            <script
              src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
              integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
              integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
              integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
              crossOrigin="anonymous"
            ></script>
          </div>
        </div>
      </div>
      {/* <Footer2 />  */}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
  },
  TextoBoton: {
    lineHeight: "17px",
    fontSize: "14px !important",
  },
  TextoCol: {
    marginTop: "3em",
  },
  TextoImg: {
    marginTop: "-10%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-10% !important",
    },
  },
  resutadosJs: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "0%",
    },
  },
  colLogosSp: {
    [theme.breakpoints.down("sm")]: {
      display: "flex!important",
      flexDirection: "column",
      lineHeight: "2.2em",
    },
  },
  footJs: {
    [theme.breakpoints.down("sm")]: {
      height: "80vh",
    },
  },
}));

Informatorio.propTypes = {
  classes: PropTypes.object,
};

export default Informatorio;
