import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const HeaderBannerEmpleo = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center row-banner">
                    <Col lg="8" className="align-self-center text-center">
                        <h1 className="title-1">Empleo</h1>
                        {/*<h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4> */}
                        {/* <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link>*/}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBannerEmpleo;
