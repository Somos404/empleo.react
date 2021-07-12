import React, { useState } from "react";
import { Col } from "reactstrap";
import { SocialIcon } from "react-social-icons";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";

import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import "animate.css/animate.min.css";
import { Block } from "@material-ui/icons";

const CardCustom = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [isHovered, toggleHover] = useState(true);

  return (
    <Col
      lg="3"
      md="6"
      className="m-b-30 animate__animated animate__backInUp animate__delay-.5s"
      onMouseEnter={() => toggleHover(false)}
      onMouseLeave={() => toggleHover(true)}
    >
      <Col
        className="col-md-12 heightWidthCard pro-pic"
        style={{
          backgroundImage: `url(https://empleo.chaco.gob.ar/card/cursosimg/${props.infoCursos.imgUrl}.png)`,
        }}
      >
        <div className={`cards-inline ${classes.card}`}>
          {isHovered && (
            <div className={classes.titulo}>
              {!props.from && (
                <Typography
                  className={classes.tituloText}
                  variant="body2"
                  component="p"
                >
                  {props.infoCursos.nombre}
                </Typography>
              )}
            </div>
          )}
          <div className="card-img-overlay">
            <Card className={classes.root}>
              <CardContent className={classes.CardContent}>
                <div className={`${classes.CardTitle}`}>
                  <ul className={`${classes.contenedorRedesCardOverlay}`}>
                    <li className={`${classes.contenedorRedesCardOverlay}`}>
                      <a>
                        <FacebookShareButton
                          url={props.infoCursos.share}
                          quote={props.infoCursos.titulo}
                          className="Demo__some-network__share-button"
                        >
                          <SocialIcon
                            style={{ height: 35, width: 35, marginTop: -9.5 }}
                            network="facebook"
                            bgColor="#01B7E8"
                            fgColor="white"
                          />
                        </FacebookShareButton>
                      </a>
                    </li>
                    <li className={`${classes.contenedorRedesCardOverlay}`}>
                      <a>
                        <TwitterShareButton
                          url={props.infoCursos.share}
                          title={props.infoCursos.titulo}
                          className="Demo__some-network__share-button"
                        >
                          <SocialIcon
                            style={{ height: 35, width: 35, marginTop: -9.5 }}
                            network="twitter"
                            bgColor="#01B7E8"
                            fgColor="white"
                          />
                        </TwitterShareButton>
                      </a>
                    </li>
                    <li className={`${classes.contenedorRedesCardOverlay}`}>
                      <a
                        href="https://www.instagram.com/empleochaco/"
                        className="Demo__some-network__share-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon
                          style={{
                            height: 35,
                            width: 35,
                            marginTop: -9.5,
                            padding: 2,
                          }}
                          network="instagram"
                          bgColor="#01B7E8"
                          fgColor="white"
                        />
                      </a>
                    </li>
                    <li className={`${classes.contenedorRedesCardOverlay}`}>
                      <a target="_blank" rel="noopener noreferrer">
                        <WhatsappShareButton
                          url={props.infoCursos.share}
                          title={props.infoCursos.titulo}
                          className="Demo__some-network__share-button"
                        >
                          <SocialIcon
                            style={{ height: 35, width: 35, marginTop: -9.5 }}
                            network="whatsapp"
                            bgColor="#01B7E8"
                            fgColor="white"
                          />
                        </WhatsappShareButton>
                      </a>
                    </li>
                    <li className={`${classes.contenedorRedesCardOverlay}`}>
                      <a target="_blank" rel="noopener noreferrer">
                        <LinkedinShareButton
                          url={props.infoCursos.share}
                          title={props.infoCursos.titulo}
                          className="Demo__some-network__share-button"
                        >
                          <SocialIcon
                            style={{
                              height: 35,
                              width: 35,
                              marginTop: -9.5,
                              padding: 2,
                            }}
                            network="linkedin"
                            bgColor="#01B7E8"
                            fgColor="white"
                          />
                        </LinkedinShareButton>
                      </a>
                    </li>
                  </ul>
                </div>
                <Typography
                  className={classes.Cardbody}
                  variant="body2"
                  component="p"
                >
                  <ul className="list-inline list-inlineinfo">
                    <li className="list-inline-item">
                      <a>
                        <Link
                          className={`${classes.nombreCardoverlay} nav-link`}
                          to={{
                            pathname: `/capacitaciones/${props.infoCursos.nombre
                              .replace(/([a-z])([A-Z])/g, "$1-$2")
                              .replace(/\s+/g, "-")
                              .replace(/\¿/g, "")
                              .replace(/-–-/g, "-")}`,
                            nombre: props.infoCursos.nombre,
                            curso: props.infoCursos,
                          }}
                        >
                          <p>{props.infoCursos.nombre}</p>
                        </Link>
                      </a>
                    </li>
                  </ul>
                </Typography>
              </CardContent>

              <CardActions className={classes.CardActions}>
                <ul className="list-inline list-inlineinfo">
                  <li className="list-inline-item itemBtn itembtnTop">
                    <a className="btn btn-info-gradiant btn-md btn-arrow inline-itemBtn">
                      {props.from ? (
                        <span
                          onClick={() => {
                            props.changeCategory(props.infoCursos.titulo);
                          }}
                        >
                          <Link className="nav-link">Más info</Link>
                          <i className="ti-arrow-right"></i>
                        </span>
                      ) : (
                        <span>
                          <Link
                            className="nav-link"
                            to={{
                              pathname: `/capacitaciones/${props.infoCursos.nombre
                                .replace(/([a-z])([A-Z])/g, "$1-$2")
                                .replace(/\s+/g, "-")
                                .replace(/\¿/g, "")
                                .replace(/-–-/g, "-")}`,
                              nombre: props.infoCursos.nombre,
                              curso: props.infoCursos,
                            }}
                          >
                            Más info
                          </Link>
                          <i className="ti-arrow-right"></i>
                        </span>
                      )}
                    </a>
                  </li>
                </ul>
              </CardActions>
            </Card>
          </div>
        </div>
      </Col>
    </Col>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    minHeight: "13.5em",
  },
  root: {
    minHeight: "13.5em",
    maxHeight: "13.5em",
    justifyContent: "center",
    boxShadow: "none",
    backgroundColor: "transparent",
    //backgroundColor: 'gray',
  },
  //====== contenido de body =======
  CardContent: {
    minHeight: "7em",
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  // dentro del CardContent
  CardTitle: {
    minHeight: "3em",
    //backgroundColor: "red",
    marginLeft: "-18%",
    paddingTop: "5%",
  },
  // dentro del CardContent
  Cardbody: {
    minHeight: "5em",
    maxHeight: "5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    lineHeight: 1.2,
    paddingTop: "0px",
    paddingBottom: "0px",
    //backgroundColor: 'blue',
  },
  //=============
  CardActions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "3em",
    minHeight: "3em",
    //backgroundColor: 'yellow',
  },
  titulo: {
    minHeight: "15em",
    maxHeight: "15em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    //backgroundColor: 'blue',
  },
  tituloText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    lineHeight: 1.2,
  },
  contenedorRedesCardOverlay: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
  },

  listaRedesSociles: {
    display: "list-item",
    padding: "5px 10px",
    color: "white",
    margin: "0 3px",
  },
  nombreCardoverlay: {
    fontSize: "18px",
  },
}));

export default CardCustom;
