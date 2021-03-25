import React from 'react';
import { Col } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import {
    FacebookShareButton,
    TwitterShareButton,
} from "react-share";

import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import 'animate.css/animate.min.css'

const Card = (props) => {
    const classes = useStyles();

    return (
        <Col lg="3" md="6" className="m-b-30 animate__animated animate__backInUp animate__delay-.5s">
            <Col md="12" className={`col-md-12 heightWidthCard ${props.infoCursos.imgUrl}`}>
                <div className={`cards-inline ${classes.card}`}>
                    <div className="card-img-overlay"  >
                        <ul className="list-inline list-inlineRedes list-inlineRedesTop">
                            <li className="list-inline-item">
                                <a>
                                    <FacebookShareButton
                                        url= {props.share}
                                        quote={props.infoCursos.titulo}
                                        className="Demo__some-network__share-button"
                                    >

                                        <SocialIcon
                                            style={{ height: 35, width: 35 }}
                                            network="facebook"
                                            bgColor="#01B7E8"
                                            fgColor="white"
                                        />
                                    </FacebookShareButton>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <TwitterShareButton
                                        url={props.infoCursos.UrlToRedirect}
                                        title={props.infoCursos.titulo}
                                        className="Demo__some-network__share-button"
                                        target_blank
                                    >
                                        <SocialIcon
                                            style={{ height: 35, width: 35 }}
                                            network="twitter"
                                            bgColor="#01B7E8"
                                            fgColor="white"
                                        />
                                    </TwitterShareButton>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FacebookShareButton
                                        title='test'
                                        className="Demo__some-network__share-button"
                                    >
                                        <SocialIcon
                                            style={{ height: 35, width: 35 }}
                                            url="https://www.instagram.com/empleochaco/"
                                            bgColor="#01B7E8"
                                            fgColor="white"
                                        />
                                    </FacebookShareButton>
                                </a>
                            </li>
                        </ul>
                        <ul className="list-inline list-inlineinfo">
                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium tituloCardWeight"></h5></a></li>
                            {props.infoCursos.nombre.length > 25 
                            ?
                            <li className="list-inline-item"><a href="#"><p className="DescripcionCardWeight DescripcionCardWeightLarga">{props.infoCursos.nombre}</p></a></li>

                            :
                            <li className="list-inline-item"><a href="#"><p className="DescripcionCardWeight">{props.infoCursos.nombre}</p></a></li>
                            
                            }
                            {props.infoCursos.nombre.length > 25 
                            ?
                            <li className="list-inline-item itemBtn itembtnTop">
                                <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn btonCategoriaMargin">
                                    {
                                        props.from ?
                                            <span
                                                onClick={() => {
                                                    props.changeCategory(props.infoCursos.titulo)
                                                }}
                                            >
                                                <Link className="nav-link">Más info</Link>
                                                <i className="ti-arrow-right"></i>
                                            </span>
                                            :
                                            <span>
                                                <Link
                                                    className="nav-link"
                                                    to={{
                                                        pathname: `/curso/${props.infoCursos.categoria.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').replace(/\?/g, '').replace(/\¿/g, '')}/${props.infoCursos.nombre.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').replace(/\?/g, '').replace(/\¿/g, '')}`,
                                                        nombre: props.infoCursos.nombre,
                                                        /* search: "?sort=name",
                                                        hash: "#the-hash", */
                                                        curso: props.infoCursos
                                                    }}
                                                >
                                                    Más info
                                            </Link>
                                                <i className="ti-arrow-right"></i>
                                            </span>
                                    }

                                </a>
                            </li>
                            :
                            <li className="list-inline-item itemBtn itembtnTop itembtnTopLargo">
                                <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn btonCategoriaMargin">
                                    {
                                        props.from ?
                                            <span
                                                onClick={() => {
                                                    props.changeCategory(props.infoCursos.titulo)
                                                }}
                                            >
                                                <Link className="nav-link">Más info</Link>
                                                <i className="ti-arrow-right"></i>
                                            </span>
                                            :
                                            <span>
                                                <Link
                                                    className="nav-link"
                                                    to={{
                                                        pathname: `/curso/${props.infoCursos.categoria.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').replace(/\?/g, '').replace(/\¿/g, '')}/${props.infoCursos.nombre.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').replace(/\?/g, '').replace(/\¿/g, '')}`,
                                                        nombre: props.infoCursos.nombre,
                                                        /* search: "?sort=name",
                                                        hash: "#the-hash", */
                                                        curso: props.infoCursos
                                                    }}
                                                >
                                                    Más info
                                            </Link>
                                                <i className="ti-arrow-right"></i>
                                            </span>
                                    }

                                </a>
                            </li>}
                        </ul>
                    </div>
                </div>
            </Col>
        </Col>
    );
};

const useStyles = makeStyles((theme) => ({
    card: {
        flexGrow: 1,
        minHeight: '10 em'
    }
}));

export default Card;
