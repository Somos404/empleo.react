import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
// core components
import HeaderCursos from "../../components/header/headerCursos";
import HeaderCapacitaciones from "../../components/header/headerCapacitaciones";

import "./contactoCapStyle.css";
import Footer2 from "../../components/footer/footer2.jsx";
// import CardCursos from "../../custom-components/sections/cardCursos";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

import { makeStyles } from "@material-ui/core/styles";

//import img5 from '../../assets/images/oficios/flechaDer.svg';
// import img6 from '../../assets/images/oficios/flachaIzq.svg';
// import img7 from '../../assets/images/capacitaciones/logo_membrete.png';

import { Helmet } from "react-helmet";

import UserService from "../../services/UserService";
import Swal from "sweetalert2";

const checkDate = (fecha) => {
  let valido = false;
  if (fecha.length > 0) {
    fecha.forEach((element) => {
      let d1 = element.empieza.split("/");
      let d2 = element.termina.split("/");

      let from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
      let to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
      let check = new Date();

      if (check > from && check < to) {
        valido = true;
      }
    });
  } else {
    valido = true;
  }
  return valido;
};

class ContactoCap extends Component {
  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "asunto") {
      this.setState({ asunto: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "" });
    UserService.sendMails(this.state).then(
      (data) => {
        if (data.status === "sent") {
          alert("Mensaje Enviado");
          this.setState({
            name: "",
            email: "",
            asunto: "",
            message: "",
            status: "",
          });
        } else if (data.status === "failed") {
          alert("Message Failed");
        }
      },
      (error) => {
        //mensaje de error sacael el spiner
        alert("Error Envio");
        console.log(" ==> error", error);
        console.log("error", error);
      }
    );

    /* axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Mensaje Enviado");
        this.setState({ name: "", email: "", message: "", status: "" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    }); */
  }

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      asunto: "",
      message: "",
      status: "",
    };
  }
  render() {
    let buttonText = this.state.status;

    return (
      <div className="page-wrapper page-wrapperCursos contenedor1">
        <HeaderCapacitaciones />

        <Row className="m-0 justify-content-center">
          <Col lg="12">
            <div className="contact-box p-r-40 contenedor2">
              <h4 className="title">CONTACTATE CON NOSOTROS</h4>
              <Form onSubmit={this.handleSubmit.bind(this)} method="POST">
                <Row>
                  <Col lg="6">
                    <FormGroup className="m-t-15">
                      <label htmlFor="name">Nombre:</label>
                      <Input
                        type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className="m-t-15">
                      <label htmlFor="email">Email:</label>
                      <Input
                        type="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12">
                    <FormGroup className="m-t-15">
                      <label htmlFor="asunto">Asunto:</label>
                      <Input
                        type="text"
                        id="asunto"
                        value={this.state.asunto}
                        onChange={this.handleChange.bind(this)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12">
                    <FormGroup className="m-t-15">
                      <label htmlFor="message">Mensaje:</label>
                      <Input
                        type="textarea"
                        id="message"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  {/* <Col lg="12">
                                                    <FormGroup className="m-t-15">
                                                        <Input type="textarea" name="text" placeholder="Mensaje" />
                                                    </FormGroup>
                                                </Col> */}
                  <Col lg="12" className="contenedorBoton">
                    <button className="hvr-sweep-to-right" type="submit">
                      {buttonText}Enviar
                    </button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>

        <Footer2 />
      </div>
    );
  }
}

ContactoCap.propTypes = {
  classes: PropTypes.object,
};

export default ContactoCap;
