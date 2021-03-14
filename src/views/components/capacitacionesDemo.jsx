import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Container, Row, Col } from 'reactstrap';
// core components
import Header from "../../components/header/header.jsx";
import HeaderBannerCapacitaciones from "../../components/banner/bannerCapacitaciones.jsx";
import Footer2 from "../../components/footer/footer2.jsx";
import CardCategorias from "../custom-components/sections/cardCategorias";
import CardCursos from "../custom-components/sections/cardCursos";

import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardGroup,
    CardBody
} from 'reactstrap'

import img1 from '../../assets/images/capacitaciones/iconoGratis.svg';
import img2 from '../../assets/images/capacitaciones/iconoCertificados.svg';
import img3 from '../../assets/images/capacitaciones/iconoTutorados.svg';
import img4 from '../../assets/images/capacitaciones/iconoHorarios.svg';

import img5 from '../../assets/images/oficios/flechaDer.svg';
import img6 from '../../assets/images/oficios/flachaIzq.svg';
import img7 from '../../assets/images/capacitaciones/logo_membrete.png';
import { Colorize } from "@material-ui/icons";



const CapacitacionesDemo = (props) => {
    const [categoria, setCategoria] = React.useState('')
    return (
        <div>
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBannerCapacitaciones />

                    <div className="spacer-Header">
                        <Container className="containerPCap">
                            <Row xs="2">
                                <Col lg="6" className="">
                                    <section className="text-gray-600 body-font">
                                        <div className="ResponsiveHiddenCapacitaciones">
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
                                                <hr />
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
                                                <div className="m-r-20"><img src={img1} width="70" className="rounded" alt="img" /></div>

                                            </Col>
                                            <Col className="col-md-10 colDescripcionInfo colDescripcionInfoResponsive">
                                                <Row className="justify-content-left">
                                                    <CardTitle className="card-title-red card-title-redResponsive" tag="h5">Gratuitos</CardTitle>
                                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                                    <hr className="lineaCard lineaCard1 lineaCard1Responsive" />
                                                    <CardText className="card-sub-title-red card-sub-title-redResponsive">Se trata de una inversión que realizan 1.200.000 chaqueñas y chaqueños para el desarrollo laboral de la población.</CardText>
                                                </Row>
                                            </Col>
                                        </CardBody>
                                    </Card>
                                    <Card className="cardsecondContRed">
                                        {/* <CardImg top width="100%" src={img1} alt="Card image cap" className="cardImgRed" /> */}
                                        <CardBody className="d-flex no-block cardBodyRed">
                                            <Col class="col-md-2">
                                                <div className="m-r-20"><img src={img2} width="70" className="rounded" alt="img" /></div>

                                            </Col>
                                            <Col className="col-md-10 colDescripcionInfo colDescripcionInfoResponsive">
                                                <Row className="justify-content-left">
                                                    <CardTitle className="card-title-red card-title-redResponsive" tag="h5">Certificados</CardTitle>
                                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                                    <hr className="lineaCard lineaCard2 lineaCard1Responsive2" />
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
                                                <div className="m-r-20"><img src={img3} width="70" className="rounded" alt="img" /></div>

                                            </Col>
                                            <Col className="col-md-10 colDescripcionInfo colDescripcionInfoResponsive">
                                                <Row className="justify-content-left">
                                                    <CardTitle className="card-title-red  card-title-redResponsive" tag="h5">Tutorados</CardTitle>
                                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                                    <hr className="lineaCard lineaCard3 lineaCard1Responsive3" />
                                                    <CardText className="card-sub-title-red card-sub-title-redResponsive">Tendrás el acompañamiento de una persona que te acompañará facilitando el proceso de aprendizaje, guiándote en el recorrido, y aclarando todas las dudas que tengas.</CardText>
                                                </Row>
                                            </Col>
                                        </CardBody>
                                    </Card>
                                    <Card className="cardsecondContRed">
                                        {/* <CardImg top width="100%" src={img1} alt="Card image cap" className="cardImgRed" /> */}
                                        <CardBody className="d-flex no-block cardBodyRed">
                                            <Col class="col-md-2">
                                                <div className="m-r-20"><img src={img4} width="70" className="rounded" alt="img" /></div>

                                            </Col>
                                            <Col className="col-md-10 colDescripcionInfo colDescripcionInfoResponsive">
                                                <Row className="justify-content-left">
                                                    <CardTitle className="card-title-red card-title-redResponsive" tag="h5">Sin días y horarios fijos</CardTitle>
                                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                                    <hr className="lineaCard lineaCard4 lineaCard1Responsive4" />
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
                        <div>
                            <div className="spacer bg-light">
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col md="7" className="text-center">
                                            <h1 className="title font-bold">Form Banner</h1>
                                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div className="bg-light">
                                <section>
                                    <div id="banner1" className="banner spacer">
                                        <Container>
                                            <Row>
                                                <Col lg="5" md="7" className="align-self-center">
                                                    <h2 className="title font-bold">Give your Business Real boost Now!</h2>
                                                    <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p>
                                                    <Form className="m-t-40">
                                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                                    </Form>
                                                </Col>
                                                <Col lg="6" md="5" className="align-self-center ml-auto">
                                                    <img src={banner} alt="We are Digital Agency" className="img-fluid" />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    categoria === '' ?
                        <CardCategorias
                            changeCategory={(categ) => {
                                setCategoria(categ)
                            }}
                        />
                        :
                        <CardCursos
                            categoria={categoria}
                        />
                }

            </div>
            <Footer2 />
        </div>
    );
}

CapacitacionesDemo.propTypes = {
    classes: PropTypes.object
};

export default CapacitacionesDemo;
