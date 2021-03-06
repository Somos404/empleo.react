/* eslint-disable */
import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "animate.css/animate.min.css";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import Card from "../../custom-components/sections/Card";
import img from "../../../assets/images/cursos/card/Rectangulo.png";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    height: (props) => props.height,
  },
  sectionSearch: {
    background: "(246,216,246)",
    background:
      "linear-gradient(180deg, rgba(246,216,246,1) 0%, rgba(255,255,255,1) 84%)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    height: "32em",
    width: "100%",
  },
  sectionCard: {
    zIndex: "9",
    position: "absolute",
    marginTop: (props) => props.marginTop,
    width: "100%",
    height: "16em",
  },
  inputProps: {
    color: "#6f7074",
    borderRadius: "50px",
    border: "1px solid #707070",
    backgroundColor: "#ffffff",
    fontWeight: "bold",
    "&:active": { outline: 0 },
  },
  iconoSearchMarco: {
    "&:focus": { outline: 0 },
  },

  SelectProps: {
    color: "#6f7074",
    overflow: "hidden",
    borderRadius: "50px",
    border: "1px solid #707070",
    backgroundColor: "#ffffff",
    textAlign: "left",
    fontWeight: "bold",
    "&:focus": { backgroundColor: "transparent" },
  },

  titulo: {
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: "1em",
  },
  search: {
    marginTop: "1em",
    marginBottom: "5em",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    color: "#6f7074",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#6f7074",
  },

  formControl: {
    minWidth: "15em",
    margin: ".5em",
  },
}));

const filtro = (Arr, value) => {
  if (value === "Todos") {
    let array = [];
    Arr.forEach((element) => {
      array = array.concat(
        element.Cursos.map((v) => ({ ...v, categoria: element.categoria }))
      );
    });
    return array.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
    //return array
  } else {
    return Arr.find((e) => e.categoria === value).Cursos.map((obj) => ({
      ...obj,
      categoria: value,
    }));
  }
};

const CardCursos = (props) => {
  const desk = useMediaQuery("(min-width:992px)");
  const table = useMediaQuery("(max-width:992px)");
  const mobile = useMediaQuery("(max-width:768px)");

  const [cursosAndCategias, setCursosAndCategias] = useState(
    props.cursosAndCategias
  );
  const [state, setState] = useState({
    categoria: props.categoria,
    search: "",
    name: "hai",
    cursosFiltrados: filtro(props.cursosAndCategias, props.categoria),
  });

  const setHeight = () => {
    // retorno la altura de cada card + el la separacien entre cada una dependiendo de la cantidad que se muestran en cada fila
    //se muestran 4 por fila
    if (desk)
      return (
        (state.cursosFiltrados.length >= 4
          ? Math.ceil(state.cursosFiltrados.length / 4)
          : 1) *
          245 +
        200 +
        Math.ceil((state.cursosFiltrados.length / 4) * 30)
      );
    //se muestran 4 por fila
    if (table && !mobile)
      return (
        (state.cursosFiltrados.length >= 2
          ? Math.ceil(state.cursosFiltrados.length / 2)
          : 1) *
          240 +
        200 +
        Math.ceil((state.cursosFiltrados.length / 2) * 30)
      );
    //se muestran 4 por fila
    if (mobile)
      return (
        state.cursosFiltrados.length * 240 +
        250 +
        Math.ceil(state.cursosFiltrados.length * 30)
      );
  };

  const classes = useStyles({
    marginTop: mobile ? "13em" : "10em",
    height: `${setHeight()}px`,
  });
  const searchFilter = (event) => {
    setState({
      ...state,
      search: event.target.value,
      cursosFiltrados: filtro(cursosAndCategias, state.categoria).filter(
        function (list) {
          return list.nombre
            .toUpperCase()
            .includes(event.target.value.toUpperCase());
        }
      ),
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      categoria: event.target.value,
      search: "",
      [name]: event.target.value,
      cursosFiltrados: filtro(cursosAndCategias, event.target.value),
    });
  };

  return (
    <div
      className={`${classes.container} team2`} /* style={{position: 'relative',width: '100%',height: `${setHeight()}px`}} */
    >
      <div className={classes.sectionSearch}>
        <Row className="justify-content-center">
          <Col md="12" className="text-center">
            <h1 className="tituloCursosFiltro">Más Cursos</h1>
            <div className={classes.search}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  className={classes.SelectProps}
                  value={state.categoria}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="Todos">Categoría</MenuItem>
                  {cursosAndCategias.map((e, i) => (
                    <MenuItem key={i + "MenuItemdropdow"} value={e.categoria}>
                      {e.categoria}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                className={
                  (clsx(classes.margin, classes.textField), classes.formControl)
                }
                variant="outlined"
              >
                <OutlinedInput
                  className={classes.inputProps}
                  id="outlined-adornment-weight"
                  placeholder="Buscar curso"
                  onChange={searchFilter}
                  value={state.search}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        className={classes.iconoSearchMarco}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  labelWidth={0}
                />
              </FormControl>
            </div>
          </Col>
        </Row>
      </div>
      <div className={classes.sectionCard}>
        <section>
          <div>
            <Container className="containerCardCategorias">
              <Row className="m-t-30 ">
                {state.cursosFiltrados.map((curso, i) => (
                  <Card
                    key={i + "cards"}
                    infoCursos={{
                      ...curso,
                      share: `https://empleo.chaco.gob.ar/capacitaciones/${curso.nombre
                        .replace(/([a-z])([A-Z])/g, "$1-$2")
                        .replace(/\s+/g, "-")
                        .replace(/\¿/g, "")
                        .replace(/-–-/g, "-")}`,
                    }}
                  />
                ))}
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardCursos;
