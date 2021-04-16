import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Container, Row, Col } from 'reactstrap';
// core components
import HeaderCapacitaciones from "../../components/header/headerCapacitaciones";
import HeaderBannerCapacitaciones from "../../components/banner/bannerCapacitaciones.jsx";
import Footer3 from "../../components/footer/footer3.jsx";
import CardCategorias from "../custom-components/sections/cardCategorias";
import Cursosfuturos from "../custom-components/sections/cursosfuturos";
import CardCursos from "../custom-components/sections/cardCursos";
import BlogComponent from "./informatorioCapacitaciones";

import {
    Card,
    CardTitle,
    CardText,
    CardGroup,
    CardBody
} from 'reactstrap'

import img1 from '../../assets/images/capacitaciones/iconoGratis.svg';
import img2 from '../../assets/images/capacitaciones/iconoCertificados.svg';
import img3 from '../../assets/images/capacitaciones/iconoTutorados.svg';
import img4 from '../../assets/images/capacitaciones/iconoHorarios.svg';
import imgInfo from '../../assets/images/capacitaciones/logoCapHeaderv1.png';


const CapacitacionesDemo = (props) => {
    const [categoria, setCategoria] = React.useState(props.location.categoria?props.location.categoria:'Todos')
    return (
        <div>
            <HeaderCapacitaciones />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBannerCapacitaciones />
                    <Row className="justify-content-center">
                                            <img src={imgInfo} alt="img" className="img-responsive img-thumbnail imgResponsiveInformatMun imgResponsiveInformatCap imgResponsiveInformatCapHeader" width="200" />

                                            </Row>
                    <div className="spacer-Header spacer-HeaderCap">
                        <Container className="containerPCap">
                            <Row xs="2">
                                <Col lg="6" className="">
                                    <section className="text-gray-600 body-font">
                                        <div className="ResponsiveHiddenCapacitaciones">
                                            {/* <Row className="justify-content-center">
                                            <img src={imgInfo} alt="img" className="img-responsive img-thumbnail imgResponsiveInformatMun imgResponsiveInformatCap" width="200" />

                                            </Row> */}
                                            <Row className="justify-content-center">
                                                <h1 className="text-center  titulo1ContResponsiveModificado">Cursos para tu formación laboral y emprendedora
                                                </h1>
                                            </Row>
                                            <hr class="justify-content-center lineaCopada" />
                                            <Row className="justify-content-center">
                                                <p className="text-center parrafoCursos">Desde el Gobierno del Chaco ponemos a tu disposición una plataforma online de capacitaciones con cursos cortos,
                                                dinámicos y entretenidos para que puedas desarrollar tus
                                                capacidades, mejorar tus posibilidades para conseguir empleo, e iniciar o fortalecer tu emprendimiento.

                                                            </p>
                                                {/* <p className="text-center parrafoCursos">Buscamos que cada persona de la comunidad chaqueña encuentre inspiración y herramientas concretas para
                                                    mejorar su situación laboral. Acompañarte en tu
                                                    desarrollo personal, en el mejoramiento de tu presente
                                                    y la construcción de tu futuro es lo que nos moviliza.

                                                            </p> */}
                                            </Row>
                                            <Row className="justify-content-center">
                                                {/* <img src={img7} alt="img" className="img-responsive img-thumbnail imgResponsiveInformat imgResponsiveInformatMod" width="200" /> */}
                                                <p className="text-center parrafoCursos">Trabajamos para que cada persona de la comunidad
                                                chaqueña encuentre inspiración y herramientas concretas para mejorar su situación laboral. Acompañarte en tu
                                                desarrollo personal, en el mejoramiento de tu presente y la construcción de tu futuro es lo que nos moviliza.
                                                    </p>
                                            </Row>
                                            {/* <Row className="justify-content-center">
                                                <Link className="linkRedirecciones" to="/informatorio">
                                                    <Card className="card-reqBoton cardReqBotonCap cardReqBotonCapMargin cardReqBotonCapMarginModificado">
                                                        <CardBody className=" card-body-reqBtn">
                                                            <Col>
                                                                <span to="/informatorio" className="img-ho cont-img cont-img1BtnCap"><img src={img5} alt="img" className="img-responsive img-thumbnail img-redireccionesBtn" width="200" /></span>
                                                                <Col className="colbtnBtnEmpleo">
                                                                    <h5 className="font-medium m-b-0 tituloBtnSP titulo-requerimientosBtn">Quiero capacitarme</h5>
                                                                </Col>
                                                                <span to="/informatorio" className="img-ho cont-img cont-img2Btn"><img src={img6} alt="img" className="img-responsive img-thumbnail img-redireccionesBtn2" width="200" /></span>
                                                            </Col>
                                                        </CardBody>
                                                    </Card>
                                                </Link>
                                            </Row> */}
                                        </div>
                                        {/* <Row className="justify-content-center">
                                        <h1 className="text-center  titulo1ContResponsiveModificado">Te brindamos cursos para tu formación laboral y emprendedora
                                            </h1>
                                        </Row> */}
                                        <Container>
                                            <div className="container px-5 py-24 mx-auto cont1Izq contIzqResponsive contIzqTop">
                                                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft tituloHiddenCap">
                                                    <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 titulo1ContCap">Cursos para tu formación laboral y emprendedora

                                            </h1>

                                                </div>
                                                <hr className="lineaEscritorioHidden"/>
                                                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftP parrafoHiddenCap">
                                                    <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">Desde el Gobierno del Chaco ponemos a tu disposición una plataforma online de capacitaciones con cursos cortos,
                                                    dinámicos y entretenidos para que puedas desarrollar tus
                                                    capacidades, mejorar tus posibilidades para conseguir empleo, e iniciar o fortalecer tu emprendimiento.

                                            </p>
                                                </div>
                                                {/* <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContLeftP parrafoHiddenCap">
                                                <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">Buscamos que cada persona de la comunidad chaqueña encuentre inspiración y herramientas concretas para
                                                mejorar su situación laboral. Acompañarte en tu
                                                desarrollo personal, en el mejoramiento de tu presente
                                                y la construcción de tu futuro es lo que nos moviliza.

                                            </p>
                                            </div> */}
                                            </div>
                                        </Container>


                                    </section>
                                </Col>
                                <Row md="8" lg="12" className="colRequerimientosCap colRequerimientosCapTop">
                                    {/* <Row className="imagenInfo ComponentHiddenRepsonsive">
                                        <img src={img7} alt="img" className="img-responsive img-thumbnail imgResponsiveInformat" width="200" />
                                    </Row> */}
                                    <Row className="textoInfo ComponentHiddenRepsonsive" >
                                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto contLeft ContDereCap">
                                            <p className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 parrafo1Cont">Trabajamos para que cada persona de la comunidad
                                            chaqueña encuentre inspiración y herramientas concretas para mejorar su situación laboral. Acompañarte en tu
                                            desarrollo personal, en el mejoramiento de tu presente y la construcción de tu futuro es lo que nos moviliza.

                                            </p>
                                        </div>
                                    </Row>
                                    {/* 
                                    <Link className="linkRedirecciones ComponentHiddenRepsonsive" to="/informatorio">
                                        <Card className="card-reqBoton cardReqBotonCap cardReqBotonCapMargin">
                                            <CardBody className=" card-body-reqBtn">
                                                <Col>
                                                    <span to="/informatorio" className="img-ho cont-img cont-img1BtnCap"><img src={img5} alt="img" className="img-responsive img-thumbnail img-redireccionesBtn" width="200" /></span>
                                                    <Col className="colbtnBtnEmpleo">
                                                        <h5 className="font-medium m-b-0 tituloBtnSP titulo-requerimientosBtn">Quiero capacitarme</h5>
                                                    </Col>
                                                    <span to="/informatorio" className="img-ho cont-img cont-img2Btn"><img src={img6} alt="img" className="img-responsive img-thumbnail img-redireccionesBtn2" width="200" /></span>
                                                </Col>
                                            </CardBody>
                                        </Card>
                                    </Link> */}
                                </Row>
                            </Row>
                        </Container>
                        <div className="container-fluid segContRed">
                            <Container className="containerInfoCursosCap">
                                <CardGroup>
                                    <Card className="cardsecondContRed">
                                        {/* <CardImg top width="100%" src={img1} alt="Card image cap" className="cardImgRed" /> */}
                                        <CardBody className="d-flex no-block cardBodyRed">
                                            <Col class="col-md-2">
                                                <div className="m-r-20"><img src={img1} width="55" className="rounded" alt="img" /></div>

                                            </Col>
                                            <Col className="col-md-10 colDescripcionInfo colDescripcionInfoResponsive">
                                                <Row className="justify-content-left">
                                                    <CardTitle className="card-title-red card-title-redResponsive" tag="h5">Gratuitos</CardTitle>
                                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                                    <hr className="lineaCard lineaCard1 linaDescripcionREsponsiveCap" />
                                                    <CardText className="card-sub-title-red card-sub-title-redResponsive">Se trata de una inversión que realizan 1.200.000 chaqueñas y chaqueños para el desarrollo laboral de la población.</CardText>
                                                </Row>
                                            </Col>
                                        </CardBody>
                                    </Card>
                                    <Card className="cardsecondContRed">
                                        {/* <CardImg top width="100%" src={img1} alt="Card image cap" className="cardImgRed" /> */}
                                        <CardBody className="d-flex no-block cardBodyRed">
                                            <Col class="col-md-2">
                                                <div className="m-r-20"><img src={img2} width="55" className="rounded" alt="img" /></div>

                                            </Col>
                                            <Col className="col-md-10 colDescripcionInfo colDescripcionInfoResponsive">
                                                <Row className="justify-content-left">
                                                    <CardTitle className="card-title-red card-title-redResponsive" tag="h5">Certificados</CardTitle>
                                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                                    <hr className="lineaCard lineaCard2  linaDescripcionREsponsiveCap" />
                                                    <CardText className="card-sub-title-red card-sub-title-redResponsive">Por cada curso que finalices obtendrás un certificado validado por el Ministerio de Producción, Industria y Empleo de la
                                                    provincia del Chaco. Cada certificación es personalizada, con un identificador único que sirve para verificar su autenticidad.
                                                    </CardText>
                                                </Row>
                                            </Col>
                                        </CardBody>
                                    </Card>
                                </CardGroup>
                                <CardGroup>
                                    <Card className="cardsecondContRed">
                                        {/* <CardImg top width="100%" src={img1} alt="Card image cap" className="cardImgRed" /> */}
                                        <CardBody className="d-flex no-block cardBodyRed">
                                            <Col class="col-md-2">
                                                <div className="m-r-20"><img src={img3} width="55" className="rounded" alt="img" /></div>

                                            </Col>
                                            <Col className="col-md-10 colDescripcionInfo colDescripcionInfoResponsive">
                                                <Row className="justify-content-left">
                                                    <CardTitle className="card-title-red  card-title-redResponsive" tag="h5">Tutorados</CardTitle>
                                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                                    <hr className="lineaCard lineaCard3  linaDescripcionREsponsiveCap" />
                                                    <CardText className="card-sub-title-red card-sub-title-redResponsive">Tendrás el acompañamiento de una persona que te facilitará el proceso de aprendizaje, guiándote en el recorrido, y aclarando todas las dudas que tengas.</CardText>
                                                </Row>
                                            </Col>
                                        </CardBody>
                                    </Card>
                                    <Card className="cardsecondContRed">
                                        {/* <CardImg top width="100%" src={img1} alt="Card image cap" className="cardImgRed" /> */}
                                        <CardBody className="d-flex no-block cardBodyRed">
                                            <Col class="col-md-2">
                                                <div className="m-r-20"><img src={img4} width="55" className="rounded" alt="img" /></div>

                                            </Col>
                                            <Col className="col-md-10 colDescripcionInfo colDescripcionInfoResponsive">
                                                <Row className="justify-content-left">
                                                    <CardTitle className="card-title-red card-title-redResponsive" tag="h5">Sin días y horarios fijos</CardTitle>
                                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                                    <hr className="lineaCard lineaCard4  linaDescripcionREsponsiveCap" />
                                                    <CardText className="card-sub-title-red card-sub-title-redResponsive">Podrás realizarlo manejando tus propios tiempos, pero siempre
                                                    tendrás objetivos semanales que cumplir.
                                                    </CardText>
                                                </Row>
                                            </Col>
                                        </CardBody>
                                    </Card>
                                </CardGroup>
                            </Container>
                        </div>
                        {
                            categoria === 'categoria' ?
                                <CardCategorias
                                cursosAndCategias = {props.cursosAndCategias}
                                changeCategory={(categ) => {
                                        setCategoria(categ)
                                    }}
                                />
                                :
                                <CardCursos
                                    categoria={categoria}
                                    cursosAndCategias = {props.cursosAndCategias}
                                />
                        }
                        <Cursosfuturos />
                    </div>
                    
                </div>
            </div>
                <div>
                <BlogComponent />
                {/* <Footer3 /> */}
                </div>
            
     
        </div>
    );
}

CapacitacionesDemo.propTypes = {
    classes: PropTypes.object
};

export default CapacitacionesDemo;
