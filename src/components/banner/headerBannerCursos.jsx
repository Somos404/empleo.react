import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from "react-router-dom";

const HeaderBannerCursos = (props) => {
    return (
        <div className="static-slider-headCursos">
            <Container>
                <Row className="justify-content-center row-banner">
                    <Col lg="8" className="align-self-center text-center">

                        {/* <Breadcrumbs aria-label="breadcrumb" style={{display: 'flex',justifyContent: 'center', color: 'white'}}>
                            <Link
                                style={{ color: '#FFF' }} 
                                to={{
                                    pathname: `/capacitaciones-demo`,
                                    categoria: 'categoria',
                                }}
                            >
                                Categoria
                            </Link>
                            <Link
                                style={{ color: '#FFF' }}
                                to={{
                                    pathname: `/capacitaciones-demo`,
                                    categoria: props.categoria,
                                }}
                            >
                                {props.categoria}
                            </Link>
                            <Link 
                                style={{ color: '#FFF' }}
                            >
                                {props.cursoactual}
                            </Link>
                        </Breadcrumbs> */}
                        {/* <h1 className="title-1">Capacitaciones</h1> */}
                        {/*<h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4> */}
                        {/* <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link>*/}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBannerCursos;
