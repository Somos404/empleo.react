/* eslint-disable */
import React from 'react';
import { Link } from "react-router-dom";

import { Row, Col, Container, Card } from 'reactstrap';

import img1 from '../../../assets/images/capacitaciones/icono01InfoCap.svg';
import img2 from '../../../assets/images/capacitaciones/icono02InfoCap.svg';
import img3 from '../../../assets/images/capacitaciones/icono03InfoCap.svg';
import img4 from '../../../assets/images/capacitaciones/icono04InfoCap.svg';
import img5 from '../../../assets/images/capacitaciones/lineaInforCap.svg';
import img6 from '../../../assets/images/capacitaciones/lineaInforCap2.svg';
import img7 from '../../../assets/images/capacitaciones/lineaInforCap3.svg';
import img8 from '../../../assets/images/capacitaciones/lineaInforCap4.svg';
import imgInfo from '../../../assets/images/capacitaciones/logo_membrete.png';



import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    botonFab: {
        color: "#fff",
        backgroundColor: "#0629F9 !important",
        width: "35px",
        height: "35px"
    }

}));

const BlogComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <div className="coming-soon" id="coming">
                <Container className="py-5 mt-5">
                    <Row>
                        <Col md="6">
                            <div className="d-flex align-items-center">
                                <div>
                                    {/* <h2 className="title text-white font-weight-bold">Pro Version coming soon</h2>
                                <h6 className="subtitle font-light text-white">We will add Pro Version with tons of great features and multiple category demos which is ready to use...</h6>
                                <a href="/#coming" className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14">Comming Soon</a> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="blog-home2 spacer TopContenedorInfo">
                <Container>
                    <Row className="justify-content-center">
                        <Row className=" justify-content-center imagenInfo">
                        <div className="titulosInfoCapHab justify-content-left">
                            <h1 className="title-1 titleInfoCaHab">Animate a trabajar</h1>
                    <h1 className="title-1 titleInfoCaHab">en el mundo del <span className="textTituloboldInfoCap">software</span> </h1>
                    <h1 className="title-1 titleInfoCaHabBold TitHeaderCapbold">y programación</h1> 
                    {/*<h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4> */}
                    {/* <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link>*/}
                    <hr className="lineaCard lineaCard1 lineaCard1Responsive lineaHeaderInfoCap lineaInfoCaHab" />
                            </div>
                            <img src={imgInfo} alt="img" className="img-responsive img-thumbnail imgResponsiveInformatMun imgResponsiveInformatCap" width="200" />
                           
                  
                        </Row>
                        <Row className="rowSubtInfoCap">
                            <Col md="6" className="text-left">
                                <p className="m-t-20">Para que tengas más y mejores oportunidades de incorporarte a la Economía del Conocimiento, especíﬁcamente en el sector del Software a través de la formación en programación.
</p>
                            </Col>
                            <Col md="6" className="text-left">
                                <p className="m-t-20">Es un programa del Gobierno del Chaco en conjunto con las empresas del Polo IT Chaco, Globant, UTN y UNCAUS.
</p>
                            </Col>
                        </Row>

                    </Row>
                    <Row className="m-t-40 justify-content-center">
                        <Col lg="3" md="4">
                            <Card className="capacitacionesInfoCard">
                                <span className="img-ho contenedorImgCap"><img className="img-responsive img-thumbnail img-redirecciones img-InfoCap " src={img1} alt="wrappixel kit" /></span>
                                <div className="date-pos bg-info-gradiant imgAmarillaInfoCap"><span className="numeroCardInfoCap">01</span></div>
                                <h5 className="font-medium m-t-30 tituloCardInfoCap"><a href="#" className="link">Introducción a <br />la Programación</a></h5>
                                <span className=" contenedorImgLineaCap contenedorImgLineaCap1"><img className="img-responsive img-thumbnail img-redirecciones imgLinea-InfoCap imgLinea-InfoCap1 img-responsiveInfoCapLinea" src={img5} alt="wrappixel kit" /></span>

                                <p className="m-t-20 paraffoInfoCap">Para que sin necesidad de poseer conocimientos previos en
                                programación, puedas adentrarte en ese mundo de manera didáctica y entretenida, iniciando tu camino en el aprendizaje de sus lenguajes, en poco tiempo y de manera intensiva.</p>
                                <Row className="justify-content-center">
                                    <Fab className={classes.botonFab} aria-label="add">
                                        <AddIcon />
                                    </Fab>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="3" md="4">
                            <Card className="capacitacionesInfoCard">
                                <span className="img-ho contenedorImgCap"><img className="img-responsive img-thumbnail img-redirecciones img-InfoCap" src={img2} alt="wrappixel kit" /></span>
                                <div className="date-pos bg-info-gradiant imgAmarillaInfoCap"><span className="numeroCardInfoCap">02</span></div>
                                <h5 className="font-medium m-t-30 tituloCardInfoCap"><a href="#" className="link">Programación y <br />
                                Desarrollo Web</a></h5>
                                <span className=" contenedorImgLineaCap contenedorImgLineaCap1"><img className="img-responsive img-thumbnail img-redirecciones imgLinea-InfoCap imgLinea-InfoCap1 img-responsiveInfoCapLinea" src={img6} alt="wrappixel kit" /></span>
                                <p className="m-t-20 paraffoInfoCap">Podrás profundizar en herramientas básicas para desarrollar aplicaciones web con bases de datos, y adquirir conocimientos que te permitan seguir construyendo tu perfil profesional para el sector Software y Servicios
                                Informáticos.</p>
                                <Row className="justify-content-center">
                                    <Fab className={classes.botonFab} aria-label="add">
                                        <AddIcon />
                                    </Fab>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="3" md="4">
                            <Card className="capacitacionesInfoCard capacitacionesInfoCard1">
                                <span className="img-ho contenedorImgCap">
                                    <img className="img-responsive img-thumbnail img-redirecciones img-InfoCap" src={img3} alt="wrappixel kit" width="200" />
                                </span>
                                <div className="date-pos bg-info-gradiant imgAmarillaInfoCap"><span className="numeroCardInfoCap">03</span></div>
                                <h5 className="font-medium m-t-30 tituloCardInfoCap"><a href="#" className="link">Especialización <br />
                                en Lenguajes<br />
de Programación</a></h5>
                                <span className=" contenedorImgLineaCap"><img className="img-responsive img-thumbnail img-redirecciones imgLinea-InfoCap img-responsiveInfoCapLinea" src={img7} alt="wrappixel kit" /></span>
                                <p className="m-t-20 paraffoInfoCap">Podrás continuar con tu
perfeccionamiento en lenguajes específicos, y orientar tu fomación hacia los perfiles laborales requeridos por las empresas locales. </p>
                                <Row className="justify-content-center rowBtnMas">
                                    <Fab className={classes.botonFab} aria-label="add">
                                        <AddIcon />
                                    </Fab>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="3" md="4">
                            <Card className="capacitacionesInfoCard capacitacionesInfoCard1">
                                <span className="img-ho contenedorImgCap"><img className="img-responsive img-thumbnail img-redirecciones img-InfoCap" src={img4} alt="wrappixel kit" /></span>
                                <div className="date-pos bg-info-gradiant imgAmarillaInfoCap"><span className="numeroCardInfoCap">04</span></div>
                                <h5 className="font-medium m-t-30 tituloCardInfoCap"><a href="#" className="link">Talleres para<br />
                                Emprender<br />
                                en TICs
</a></h5>
                                <span className="contenedorImgLineaCap"><img className="img-responsive img-thumbnail img-redirecciones imgLinea-InfoCap img-responsiveInfoCapLinea" src={img8} alt="wrappixel kit" /></span>
                                <p className="m-t-20 paraffoInfoCap">Adquirirás herramientas que te
                                permitan iniciar un emprendimiento vinculado a las TICs, y podrás
acceder a financiamiento para su puesta en marcha al finalizar el ciclo.</p>
                                <Row className="justify-content-center rowBtnMas">
                                    <Fab className={classes.botonFab} aria-label="add">
                                        <AddIcon />
                                    </Fab>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="static-slider10InfoCap static-slider10InfoCapREsponsive">
                <Container>
                    <Row className="justify-content-left">
                        <Col md="6" className="align-self-left text-left">
                           
                            <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btonContactoInfoCap btonContactoInfoCapResponsive" data-toggle="collapse" href=""><span>PREGUNTAS FRECUENTES  <i className="ti-arrow-right"></i></span></a>
                            <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btonContactoInfoCap btonContactoInfoCapResponsive" data-toggle="collapse" href=""><span>QUIERO OTRAS CAPACITACIONES <i className="ti-arrow-right"></i></span></a>
                            <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btonContactoInfoCap btonContactoInfoCapResponsive" data-toggle="collapse" href=""><span>CONTACTO <i className="ti-arrow-right"></i></span></a>
                        </Col>
                    </Row>
                    <Row className="justify-content-left">
                    <Col lg="6" md="6" className="contenedor-social-footerInfCap align-self-center text-center">
                        <div className="round-social light">
                                <a href="https://www.facebook.com/empleochaco" className="link hvr-sweep-to-right fade-in "  target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook facefooter"></i></a>
                                <a href="https://www.instagram.com/empleochaco/" className="link hvr-sweep-to-right fade-in " target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram facefooter"></i></a>        
                            </div>
                    </Col>
                    </Row>
                   
                  
                </Container>
               
            </div>
        </div>
    );
}

export default BlogComponent;
