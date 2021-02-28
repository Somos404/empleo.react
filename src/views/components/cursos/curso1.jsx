import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Container, Row, Col } from 'reactstrap';
// core components
import Header from "../../components/header/header.jsx";
import HeaderBannerCapacitaciones from "../../components/banner/bannerCapacitaciones.jsx";
import Footer2 from "../../components/footer/footer2.jsx";
import CardCursos from "../custom-components/sections/cardCursos";

import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';

import img1 from '../../assets/images/capacitaciones/icon1Red.svg';
import img2 from '../../assets/images/capacitaciones/icon3Red.svg';
import img3 from '../../assets/images/capacitaciones/img2Red.svg';
import img4 from '../../assets/images/capacitaciones/img4Red.svg';

import img5 from '../../assets/images/oficios/flechaDer.svg';
import img6 from '../../assets/images/oficios/flachaIzq.svg';
import img7 from '../../assets/images/capacitaciones/logo_membrete.png';


const Cursos1 = (props) => {
    return (
        <div>
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBannerCapacitaciones />

                    <div className="spacer-Header">
                        <Container>
                    
                           
                        </Container>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    );
}

Cursos1.propTypes = {
    classes: PropTypes.object
};

export default Cursos1;
