import React from 'react';

import { Link } from 'react-router-dom';


import Header from "../../../components/header/header";

import Sidebar from '../../custom-components/sections/sidebar';


import { Row, Col, Container, Card } from 'reactstrap';


const cursosDashboard = () => {

    console.log(Sidebar);
    return (
        <div id="main-wrapper" className="contenedorGeneral">
            <Header />
            <div className="siderbarEscritorio">
                <Sidebar />
            </div>
        </div>
    );
}

export default cursosDashboard;