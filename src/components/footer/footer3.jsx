/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";

import img1 from "../../assets/images/logos/subse1.svg";
import img2 from "../../assets/images/capacitaciones/logosInfoCap.svg";
import img3 from "../../assets/images/logos/chaco1.svg";
import { makeStyles } from "@material-ui/core/styles";

const Footer3 = () => {
  const classes = useStyles();
  return (
    <div className="footer4 ">
      <Row className="contenedor-logos-footerInfoCap contenedor-logos-footerInfoCapResponsive contenedor-logos-footerInfoCapHeiht contenedor-logos-footerInfoCapResponsive1 contenedor-logos-footerInfoCapHeiht2">
        {/* <Col lg="12" md="12" sm="4" className="col-subse">  */}
        <div className="contenedor contenedor-min contenedor-minMarginTop">
          <img
            src={img3}
            alt="img"
            className={`${classes.logosImgSubse} imgRepsonsiveInfoCap imgRepsonsiveInfoCapWidth`}
          />
          <img
            src={img1}
            alt="img"
            className={`${classes.logosImgMin} imgRepsonsiveInfoCap imgRepsonsiveInfoCapWidth`}
          />
        </div>
        {/* </Col>  */}
      </Row>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  logosImgMin: {
    width: "15em",
    [theme.breakpoints.down("sm")]: {
      width: "10em",
    },
  },
  logosImgSubse: {
    width: "27em",
    [theme.breakpoints.down("sm")]: {
      width: "15em!important",
    },
  },
}));
export default Footer3;
