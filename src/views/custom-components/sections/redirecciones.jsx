/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import img1 from '../../../assets/images/iconos/capacitaciones.png';
import img2 from '../../../assets/images/iconos/empleo.png';
import img3 from '../../../assets/images/iconos/oficios.png';
import img4 from '../../../assets/images/iconos/empresas.png';
import img5 from '../../../assets/images/iconos/emprendimientos.png';


const Redirecciones = () => {
    return (

        <div>
            <div>
                <Container className="containerRequerimientosEscritorio">
                    <Row className="m-t-40">
                        <Col md="3" className="colRequerimientos">
                            <Link className="linkRedirecciones" to="/capacitaciones">
                                <Card
                                    className="card-shadow card-req fade-in ">
                                    <CardBody className="card-body-req">
                                        <Row>
                                            <span className="img-ho cont-img"><img src={img1} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></span>
                                        </Row>
                                        <h5 className="font-medium m-b-0 titulo-requerimientos">Capacitaciones</h5>
                                        <hr className="linea-redirecciones" />
                                        <p className="m-b-0 font-14 subtitulo-requerimientos">Cursos para tu
                                        formación laboral
                                                                                                            y emprendedora</p>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="3" className="colRequerimientos">
                            <Link className="linkRedirecciones" to="/empleo">
                                <Card className="card-shadow card-req fade-in ">
                                    <CardBody
                                        className="card-body-req"
                                    >
                                        <Row>
                                            <span className="img-ho cont-img"><img src={img2} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></span>
                                        </Row>
                                        <h5 className="font-medium m-b-0 titulo-requerimientos">Empleo</h5>
                                        <hr className="linea-redirecciones" />
                                        <p className="m-b-0 font-14 subtitulo-requerimientos">Postulación
                                        a búsquedas
                                                                                                        laborales.</p>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="3" className="colRequerimientos">
                            <Link className="linkRedirecciones" to="/oficios">
                                <Card className="card-shadow card-req fade-in ">
                                    <CardBody className="card-body-req">
                                        <Row>
                                            <span className="img-ho cont-img"><img src={img3} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></span>
                                        </Row>
                                        <h5 className="font-medium m-b-0 titulo-requerimientos">Oficios</h5>
                                        <hr className="linea-redirecciones" />
                                        <p className="m-b-0 font-14 subtitulo-requerimientos">Herramientas
                                        de promoción y
                                                                                                        comercialización</p>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="3" className="colRequerimientos">
                            <Link className="linkRedirecciones" to="/empresas">
                                <Card className="card-shadow card-req fade-in ">
                                    <CardBody className="card-body-req">
                                        <Row>
                                            <span className="img-ho cont-img"><img src={img4} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></span>
                                        </Row>
                                        <h5 className="font-medium m-b-0 titulo-requerimientos">Empresas</h5>
                                        <hr className="linea-redirecciones" />
                                        <p className="m-b-0 font-14 subtitulo-requerimientos">Programas y
                                        beneficios para
                                        contratar y
                                                                                                            capacitar personal.</p>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="3" className="colRequerimientos">
                            <Link className="linkRedirecciones" to="/emprendimientos" >
                                <Card className="card-shadow card-req fade-in ">
                                    <CardBody className="card-body-req">
                                        <Row>
                                            <span className="img-ho cont-img"><img src={img5} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></span>
                                        </Row>
                                        <h5 className="font-medium m-b-0 titulo-requerimientos">Emprendimientos</h5>
                                        <hr className="linea-redirecciones" />
                                        <p className="m-b-0 font-14 subtitulo-requerimientos">Herramientas de
                                        promoción,
                                        comercialización
                                                                                                        y financiamiento.</p>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/** REQUERIMIENTOS RESPONSIVE **/}
            <div className="divReqResponsive">
                <Container className="containerRequerimientosResponsive">
                    <Col className="m-t-40">
                        <Row md="3" className="colRequerimientos">
                            <Link className="linkRedirecciones" to="/capacitaciones">
                                <Card
                                    className="card-shadow card-req fade-in">
                                    <CardBody className="card-body-req">
                                        <Row>
                                            <span className="img-ho cont-img"><img src={img1} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></span>
                                        </Row>
                                        <h5 className="font-medium m-b-0 titulo-requerimientos tituloRequerimientosResponsive1">Capacitaciones</h5>
                                        <hr className="linea-redirecciones1" />
                                        <p className="m-b-0 font-14 subtitulo-requerimientos1">Cursos para tu
                                        formación laboral
                                                                                                                y emprendedora</p>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Row>
                        <Row md="3" className="colRequerimientos">
                            <Link className="linkRedirecciones" to="/empleo">
                                <Card className="card-shadow card-req fade-in ">
                                    <CardBody
                                        className="card-body-req"
                                    >
                                        <Row>
                                            <span className="img-ho cont-img"><img src={img2} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></span>
                                        </Row>
                                        <h5 className="font-medium m-b-0 titulo-requerimientos tituloRequerimientosResponsive2">Empleo</h5>
                                        <hr className="linea-redirecciones2" />
                                        <p className="m-b-0 font-14 subtitulo-requerimientos2">Postulación
                                        a búsquedas
                                                                                                            laborales.</p>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Row>
                        <Row md="3" className="colRequerimientos">
                            <Link className="linkRedirecciones" to="/oficios">
                                <Card className="card-shadow card-req fade-in">
                                    <CardBody className="card-body-req">
                                        <Row>
                                            <span className="img-ho cont-img"><img src={img3} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></span>
                                        </Row>
                                        <h5 className="font-medium m-b-0 titulo-requerimientos tituloRequerimientosResponsive3">Oficios</h5>
                                        <hr className="linea-redirecciones3" />
                                        <p className="m-b-0 font-14 subtitulo-requerimientos3">Herramientas
                                        de promoción y
                                                                                                            comercialización</p>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Row>
                        <Row md="3" className="colRequerimientos">
                            <Link className="linkRedirecciones" to="/empresas" >
                                <Card className="card-shadow card-req fade-in ">
                                    <CardBody className="card-body-req">
                                        <Row>
                                            <span className="img-ho cont-img"><img src={img4} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></span>
                                        </Row>
                                        <h5 className="font-medium m-b-0 titulo-requerimientos tituloRequerimientosResponsive4">Empresas</h5>
                                        <hr className="linea-redirecciones4" />
                                        <p className="m-b-0 font-14 subtitulo-requerimientos4">Programas y
                                        beneficios para
                                        contratar y
                                                                                                                capacitar personal.</p>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Row>
                        <Row md="3" className="colRequerimientos">
                            <Link className="linkRedirecciones" to="/emprendimientos" >
                                <Card className="card-shadow card-req fade-in ">
                                    <CardBody className="card-body-req">
                                        <Row>
                                            <span className="img-ho cont-img"><img src={img5} alt="img" className="img-responsive img-thumbnail img-redirecciones" width="200" /></span>
                                        </Row>
                                        <h5 className="font-medium m-b-0 titulo-requerimientos tituloRequerimientosResponsive5">Emprendimientos</h5>
                                        <hr className="linea-redirecciones5" />
                                        <p className="m-b-0 font-14 subtitulo-requerimientos5">Herramientas de
                                        promoción,
                                        comercialización
                                                                                                            y financiamiento.</p>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Row>
                    </Col>
                </Container>
            </div>
        </div>
    );
}

export default Redirecciones;
