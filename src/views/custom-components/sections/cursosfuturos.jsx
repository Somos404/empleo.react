/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Row, Col, Container } from 'reactstrap';
import FormControl from '@material-ui/core/FormControl';
import 'animate.css/animate.min.css'

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Card from '../../custom-components/sections/Card'
import {cursosAndCategias} from '../../components/cursos/cursosAndCategias';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    container:{
        width: '100%',
    },
    button: {
        color: 'white',
        height: '4em',
        Width: '20em',
        borderRadius: '50px',
        border: '1px solid #707070',
        backgroundColor: '#ffffff',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, rgba(212,17,131,1) 4%, rgba(44,176,207,1) 100%)',
        "& .MuiButton-endIcon": {
            marginLeft: '5em',
            marginRight: -30
          }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      color:'#6f7074',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
        color:'#6f7074',
    },

    formControl: {
        minWidth: '20em',
        margin: '.5em'
    },
}));

const CardCursos = (props) => {

    const [show, setShow] = React.useState(false)
    const classes = useStyles();
    return (
        <div className={`${classes.container} team2`} /* style={{position: 'relative',width: '100%',height: `${setHeight()}px`}} */>
            <div className='m-b-20'>
                <Row className="justify-content-center">
                    <Col md="12" className="text-center">
                        <div className={classes.search}>
                            <FormControl className={clsx(classes.margin, classes.textField), classes.formControl} variant="outlined">
                                <Button
                                    onClick={()=> {
                                        setShow(!show)
                                    }}
                                    className={classes.button}
                                    size="large"
                                    endIcon={
                                        <ExpandMoreIcon />
                                    }
                                >
                                    VER MÁS CURSOS           
                                </Button>
                            </FormControl>
                        </div>
                    </Col>
                </Row>
            </div>
            {
                show &&                       
                <div  className={classes.sectionCard}>
                    <section>
                        <div>
                            <Container className="containerCardCategorias">
                                <Row>
                                {
                                            cursosAndCategias[0].cursos.map((curso, i) =>  (
                                                <Card
                                                    key={i+'cards'}
                                                    infoCursos = {{
                                                        ...curso, 
                                                        share: `https://empleo.chaco.gob.ar/capacitaciones-demo`
                                                    }}
                                                    from= {true}
                                                />
                                            ))
                                        }
                                </Row>
                            </Container>
                        </div>
                    </section>
                </div>
            }    
        </div>
    )
}

export default CardCursos;
