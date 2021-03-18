import React from "react";
import ReactDOM from 'react-dom';

import { createBrowserHistory } from "history";
import {
    Route,
    Switch,
    Link,
    BrowserRouter,
    HashRouter
} from "react-router-dom";

import './assets/scss/style.scss';
//import App from './App'
// pages for this product
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

import '../src/views/components/loader.css';
import Loader from '../src/views/components/Loader.jsx';
import {municipios} from './views/components/municipios/municipios';
import {cursosAndCategias} from './views/components/cursos/cursosAndCategias';
import { Category } from "@material-ui/icons";


var hist = createBrowserHistory();

function App() {

    return (
        <BrowserRouter>
             <Loader />
            <Switch>
                {/* <Route exact path="/" component={Components} /> */}
                <Route 
                exact 
                path="/" 
                render={props => (
                <Components
                {...props}
                />
            )}
            />
                <Route 
                 
                path="/custom-components" 
                render={props => (
                <CustomComponents
                {...props}
                />
            )}
            />
                {/* <Route exact path="/custom-components" component={CustomComponents} /> */}
                {/* <Route exact path="/informatorio" component={Informatorio} /> */}
                <Route 
                
                path="/informatorio" 
                render={props => (
                <Informatorio
                {...props}
                />
            )}
            />
                {/* <Route exact path="/capacitaciones" component={Capacitaciones} /> */}
                <Route 
                
                path="/capacitaciones" 
                render={props => (
                <Capacitaciones
                {...props}
                />
            )}
            />
            
                {/* <Route exact path="/capacitaciones" component={Capacitaciones} /> */}
                <Route 
                
                path="/capacitaciones-demo" 
                render={props => (
                <CapacitacionesDemo
                {...props}
                />
            )}
            />
                {/* <Route exact path="/contact" component={Contacto} /> */}
                <Route 
                
                path="/contact" 
                render={props => (
                <Contacto
                {...props}
                />
            )}
            />
               <Route 
                
                path="/contacto-empresas" 
                render={props => (
                <ContactoEmpresas
                {...props}
                />
            )}
            />
                {/* <Route path="/contacto" component={Contacto} /> */}
                {/* <Route exact path="/emprendimientos" component={Emprendimientos} /> */}
                <Route 
               
                path="/emprendimientos" 
                render={props => (
                <Emprendimientos
                {...props}
                />
            )}
            />
                {/* <Route exact path="/oficios" component={Oficios} /> */}
                <Route 
              
                path="/oficios" 
                render={props => (
                <Oficios
                {...props}
                />
            )}
            />
                {/* <Route exact path="/empresas" component={Empresas} /> */}
                <Route 
                
                path="/empresas" 
                render={props => (
                <Empresas
                {...props}
                />
            )}
            />
                {/* <Route exact path="/empleo" component={Empleo} /> */}
                <Route 
             
                path="/empleo" 
                render={props => (
                <Empleo
                {...props}
                />
            )}
            />
                {/* <Route exact path="/form" component={FormCustomComponents} /> */}
                <Route 
                 
                path="/form" 
                render={props => (
                <FormCustomComponents
                {...props}
                />
            )}
            />

            {/* ---------------BUSCAR */}
            <Route 
                 
                 path="/buscar-cursos" 
                 render={props => (
                 <Buscar
                 {...props}
                 />
             )}
             />
            {/* ---------------SUB PÁGINAS DE MUNICIPIOS */}

            {
                municipios.map(muni =>  (
                    <Route
                        path={`/${muni.nombre}`}
                        render={props => (
                            <MuniMesh
                                muni={muni.nombre}
                                {...props}
                            />
                        )}
                    />
                ))
            }

            {/* ----------------SUB PÁGINAS DE CURSOS */}

            {
                cursosAndCategias.map(Category =>  (
                    Category.cursos.map(curso =>  (
                        <Route
                            path={`/curso/${Category.categoria.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').replace(/\¿/g, '').replace(/\?/g, '')}/${curso.nombre.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').replace(/\¿/g, '').replace(/\?/g, '')}`}
                            render={props => (
                                <CursoMesh
                                    nombre={curso.nombre}
                                    categoria={Category.categoria}
                                    {...props}
                                />
                            )}
                        />
                    ))
                ))
            }

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
