/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import img1 from "../../assets/images/logos/subse.svg";
import img2 from "../../assets/images/logos/min.svg";
import img3 from "../../assets/images/logos/chaco.svg";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className="footer4 ">
      <Container className="container-sociales container-socialesResponsive">
        <Row className="row-social">
          <Col lg="3" md="6">
            <Link to="/contact" className="link-icono-contacto">
              <div
                className={`${classes.btnContacto} boton-contacto fade-in`}
              ></div>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" className="contenedor-social-footer">
            <div className="round-social light">
              <a
                href="https://www.facebook.com/empleochaco"
                className="link hvr-sweep-to-right fade-in "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook facefooter"></i>
              </a>
              <a
                href="https://www.instagram.com/empleochaco/"
                className="link hvr-sweep-to-right fade-in "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram facefooter"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  btnContacto: {
    width: "181px",
    height: "45px",
    padding: "8px",
    lineHeight: "34px",
    background: "white",
    borderRadius: "22em",
    alignItems: "center",
    position: "absolute",
    marginLeft: "-15.2em",
    marginTop: "-12em",
    display: "flex",
    cursor: "pointer",
    border: "1px solid #01b7e8",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-3em",
      marginTop: "-8.3em",
    },
  },
}));
export default Footer;
