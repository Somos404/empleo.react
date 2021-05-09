/* eslint-disable */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Row, Col, Card, Container } from 'reactstrap';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import img1 from './slider/fondoSlider.png';
import img2 from '../../../assets/images/capacitaciones/icono02InfoCap.svg';
import img3 from '../../../assets/images/capacitaciones/icono03InfoCap.svg';
import img4 from '../../../assets/images/capacitaciones/icono04InfoCap.svg';
import img5 from '../../../assets/images/capacitaciones/lineaInforCap.svg';
import img6 from '../../../assets/images/capacitaciones/lineaInforCap2.svg';
import img7 from '../../../assets/images/capacitaciones/lineaInforCap3.svg';
import img8 from '../../../assets/images/capacitaciones/lineaInforCap4.svg';
import imgInfo from '../../../assets/images/capacitaciones/logo_membrete.png';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import "./slider.css";
import "./slider-animations.css";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
   
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
    // root: {
    //     '& > *': {
    //         margin: theme.spacing(1),
    //     },
    // },
    // extendedIcon: {
    //     marginRight: theme.spacing(1),
    // },
    botonFab: {
        color: "#fff",
        backgroundColor: "#0629F9 !important",
        width: "35px",
        height: "30px"
    },

   

}));
const SliderCapacitaciones = (props) => {
    const classes = useStyles();
    const desk = useMediaQuery('(min-width:992px)');
    const table = useMediaQuery('(max-width:992px)');
    const mobile = useMediaQuery('(max-width:768px)');
    const [curso, setCurso] = useState(props.curso);
    const iconoCard = [img1, img2, img3, img4];
    const lineaCard = [img5, img6, img7, img8];

    const theme = useTheme();

const content = [
	{
		title: 'Herramientas para el empleo',
		description:
		'En cuatro semanas vamos a compartir herramientas, saberes y sugerencias para favorecer tu inserciòn laboral. Abordaremos aquellos aspectos que son importantes a la hora de buscar trabajo, y profundizaremos en cuestiones que son valiosas al momento de acceder a un empleo',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
	},
	{
        title: 'Herramientas para el empleo',
		description:
		'En cuatro semanas vamos a compartir herramientas, saberes y sugerencias para favorecer tu inserciòn laboral. Abordaremos aquellos aspectos que son importantes a la hora de buscar trabajo, y profundizaremos en cuestiones que son valiosas al momento de acceder a un empleo',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
	},
	{
        title: 'Herramientas para el empleo',
		description:
		'En cuatro semanas vamos a compartir herramientas, saberes y sugerencias para favorecer tu inserciòn laboral. Abordaremos aquellos aspectos que son importantes a la hora de buscar trabajo, y profundizaremos en cuestiones que son valiosas al momento de acceder a un empleo',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
	}
];

    // console.log(iconoCard);
    return (
        <div>
   
             <Slider autoplay={3000}  className="slider-wrapper">
        {content.map((item, index) => (
            <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center`, height: '20em', marginTop: '3.5em', color: 'white' }}
            >
                 <div className="center">
                 <Row>
                    <Col className="colTituloSlider text-center">
                  
                    <h1 className="tituloSlider" style={{ 
                        padding: '2em', 
                        marginTop: '1em', 
                        color: 'white', 
                        fontWeight: '900', 
                        fontSize: '2rem', 
                        width: '13em' 
                    }} >{item.title}</h1>
                    <hr className="lineaSlider"/>
                    </Col>
                    <Col className="coldescripcionloSlider">
                    <p style={{ 
                        padding: '2em', 
                        marginLeft: '0em',
                         color: 'white', 
                         marginTop: '3.3em',  
                         width: '37em', 
                         textAlign: 'left', 
                         lineHeight: '1em',
                         fontSize: '1.2rem' 
                    }}>{item.description}</p>

                    </Col>
                </Row>
                 </div>
            
            </div>
        ))}
    </Slider>
        </div>
       
        /**
        <div>
            {
            curso && desk && 
            <Card className="capacitacionesInfoCard">
            <span className="img-ho contenedorImgCap"><img className="img-responsive img-thumbnail img-redirecciones img-InfoCap " src={iconoCard[props.pos]} alt="wrappixel kit" /></span>
            <div className="date-pos bg-info-gradiant imgAmarillaInfoCap"><span className="numeroCardInfoCap">0{props.pos+1}</span></div>
            <h5 className="font-medium m-t-30 tituloCardInfoCap"><Link to={`/capacitaciones/${curso.nombre.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').replace(/\?/g, '').replace(/\¿/g, '')}`} className="link">{curso.nombre}</Link></h5>
            <span className=" contenedorImgLineaCap contenedorImgLineaCap1"><img className="img-responsive img-thumbnail img-redirecciones imgLinea-InfoCap imgLinea-InfoCap1 img-responsiveInfoCapLinea" src={lineaCard[props.pos]} alt="wrappixel kit" /></span>

            <p className="m-t-20 paraffoInfoCap">{curso.descrip_card}</p>
            <Row className="justify-content-center">
                <Link 
                    to={`/capacitaciones/${curso.nombre.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').replace(/\?/g, '').replace(/\¿/g, '')}`}
                    >
                        <Fab className={classes.botonFab} aria-label="add">
                            <AddIcon />
                        </Fab>
                </Link>
            </Row>
            </Card>
            }
            {
            curso && mobile && 
            <Card className="capacitacionesInfoCard capacitacionesInfoCardResponsive">
            <Container ClassName="containerCardInforResponsive">
            <Row className="rowCardInforResponsive">
            <Col>
            <span className=" contenedorImgLineaCap contenedorImgLineaCap1"><img className="img-responsive img-thumbnail img-redirecciones imgLinea-InfoCap imgLinea-InfoCap1 img-responsiveInfoCapLinea img-redireccionesInfoCapResp" src={lineaCard[props.pos]} alt="wrappixel kit" /></span>
            </Col>
            <Col>
            <span className="img-ho contenedorImgCap contenedorImgCapInfResponsive"><img className="img-responsive img-thumbnail img-redirecciones img-InfoCap "  src={iconoCard[props.pos]} alt="wrappixel kit" /></span>
            </Col>
            </Row>
            
            </Container>
            
            <div className="date-pos bg-info-gradiant imgAmarillaInfoCap"><span className="numeroCardInfoCap">0{props.pos+1}</span></div>
            <h5 className="font-medium m-t-30 tituloCardInfoCap tituloCardInfoCapResponsive"><a href="#" className="link">{curso.nombre}</a></h5>
            <p className="m-t-20 paraffoInfoCap paraffoInfoCapResponsive">{curso.descrip_card}</p>
            <Row className="justify-content-center btnMasInfoCapRepsons">
                <Link to="/curso/Informatorio/Introducción-a-la-Programación">
                    <Fab className={classes.botonFab} aria-label="add">
                        <AddIcon />
                    </Fab>
                </Link>
            </Row>
            </Card>
            } 
     
        </div>
         */
    );
}

export default SliderCapacitaciones;