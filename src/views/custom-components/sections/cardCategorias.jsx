/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import FormControl from '@material-ui/core/FormControl';
/**Cursos */
import {cursosAndCategias} from '../../components/cursos/cursosAndCategias';
import 'animate.css/animate.min.css'

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Card from '../../custom-components/sections/Card'
import img from '../../../assets/images/cursos/card/Rectangulo.png'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    container:{
        position: 'relative',
        width: '100%',
        height: '40em',
    },
    sectionSearch:{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'absolute',
        height: '15em',
        width: '100%',
    },
    sectionCard:{
        zIndex: '9',
        position: 'absolute',
        marginTop: '10em',
        width: '100%',
        height: '15em',
    },
    inputProps: {
        color: '#6f7074',
        borderRadius: '50px',
        backgroundColor: '#ffffff'
    },
    titulo:{
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: '1em'
    },
    search:{
        marginTop: '1em',
        marginBottom: '5em'
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


const CardCursos = (props) => {
    const classes = useStyles();

    const desk = useMediaQuery('(min-width:992px)');
    const table = useMediaQuery('(max-width:992px)');
    const mobile = useMediaQuery('(max-width:768px)');

    const setHeight = () => {
        // retorno la altura de cada card + el la separacien entre cada una dependiendo de la cantidad que se muestran en cada fila 
        //se muestran 4 por fila
        if(desk) return (((state.categoriasFiltradas.length>=4?Math.ceil((state.categoriasFiltradas.length)/4):1))*235)+200+(Math.ceil((state.categoriasFiltradas.length/4)*30))  
        //se muestran 4 por fila
        if(table && !mobile) return (((state.categoriasFiltradas.length>=2?Math.ceil((state.categoriasFiltradas.length)/2):1))*235)+200+(Math.ceil((state.categoriasFiltradas.length/2)*30))
        //se muestran 4 por fila
        if(mobile) return ((state.categoriasFiltradas.length)*235)+200+(Math.ceil((state.categoriasFiltradas.length)*30))
    }

    const [state, setState] = React.useState({
        search: '',
        categoriasFiltradas: cursosAndCategias,
        filtroCategoria: []
    });


    const searchFilter = (event) => {
        
        setState({
            ...state,
            search: event.target.value,
            categoriasFiltradas: cursosAndCategias.filter(
                function (list) 
                {
                    return list.categoria.toUpperCase().includes(event.target.value.toUpperCase())
                })
        });
    
        
    }

    return (
        <div className="team2" style={{position: 'relative',width: '100%',height: `${setHeight()}px`}}>
            <div className={classes.sectionSearch}>
                <Row className="justify-content-center">
                    <Col md="12" className="text-center">
                        <h1 className={classes.titulo}>Busca tu categoria</h1>
                        <div className={classes.search}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <OutlinedInput
                                    className={classes.inputProps}
                                    id="outlined-adornment-weight"
                                    placeholder='Buscar...'
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
                    </Col>
                </Row>
            </div>
            <div  className={classes.sectionCard}>
                <section>
                    <div>
                        <Container className="containerCardCategorias">
                            <Row className="m-t-30 justify-content-center">
                                {
                                    state.categoriasFiltradas.map(({categoria, imgUrl}, i) =>  (
                                        <Card
                                            changeCategory={props.changeCategory}
                                            key={i+'cardsCategoria'}
                                            infoCursos={{
                                                categoria: categoria, 
                                                titulo: categoria,
                                                nombre: categoria,
                                                imgUrl: imgUrl,
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
        </div>
    )

   /*  return (
        <div className="team2">
            <Container className="containerCardCategorias">
                <div className={classes.root}>
                    <AppBar position="static" className={classes.appbar}>
                        <Toolbar >
                            <Typography className={classes.title} variant="h6" noWrap>
                                {state.categoriasFiltradas.length?state.categoriasFiltradas.length:'0'} Categorias
                            </Typography>
                            <div className={classes.search}>
                                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                    <OutlinedInput
                                        className={classes.textColor}
                                        id="outlined-adornment-weight"
                                        placeholder='Buscar...'
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
                <Row className="m-t-30 justify-content-around">
                    {
                        state.categoriasFiltradas.map(({categoria, imgUrl}, i) =>  (
                            <Card
                                changeCategory={props.changeCategory}
                                key={i+'cardsCategoria'}
                                titulo={categoria}
                                imgUrl={imgUrl} 
                                UrlToRedirect={categoria}
                                from= {true}
                            />
                            
                        ))
                        
                    }
                </Row>
            </Container>
        </div> 
    ); */
}

export default CardCursos;
