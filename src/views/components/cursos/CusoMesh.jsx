import React, { useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Container, Row, Col, Form } from "reactstrap";
// core components
import HeaderCapacitaciones from "../../../components/header/headerCapacitaciones";
import HeaderBannerCursos from "../../../components/banner/headerBannerCursos";

import Footer2 from "../../../components/footer/footer2.jsx";
// import CardCursos from "../../custom-components/sections/cardCursos";

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

import img1 from "../../../assets/images/cursos/btnDuracion.png";
import img2 from "../../../assets/images/cursos/btnSemanas.png";
import img3 from "../../../assets/images/cursos/btnGratuito.png";
import img4 from "../../../assets/images/cursos/btnCertificado.png";
//import banner from '../../../assets/images/form-banners/banner1/banner-img.png';
import banner from "../../../assets/images/cursos/imagenPrimConten.png";

// se cambia por llamad api cunado tengamos back
//import { cursosAndCategias } from '../cursos/cursosAndCategias';

//Material UI
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

//import img5 from '../../assets/images/oficios/flechaDer.svg';
// import img6 from '../../assets/images/oficios/flachaIzq.svg';
// import img7 from '../../assets/images/capacitaciones/logo_membrete.png';

import { Helmet } from "react-helmet";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

import { SocialIcon } from "react-social-icons";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";

import UserService from "../../../services/UserService";
import Swal from "sweetalert2";

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

const Curso4 = (props) => {
  window.scrollTo(0, 0);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const classes = useStyles();

  //Dialog Form para quiero que me avisen
  const [open, setOpen] = React.useState(false);
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [dni, setDni] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();

  const [curso, setCurso] = useState({
    ...props.curso,
    categoria: props.categoria,
    semanas: props.curso.contenido.length,
    fechaInscrpcion: checkDate(props.curso.fechaInscrpcion),
  });

  const handlerEnviar = () => {
    const body = {
      nombre: nombre,
      nombreCurso: curso.nombre,
      apellido: apellido,
      dni: dni,
      email: email,
      estado: 1,
      tel: tel,
    };

    UserService.sendMailsInscripcion(body).then(
      (data) => {
        if (data.status === "sent") {
          setOpen(false);
          Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Gracias, te avisaremos por correo electrónico cuando abran las inscripciones a este curso",
            footer: "",
          });
        } else if (data.status === "failed") {
          setOpen(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal intenta de nuevo",
            footer: "",
          });
        }
      },
      (error) => {
        alert("Error Envio");
        console.log(" ==> error", error);
        console.log("error", error);
      }
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="page-wrapper page-wrapperCursos">
      <Helmet>
        <meta property="og:url" content="https://empleo.chaco.gob.ar" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={curso.nombre} />
        <meta property="og:description" content={curso.descripcionLarga} />
        <meta
          property="og:image"
          content={`https://empleo.chaco.gob.ar/card/cursosimg/${curso.imgUrl}.png`}
        />
      </Helmet>

      <HeaderCapacitaciones />
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="containerEscritorioCursosHidden">
            <section>
              <div className="BannerPContenedorEsc">
                {/*  title and share secioon*/}
                <Row>
                  <Col lg="7" md="7" className="px-0">
                    <div className={classes.cursoTituiloContainer}>
                      <h2 className={classes.cursoTituiloText}>
                        {curso.nombre}
                      </h2>
                    </div>
                  </Col>
                  <Col
                    lg="5"
                    md="5"
                    className="px-0"
                    className={classes.shareContainer}
                  >
                    <div className={classes.shareSeccion}>
                      <h4 className={classes.shareTitle}>Compartir</h4>
                      <a>
                        <FacebookShareButton
                          url={`/capacitaciones/${curso.nombre
                            .replace(/([a-z])([A-Z])/g, "$1-$2")
                            .replace(/\s+/g, "-")
                            .replace(/\¿/g, "")
                            .replace(/-–-/g, "-")}`}
                          className="Demo__some-network__share-button Demo__some-network__share-buttonPadding"
                        >
                          <SocialIcon
                            style={{
                              height: 35,
                              width: 35,
                              marginTop: -9.5,
                              padding: 2,
                            }}
                            network="facebook"
                            bgColor="#01B7E8"
                            fgColor="white"
                          />
                        </FacebookShareButton>
                      </a>

                      <a>
                        <TwitterShareButton
                          url={`/capacitaciones/${curso.nombre
                            .replace(/([a-z])([A-Z])/g, "$1-$2")
                            .replace(/\s+/g, "-")
                            .replace(/\¿/g, "")
                            .replace(/-–-/g, "-")}`}
                          className="Demo__some-network__share-button Demo__some-network__share-buttonPadding"
                          target_blank
                        >
                          <SocialIcon
                            style={{
                              height: 35,
                              width: 35,
                              marginTop: -9.5,
                              padding: 2,
                            }}
                            network="twitter"
                            bgColor="#01B7E8"
                            fgColor="white"
                          />
                        </TwitterShareButton>
                      </a>

                      <a target="_blank" rel="noopener noreferrer">
                        <WhatsappShareButton
                          url={`/capacitaciones/${curso.nombre
                            .replace(/([a-z])([A-Z])/g, "$1-$2")
                            .replace(/\s+/g, "-")
                            .replace(/\¿/g, "")
                            .replace(/-–-/g, "-")}`}
                          className="Demo__some-network__share-button Demo__some-network__share-buttonPadding "
                        >
                          <SocialIcon
                            style={{
                              height: 35,
                              width: 35,
                              marginTop: -9.5,
                              padding: 2,
                            }}
                            network="whatsapp"
                            bgColor="#01B7E8"
                            fgColor="white"
                          />
                        </WhatsappShareButton>
                      </a>
                      <a target="_blank" rel="noopener noreferrer">
                        <LinkedinShareButton
                          url={`/capacitaciones/${curso.nombre
                            .replace(/([a-z])([A-Z])/g, "$1-$2")
                            .replace(/\s+/g, "-")
                            .replace(/\¿/g, "")
                            .replace(/-–-/g, "-")}`}
                          className="Demo__some-network__share-button Demo__some-network__share-buttonPadding "
                        >
                          <SocialIcon
                            style={{
                              height: 35,
                              width: 35,
                              marginTop: -9.5,
                              padding: 2,
                            }}
                            network="linkedin"
                            bgColor="#01B7E8"
                            fgColor="white"
                          />
                        </LinkedinShareButton>
                      </a>
                    </div>
                  </Col>
                </Row>
                {/* description */}
                <Container>
                  <Row>
                    <Col lg="8" md="8" className="px-0"></Col>
                    <Col lg="4" md="4" className="px-0">
                      <div className={classes.Especifi}></div>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      lg="7"
                      md="7"
                      className="align-self-center colCursosInfo"
                    >
                      <p
                        className={`${classes.textoCurso} m-t-40 m-b-30 rowSecondParrafoLight"`}
                      >
                        {curso.descripcionLarga.map((text) => (
                          <>
                            {text} <br />
                          </>
                        ))}
                      </p>
                      <p className="m-t-40 m-b-30">
                        {curso.requerimientos.length > 0 && (
                          <>
                            <strong>Para cursarlo necesitarás:</strong> <br />
                          </>
                        )}
                        {curso.requerimientos.map((text) => (
                          <>
                            {text} <br />
                          </>
                        ))}
                      </p>
                      <p
                        className={`${classes.textoCurso} m-t-40 m-b-30 rowSecondParrafoLight"`}
                      >
                        ¡Aprovechalo!
                      </p>
                    </Col>
                    <Col
                      lg="5"
                      md="5"
                      className="align-self-center ml-auto  backImagenSeconCont"
                    >
                      <div>
                        {curso.especificaciones[0] != undefined && (
                          <CardBody className="d-flex no-block cardEspecificacionesResponsive cardEspecificacionesEscritorio">
                            <div className="m-r-20 contenedorImgEspecificaciones">
                              {" "}
                              <img
                                src={img1}
                                width="70"
                                className="rounded imagenEspecificacionesEscritorio"
                                alt="img"
                              />
                            </div>
                            <div>
                              <h6 className="font-medium textoEspe textoEspeEscritorio">
                                {curso.especificaciones[0]}
                              </h6>
                            </div>
                          </CardBody>
                        )}

                        {curso.especificaciones[1] != undefined && (
                          <CardBody className="d-flex no-block cardEspecificacionesResponsive cardEspecificacionesEscritorio">
                            <div className="m-r-20 contenedorImgEspecificaciones">
                              {" "}
                              <img
                                src={img2}
                                width="70"
                                className="rounded imagenEspecificacionesEscritorio"
                                alt="img"
                              />
                            </div>
                            <div>
                              <h6 className="font-medium textoEspe textoEspeEscritorio">
                                {curso.especificaciones[1]}
                              </h6>
                            </div>
                          </CardBody>
                        )}

                        <CardBody className="d-flex no-block cardEspecificacionesResponsive cardEspecificacionesEscritorio">
                          <div className="m-r-20 contenedorImgEspecificaciones">
                            {" "}
                            <img
                              src={img3}
                              width="70"
                              className="rounded imagenEspecificacionesEscritorio"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h6 className="font-medium textoEspe textoEspeEscritorio">
                              GRATUITO
                            </h6>
                          </div>
                        </CardBody>
                        <CardBody className="d-flex no-block cardEspecificacionesResponsive cardEspecificacionesEscritorio">
                          <div className="m-r-20 contenedorImgEspecificaciones">
                            {" "}
                            <img
                              src={img4}
                              width="70"
                              className="rounded imagenEspecificacionesEscritorio"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h6 className="font-medium textoEspe textoEspeEscritorio">
                              CERTIFICADO
                            </h6>
                          </div>
                        </CardBody>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="8" md="8" className="px-0"></Col>
                    <Col lg="4" md="4" className="px-0">
                      <div className={classes.Especifi}></div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </section>
            <section>
              <Container>
                <Row className="justify-content-left marginRowCursos">
                  {curso.semanas != 0 && (
                    <h1 className="text-left tituloCotnenidoCursos">
                      Contenido
                    </h1>
                  )}
                </Row>
              </Container>
              <Container className="containerSemanasEscritorio">
                <div className={classes.root}>
                  {curso.semanas >= 1 && (
                    <Accordion className={classes.acordeonEscritorio}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ height: "3em" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "55%",
                            position: "relative",
                            zIndex: 2,
                            borderRadius: "20em",
                            height: "3em",
                            marginLeft: "-1em",
                          }}
                        >
                          <span className="tituloCardCursosEscritorio">
                            {curso.tipo}{" "}
                            <stronger className="numeroContenidoEscritorio">
                              1
                            </stronger>
                          </span>
                        </div>
                        <Typography className={classes.heading}> </Typography>
                      </AccordionSummary>
                      <AccordionDetails className={classes.acordionDetails}>
                        <Row>
                          <Typography
                            className={classes.tituloAcordeonEscritorio}
                          >
                            {curso.contenidoTitulo[0]}
                          </Typography>
                        </Row>

                        <Row>
                          <Typography
                            className={classes.parrafoAcordeonEscritorio}
                          >
                            {curso.contenido[0]}
                          </Typography>
                        </Row>
                      </AccordionDetails>
                    </Accordion>
                  )}
                  {curso.semanas >= 2 && (
                    <Accordion className={classes.acordeonEscritorio}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ height: "3em" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "70%",
                            position: "relative",
                            zIndex: 2,
                            borderRadius: "20em",
                            height: "3em",
                            marginLeft: "-1em",
                          }}
                        >
                          <span className="tituloCardCursosEscritorio">
                            {curso.tipo}{" "}
                            <stronger className="numeroContenidoEscritorio">
                              2
                            </stronger>
                          </span>
                        </div>
                        <Typography className={classes.heading}> </Typography>
                      </AccordionSummary>
                      <AccordionDetails className={classes.acordionDetails}>
                        <Row>
                          <Typography
                            className={classes.tituloAcordeonEscritorio}
                          >
                            {curso.contenidoTitulo[1]}
                          </Typography>
                        </Row>
                        <Row>
                          <Typography
                            className={classes.parrafoAcordeonEscritorio}
                          >
                            {curso.contenido[1]}
                          </Typography>
                        </Row>
                      </AccordionDetails>
                    </Accordion>
                  )}
                  {curso.semanas >= 3 && (
                    <Accordion className={classes.acordeonEscritorio}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ height: "3em" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "89%",
                            position: "relative",
                            zIndex: 2,
                            borderRadius: "20em",
                            height: "3em",
                            marginLeft: "-1em",
                          }}
                        >
                          <span className="tituloCardCursosEscritorio">
                            {curso.tipo}{" "}
                            <stronger className="numeroContenidoEscritorio">
                              3
                            </stronger>
                          </span>
                        </div>
                        <Typography className={classes.heading}> </Typography>
                      </AccordionSummary>
                      <AccordionDetails className={classes.acordionDetails}>
                        <Row>
                          <Typography
                            className={classes.tituloAcordeonEscritorio}
                          >
                            {curso.contenidoTitulo[2]}
                          </Typography>
                        </Row>

                        <Row>
                          <Typography
                            className={classes.parrafoAcordeonEscritorio}
                          >
                            {curso.contenido[2]}
                          </Typography>
                        </Row>
                      </AccordionDetails>
                    </Accordion>
                  )}
                  {curso.semanas >= 4 && (
                    <Accordion className={classes.acordeonEscritorio}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ height: "3em" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "100%",
                            position: "absolute",
                            zIndex: 2,
                            borderRadius: "20em",
                            height: "3em",
                            marginLeft: "-1em",
                            marginTop: "-1.5em",
                          }}
                        >
                          <span className="tituloCardCursosEscritorio">
                            {curso.tipo}{" "}
                            <stronger className="numeroContenidoEscritorio">
                              4
                            </stronger>
                          </span>
                          <i className="fa fa-angle-down m-l-5 flechaSem4"></i>
                        </div>
                        <Typography className={classes.heading}> </Typography>
                      </AccordionSummary>
                      <AccordionDetails className={classes.acordionDetails}>
                        <Row>
                          <Typography
                            className={classes.tituloAcordeonEscritorio}
                          >
                            {curso.contenidoTitulo[3]}
                          </Typography>
                        </Row>

                        <Row>
                          <Typography
                            className={classes.parrafoAcordeonEscritorio}
                          >
                            {curso.contenido[3]}
                          </Typography>
                        </Row>
                      </AccordionDetails>
                    </Accordion>
                  )}
                </div>
              </Container>
              <Row className="justify-content-center">
                {curso.fechaInscrpcion && curso.active ? (
                  <a
                    href={curso.UrlToRedirect}
                    className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificado2"
                  >
                    Quiero inscribirme
                  </a>
                ) : (
                  <Button
                    // to={curso.UrlToRedirect}
                    className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificado2"
                    onClick={handleClickOpen}
                  >
                    Quiero que me avisen cuando abran inscripciones
                  </Button>
                )}
              </Row>
            </section>
          </div>
          <div className="ContenedorResponsiveCursosHidden">
            <Container className="backgroundPrimerContenedor">
              <div>
                <div className="justify-content-center">
                  {/**REsponsive */}
                  <h1 className="text-center title titleCursosResponsive">
                    {curso.nombre}
                  </h1>
                </div>
                <hr className="justify-content-center lineaCopada" />
                <div className="justify-content-left">
                  <strong
                    className={`${classes.textoCurso} text-left parrafoCursos"`}
                  >
                    {curso.descripcionLarga.map((text) => (
                      <>
                        {text} <br />
                      </>
                    ))}
                  </strong>
                </div>
                <div className="justify-content-left">
                  <p className="text-left mt-3">
                    {curso.requerimientos.length > 0 && (
                      <>
                        Para cursarlo necesitarás:
                        <br />
                      </>
                    )}
                    {curso.requerimientos.map((Text) => (
                      <>
                        {Text} <br />
                      </>
                    ))}
                  </p>
                </div>
                <div className="justify-content-left">
                  <strong
                    className={`${classes.textoCurso} text-left parrafoCursos"`}
                  >
                    Aprovechalo!
                  </strong>
                </div>
              </div>
            </Container>

            <div>
              <Container>
                <Col>
                  <Row className="justify-content-center">
                    <h1
                      className={`${classes.tituloContenido} text-center title titleCursosResponsive`}
                    >
                      Especificaciones
                    </h1>
                  </Row>
                  <hr className="justify-content-center lineaCopada" />
                  <Row className="justify-content-center">
                    <Col md="8">
                      {curso.especificaciones[0] != undefined && (
                        <CardBody className="d-flex no-block cardEspecificacionesResponsive">
                          <div className="m-r-20 contenedorImgEspecificaciones">
                            {" "}
                            <img
                              src={img1}
                              width="70"
                              className="rounded imagenEspecificaciones"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h6 className="font-medium textoEspe">
                              {curso.especificaciones[0]}
                            </h6>
                          </div>
                        </CardBody>
                      )}

                      {curso.especificaciones[1] != undefined && (
                        <CardBody className="d-flex no-block cardEspecificacionesResponsive marginTopRowEsoec">
                          <div className="m-r-20 contenedorImgEspecificaciones">
                            {" "}
                            <img
                              src={img2}
                              width="70"
                              className="rounded imagenEspecificaciones"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h6 className="font-medium textoEspe">
                              {curso.especificaciones[1]}
                            </h6>
                          </div>
                        </CardBody>
                      )}

                      {/*  <CardBody className="d-flex no-block cardEspecificacionesResponsive">
                                                <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img1} width="70" className="rounded imagenEspecificaciones" alt="img" /></div>
                                                <div>
                                                    <h6 className="font-medium textoEspe">4 SEMANAS DE DURACIÓN</h6>
                                                </div>
                                            </CardBody>
                                            <CardBody className="d-flex no-block cardEspecificacionesResponsive2">
                                                <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img2} width="70" className="rounded imagenEspecificaciones" alt="img" /></div>
                                                <div>
                                                    <h6 className="font-medium textoEspe">3 HORAS SEMANALES</h6>
                                                </div>
                                            </CardBody> */}
                      <CardBody className="d-flex no-block cardEspecificacionesResponsive2">
                        <div className="m-r-20 contenedorImgEspecificaciones">
                          {" "}
                          <img
                            src={img3}
                            width="70"
                            className="rounded imagenEspecificaciones"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6 className="font-medium textoEspe">GRATUITO</h6>
                        </div>
                      </CardBody>
                      <CardBody className="d-flex no-block cardEspecificacionesResponsive2">
                        <div className="m-r-20 contenedorImgEspecificaciones">
                          {" "}
                          <img
                            src={img4}
                            width="70"
                            className="rounded imagenEspecificaciones"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6 className="font-medium textoEspe">CERTIFICADO</h6>
                        </div>
                      </CardBody>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    {curso.semanas != 0 && (
                      <h1
                        className={`${classes.tituloContenido} text-center title titleCursosResponsive`}
                      >
                        Contenido
                      </h1>
                    )}
                  </Row>
                  <hr className="justify-content-center lineaCopada" />

                  <div className={classes.root}>
                    {curso.semanas >= 1 && (
                      <Accordion className={classes.acordeon1}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          style={{ height: "3em" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "55%",
                              position: "relative",
                              zIndex: 2,
                              borderRadius: "20em",
                              height: "3em",
                              marginLeft: "-1em",
                            }}
                          >
                            <span className="tituloCardCursos">
                              {curso.tipo}{" "}
                              <stronger className="numeroContenido">1</stronger>
                            </span>
                          </div>
                          <Typography className={classes.heading}> </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.acordionDetails}>
                          <Row>
                            <Typography
                              className={classes.tituloAcordeonEscritorio}
                            >
                              {curso.contenidoTitulo[0]}
                            </Typography>
                          </Row>

                          <Row>
                            <Typography
                              className={classes.parrafoAcordeonEscritorio}
                            >
                              {curso.contenido[0]}
                            </Typography>
                          </Row>
                        </AccordionDetails>
                      </Accordion>
                    )}
                    {curso.semanas >= 2 && (
                      <Accordion className={classes.acordeon1}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          style={{ height: "3em" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "70%",
                              position: "relative",
                              zIndex: 2,
                              borderRadius: "20em",
                              height: "3em",
                              marginLeft: "-1em",
                            }}
                          >
                            <span className="tituloCardCursos">
                              {curso.tipo}{" "}
                              <stronger className="numeroContenido">2</stronger>
                            </span>
                          </div>
                          <Typography className={classes.heading}> </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.acordionDetails}>
                          <Row>
                            <Typography
                              className={classes.tituloAcordeonEscritorio}
                            >
                              {curso.contenidoTitulo[1]}
                            </Typography>
                          </Row>

                          <Row>
                            <Typography
                              className={classes.parrafoAcordeonEscritorio}
                            >
                              {curso.contenido[1]}
                            </Typography>
                          </Row>
                        </AccordionDetails>
                      </Accordion>
                    )}
                    {curso.semanas >= 3 && (
                      <Accordion className={classes.acordeon1}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          style={{ height: "3em" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "99%",
                              position: "relative",
                              zIndex: 2,
                              borderRadius: "20em",
                              height: "3em",
                              marginLeft: "-1em",
                            }}
                          >
                            <span className="tituloCardCursos">
                              {curso.tipo}{" "}
                              <stronger className="numeroContenido">3</stronger>
                            </span>
                          </div>
                          <Typography className={classes.heading}> </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.acordionDetails}>
                          <Row>
                            <Typography
                              className={classes.tituloAcordeonEscritorio}
                            >
                              {curso.contenidoTitulo[2]}
                            </Typography>
                          </Row>

                          <Row>
                            <Typography
                              className={classes.parrafoAcordeonEscritorio}
                            >
                              {curso.contenido[2]}
                            </Typography>
                          </Row>
                        </AccordionDetails>
                      </Accordion>
                    )}
                    {curso.semanas >= 4 && (
                      <Accordion className={classes.acordeon1}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          style={{ height: "3em" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "100%",
                              position: "absolute",
                              zIndex: 2,
                              borderRadius: "20em",
                              height: "3em",
                              marginLeft: "-1em",
                              marginTop: "-1.5em",
                            }}
                          >
                            <span className="tituloCardCursos">
                              {curso.tipo}{" "}
                              <stronger className="numeroContenido">4</stronger>
                            </span>
                            <i className="fa fa-angle-down m-l-5 flechaSem4"></i>
                          </div>
                          <Typography className={classes.heading}> </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.acordionDetails}>
                          <Row>
                            <Typography
                              className={classes.tituloAcordeonEscritorio}
                            >
                              {curso.contenidoTitulo[3]}
                            </Typography>
                          </Row>

                          <Row>
                            <Typography
                              className={classes.parrafoAcordeonEscritorio}
                            >
                              {curso.contenido[3]}
                            </Typography>
                          </Row>
                        </AccordionDetails>
                      </Accordion>
                    )}
                    <Row className="justify-content-center">
                      {curso.fechaInscrpcion && curso.active ? (
                        <a
                          href={curso.UrlToRedirect}
                          className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificado2"
                        >
                          Quiero inscribirme
                        </a>
                      ) : (
                        <Button
                          className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificado2"
                          onClick={handleClickOpen}
                        >
                          Quiero que me avisen cuando abran inscripciones
                        </Button>
                      )}
                      <Dialog
                        // fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                      >
                        {/* <DialogTitle id="responsive-dialog-title">{"Completá tus datos para que podamos notificarte"}</DialogTitle>  */}
                        <DialogContent>
                          <DialogContentText>
                            Completá tus datos para que podamos notificarte
                          </DialogContentText>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nombre"
                            value={nombre}
                            onChange={(event) => setNombre(event.target.value)}
                            type="name"
                            fullWidth
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="apellido"
                            label="Apellido"
                            value={apellido}
                            onChange={(event) =>
                              setApellido(event.target.value)
                            }
                            type="name"
                            fullWidth
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="dni"
                            label="DNI"
                            value={dni}
                            onChange={(event) => setDni(event.target.value)}
                            type="number"
                            fullWidth
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            fullWidth
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="tel"
                            label="Teléfono"
                            value={tel}
                            onChange={(event) => setTel(event.target.value)}
                            type="number"
                            fullWidth
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button
                            autoFocus
                            onClick={handleClose}
                            color="primary"
                            className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btonContactoInfoCap btonContactoInfoCapResponsive"
                          >
                            CANCELAR
                          </Button>
                          <Button
                            onClick={handlerEnviar}
                            color="primary"
                            autoFocus
                            className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btonContactoInfoCap btonContactoInfoCapResponsive"
                          >
                            CONTINUAR
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </Row>
                  </div>
                </Col>

                <Container className="contenedorCompartirRedesCentrado">
                  <div>
                    <h4 className={classes.shareTitlemobile}>Compartir</h4>
                    <a>
                      <FacebookShareButton
                        url={`/capacitaciones/${curso.nombre
                          .replace(/([a-z])([A-Z])/g, "$1-$2")
                          .replace(/\s+/g, "-")
                          .replace(/\¿/g, "")
                          .replace(/-–-/g, "-")}`}
                        className="Demo__some-network__share-button Demo__some-network__share-buttonPadding"
                      >
                        <SocialIcon
                          style={{
                            height: 35,
                            width: 35,
                            marginTop: -9.5,
                            padding: 2,
                          }}
                          network="facebook"
                          bgColor="#01B7E8"
                          fgColor="white"
                        />
                      </FacebookShareButton>
                    </a>

                    <a>
                      <TwitterShareButton
                        url={`/capacitaciones/${curso.nombre
                          .replace(/([a-z])([A-Z])/g, "$1-$2")
                          .replace(/\s+/g, "-")
                          .replace(/\¿/g, "")
                          .replace(/-–-/g, "-")}`}
                        className="Demo__some-network__share-button Demo__some-network__share-buttonPadding"
                        target_blank
                      >
                        <SocialIcon
                          style={{
                            height: 35,
                            width: 35,
                            marginTop: -9.5,
                            padding: 2,
                          }}
                          network="twitter"
                          bgColor="#01B7E8"
                          fgColor="white"
                        />
                      </TwitterShareButton>
                    </a>

                    <a target="_blank" rel="noopener noreferrer">
                      <WhatsappShareButton
                        url={`/capacitaciones/${curso.nombre
                          .replace(/([a-z])([A-Z])/g, "$1-$2")
                          .replace(/\s+/g, "-")
                          .replace(/\¿/g, "")
                          .replace(/-–-/g, "-")}`}
                        className="Demo__some-network__share-button Demo__some-network__share-buttonPadding "
                      >
                        <SocialIcon
                          style={{
                            height: 35,
                            width: 35,
                            marginTop: -9.5,
                            padding: 2,
                          }}
                          network="whatsapp"
                          bgColor="#01B7E8"
                          fgColor="white"
                        />
                      </WhatsappShareButton>
                    </a>
                    <a target="_blank" rel="noopener noreferrer">
                      <LinkedinShareButton
                        url={`/capacitaciones/${curso.nombre
                          .replace(/([a-z])([A-Z])/g, "$1-$2")
                          .replace(/\s+/g, "-")
                          .replace(/\¿/g, "")
                          .replace(/-–-/g, "-")}`}
                        className="Demo__some-network__share-button Demo__some-network__share-buttonPadding "
                      >
                        <SocialIcon
                          style={{
                            height: 35,
                            width: 35,
                            marginTop: -9.5,
                            padding: 2,
                          }}
                          network="linkedin"
                          bgColor="#01B7E8"
                          fgColor="white"
                        />
                      </LinkedinShareButton>
                    </a>
                  </div>
                </Container>
              </Container>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  Especifi: {
    height: "5em",
    width: "100%",
    backgroundColor: "rgba(240, 240, 241, 0.4)",
  },
  cursoTituiloContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "5em",
    backgroundColor: "#565251",
  },
  cursoTituiloText: {
    marginLeft: "3em",
    color: "white",
    fontSize: "25px",
    fontWeight: "60px",
  },
  shareContainer: {
    backgroundColor: "#565251",
  },
  shareTitle: {
    color: "white",
    marginLeft: "2.5em",
    marginRight: ".75em",
  },
  shareSeccion: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
    height: "5em",
    backgroundColor: "#2CB0CF",
    backgroundImage: "linear-gradient(to right, #2CB0CF, #7d446e, #a5427c)",
    borderStartStartRadius: "20em",
    borderEndStartRadius: "20em",
  },
  textoCurso: {
    fontWeight: 600,
  },
  tituloContenido: {
    marginTop: "1em",
  },
  acordeon1: {
    borderRadius: "20em!important",
    zIndex: 3,
    marginBottom: "1.3em",
  },
  acordeonEscritorio: {
    borderRadius: "20em!important",
    zIndex: 3,
    marginBottom: "1.3em",
  },
  parrafoAcordeon: {
    fontSize: ".7rem",
    padding: "1em",
    marginTop: "-2em",
  },
  acordionDetails: {
    display: "block",
  },
  tituloAcordeonEscritorio: {
    padding: "1em",
    fontSize: "1rem",
    marginLeft: "2%",
    marginTop: "-1em",
    fontWeight: "bold",
  },
  parrafoAcordeonEscritorio: {
    padding: "1em",
    fontSize: "1rem",
    marginLeft: "2%",
    marginTop: "-1em",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
  },
}));

Curso4.propTypes = {
  classes: PropTypes.object,
};

export default Curso4;
