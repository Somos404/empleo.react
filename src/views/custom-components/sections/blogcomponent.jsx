/* eslint-disable */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Row, Col, Container } from 'reactstrap';

import img1 from '../../../assets/images/capacitaciones/icono01InfoCap.svg';
import img2 from '../../../assets/images/capacitaciones/icono02InfoCap.svg';
import img3 from '../../../assets/images/capacitaciones/icono03InfoCap.svg';
import img4 from '../../../assets/images/capacitaciones/icono04InfoCap.svg';
import img5 from '../../../assets/images/capacitaciones/lineaInforCap.svg';
import img6 from '../../../assets/images/capacitaciones/lineaInforCap2.svg';
import img7 from '../../../assets/images/capacitaciones/lineaInforCap3.svg';
import img8 from '../../../assets/images/capacitaciones/lineaInforCap4.svg';
import imgInfo from '../../../assets/images/capacitaciones/logo_membrete.png';

import Footer3 from '../../../components/footer/footer3';
import CardInformatorio from './CardInformatorio';



 import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

//  const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
//     extendedIcon: {
//         marginRight: theme.spacing(1),
//     },
//     botonFab: {
//         color: "#fff",
//         backgroundColor: "#0629F9 !important",
//         width: "35px",
//         height: "35px"
//     }

//  }));



const BlogComponent = (props) => {
console.log('============', props.cardCursosInfo.Cursos);
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
                                <h1 className="title-1 titleInfoCaHab titleInfoCaHabHeight">Animate a trabajar</h1>
                                <h1 className="title-1 titleInfoCaHab">en el mundo del <span className="textTituloboldInfoCap">software</span> </h1>
                                <h1 className="title-1 titleInfoCaHabBold TitHeaderCapbold">y programación</h1>
                                {/*<h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4> */}
                                {/* <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link>*/}
                                <hr className="lineaCard lineaCard1 lineaCard1Responsive lineaHeaderInfoCap lineaInfoCaHab" />
                            </div>


                        </Row>
                        <Row className="justify-content-center">
                            <img src={imgInfo} alt="img" className="img-responsive img-thumbnail imgResponsiveInformatMun imgResponsiveInformatCap imgResponsiveInformatCapMArginLeft " />

                        </Row >

                        <Row className="rowSubtInfoCap">
                            <Col md="6" className="text-left marginDescInfo">
                                <p className="m-t-20 parrafoCursos">Para que tengas más y mejores oportunidades de incorporarte a la Economía del Conocimiento, especíﬁcamente en el sector del Software a través de la formación en programación.
                                </p>
                            </Col>
                            <Col md="6" className="text-left marginDescInfo">
                                <p className="m-t-20 parrafoCursos">Es un programa del Gobierno del Chaco en conjunto con las empresas del Polo IT Chaco, Globant, UTN y UNCAUS.
</p>
                            </Col>
                        </Row>

                    </Row>

                    <Row className="m-t-40 justify-content-center">
                         {
                            props.cardCursosInfo.Cursos.map((cursoCard, i) => ( 
                            <Col lg="3" md="4">
                                  <CardInformatorio
                                    pos = {i} 
                                    curso = {cursoCard}
                                />   
                            </Col>
                        ))
                        }   
                    </Row>
                </Container>
            </div>
            <div className="static-slider10InfoCap static-slider10InfoCapREsponsive">
                <Container>
                    <Row className="justify-content-left">
                        <Col md="6" className="align-self-left text-left">
                            <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btonContactoInfoCap btonContactoInfoCapResponsive" data-toggle="collapse" href="https://capacitaciones.chaco.gob.ar/mod/page/view.php?id=697"><span>PREGUNTAS FRECUENTES  <i className="ti-arrow-right"></i></span></a>
                            <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btonContactoInfoCap btonContactoInfoCapResponsive" data-toggle="collapse" href="https://docs.google.com/forms/d/e/1FAIpQLSePDRc-9AWh5h59F5WY3cY52v9AtcphAokKId_Nw93ZsRkyBA/viewform"><span>QUIERO OTRAS CAPACITACIONES <i className="ti-arrow-right"></i></span></a>
                            <Link className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20 btonContactoInfoCap btonContactoInfoCapResponsive" data-toggle="collapse" to="/contact"><span>CONTACTO <i className="ti-arrow-right"></i></span></Link>
                        </Col>
                    </Row>
                    <Row className="justify-content-left">
                        <Col lg="6" md="6" className="contenedor-social-footerInfCap align-self-center text-center">
                            <div className="round-social light">
                                <a href="https://www.facebook.com/empleochaco" className="link hvr-sweep-to-right fade-in " target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook facefooter"></i></a>
                                <a href="https://www.instagram.com/empleochaco/" className="link hvr-sweep-to-right fade-in " target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram facefooter"></i></a>
                            </div>
                        </Col>
                    </Row>


                </Container>

            </div>
            <Footer3 />
        </div>
    );
}

export default BlogComponent;
