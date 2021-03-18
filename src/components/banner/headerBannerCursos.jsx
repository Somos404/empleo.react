import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

const HeaderBannerCursos = (props) => {
    return (
        <div className="static-slider-headCursos">
            <Container>
                <Row className="justify-content-center row-banner">
                    <Col lg="8" className="align-self-center text-center">

                        <Breadcrumbs aria-label="breadcrumb" style={{display: 'flex',justifyContent: 'center', color: 'white'}}>
                            <Link color="inherit" href="/" onClick={handleClick}>
                                Categoria
                            </Link>
                            <Link color="inherit" href="/" onClick={handleClick}>
                                {props.categoria}
                            </Link>
                            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                                {props.cursoactual}
                            </Link>
                        </Breadcrumbs>
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
