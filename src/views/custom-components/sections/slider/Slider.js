import React, { useState } from 'react';
import { Row, Col} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.scss';

const Slidercustom = (props) => {
    const classes = useStyles();
    const proppsslider = {
        autoplay: '10000',
    }
    return (
        <>
            <div className={classes.preslider}>
                <h1 className={classes.titleins}> 
                    Inscripciones abiertas
                </h1>
            </div>
            <Slider {...proppsslider}>
                {props.content.map((item, index) => (
                    <div
                        className={classes.contanerslider}
                        style={{background: `url(https://empleo.chaco.gob.ar/slider/${item.imgUrl}.png)`, backgroundSize: 'cover'}}
                        key={index+'slider'}
                    >
                        <Row className={`${classes.mainContaner} mx-5 center center`}>
                            <Col className={classes.colContaner}>
                                <h1 className={classes.title}>
                                    {item.title}
                                </h1>
                                <hr/>
                            </Col>
                            <Col className={classes.colContaner}>
                                <p className={classes.descripcion}>
                                    {item.descripcionLarga}
                                </p>
                            </Col>
                        </Row>
                    </div>
                ))}   
            </Slider>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    preslider:{
        height: '4em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2CB0CF',
        backgroundImage: 'linear-gradient(to right, #2CB0CF, #7d446e, #a5427c)'
    },
    titleins:{
        marginTop: '.5em',
        color: 'white', 
        fontWeight: '900', 
        fontSize: '1.7rem',
    },
    contanerslider:{
        //background: 'red',
        height: '15em'
    },
    mainContaner:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '17em'
    },
    colContaner:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color: 'white', 
        fontWeight: '900', 
        fontSize: '1.5rem', 
    },
    descripcion:{
        color: 'white', 
        fontSize: '1rem'  
    }
   
}));

export default Slidercustom;