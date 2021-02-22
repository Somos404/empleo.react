import React from "react";
import PropTypes from "prop-types";



// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
   

import Footer from "../../components/footer/footer.jsx";
import Footer2 from "../../components/footer/footer2.jsx";


// secciones

import PortfolioComponent from "../custom-components/sections/portfoliocomponent";
import Redirecciones from "../custom-components/sections/redirecciones";
import Sumate from "../custom-components/sections/sumatecomponent";
import Postulate from "../custom-components/sections/postulatecomponent";

import './loader.css';
import Loader from './Loader';


const Components = (props) => {
    return (
        <div id="main-wrapper">
            <Header />
       
            <div className="page-wrapper">
                <div className="container-fluid">
               
                    <HeaderBanner />           
                    <Redirecciones />
                    <PortfolioComponent />
                    <Sumate />
                    <Postulate />
                    <Footer /> 
                </div>
            </div>
            
            <Footer2 /> 
        </div>
    );
}

Components.propTypes = {
    classes: PropTypes.object
};

export default Components;
