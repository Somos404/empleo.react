import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import FormControl from '@material-ui/core/FormControl';
import { Row, Col, Container } from 'reactstrap';
import {cursosAndCategias} from '../../components/cursos/cursosAndCategias';
import 'animate.css/animate.min.css'
import Card from '../../custom-components/sections/Card'
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    container:{
        width: '100%',
    },
    sectionCard:{
        width: '100%',
        height: '16em',
    },
    button: {
        color: '#6f7074',
        borderRadius: '50px',
        border: '1px solid #707070',
        backgroundColor: '#ffffff',
        fontWeight: 'bold',
    },
    formControl: {
        minWidth: '15em',
        margin: '.5em'
    },

   
}));


const Cursosfuturos = (props) => {

   
    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);
  
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
  
    return (

        <div className={`${classes.container} team2`} /* style={{position: 'relative',width: '100%',height: `${setHeight()}px`}} */>
            <div className={classes.sectionSearch}>
                <Row className="justify-content-center">
                    <Col md="12" className="text-center">
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Button
                                checked={checked} 
                                onClick={handleChange}
                                className={classes.button}
                                endIcon={
                                    <Icon>send</Icon>
                                }
                            >
                                Send
                            </Button>
                            
                        </FormControl>
                    </Col>
                </Row>
            </div>
            <Collapse in={checked}>
                <div  className={classes.sectionCard}>
                    <section>
                        <div>
                            <Container className="containerCardCategorias">
                                <Row className="m-t-30 m-b-30">
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
            </Collapse>
        </div>


       /*  <div className='team2 m-t-30'>
            <Row className="justify-content-center">
                <Col md="12" className="text-center">
                    <div className={`${classes.root} tema2`}>
                        <FormControlLabel
                            control={
                                <Switch checked={checked} onChange={handleChange} />
                            }
                            label="Show"
                        />
                    </div>
                </Col>
            </Row>
            <div  className={classes.sectionCard}>
                            <section>
                                <div>
                                    <Container className="containerCardCategorias">
                                        <Row className="m-t-30 ">
                                            {
                                                cursosAndCategias[0].cursos.map((curso, i) =>  (
                                                    <Collapse in={checked}>
                                                        <Card
                                                            key={i+'cards'}
                                                            infoCursos = {{
                                                                ...curso, 
                                                                share: `https://empleo.chaco.gob.ar/capacitaciones-demo`
                                                            }}
                                                            from= {true}
                                                        />
                                                    </Collapse>
                                                ))
                                            }
                                            </Row>
                                    </Container>
                                </div>
                            </section>
                        </div>
        </div> */
    );
}

export default Cursosfuturos;
