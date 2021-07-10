/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import {
  Container,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import logo from "../../assets/images/logos/logo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [topbar, setTopbar] = useState(false);
  const desk = useMediaQuery("(min-width:992px)");
  const table = useMediaQuery("(max-width:992px)");
  const mobile = useMediaQuery("(max-width:768px)");
  const [color, setColor] = useState(!desk ? "white" : "black");
  const classes = useStyles();

  /*--------------------------------------------------------------------------------*/
  /*To open NAVBAR in MOBILE VIEW                                                   */
  /*--------------------------------------------------------------------------------*/
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setTopbar(true);
      setColor("black");
    } else {
      setTopbar(false);
      if (!mobile) {
        setColor("white");
      }
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={topbar ? "topbar active" : "topbarCap"} id="top">
      <div className={`${classes.headerResponsive} header6`}>
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <Link to="/capacitaciones">
              <img src={logo} alt="wrapkit" />
            </Link>
            {/**
                         Iconos de Redes sociales -> Header Responsive 
                         */}
            {/*  <Nav navbar className="ml-auto nav-scoial-responsive">
              <NavItem>
                <a
                  className="nav-link navSocialResponsive"
                  href="https://www.facebook.com/empleochaco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="round-social light">
                    <i className="fa fa-facebook icono-face"></i>
                  </div>
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link navSocialResponsiveIg"
                  href="https://www.instagram.com/empleochaco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="round-social light">
                    <i className="fa fa-instagram icono-ig"></i>
                  </div>
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link navSocialResponsiveIg"
                  href="https://www.linkedin.com/in/empleo-chaco-3142a4210/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="round-social light">
                    <i className="fa fa-linkedin icono-lk"></i>
                  </div>
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link navSocialResponsiveIg"
                  href="https://twitter.com/empleochaco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="round-social light">
                    <i className="fa  fa-twitter icono-tw"></i>
                  </div>
                </a>
              </NavItem>
            </Nav> */}
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>

            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown font-14 ml-auto"
              id="h6-info"
            >
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link
                    className="nav-link nav-linkColor"
                    to="/"
                    style={{ color: color }}
                  >
                    VOLVER A EMPLEO
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link nav-linkColor"
                    to="/contact-cenit"
                    style={{ color: color }}
                  >
                    CONTACTO
                  </Link>
                </NavItem>
                <NavItem className="navHiddenSocialResponsiveFb">
                  <a
                    className="nav-link  nav-linkColor"
                    href="https://www.facebook.com/empleochaco"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: color }}
                  >
                    <div className="round-social light">
                      <i className="fa fa-facebook icono-face"></i>
                    </div>
                  </a>
                </NavItem>
                <NavItem>
                  <a
                    className="nav-link navHiddenSocialResponsiveIg  nav-linkColor"
                    href="https://www.instagram.com/empleochaco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: color }}
                  >
                    <div className="round-social light">
                      <i className="fa fa-instagram icono-ig"></i>
                    </div>
                  </a>
                </NavItem>
                <NavItem>
                  <a
                    className="nav-link navSocialResponsiveIg"
                    href="https://www.linkedin.com/in/empleo-chaco-3142a4210/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: color }}
                  >
                    <div className="round-social light">
                      <i className="fa fa-linkedin icono-lk"></i>
                    </div>
                  </a>
                </NavItem>
                <NavItem>
                  <a
                    className="nav-link navSocialResponsiveIg"
                    href="https://twitter.com/empleochaco"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: color }}
                  >
                    <div className="round-social light">
                      <i className="fa  fa-twitter icono-tw"></i>
                    </div>
                  </a>
                </NavItem>
                <NavItem className="nav-itemLogin">
                  <a
                    className="btn btn-outline-success btonIngCap"
                    href="https://capacitaciones.chaco.gob.ar/my"
                    style={{ color: color }}
                  >
                    INGRESAR
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  headerResponsive: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "rgb(107 112 157);",
    },
  },
}));

export default Header;
