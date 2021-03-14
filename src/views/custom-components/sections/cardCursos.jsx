/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
/**Cursos */
import {cursosAndCategias} from '../../components/cursos/cursosAndCategias';
import 'animate.css/animate.min.css'

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Card from '../../custom-components/sections/Card'
import img from '../../../assets/images/cursos/card/Rectangulo.png'

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
        backgroundColor: '#ffffff',
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
        minWidth: '15em',
    },
}));


const filtro = (Arr, value) => {
    if(value === ''){
        let array = []
        Arr.forEach(element => {
            array = array.concat(element.cursos);
        });
        return array
    }else{
        return Arr.find(e => e.categoria === value).cursos
    }
}

const CardCursos = (props) => {

    const classes = useStyles();

    const [state, setState] = React.useState({
        categoria: props.categoria,
        search: '',
        name: 'hai',
        cursosFiltrados: filtro(cursosAndCategias, props.categoria)
    });

    const searchFilter = (event) => {
        
        setState({
            ...state,
            search: event.target.value,
            cursosFiltrados: filtro(cursosAndCategias, state.categoria).filter(
                function (list) 
                {
                    return list.nombre.toUpperCase().includes(event.target.value.toUpperCase())
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
            cursosFiltrados: filtro(cursosAndCategias, event.target.value)
        });
    };

    return (
        <div className="team2" style={{position: 'relative',width: '100%',height: `${(state.cursosFiltrados.length>4?state.cursosFiltrados.length/4:2)*15}em`}}>
            <div className={classes.sectionSearch}>
                <Row className="justify-content-center">
                    <Col md="12" className="text-center">
                        <h1 className={classes.titulo}>Seleccioná tu curso</h1>
                        <div className={classes.search}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <Select
                                    className={classes.inputProps}
                                    value={state.categoria}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem value="">
                                    Todos
                                </MenuItem>
                                {
                                    cursosAndCategias.map((e, i) =>  (
                                        <MenuItem key={i+'MenuItemdropdow'} value={e.categoria}>{e.categoria}</MenuItem>
                                    ))
                                }
                                </Select>
                            </FormControl>
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
                            <Row className="m-t-30 ">
                                {
                                    state.cursosFiltrados.map((curso, i) =>  (
                                        <Card
                                            key={i+'cards'}
                                            categoria={state.categoria}
                                            infoCursos = {curso}
                                            imgUrl={curso.imgUrl} 
                                            UrlToRedirect={curso.UrlToRedirect}
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
        <div className="spacer team2">
            <Container className="containerCardCategorias">
                <div className={classes.root}>
                    <AppBar position="static" className={classes.appbar}>
                        <Toolbar>
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
                                    <em>Todos</em>
                                </MenuItem>
                                {
                                    cursosAndCategias.map((e, i) =>  (
                                        <MenuItem key={i+'MenuItemdropdow'} value={e.categoria}>{e.categoria}</MenuItem>
                                    ))
                                }
                                </Select>
                            </FormControl>
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
                <Row className="m-t-30 ">
                    {
                        state.cursosFiltrados.map((curso, i) =>  (
                            <Card
                                key={i+'cards'}
                                categoria={state.categoria}
                                infoCursos = {curso}
                                imgUrl={curso.imgUrl} 
                                UrlToRedirect={curso.UrlToRedirect}
                            />
                        ))
                    }
                </Row>
            </Container>
        </div> 
    ) */
}

export default CardCursos;
