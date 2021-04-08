import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Container, Row, Col, Form } from 'reactstrap';
// core components
import HeaderCapacitaciones from "../../../components/header/headerCapacitaciones";
import HeaderBannerCursos from "../../../components/banner/headerBannerCursos";

import Footer2 from "../../../components/footer/footer2.jsx";
// import CardCursos from "../../custom-components/sections/cardCursos";

import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';

import img1 from '../../../assets/images/cursos/btnDuracion.png';
import img2 from '../../../assets/images/cursos/btnSemanas.png';
import img3 from '../../../assets/images/cursos/btnGratuito.png';
import img4 from '../../../assets/images/cursos/btnCertificado.png';
//import banner from '../../../assets/images/form-banners/banner1/banner-img.png';
import banner from '../../../assets/images/cursos/imagenPrimConten.png';

// se cambia por llamad api cunado tengamos back
import { cursosAndCategias } from '../cursos/cursosAndCategias';

//Material UI
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

//import img5 from '../../assets/images/oficios/flechaDer.svg';
// import img6 from '../../assets/images/oficios/flachaIzq.svg';
// import img7 from '../../assets/images/capacitaciones/logo_membrete.png';

import { Helmet } from "react-helmet";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    acordeon1: {
        borderRadius: '20em!important',
        zIndex: 3,
        marginBottom: '1.3em',
    },

    acordeonEscritorio: {
        borderRadius: '20em!important',
        zIndex: 3,
        marginBottom: '1.3em',
    },
    parrafoAcordeon: {
        fontSize: ".7rem",
        padding: "1em",
        marginTop: "-2em"
    },
    acordionDetails: {
        display: 'block',
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
        fontWeight: "bold"
    },
}));

const checkDate = (fecha) => {
    let valido = false
    if (fecha.length > 0) {
        fecha.forEach(element => {
            let d1 = element.empieza.split("/");
            let d2 = element.termina.split("/");

            let from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);  // -1 because months are from 0 to 11
            let to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
            let check = new Date();

            if (check > from && check < to) {
                valido = true
            }
        });
    } else {
        valido = true
    }
    return valido
}

const Curso4 = (props) => {

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


      const handlerEnviar = () => {
        const body = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        email: email,
        tel: tel
        }
      }
    


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [curso, setCurso] = useState({
        nombre: '',
        descripcionLarga: [],
        categoria: '',
        requerimientos: [],
        especificaciones: [],
        contenidoTitulo: [],
        contenido: [],
        UrlToRedirect: '',
        horasSemanales: '',
        semanas: '',

    });

    useEffect(() => {
        window.scrollTo(0, 0);
        let curso = props.location.curso
        if (curso) {
            setCurso(
                {
                    nombre: curso.nombre,
                    categoria: props.categoria,
                    descripcionLarga: curso.descripcionLarga,
                    requerimientos: curso.requerimientos,
                    especificaciones: curso.especificaciones,
                    contenidoTitulo: curso.contenidoTitulo,
                    contenido: curso.contenido,
                    UrlToRedirect: curso.UrlToRedirect,
                    horasSemanales: curso.horasSemanales,
                    semanas: curso.contenido.length,
                    eje: curso.eje ? true : false,
                    fechaInscrpcion: checkDate(curso.fechaInscrpcion),
                    imgUrl: curso.imgUrl
                }
            )
        } else {
            curso = cursosAndCategias.find(element => element.categoria == props.categoria).cursos.find(element => element.nombre == props.nombre)
            setCurso(
                {
                    nombre: curso.nombre,
                    categoria: props.categoria,
                    descripcionLarga: curso.descripcionLarga,
                    requerimientos: curso.requerimientos,
                    especificaciones: curso.especificaciones,
                    contenidoTitulo: curso.contenidoTitulo,
                    contenido: curso.contenido,
                    UrlToRedirect: curso.UrlToRedirect,
                    horasSemanales: curso.horasSemanales,
                    semanas: curso.contenido.length,
                    eje: curso.eje ? true : false,
                    fechaInscrpcion: checkDate(curso.fechaInscrpcion),
                    imgUrl: curso.imgUrl
                }
            )
        }
    }, []);

    return (
        <div className="page-wrapper page-wrapperCursos">

            <Helmet>
                <meta property="og:url" content="https://empleo.chaco.gob.ar" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={curso.nombre} />
                <meta property="og:description" content={curso.descripcionLarga} />
                <meta property="og:image" content={`https://empleo.chaco.gob.ar/card/cursosimg/${curso.imgUrl}.png`} />
                {/* <title>curso</title>
                <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>

            <HeaderCapacitaciones />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBannerCursos
                        cursoactual={curso.nombre}
                        categoria={curso.categoria}
                    />
                    <div>
                        <div className="containerEscritorioCursosHidden">
                            <section>
                                <div className="banner spacer BannerPContenedorEsc">
                                    <Container>
                                        <Row>
                                            <Col lg="5" md="7" className="align-self-center colCursosInfo">
                                                <h2 className="title font-bold rowSecondParrafoBold">{curso.nombre}</h2>
                                                <hr class="justify-content-center lineaCopada" />
                                                <p className="m-t-40 m-b-30 rowSecondParrafoLight">
                                                    {
                                                        curso.descripcionLarga.map(text => (
                                                            <>
                                                                {text} <br />
                                                            </>
                                                        ))
                                                    }
                                                </p>
                                                <p className="m-t-40 m-b-30 rowSecondParrafoBold">
                                                    {
                                                        curso.requerimientos.length > 0 &&
                                                        <><strong>Para cursarlo necesitarás:</strong> <br /></>
                                                    }
                                                    {
                                                        curso.requerimientos.map(text => (
                                                            <>
                                                                {text} <br />
                                                            </>
                                                        ))
                                                    }
                                                </p>
                                                <p className="m-t-40 m-b-30 rowSecondParrafoLight">¡Aprovechalo!</p>
                                            </Col>
                                            <Col lg="6" md="5" className="align-self-center ml-auto  backImagenSeconCont">
                                                <div className="contenedorImagenyContenido">
                                                    <img src={banner} alt="We are Digital Agency" className="img-fluid imgBackReqCursos"></img>
                                                    <div className="contenidoCursos">
                                                        <Row className="justify-content-center">
                                                            <span className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificadoEscritorio btnCursosModificadoEscritorioCursorNone">Especificaciones</span>
                                                        </Row>
                                                        {
                                                            curso.especificaciones[0] != undefined &&
                                                            <CardBody className="d-flex no-block cardEspecificacionesResponsive cardEspecificacionesEscritorio">
                                                                <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img1} width="70" className="rounded imagenEspecificacionesEscritorio" alt="img" /></div>
                                                                <div>
                                                                    <h6 className="font-medium textoEspe textoEspeEscritorio">{curso.especificaciones[0]}</h6>
                                                                </div>
                                                            </CardBody>
                                                        }

                                                        {
                                                            curso.especificaciones[1] != undefined &&
                                                            <CardBody className="d-flex no-block cardEspecificacionesResponsive cardEspecificacionesEscritorio">
                                                                <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img2} width="70" className="rounded imagenEspecificacionesEscritorio" alt="img" /></div>
                                                                <div>
                                                                    <h6 className="font-medium textoEspe textoEspeEscritorio">{curso.especificaciones[1]}</h6>
                                                                </div>
                                                            </CardBody>

                                                        }

                                                        <CardBody className="d-flex no-block cardEspecificacionesResponsive cardEspecificacionesEscritorio">
                                                            <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img3} width="70" className="rounded imagenEspecificacionesEscritorio" alt="img" /></div>
                                                            <div>
                                                                <h6 className="font-medium textoEspe textoEspeEscritorio">GRATUITO</h6>
                                                            </div>
                                                        </CardBody>
                                                        <CardBody className="d-flex no-block cardEspecificacionesResponsive cardEspecificacionesEscritorio">
                                                            <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img4} width="70" className="rounded imagenEspecificacionesEscritorio" alt="img" /></div>
                                                            <div>
                                                                <h6 className="font-medium textoEspe textoEspeEscritorio">CERTIFICADO</h6>
                                                            </div>
                                                        </CardBody>
                                                    </div>
                                                </div>
                                            </Col>


                                        </Row>

                                    </Container>
                                </div>
                            </section>
                            <section>
                                <Container>
                                    <Row className="justify-content-left marginRowCursos">
                                        {
                                            curso.semanas != 0 &&
                                            <h1 className="text-left tituloCotnenidoCursos">Contenido</h1>
                                        }
                                    </Row>
                                </Container>
                                <Container className="containerSemanasEscritorio">
                                    <div className={classes.root}>
                                        {curso.semanas >= 1 &&
                                            <Accordion className={classes.acordeonEscritorio}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{ height: '3em' }}

                                                >
                                                    <div className="progress-bar" role="progressbar" style={{ width: '55%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em' }} >
                                                        <span className="tituloCardCursosEscritorio">{curso.eje ? 'Eje' : 'SEMANA'} <stronger className="numeroContenidoEscritorio">1</stronger></span>

                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className={classes.acordionDetails}>
                                                    <Row>
                                                        <Typography className={classes.tituloAcordeonEscritorio}>
                                                            {
                                                                curso.contenidoTitulo[0]
                                                            }

                                                        </Typography>
                                                    </Row>

                                                    <Row>
                                                        <Typography className={classes.parrafoAcordeonEscritorio}>
                                                            {
                                                                curso.contenido[0]
                                                            }
                                                        </Typography>
                                                    </Row>

                                                </AccordionDetails>
                                            </Accordion>
                                        }
                                        {curso.semanas >= 2 &&
                                            <Accordion className={classes.acordeonEscritorio}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{ height: '3em' }}

                                                >
                                                    <div className="progress-bar" role="progressbar" style={{ width: '70%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em' }} >
                                                        <span className="tituloCardCursosEscritorio">{curso.eje ? 'Eje' : 'SEMANA'} <stronger className="numeroContenidoEscritorio">2</stronger></span>

                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className={classes.acordionDetails}>
                                                    <Row>
                                                        <Typography className={classes.tituloAcordeonEscritorio}>
                                                            {
                                                                curso.contenidoTitulo[1]
                                                            }

                                                        </Typography>
                                                    </Row>
                                                    <Row>
                                                        <Typography className={classes.parrafoAcordeonEscritorio}>
                                                            {
                                                                curso.contenido[1]
                                                            }
                                                        </Typography>
                                                    </Row>

                                                </AccordionDetails>
                                            </Accordion>
                                        }
                                        {curso.semanas >= 3 &&
                                            <Accordion className={classes.acordeonEscritorio}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{ height: '3em' }}

                                                >
                                                    <div className="progress-bar" role="progressbar" style={{ width: '89%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em' }} >
                                                        <span className="tituloCardCursosEscritorio">{curso.eje ? 'Eje' : 'SEMANA'} <stronger className="numeroContenidoEscritorio">3</stronger></span>

                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className={classes.acordionDetails}>
                                                    <Row>
                                                        <Typography className={classes.tituloAcordeonEscritorio}>
                                                            {
                                                                curso.contenidoTitulo[2]
                                                            }

                                                        </Typography>
                                                    </Row>

                                                    <Row>
                                                        <Typography className={classes.parrafoAcordeonEscritorio}>
                                                            {
                                                                curso.contenido[2]
                                                            }
                                                        </Typography>
                                                    </Row>

                                                </AccordionDetails>
                                            </Accordion>
                                        }
                                        {curso.semanas >= 4 &&
                                            <Accordion className={classes.acordeonEscritorio}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{ height: '3em' }}

                                                >
                                                    <div className="progress-bar" role="progressbar" style={{ width: '100%', position: 'absolute', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em', marginTop: '-1.5em' }} >

                                                        <span className="tituloCardCursosEscritorio">{curso.eje ? 'Eje' : 'SEMANA'} <stronger className="numeroContenidoEscritorio">4</stronger></span>
                                                        <i className="fa fa-angle-down m-l-5 flechaSem4"></i>
                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className={classes.acordionDetails}>
                                                    <Row>
                                                        <Typography className={classes.tituloAcordeonEscritorio}>
                                                            {
                                                                curso.contenidoTitulo[3]
                                                            }

                                                        </Typography>
                                                    </Row>

                                                    <Row>
                                                        <Typography className={classes.parrafoAcordeonEscritorio}>
                                                            {
                                                                curso.contenido[3]
                                                            }
                                                        </Typography>
                                                    </Row>

                                                </AccordionDetails>
                                            </Accordion>
                                        }
                                    </div>

                                </Container>
                                <Row className="justify-content-center">
                                    {
                                        curso.fechaInscrpcion ?
                                            (
                                                <a href={curso.UrlToRedirect} className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificado2">Quiero inscribirme</a>
                                            )
                                            :
                                            (
                                                <Button  
                                                // to={curso.UrlToRedirect}
                                                 className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificado2"
                                                 onClick={handleClickOpen}

                                            >
                                                Quiero que me avisen cuando abran inscripciones 
                                            </Button>                                            )

                                    }
                                </Row>
                            </section>

                        </div>
                    </div>
                    <div className="ContenedorResponsiveCursosHidden">
                        <Container className="backgroundPrimerContenedor backgroundPrimerContenedorResponsiveCursosSecos">
                            <Col>
                                <Row className="justify-content-center">
                                    {/**REsponsive */}
                                    <h1 className="text-center title titleCursosResponsive">{curso.nombre}</h1>

                                </Row>
                                <hr class="justify-content-center lineaCopada" />
                                <div className="separadorM"></div>
                                <Row className="justify-content-left">
                                    <p className="text-left parrafoCursos">
                                        {
                                            curso.descripcionLarga.map(text => (
                                                <>
                                                    {text} <br />
                                                </>
                                            ))
                                        }
                                    </p>
                                </Row>
                                <div className="separadorSM"></div>
                                <Row className="justify-content-left">
                                    <p className="text-left parrafoCursosBold">
                                        {
                                            curso.requerimientos.length > 0 &&
                                            <><strong>Para cursarlo necesitarás:</strong> <br /></>
                                        }
                                        {
                                            curso.requerimientos.map(Text => (
                                                <>
                                                    {Text} <br />
                                                </>
                                            ))
                                        }
                                    </p>
                                </Row>
                                <div className="separadormM"></div>
                                <Row className="justify-content-left">
                                    <p className="text-left parrafoCursos">
                                        Aprovechalo!
                                            </p>
                                </Row>
                            </Col>
                        </Container>

                        <div>
                            <Container>
                                <Col>
                                    <Row className="justify-content-center">
                                        <a href="" className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificado">Especificaciones</a>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col md="8">

                                            {
                                                curso.especificaciones[0] != undefined &&
                                                <CardBody className="d-flex no-block cardEspecificacionesResponsive">
                                                    <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img1} width="70" className="rounded imagenEspecificaciones" alt="img" /></div>
                                                    <div>
                                                        <h6 className="font-medium textoEspe">{curso.especificaciones[0]}</h6>
                                                    </div>
                                                </CardBody>
                                            }

                                            {
                                                curso.especificaciones[1] != undefined &&
                                                <CardBody className="d-flex no-block cardEspecificacionesResponsive marginTopRowEsoec">
                                                    <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img2} width="70" className="rounded imagenEspecificaciones" alt="img" /></div>
                                                    <div>
                                                        <h6 className="font-medium textoEspe">{curso.especificaciones[1]}</h6>
                                                    </div>
                                                </CardBody>

                                            }

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
                                                <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img3} width="70" className="rounded imagenEspecificaciones" alt="img" /></div>
                                                <div>
                                                    <h6 className="font-medium textoEspe">GRATUITO</h6>
                                                </div>
                                            </CardBody>
                                            <CardBody className="d-flex no-block cardEspecificacionesResponsive2">
                                                <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img4} width="70" className="rounded imagenEspecificaciones" alt="img" /></div>
                                                <div>
                                                    <h6 className="font-medium textoEspe">CERTIFICADO</h6>
                                                </div>
                                            </CardBody>
                                        </Col>

                                    </Row>
                                    <Row className="justify-content-center">
                                        {
                                            curso.semanas != 0 &&
                                            <h1 className="text-center title titleCursosResponsive">Contenido</h1>
                                        }

                                    </Row>
                                    <hr class="justify-content-center lineaCopada" />

                                    <div className={classes.root}>
                                        {curso.semanas >= 1 &&
                                            <Accordion className={classes.acordeon1}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{ height: '3em' }}

                                                >
                                                    <div className="progress-bar" role="progressbar" style={{ width: '55%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em' }} >
                                                        <span className="tituloCardCursos">{curso.eje ? 'Eje' : 'SEMANA'} <stronger className="numeroContenido">1</stronger></span>

                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className={classes.acordionDetails}>
                                                    <Row>
                                                        <Typography className={classes.tituloAcordeonEscritorio}>
                                                            {
                                                                curso.contenidoTitulo[0]
                                                            }

                                                        </Typography>
                                                    </Row>

                                                    <Row>
                                                        <Typography className={classes.parrafoAcordeonEscritorio}>
                                                            {
                                                                curso.contenido[0]
                                                            }
                                                        </Typography>
                                                    </Row>

                                                </AccordionDetails>
                                            </Accordion>
                                        }
                                        {curso.semanas >= 2 &&
                                            <Accordion className={classes.acordeon1}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{ height: '3em' }}

                                                >
                                                    <div className="progress-bar" role="progressbar" style={{ width: '70%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em' }} >
                                                        <span className="tituloCardCursos">{curso.eje ? 'Eje' : 'SEMANA'} <stronger className="numeroContenido">2</stronger></span>

                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className={classes.acordionDetails}>
                                                    <Row>
                                                        <Typography className={classes.tituloAcordeonEscritorio}>
                                                            {
                                                                curso.contenidoTitulo[1]
                                                            }

                                                        </Typography>
                                                    </Row>

                                                    <Row>
                                                        <Typography className={classes.parrafoAcordeonEscritorio}>
                                                            {
                                                                curso.contenido[1]
                                                            }
                                                        </Typography>
                                                    </Row>

                                                </AccordionDetails>
                                            </Accordion>
                                        }
                                        {curso.semanas >= 3 &&
                                            <Accordion className={classes.acordeon1}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{ height: '3em' }}

                                                >
                                                    <div className="progress-bar" role="progressbar" style={{ width: '99%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em' }} >
                                                        <span className="tituloCardCursos">{curso.eje ? 'Eje' : 'SEMANA'} <stronger className="numeroContenido">3</stronger></span>

                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className={classes.acordionDetails}>
                                                    <Row>
                                                        <Typography className={classes.tituloAcordeonEscritorio}>
                                                            {
                                                                curso.contenidoTitulo[2]
                                                            }

                                                        </Typography>
                                                    </Row>

                                                    <Row>
                                                        <Typography className={classes.parrafoAcordeonEscritorio}>
                                                            {
                                                                curso.contenido[2]
                                                            }
                                                        </Typography>
                                                    </Row>

                                                </AccordionDetails>

                                            </Accordion>
                                        }
                                        {curso.semanas >= 4 &&
                                            <Accordion className={classes.acordeon1}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{ height: '3em' }}

                                                >
                                                    <div className="progress-bar" role="progressbar" style={{ width: '100%', position: 'absolute', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em', marginTop: '-1.5em' }} >

                                                        <span className="tituloCardCursos">{curso.eje ? 'Eje' : 'SEMANA'} <stronger className="numeroContenido">4</stronger></span>
                                                        <i className="fa fa-angle-down m-l-5 flechaSem4"></i>
                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className={classes.acordionDetails}>
                                                    <Row>
                                                        <Typography className={classes.tituloAcordeonEscritorio}>
                                                            {
                                                                curso.contenidoTitulo[3]
                                                            }

                                                        </Typography>
                                                    </Row>

                                                    <Row>
                                                        <Typography className={classes.parrafoAcordeonEscritorio}>
                                                            {
                                                                curso.contenido[3]
                                                            }
                                                        </Typography>
                                                    </Row>

                                                </AccordionDetails>
                                            </Accordion>
                                        }
                                        <Row className="justify-content-center">
                                            {
                                                curso.fechaInscrpcion ?
                                                    (
                                                        <a href={curso.UrlToRedirect} className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificado2">Quiero inscribirme</a>
                                                    )
                                                    :
                                                    (
                                                        <Button  
                                                            // to={curso.UrlToRedirect}
                                                             className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificado2"
                                                             onClick={handleClickOpen}

                                                        >
                                                            Quiero que me avisen cuando abran inscripciones 
                                                        </Button>
                                                    )

                                            }
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
                                                        onChange={(event) => setApellido(event.target.value)}
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
                                                        autoFocus onClick={handleClose} 
                                                        color="primary"
                                                        className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btonContactoInfoCap btonContactoInfoCapResponsive"
                                                    >
                                                        CANCELAR
                                                    </Button>
                                                    <Button
                                                        onClick={handlerEnviar}
                                                        color="primary" autoFocus
                                                                                                                className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btonContactoInfoCap btonContactoInfoCapResponsive"
    
                                                    >
                                                        CONTINUAR
                                                    </Button>

                                                </DialogActions>
                                            </Dialog>

                                        </Row>
                                    </div>
                                </Col>

                            </Container>

                        </div>
                    </div>

                    <div>

                    </div>

                </div>
            </div>
            <Footer2 />
        </div>
    );
}

Curso4.propTypes = {
    classes: PropTypes.object
};

export default Curso4;
