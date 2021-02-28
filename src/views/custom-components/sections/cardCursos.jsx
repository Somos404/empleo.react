/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

/**Cursos */
import {cursos} from '../../components/cursos/cursos';


console.log(cursos)


const CardCursos = () => {
    return (
        <div>
            {/* <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Team</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div> */}

        

            <div className="spacer team2">
          
                <Container>
                {
                                cursos.map(({titulo, descripcion}, i) => (
                    <Row className="m-t-30">
                        <Col lg="3" md="6" className="m-b-30">
                                <Col md="12" className="col-md-12 pro-pic t4">
                            <div className="cards-inline" key={i}>
                            <div className="card-img-overlay"  >
                                        <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">{titulo}</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>{descripcion}</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                        </ul>
                                    </div>
                                    
                            </div>
                                   
                                </Col>
                        </Col>
                    </Row>
                      ))
                    }
                </Container>
                </div> 
               
                {/* <Container>

                 
                    <Row className="m-t-30">
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="pro-pic t1">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t2">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t3">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t4">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    
                    <Row className="m-t-30">
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="pro-pic t1">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t2">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t3">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t4">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                   
                    <Row className="m-t-30">
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="pro-pic t1">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t2">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t3">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t4">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container> */}

                
           
        </div>
    );
}

export default CardCursos;
