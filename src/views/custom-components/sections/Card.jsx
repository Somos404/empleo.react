import React from 'react';
import {Col} from 'reactstrap';
import {
    FacebookIcon,
    TwitterIcon,
  } from "react-share";

import {
    FacebookShareButton,
    TwitterShareButton,
} from "react-share";

import { Link } from "react-router-dom";
import 'animate.css/animate.min.css'

const Card = (props) => {
    return (
        <Col lg="3" md="6" className="m-b-30 animate__animated animate__backInUp animate__delay-.5s">
            <Col md="12" className={`col-md-12 ${props.imgUrl}`}>
                <div className="cards-inline">
                    <div className="card-img-overlay"  >
                        <ul className="list-inline list-inlineRedes">
                            <li className="list-inline-item">
                                <a>
                                    <FacebookShareButton
                                        url={props.UrlToRedirect}
                                        quote={props.titulo}
                                        className="Demo__some-network__share-button"
                                    >
                                        <FacebookIcon 
                                            size={32}
                                            borderRadius={45}
                                        />
                                    </FacebookShareButton>
                                </a>
                            </li>
                            <li>  
                                <a>
                                    <TwitterShareButton
                                        url={props.UrlToRedirect}
                                        title={props.titulo}
                                        className="Demo__some-network__share-button"
                                    >
                                        <TwitterIcon 
                                            size={32}
                                            borderRadius={45}
                                        />
                                    </TwitterShareButton>
                                </a>
                            </li>
                            <li>  
                                <a>
                                    <TwitterShareButton
                                        url={props.UrlToRedirect}
                                        title='test'
                                        className="Demo__some-network__share-button"
                                    >
                                        <TwitterIcon 
                                            size={32}
                                            borderRadius={45}
                                        />
                                    </TwitterShareButton>
                                </a>
                            </li>
                        </ul>
                        <ul className="list-inline list-inlineinfo">
                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">{props.titulo}</h5></a></li>
                            <li className="list-inline-item"><a href="#"><p>{props.descripcion}</p></a></li>
                            <li className="list-inline-item">
                                <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn">
                                    <span>
                                        <Link className="nav-link" to={props.UrlToRedirect}>Más info</Link>
                                        <i className="ti-arrow-right"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Col>
    );
};

export default Card;
