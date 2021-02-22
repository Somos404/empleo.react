/* eslint-disable */
import React from 'react';
import { Link } from "react-router-dom";

import { Row, Col, Container, Card, CardBody, Button } from 'reactstrap';
import Divider from '@material-ui/core/Divider';

import img1 from '../../../assets/images/sumate/icono-engranaje.png';
import img2 from '../../../assets/images/sumate/LíneaIsumate.svg';
import img3 from '../../../assets/images/sumate/imgTuercaResponsive.svg';
import img4 from '../../../assets/images/sumate/fondoFinoBlanco.svg';


const SumateComponent = () => {
    return (
        <div className="fondoSumate">
            <div className="container-sumate1">
                <Container className="cont1">
                    <Row className="m-t-40">
                        <Col md="12" className="colSumate">
                            <Card className="card-shadow card-sumate1">
                                <CardBody className="card-sumate2">
                                    <Col md="9" className="colSumate">
                                        <Row className="m-t-40 row-sumate">
                                        <h5 className="titulo-sumate">¿Sos empresa?</h5>
                                        </Row>
                                        <Row className="m-t-40 row-sumate2">
                                        <Link to="/empresas" className="botones-1 hvr-sweep-to-right">Sumate</Link>
                                        </Row>
                                    </Col>
                                    <Col md="3" className="colSumate2">
                                    <Row>
                                        <Link href="/" className="img-ho cont-img2"><img src={img1} alt="img" className="img-responsive img-thumbnail img-redirecciones2" width="200" /></Link>
                                        </Row>
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="12" className="colSumate2">
                        <Col md="3"  className="colSumate">
                            <Card className="card-shadow card-sumate">
                                <CardBody className="card-sumate2">
                                    <Row className="m-t-40 row-sumate row-sumatenumero1">
                                    <h5 className="numero-sumate">01</h5>
                                    </Row>
                                    <Row className="m-t-40 row-sumate row-sumatenumero12">
                                    <h6 className="titulo-sumate2">Inscribite</h6>{' '}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                         <Col md="3" className="colSumate3 contenedorLineaimg">
                      
                            {/* <hr className="linea-sumate"/> */}

                      
                        </Col>
                        <Col md="6"  className="colSumatecol2">
                            <Card className="card-shadow card-sumate3">
                                <CardBody className="card-sumate2">
                                    <Row className="m-t-40 row-sumate row-sumatenumero">
                                    <h5 className="numero-sumate">02</h5>
                                    </Row>
                                    <Row className="m-t-40 row-sumate row-sumatenumero">
                                    <h6 className="titulo-sumate2">Te llamamos</h6>{' '}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="colSumate3 contenedorLineaimg2">
                      
                             <hr className="linea-sumate2"/>

                
                        </Col>
                        <Col md="6"  className="colSumatecol23">
                                    <Card className="card-shadow card-sumate4">
                                        <CardBody className="card-sumate2">
                                            <Row className="m-t-40 row-sumate row-sumatenumero">
                                            <h5 className="numero-sumate">03</h5>
                                            </Row>
                                            <Row className="m-t-40 row-sumate row-sumatenumero">
                                            <h6 className="titulo-sumate2">Sumate a los beneficios</h6>{' '}
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                  
                                <Col md="3" className="colSumate3 contenedorLineaimg2">
                      
                      <hr className="linea-sumate3"/>

         
                 </Col>
                        {/**
                         <Col md="3" className="colSumate3">
                            <Row>
                                <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho "><img src={img2} alt="img" className="img-responsive img-thumbnail img-redirecciones3"  /></a>
                            </Row>
                        </Col>
                        <Col md="3"  className="colSumate">
                            <Card className="card-shadow card-sumate">
                                <CardBody className="card-sumate2">
                                    <Row className="m-t-40 row-sumate">
                                    <h5 className="numero-sumate">02</h5>
                                    </Row>
                                    <Row className="m-t-40 row-sumate">
                                    <h6 className="titulo-sumate2">Te llamamos</h6>{' '}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="colSumate4">
                            <Row>
                                <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho "><img src={img2} alt="img" className="img-responsive img-thumbnail img-redirecciones3"  /></a>
                            </Row>
                        </Col>
                        <Col md="3"  className="colSumate">
                            <Card className="card-shadow card-sumate">
                                <CardBody className="card-sumate2">
                                    <Row className="m-t-40 row-sumate">
                                    <h5 className="numero-sumate">03</h5>
                                    </Row>
                                    <Row className="m-t-40 row-sumate">
                                    <h6 className="titulo-sumate2">Sumate a los beneficios</h6>{' '}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>  
                         */}
                        
                        </Col>
                                              
                    </Row>
                </Container>
            </div>

            {/**------Responsive */}
            <div className="container-sumateResponsive">
                <Container className="Cont1ImgSumate">
                    <Col>
                        <Row className="justify-content-center">
                            <h5 className="titulo-sumateResponsive">¿Sos empresa?</h5>
                        </Row>
                        <Row className="justify-content-center">
                            <Link to="/empresas" className="botones-1Responsive hvr-sweep-to-right">Sumate</Link>{' '}
                        </Row>
                    </Col>

                    <Col className="ColImgSumateRepsonsive">
                         <Row className="contenedorSumateResponsive">
                             <Col className="primerColRepsonsiveSumate">
                                <img src={img3} alt="img" className="imgTuercaResponsive"></img>
                             </Col>
                             <Col className="segundaColRepsonsiveSumate">
                                <Row className="justify-content-center">
                                    <h5 className="numero-sumateResponsive">01</h5>
                                </Row>
                                <Row className="justify-content-center">
                                 <h6 className="titulo-sumate2Responsive">Inscribite</h6>
                                </Row>
                             </Col>
                             <hr></hr>
                             <Col className="tercerColRepsonsiveSumate">
                                 {/* <img src={img4} alt="img" className="fondoFinoBlanco1"></img> */}
                                <Row className="justify-content-center">
                                    <h5 className="numero-sumateResponsive">02</h5>
                                </Row>
                                <Row className="justify-content-center">
                                 <h6 className="titulo-sumate2Responsive">Te llamamos</h6>
                                </Row>
                             </Col>
                             <hr></hr>
                             <Col className="cuartaColRepsonsiveSumate">
                                <Row className="justify-content-center">
                                    <h5 className="numero-sumateResponsive">03</h5>
                                </Row>
                                <Row className="justify-content-center">
                                 <h6 className="titulo-sumate2Responsive">Sumate a los beneficios</h6>
                                </Row>
                             </Col>
                          
                         </Row>
                    </Col>
                </Container>
            </div>
        </div>
    );
}

export default SumateComponent;
