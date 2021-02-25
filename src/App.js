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

import Contacto1 from "./views/components/contactForm.js";

import Muni1 from "./views/components/municipios/muni1.jsx";
import Muni2 from "./views/components/municipios/muni2.jsx";
import Muni3 from "./views/components/municipios/muni3.jsx";
import Muni4 from "./views/components/municipios/muni4.jsx";
import Muni5 from "./views/components/municipios/muni5.jsx";
import Muni6 from "./views/components/municipios/muni6.jsx";
import Muni7 from "./views/components/municipios/muni7.jsx";
import Muni8 from "./views/components/municipios/muni8.jsx";
import Muni9 from "./views/components/municipios/muni9.jsx";
import Muni10 from "./views/components/municipios/muni10.jsx";
import Muni11 from "./views/components/municipios/muni11.jsx";
import Muni12 from "./views/components/municipios/muni12.jsx";
import Muni13 from "./views/components/municipios/muni13.jsx";



import CustomComponents from "./views/custom-components/custom-components.jsx";
import FormCustomComponents from "./views/custom-components/form";

import '../src/views/components/loader.css';
import Loader from '../src/views/components/Loader.jsx';
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

            <Route 
                 
                 path="/castelli" 
                 render={props => (
                 <Muni1
                 {...props}
                 />
             )}
             />
             <Route 
                 
                 path="/san-martin" 
                 render={props => (
                 <Muni2
                 {...props}
                 />
             )}
             />
             <Route 
                 
                 path="/villa-angela" 
                 render={props => (
                 <Muni3
                 {...props}
                 />
             )}
             />
             <Route 
                 
                 path="/charata" 
                 render={props => (
                 <Muni4
                 {...props}
                 />
             )}
             />
             <Route 
                 
                 path="/margarita" 
                 render={props => (
                 <Muni5
                 {...props}
                 />
             )}
             />
              <Route 
                 
                 path="/machagai" 
                 render={props => (
                 <Muni6
                 {...props}
                 />
             )}
             />
              <Route 
                 
                 path="/plaza" 
                 render={props => (
                 <Muni7
                 {...props}
                 />
             )}
             />
              <Route 
                 
                 path="/fontana" 
                 render={props => (
                 <Muni8
                 {...props}
                 />
             )}
             />
              <Route 
                 
                 path="/barranqueras" 
                 render={props => (
                 <Muni9
                 {...props}
                 />
             )}
             />
               <Route 
                 
                 path="/pinedo" 
                 render={props => (
                 <Muni10
                 {...props}
                 />
             )}
             />
              <Route 
                 
                 path="/vilelas" 
                 render={props => (
                 <Muni11
                 {...props}
                 />
             )}
             />
               <Route 
                 
                 path="/elisa" 
                 render={props => (
                 <Muni12
                 {...props}
                 />
             )}
             />
                 <Route 
                 
                 path="/corzuela" 
                 render={props => (
                 <Muni13
                 {...props}
                 />
             )}
             />
           
            </Switch>
        </BrowserRouter>

);
    }
export default App;
