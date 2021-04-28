/* eslint-disable */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Row, Col, Card, Container } from 'reactstrap';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import img1 from '../../../assets/images/capacitaciones/icono01InfoCap.svg';
import img2 from '../../../assets/images/capacitaciones/icono02InfoCap.svg';
import img3 from '../../../assets/images/capacitaciones/icono03InfoCap.svg';
import img4 from '../../../assets/images/capacitaciones/icono04InfoCap.svg';
import img5 from '../../../assets/images/capacitaciones/lineaInforCap.svg';
import img6 from '../../../assets/images/capacitaciones/lineaInforCap2.svg';
import img7 from '../../../assets/images/capacitaciones/lineaInforCap3.svg';
import img8 from '../../../assets/images/capacitaciones/lineaInforCap4.svg';
import imgInfo from '../../../assets/images/capacitaciones/logo_membrete.png';





const useStyles = makeStyles((theme) => ({
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
    }

}));
const CardInformatorio = (props) => {
    const classes = useStyles();
    const desk = useMediaQuery('(min-width:992px)');
    const table = useMediaQuery('(max-width:992px)');
    const mobile = useMediaQuery('(max-width:768px)');
    const [curso, setCurso] = useState(props.curso);
    const iconoCard = [img1, img2, img3, img4];
    const lineaCard = [img5, img6, img7, img8];
    // console.log(iconoCard);
    return (
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
     );
}

export default CardInformatorio;