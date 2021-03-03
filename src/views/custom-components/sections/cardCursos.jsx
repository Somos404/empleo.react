/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
/**Cursos */
import {cursos} from '../../components/cursos/cursos';
import 'animate.css/animate.min.css'

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingLeft: '0px !Important',
      paddingRight: '0px !Important',
    },
    title: {
      flexGrow: 1,
      display: 'none',
      color: '#6f7074',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },

    textColor: {
        color: '#6f7074',
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
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const CardCursos = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        categoria: '',
        search: '',
        name: 'hai',
        cursosFiltrados: cursos
    });


    const searchFilter = (event) => {
        
        setState({
            ...state,
            search: event.target.value,
            cursosFiltrados: filtro(cursos, state.categoria).filter(
                function (list) 
                {
                    return list.titulo.toUpperCase().includes(event.target.value.toUpperCase())
                })
        });
    
        
    }

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            categoria: event.target.value,
            search: '',
            [name]: event.target.value,
            cursosFiltrados: filtro(cursos, event.target.value)
        });
    };

    const filtro = (Arr, value) => {
        if(value === ''){
            return cursos
        }else{
        return Arr.filter(
            function (list) 
            {
                return list.categoria === value
            })
        }
    }

    return (
        <div>
            {/* <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Team</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div> */}

        

            <div className="spacer team2">
          
                <Container>
                    <div className={classes.root}>
                        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
                            <Toolbar className="toolbarPadin">
                                <Typography className={classes.title} variant="h6" noWrap>
                                    {state.cursosFiltrados.length?state.cursosFiltrados.length:'0'} Cursos
                                </Typography>

                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel className={classes.textColor} id="demo-simple-select-outlined-label">Categoria</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={state.categoria}
                                        onChange={handleChange}
                                        label="Categoria"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {
                                            cursos.filter((v,i,a)=>a.findIndex(t=>(t.categoria === v.categoria))===i).map(({categoria}, i) => (
                                                <MenuItem key={i+'MenuItemdropdow'} value={categoria}>{categoria}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                                <div className={classes.search}>
                                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                        <OutlinedInput
                                            className={classes.textColor}
                                            id="outlined-adornment-weight"
                                            onChange={searchFilter}
                                            value={state.search}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                  <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                  >
                                                    <SearchIcon />
                                                  </IconButton>
                                                </InputAdornment>
                                              }
                                            aria-describedby="outlined-weight-helper-text"
                                            inputProps={{
                                            'aria-label': 'weight',
                                            }}
                                            labelWidth={0}
                                        />
                                    </FormControl>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </div>
                    <Row className="m-t-30">
                        {
                            state.cursosFiltrados.map(({titulo, descripcion, imgUrl, facebook, twitter, instagram, behance}, i) => (
                                <Col lg="3" md="6" className="m-b-30 animate__animated animate__backInUp animate__delay-.5s" key={i+'cards'}>
                                    <Col md="12" className={`col-md-12 ${imgUrl}`}>
                                        <div className="cards-inline">
                                            <div className="card-img-overlay"  >
                                                <ul className="list-inline list-inlineRedes">
                                                    <li className="list-inline-item"><a href={facebook}><i className="fa fa-facebook"></i></a></li>
                                                    <li className="list-inline-item"><a href={twitter}><i className="fa fa-twitter"></i></a></li>
                                                    <li className="list-inline-item"><a href={instagram}><i className="fa fa-instagram"></i></a></li>
                                                    <li className="list-inline-item"><a href={behance}><i className="fa fa-behance"></i></a></li>
                                                </ul>
                                                <ul className="list-inline list-inlineinfo">
                                                    <li className="list-inline-item"><a href="#"><h5 className="title font-medium">{titulo}</h5></a></li>
                                                    <li className="list-inline-item"><a href="#"><p>{descripcion}</p></a></li>
                                                    <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Col>
                            ))
                            }
                    </Row>
                </Container>
                </div> 
               
                {/* <Container>

                 
                    <Row className="m-t-30">
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="pro-pic t1">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t2">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t3">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t4">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    
                    <Row className="m-t-30">
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="pro-pic t1">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t2">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t3">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t4">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                   
                    <Row className="m-t-30">
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="pro-pic t1">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t2">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                        <ul className="list-inline list-inlineinfo">
                                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                            <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                           
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t3">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t4">
                                    <div className="card-img-overlay">
                                    <ul className="list-inline list-inlineRedes">
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                            <ul className="list-inline list-inlineinfo">
                                                <li className="list-inline-item"><a href="#"><h5 className="title font-medium">Desarrollo Web</h5></a></li>
                                                <li className="list-inline-item"><a href="#"><p>Descripción del curso Lorem Ipsum</p></a></li>
                                                <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                                            
                                            </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container> */}

                
           
        </div>
    );
}

export default CardCursos;
