import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
// core components
import HeaderCapacitaciones from "../../components/header/headerCapacitaciones";
import HeaderBannerCapacitaciones from "../../components/banner/bannerCapacitaciones.jsx";
import Footer3 from "../../components/footer/footer3.jsx";
import CardCategorias from "../custom-components/sections/cardCategorias";
import Cursosfuturos from "../custom-components/sections/cursosfuturos";
import CardCursos from "../custom-components/sections/cardCursos";
import BlogComponent from "./informatorioCapacitaciones";

import { Card, CardTitle, CardText, CardGroup, CardBody } from "reactstrap";
import HeaderAdmin from "../../components/header/headerAdmin";

import img1 from "../../assets/images/capacitaciones/iconoGratis.svg";
import img2 from "../../assets/images/capacitaciones/iconoCertificados.svg";
import img3 from "../../assets/images/capacitaciones/iconoTutorados.svg";
import img4 from "../../assets/images/capacitaciones/iconoHorarios.svg";
import imgInfo from "../../assets/images/capacitaciones/logoCapHeaderv1.png";
import Slider from "../custom-components/sections/slider/Slider";
import UserService from "../../services/UserService";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const checkDate = (fecha) => {
  let valido = false;
  if (fecha.length > 0) {
    fecha.forEach((element) => {
      let d1 = element.empieza.split("/");
      let d2 = element.termina.split("/");

      let from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
      let to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
      let check = new Date();

      if (check > from && check < to) {
        valido = true;
      }
    });
  } else {
    valido = true;
  }
  return valido;
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Admin = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [categoria, setCategoria] = useState(
    props.location.categoria ? props.location.categoria : "Todos"
  );

  const [cursosSlider, setCursosSlider] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let array = [];
    props.cursosAndCategias.forEach((categoria) => {
      categoria.Cursos.forEach((curso) => {
        if (checkDate(curso.fechaInscrpcion) && curso.active != 0) {
          array.push(curso);
        }
      });
    });
    setCursosSlider(array);
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <div>
        <Container className={classes.container}>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="CURSOS" {...a11yProps(0)} />
              <Tab label="MUNICIPIOS" {...a11yProps(1)} />
              <Tab label="USUARIOS" {...a11yProps(2)} />
              <Tab label="ALGUNA VERDURA" {...a11yProps(3)} />
            </Tabs>

            <TabPanel className={classes.tabCursos} value={value} index={0}>
              <div className={classes.tabsArribaCont}>
                <ul className={classes.tabsArriba}>
                  <Link to="/">
                    <li className={classes.tabspro}>Aregar nuevo</li>
                  </Link>
                  <Link to="/">
                    <li className={classes.tabspro}>Editar</li>
                  </Link>
                  <Link to="/">
                    <li className={classes.tabspro}>Eliminar</li>
                  </Link>
                </ul>
              </div>
              {categoria === "categoria" ? (
                <CardCategorias
                  cursosAndCategias={props.cursosAndCategias}
                  changeCategory={(categ) => {
                    setCategoria(categ);
                  }}
                />
              ) : (
                <CardCursos
                  categoria={categoria}
                  cursosAndCategias={props.cursosAndCategias}
                />
              )}
            </TabPanel>
            <TabPanel value={value} index={1}>
              MUNICIPIOS
            </TabPanel>
            <TabPanel value={value} index={2}>
              USUARIOS
            </TabPanel>
            <TabPanel value={value} index={3}>
              ALGUNA VERDURA{" "}
            </TabPanel>
          </div>
        </Container>
      </div>
    </div>
  );
};

Admin.propTypes = {
  classes: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabCursos: {
    width: "100%",
  },
  tabsArribaCont: {
    width: "100%",
  },
  tabsArriba: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  tabspro: {
    width: "10em",
    listStyle: "none",
  },
  container: {
    paddingTop: "10%",
    maxWidth: "100%",
  },
  siderbarCol: {
    backgroundColor: "red",
  },
  contenedorPri: {
    backgroundColor: "orange",
  },
}));

export default Admin;
