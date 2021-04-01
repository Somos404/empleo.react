/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col, Container } from 'reactstrap';
import FormControl from '@material-ui/core/FormControl';
import 'animate.css/animate.min.css'

import clsx from 'clsx';
import CardCFuturos from '../../custom-components/sections/CardCFuturos'
import { cursosFuturos } from '../../components/cursos/cursosFuturos';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const CardCursos = (props) => {

    const [state, setState] = React.useState({
        show : false,
        text : 'VER MÁS CURSOS'
    })
    const classes = useStyles(state.show);
    return (
        <div className={`${classes.container} team2`} /* style={{position: 'relative',width: '100%',height: `${setHeight()}px`}} */>
            <div className='m-b-20'>
                <Row className="justify-content-center">
                    <Col md="12" className="text-center">
                        <div className={classes.search}>
                            <FormControl className={clsx(classes.margin, classes.textField), classes.formControl} variant="outlined">
                                <Button
                                    onClick={() => {
                                        setState({
                                            show: !state.show,
                                            text: state.text === 'VER MÁS CURSOS'?'VER MENOS CURSOS':'VER MÁS CURSOS'
                                        })
                                    }}
                                    className={classes.button}
                                    size="large"
                                    endIcon={
                                        state.show?
                                        <ExpandLessIcon />
                                        :
                                        <ExpandMoreIcon />
                                    }
                                >
                                    {state.text}
                                </Button>
                            </FormControl>
                        </div>
                    </Col>
                </Row>
            </div>
            {
                state.show &&
                <div className={classes.sectionCard}>
                    <section>
                        <div>
                            <Container className="containerCardCategorias">
                                <Row>
                                    {
                                        cursosFuturos.map((curso, i) => (
                                            <CardCFuturos
                                                key={i + 'cards'}
                                                imgUrl={curso.imgUrl}
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

const useStyles = makeStyles((theme, show) => ({
    container: {
        width: '100%',
    },
    button: {
        color: 'white',
        height: '4em',
        Width: '20em',
        borderRadius: '50px',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, rgba(212,17,131,1) 4%, rgba(44,176,207,1) 100%)',
        "& .MuiButton-endIcon": {
            marginLeft: '4em',
            marginRight: -30
        },

        "&:focus":
            { outline: 0 }

    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        color: '#6f7074',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: '#6f7074',
    },

    formControl: {
        minWidth: '20em',
        margin: '.5em'
    },
}));

export default CardCursos;
