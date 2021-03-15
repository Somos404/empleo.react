/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card } from 'reactstrap';

import img1 from '../../../assets/images/capacitaciones/icono01InfoCap.svg';
import img2 from '../../../assets/images/capacitaciones/icono02InfoCap.svg';
import img3 from '../../../assets/images/capacitaciones/icono03InfoCap.svg';
import img4 from '../../../assets/images/capacitaciones/icono04InfoCap.svg';

const BlogComponent = () => {
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Blog</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="blog-home2 spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8" className="text-center">
                            <h2 className="title">Recent Blogs</h2>
                            <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40 justify-content-center">
                        <Col lg="3" md="4">
                            <Card className="capacitacionesInfoCard">
                                <span className="img-ho contenedorImgCap"><img className="img-responsive img-thumbnail img-redirecciones img-InfoCap" src={img1} alt="wrappixel kit" /></span>
                                <div className="date-pos bg-info-gradiant imgAmarillaInfoCap"><span className="numeroCardInfoCap">01</span></div>
                                <h5 className="font-medium m-t-30 tituloCardInfoCap"><a href="#" className="link">Introducción a <br />la Programación</a></h5>
                                <p className="m-t-20 paraffoInfoCap">Para que sin necesidad de poseer conocimientos previos en
                                programación, puedas adentrarte en ese mundo de manera didáctica y entretenida, iniciando tu camino en el aprendizaje de sus lenguajes, en poco tiempo y de manera intensiva.</p>
                                <a href="#" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="3" md="4">
                            <Card className="capacitacionesInfoCard">
                                <span className="img-ho contenedorImgCap"><img className="img-responsive img-thumbnail img-redirecciones img-InfoCap" src={img2} alt="wrappixel kit" /></span>
                                <div className="date-pos bg-info-gradiant imgAmarillaInfoCap"><span className="numeroCardInfoCap">02</span></div>
                                <h5 className="font-medium m-t-30 tituloCardInfoCap"><a href="#" className="link">Programación y <br />
                                Desarrollo Web</a></h5>
                                <p className="m-t-20 paraffoInfoCap">Podrás profundizar en herramientas básicas para desarrollar aplicaciones web con bases de datos, y adquirir conocimientos que te permitan seguir construyendo tu perfil profesional para el sector Software y Servicios
                                Informáticos.</p>
                                <a href="#" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="3" md="4">
                            <Card className="capacitacionesInfoCard">
                                <span className="img-ho contenedorImgCap">
                                    <img className="img-responsive img-thumbnail img-redirecciones img-InfoCap" src={img3} alt="wrappixel kit" width="200" />
                                </span>
                                <div className="date-pos bg-info-gradiant imgAmarillaInfoCap"><span className="numeroCardInfoCap">03</span></div>
                                <h5 className="font-medium m-t-30 tituloCardInfoCap"><a href="#" className="link">Especialización <br />
                                en Lenguajes<br />
de Programación</a></h5>
                                <p className="m-t-20 paraffoInfoCap">Podrás continuar con tu
perfeccionamiento en lenguajes específicos, y orientar tu fomación hacia los perfiles laborales requeridos por las empresas locales. </p>
                                <a href="#" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="3" md="4">
                            <Card className="capacitacionesInfoCard">
                                <span className="img-ho contenedorImgCap"><img className="img-responsive img-thumbnail img-redirecciones img-InfoCap" src={img4} alt="wrappixel kit" /></span>
                                <div className="date-pos bg-info-gradiant imgAmarillaInfoCap"><span className="numeroCardInfoCap">04</span></div>
                                <h5 className="font-medium m-t-30 tituloCardInfoCap"><a href="#" className="link">Talleres para<br />
                                Emprender<br />
                                en TICs
</a></h5>
                                <p className="m-t-20 paraffoInfoCap">Adquirirás herramientas que te
                                permitan iniciar un emprendimiento vinculado a las TICs, y podrás
acceder a financiamiento para su puesta en marcha al finalizar el ciclo.</p>
                                <a href="#" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BlogComponent;
