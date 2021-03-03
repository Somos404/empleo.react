import React from 'react';
import {Col} from 'reactstrap';
import 'animate.css/animate.min.css'

const Card = (props) => {
    return (
        <Col lg="3" md="6" className="m-b-30 animate__animated animate__backInUp animate__delay-.5s">
            <Col md="12" className={`col-md-12 ${props.imgUrl}`}>
                <div className="cards-inline">
                    <div className="card-img-overlay"  >
                        <ul className="list-inline list-inlineRedes">
                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                        <ul className="list-inline list-inlineinfo">
                            <li className="list-inline-item"><a href="#"><h5 className="title font-medium">{props.titulo}</h5></a></li>
                            <li className="list-inline-item"><a href="#"><p>{props.descripcion}</p></a></li>
                            <li className="list-inline-item"><a className="btn btn-info-gradiant btn-md btn-arrow m-t-20  inline-itemBtn" href="#"><span>Más info<i className="ti-arrow-right"></i></span></a></li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Col>
    );
};

export default Card;
