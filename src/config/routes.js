
import '../assets/scss/style.scss';

//import App from './App'
// pages for this product
import Components from "../views/components/components.jsx";
import Informatorio from "../views/components/informatorio.jsx";
import Capacitaciones from "../views/components/capacitaciones.jsx";
import Empleo from "../views/components/empleo.jsx";
import Emprendimientos from "../views/components/emprendimientos.jsx";
import Empresas from "../views/components/empresas.jsx";
import Oficios from "../views/components/oficios.jsx";
import Contacto from "../views/components/contacto.jsx";
import ContactoEmpresas from "../views/components/contactoEmpresas.jsx";

import Contacto1 from "../views/components/contactForm.js";



import CustomComponents from "../views/custom-components/custom-components.jsx";
import FormCustomComponents from "../views/custom-components/form";

const routes = [
    {
        path: "/",
        component: Components,
        exact: false,
        routes: [   
        
            {
                path: "/",
                component: Components,
                exact: true
            },
            {
                path: "/informatorio",
                component: Informatorio,
                exact: true
            },
            // {
            //     path: "/capacitaciones",
            //     component: Capacitaciones,
            //     exact: true
            // },
            {
                path: "/contact",
                component: Contacto,
                exact: true
            },
            {
                path: "/contacto-empresas",
                component: ContactoEmpresas,
                exact: true
            },
            {
                path: "/emprendimientos",
                component: Emprendimientos,
                exact: false
            },
            {
                path: "/oficios",
                component: Oficios,
                exact: false
            },
            {
                path: "/empresas",
                component: Empresas,
                exact: false
            },
            {
                path: "/empleo",
                component: Empleo,
                exact: true
            },
            
        ]
},
]
        export default routes