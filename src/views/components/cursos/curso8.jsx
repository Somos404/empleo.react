import React, { useState }  from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Container, Row, Col, Form } from 'reactstrap';
// core components
import Header from "../../../components/header/header.jsx";
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
    parrafoAcordeonEscritorio: {
        padding: "1em",
        fontSize: "1rem",
        marginTop: "-1em",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: "bold"
    },
}));

const Curso8 = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const classes = useStyles();

    return (
        <div className="page-wrapper page-wrapperCursos">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBannerCursos />
                        <div>
                            <div className="containerEscritorioCursosHidden">
                                <section>
                                    <div className="banner spacer BannerPContenedorEsc">
                                        <Container>
                                            <Row>
                                                <Col lg="5" md="7" className="align-self-center">
                                                    <h2 className="title font-bold rowSecondParrafoBold">Administración de Emprendimientos</h2>
                                                    <hr class="justify-content-center lineaCopada" />
                                                    <p className="m-t-40 m-b-30 rowSecondParrafoLight">En este curso te brindaremos los conocimientos necesarios para administrar un emprendimiento de manera económica y financieramente sostenible, con información clara de costos y márgenes de rentabilidad, la aplicación de conceptos claves y el uso de herramientas simples y prácticas que te permitan tomar decisiones fundadas para hacer crecer un emprendimiento.</p>
                                                <p className="m-t-40 m-b-30 rowSecondParrafoBold">    
                                                        Para cursarlo necesitarás: <br />
                                                    1.Dispositivo con acceso a internet. <br />
                                                    2.Idea o emprendimiento en marcha. <br />
                                                   </p>
                                                    <p className="m-t-40 m-b-30 rowSecondParrafoLight">¡Aprovechalo!</p>
                                                 
                                                </Col>
                                                <Col lg="6" md="5" className="align-self-center ml-auto  backImagenSeconCont">
                                                    <div className="contenedorImagenyContenido">
                                                    <img src={banner} alt="We are Digital Agency" className="img-fluid"></img>

                                                    <div className="contenidoCursos">
                                                        <Row className="justify-content-center">
                                                            <a href="" className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificadoEscritorio">Especificaciones</a>
                                                        </Row>
                                                            <CardBody className="d-flex no-block cardEspecificacionesResponsive cardEspecificacionesEscritorio">
                                                                <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img1} width="70" className="rounded imagenEspecificacionesEscritorio" alt="img" /></div>
                                                                <div>
                                                                    <h6 className="font-medium textoEspe textoEspeEscritorio">4 SEMANAS DE DURACIÓN</h6>
                                                                </div>
                                                            </CardBody>
                                                            <CardBody className="d-flex no-block cardEspecificacionesResponsive cardEspecificacionesEscritorio">
                                                                <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img2} width="70" className="rounded imagenEspecificacionesEscritorio" alt="img" /></div>
                                                                <div>
                                                                    <h6 className="font-medium textoEspe textoEspeEscritorio">4 HORAS SEMANALES</h6>
                                                                </div>
                                                            </CardBody>
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
                                            <h1 className="text-left tituloCotnenidoCursos">Contenido</h1>
                                        </Row>
                                    </Container>
                                    <Container className="containerSemanasEscritorio">
                                        <div className={classes.root}>
                                            <Accordion className={classes.acordeonEscritorio}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{height: '3em'}}
                                                    
                                                >
                                                    <div className="progress-bar" role="progressbar" style={{width: '55%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em'}} >
                                                        <span className="tituloCardCursosEscritorio">SEMANA <stronger className="numeroContenidoEscritorio">1</stronger></span>
                                                    
                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className={classes.parrafoAcordeonEscritorio}>
                                                    Clasificación de costos e implicancia según la actividad <br/>
Entender el impacto de los costos en todas las áreas del negocio. Costos fijos y variables. Diferencia entre costos y gastos. Costo de oportunidad e implícitos. Costos en comercios de compra y venta de productos. Costos en prestación de servicios.

                                                </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion className={classes.acordeonEscritorio}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{height: '3em'}}
                                                    
                                                >
                                                    <div className="progress-bar" role="progressbar" style={{width: '70%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em'}} >
                                                    <span className="tituloCardCursosEscritorio">SEMANA <stronger className="numeroContenidoEscritorio">2</stronger></span>
                                                    
                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className="backAccordeonRespuesta">
                                                    <Typography className={classes.parrafoAcordeonEscritorio}>
                                                    Política de precios <br/>
Pautas para definir precios. Objetivo económico. Costos y gastos. Margen bruto y neto. Análisis de la competencia. Valor agregado para los clientes.

                                                </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion className={classes.acordeonEscritorio}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{height: '3em'}}
                                                    
                                                >
                                                    <div className="progress-bar" role="progressbar" style={{width: '89%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em'}} >
                                                        <span className="tituloCardCursosEscritorio">SEMANA <stronger className="numeroContenidoEscritorio">3</stronger></span>
                                                    
                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className={classes.parrafoAcordeonEscritorio}>
                                                    Rentabilidad e inversión<br/>
Importancia de la información para la gestión. Análisis de rentabilidad. Importancia de generar información valiosa como ser la rentabilidad del negocio: qué productos conviene vender más, identificar costos que pueden reducirse, errores o pérdidas. Esquema de registro de las operaciones del negocio para generar un reporte.
                                                </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion className={classes.acordeonEscritorio}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{height: '3em'}}
                                                    
                                                >
                                                    <div className="progress-bar" role="progressbar" style={{width: '100%', position: 'absolute', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em', marginTop: '-1.5em'}} >
                                                    
                                                    <span className="tituloCardCursosEscritorio">SEMANA <stronger className="numeroContenidoEscritorio">4</stronger></span>
                                                        <i className="fa fa-angle-down m-l-5 flechaSem4"></i>
                                                    </div>
                                                    <Typography className={classes.heading}> </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className={classes.parrafoAcordeonEscritorio}>
                                                    Finanzas <br/>
Definición de Inversión. Tiempo de retorno de la inversión. Definición de "financiación". Toma de decisiones de financiación. Definición de "liquidez". Métodos de cobro y costos. Flujo de circulación del dinero en el negocio.
                                                </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                               
                                        </div>
                                       
                                    </Container>
                                    <Row className="justify-content-center">
                                                    <a href="" className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificado2">Quiero inscribirme</a>
                                    </Row>
                                </section>
                               
                            </div>
                        </div>
                            <div className="ContenedorResponsiveCursosHidden">
                                <Container className="backgroundPrimerContenedor backgroundPrimerContenedorResponsiveCursosSecos">                     
                                    <Col>
                                        <Row className="justify-content-center">
                                            <h1 className="text-center title titleCursosEscritorio">Gestión de Redes Sociales</h1>
                                            {/**REsponsive */}
                                            <h1 className="text-center title titleCursosResponsive">Administración de Emprendimientos</h1>

                                        </Row>
                                        <hr class="justify-content-center lineaCopada" />
                                        <div className="separadorM"></div>
                                        <Row className="justify-content-left">
                                            <p className="text-left parrafoCursos">En este curso te brindaremos los conocimientos necesarios para administrar un emprendimiento de manera económica y financieramente sostenible, con información clara de costos y márgenes de rentabilidad, la aplicación de conceptos claves y el uso de herramientas simples y prácticas que te permitan tomar decisiones fundadas para hacer crecer un emprendimiento.
                                                    </p>
                                        </Row>
                                        <div className="separadorSM"></div>
                                        <Row className="justify-content-left">
                                            <p className="text-left parrafoCursosBold">
                                                Para cursarlo necesitarás: <br />
                                                1. Dispositivo con acceso a internet. <br />
                                                2. Idea o emprendimiento en marcha.<br />
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
                                            <CardBody className="d-flex no-block cardEspecificacionesResponsive">
                                                <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img1} width="70" className="rounded imagenEspecificaciones" alt="img" /></div>
                                                <div>
                                                    <h6 className="font-medium textoEspe">4 SEMANAS DE DURACIÓN</h6>
                                                </div>
                                            </CardBody>
                                            <CardBody className="d-flex no-block cardEspecificacionesResponsive2">
                                                <div className="m-r-20 contenedorImgEspecificaciones"> <img src={img2} width="70" className="rounded imagenEspecificaciones" alt="img" /></div>
                                                <div>
                                                    <h6 className="font-medium textoEspe">4 HORAS SEMANALES</h6>
                                                </div>
                                            </CardBody>
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
                                            <h1 className="text-center title titleCursosResponsive">Contenido</h1>
                                        </Row>
                                        <hr class="justify-content-center lineaCopada" />

                                        <div className={classes.root}>
                                                    <Accordion className={classes.acordeon1}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                            style={{height: '3em'}}
                                                            
                                                        >
                                                            <div className="progress-bar" role="progressbar" style={{width: '55%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em'}} >
                                                                <span className="tituloCardCursos">SEMANA <stronger className="numeroContenido">1</stronger></span>
                                                            
                                                            </div>
                                                            <Typography className={classes.heading}> </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography className={classes.parrafoAcordeon}>
                                                            Clasificación de costos e implicancia según la actividad <br />
Entender el impacto de los costos en todas las áreas del negocio. Costos fijos y variables. Diferencia entre costos y gastos. Costo de oportunidad e implícitos. Costos en comercios de compra y venta de productos. Costos en prestación de servicios.
                                                        </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                    <Accordion className={classes.acordeon1}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                            style={{height: '3em'}}
                                                            
                                                        >
                                                            <div className="progress-bar" role="progressbar" style={{width: '70%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em'}} >
                                                            <span className="tituloCardCursos">SEMANA <stronger className="numeroContenido">2</stronger></span>
                                                            
                                                            </div>
                                                            <Typography className={classes.heading}> </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails className="backAccordeonRespuesta">
                                                            <Typography className={classes.parrafoAcordeon}>
                                                            Política de precios<br />
Pautas para definir precios. Objetivo económico. Costos y gastos. Margen bruto y neto. Análisis de la competencia. Valor agregado para los clientes.

                                                        </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                    <Accordion className={classes.acordeon1}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                            style={{height: '3em'}}
                                                            
                                                        >
                                                            <div className="progress-bar" role="progressbar" style={{width: '99%', position: 'relative', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em'}} >
                                                                <span className="tituloCardCursos">SEMANA <stronger className="numeroContenido">3</stronger></span>
                                                            
                                                            </div>
                                                            <Typography className={classes.heading}> </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography className={classes.parrafoAcordeon}>
                                                            Rentabilidad e inversión<br />
Importancia de la información para la gestión. Análisis de rentabilidad. Importancia de generar información valiosa como ser la rentabilidad del negocio: qué productos conviene vender más, identificar costos que pueden reducirse, errores o pérdidas. Esquema de registro de las operaciones del negocio para generar un reporte.

                                                        </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                    <Accordion className={classes.acordeon1}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                            style={{height: '3em'}}
                                                            
                                                        >
                                                            <div className="progress-bar" role="progressbar" style={{width: '100%', position: 'absolute', zIndex: 2, borderRadius: '20em', height: '3em', marginLeft: '-1em', marginTop: '-1.5em'}} >
                                                            
                                                            <span className="tituloCardCursos">SEMANA <stronger className="numeroContenido">4</stronger></span>
                                                                <i className="fa fa-angle-down m-l-5 flechaSem4"></i>
                                                            </div>
                                                            <Typography className={classes.heading}> </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography className={classes.parrafoAcordeon}>
                                                            Finanzas<br />
Definición de Inversión. Tiempo de retorno de la inversión. Definición de "financiación". Toma de decisiones de financiación. Definición de "liquidez". Métodos de cobro y costos. Flujo de circulación del dinero en el negocio.

                                                        </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                        <Row className="justify-content-center">
                                            <a href="" className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btnCursosModificado2">Quiero inscribirme</a>
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

Curso8.propTypes = {
    classes: PropTypes.object
};

export default Curso8;
