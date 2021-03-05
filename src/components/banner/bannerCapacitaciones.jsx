import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const HeaderBannerCapacitaciones = () => {
    return (
        <div className="static-slider-headCapacitaciones">
            <Container>
                <Row className="justify-content-center row-banner">
                    <Col lg="8" className="align-self-center text-center p-b-30">
                        {/* <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                            <Link color="inherit" href="#">
                                Home
                            </Link>
                            <Link color="inherit" href="#">
                                Catalog
                            </Link>
                            <Link color="inherit" href="#">
                                Accessories
                            </Link>
                            <Link color="inherit" href="#">
                                New Collection
                            </Link>
                            <Typography color="textPrimary">Belts</Typography>
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

export default HeaderBannerCapacitaciones;
