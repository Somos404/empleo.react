import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Link,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";

import "./assets/scss/style.scss";
import Components from "./views/components/components.jsx";
import Informatorio from "./views/components/informatorio.jsx";
import Capacitaciones from "./views/components/capacitaciones.jsx";
import CapacitacionesDemo from "./views/components/capacitacionesDemo.jsx";

import Empleo from "./views/components/empleo.jsx";
import Emprendimientos from "./views/components/emprendimientos.jsx";
import Empresas from "./views/components/empresas.jsx";
import Oficios from "./views/components/oficios.jsx";
import Contacto from "./views/components/contacto.jsx";
import ContactoEmpresas from "./views/components/contactoEmpresas.jsx";
import Buscar from "./views/components/buscar.jsx";

import MuniMesh from "./views/components/municipios/municipioMesh";

import CursoMesh from "views/components/cursos/CusoMesh";

import CustomComponents from "./views/custom-components/custom-components.jsx";
import FormCustomComponents from "./views/custom-components/form";

import "../src/views/components/loader.css";
import Loader from "../src/views/components/Loader.jsx";
import UserService from "./services/UserService";

function App() {
  const [cursosAndCategias, setCursosAndCategias] = useState(undefined);
  const [municipios, setMunicipios] = useState(undefined);

  useEffect(() => {
    UserService.getCursos().then(
      (data) => {
        if (data.ok) {
          setCursosAndCategias(data.res);
        }
      },
      (error) => {
        //mensaje de error
        alert("Error Envio");
        console.log(" ==> error", error);
      }
    );

    UserService.getMuni().then(
      (data) => {
        if (data.ok) {
          setMunicipios(data.res);
        }
      },
      (error) => {
        //mensaje de error
        alert("Error Envio");
        console.log(" ==> error", error);
      }
    );
  }, []);

  return (
    <BrowserRouter>
      <Loader />
      <Switch>
        {/* <Route exact path="/" component={Components} /> */}
        <Route exact path="/" render={(props) => <Components {...props} />} />
        <Route
          path="/custom-components"
          render={(props) => <CustomComponents {...props} />}
        />
        {/* <Route exact path="/custom-components" component={CustomComponents} /> */}
        {/* <Route exact path="/informatorio" component={Informatorio} /> */}
        <Route
          path="/informatorio"
          render={(props) => <Informatorio {...props} />}
        />
        {/* <Route exact path="/capacitaciones" component={Capacitaciones} /> */}

        <Route
          exact
          path="/capacitaciones"
          render={(props) => <Capacitaciones {...props} />}
        />

        {/* <Route exact path="/capacitaciones" component={Capacitaciones} /> */}
        {cursosAndCategias && (
          <Route
            path="/capacitaciones-demo"
            render={(props) => (
              <CapacitacionesDemo
                cursosAndCategias={cursosAndCategias}
                {...props}
              />
            )}
          />
        )}

        {/* <Route exact path="/contact" component={Contacto} /> */}
        <Route path="/contact" render={(props) => <Contacto {...props} />} />
        <Route
          path="/contacto-empresas"
          render={(props) => <ContactoEmpresas {...props} />}
        />
        {/* <Route path="/contacto" component={Contacto} /> */}
        {/* <Route exact path="/emprendimientos" component={Emprendimientos} /> */}
        <Route
          path="/emprendimientos"
          render={(props) => <Emprendimientos {...props} />}
        />
        {/* <Route exact path="/oficios" component={Oficios} /> */}
        <Route path="/oficios" render={(props) => <Oficios {...props} />} />
        {/* <Route exact path="/empresas" component={Empresas} /> */}
        <Route path="/empresas" render={(props) => <Empresas {...props} />} />
        {/* <Route exact path="/empleo" component={Empleo} /> */}
        <Route path="/empleo" render={(props) => <Empleo {...props} />} />
        {/* <Route exact path="/form" component={FormCustomComponents} /> */}
        <Route
          path="/form"
          render={(props) => <FormCustomComponents {...props} />}
        />

        {/* ---------------BUSCAR */}
        <Route
          path="/buscar-cursos"
          render={(props) => <Buscar {...props} />}
        />
        {/* ---------------SUB PÁGINAS DE MUNICIPIOS */}

        {municipios != undefined &&
          municipios.map((muni) => (
            <Route
              key={muni.nombre}
              path={`/${muni.nombre}`}
              render={(props) => <MuniMesh muni={muni} {...props} />}
            />
          ))}

        {/* ----------------SUB PÁGINAS DE CURSOS */}

        {cursosAndCategias != undefined &&
          cursosAndCategias.map((Category) =>
            Category.Cursos.map((curso) => (
              <Route
                key={Category.categoria}
                path={`/capacitaciones/${curso.nombre
                  .replace(/([a-z])([A-Z])/g, "$1-$2")
                  .replace(/\s+/g, "-")
                  .replace(/\¿/g, "")
                  .replace(/-–-/g, "-")}`}
                render={(props) => (
                  <CursoMesh
                    curso={curso}
                    categoria={Category.categoria}
                    {...props}
                  />
                )}
              />
            ))
          )}

        {/* ---------------SUB PÁGINAS DE CURSOS */}
        {/*       <Route 
                path="/curso" 
                render={props => (
                <CursoMesh
                    {...props}
                />
                )}
             /> */}
      </Switch>
    </BrowserRouter>
  );
}
export default App;
