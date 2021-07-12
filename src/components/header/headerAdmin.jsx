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

const HeaderAdmin = () => {
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
                    to="/capacitaciones"
                    style={{ color: color }}
                  >
                    INICIO?
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link nav-linkColor"
                    to="/capacitaciones"
                    style={{ color: color }}
                  >
                    MenuHeader2?
                  </Link>
                </NavItem>
                <NavItem className="nav-itemLogin">
                  <a
                    className="btn btn-outline-success btonIngCap"
                    href="https://capacitaciones.chaco.gob.ar/?redirect=0"
                    style={{ color: color }}
                  >
                    SALIR
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
    backgroundColor: "#45707e",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "rgb(107 112 157);",
    },
  },
}));

export default HeaderAdmin;
