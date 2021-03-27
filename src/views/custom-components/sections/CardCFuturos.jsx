import React from 'react';
import { Col } from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import 'animate.css/animate.min.css'

const Card = (props) => {
    const classes = useStyles();

    return (
        <Col lg="3" md="6" className="m-b-30 animate__animated animate__backInUp animate__delay-.5s">
            <Col md="12" className={`col-md-12 heightWidthCard ${props.imgUrl}`}>
                <div className={`cards-inline ${classes.card}`}>
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
