import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import PropTypes from "prop-types";
import {
  Row, Col, Container, Form, FormGroup, Input, Button
} from 'reactstrap';

// core components
import Header from "../../components/header/header.jsx";
import HeaderBannerEmpleo from "../../components/banner/bannerEmpleo.jsx";
import Footer2 from "../../components/footer/footer2.jsx";
import UserService from '../../services/UserService';

// secciones

import img3 from '../../assets/images/oficios/flechaDer.svg';
import img4 from '../../assets/images/oficios/flachaIzq.svg';


class Contacto extends Component {

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
      data => {
        if (data.status === "sent") {
          alert("Mensaje Enviado");
          this.setState({ name: "", email: "", asunto: "", message: "", status: "" });
        } else if (data.status === "failed") {
          alert("Message Failed");
        }
      },
      error => {
        //mensaje de error sacael el spiner 
        alert("Error Envio");
        console.log(' ==> error', error);
        console.log('error', error);
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
      status: ""
    };
  }

  render() {
    let buttonText = this.state.status;
    return (
      <div>
        <Header />
        <div className="page-wrapper">
          <div className="container-fluid empleoHeight">
            <HeaderBannerEmpleo />
            <div className="spacer-Header"></div>
            <div>
              <div className="contact1">
                <Row>
                  <Container>
                    <div className="spacerContacto">
                      <Row className="m-0 justify-content-center">
                        <Col lg="12">
                          <div className="contact-box p-r-40">
                            <h4 className="title">CONTACTATE CON NOSOTROS</h4>
                            <Form onSubmit={this.handleSubmit.bind(this)} method="POST">
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="m-t-15">
                                    <label htmlFor="name">Nombre:</label>
                                    <Input type="text"
                                      id="name"
                                      value={this.state.name}
                                      onChange={this.handleChange.bind(this)}
                                      required />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup className="m-t-15">
                                    <label htmlFor="email">Email:</label>
                                    <Input type="email"
                                      id="email"
                                      value={this.state.email}
                                      onChange={this.handleChange.bind(this)}
                                      required />
                                  </FormGroup>
                                </Col>
                                <Col lg="12">
                                  <FormGroup className="m-t-15">
                                    <label htmlFor="asunto">Asunto:</label>
                                    <Input type="text"
                                      id="asunto"
                                      value={this.state.asunto}
                                      onChange={this.handleChange.bind(this)}
                                      required />
                                  </FormGroup>
                                </Col>
                                <Col lg="12">
                                  <FormGroup className="m-t-15">
                                    <label htmlFor="message">Mensaje:</label>
                                    <Input type="textarea" id="message"
                                      value={this.state.message}
                                      onChange={this.handleChange.bind(this)}
                                      required />
                                  </FormGroup>
                                </Col>
                                {/* <Col lg="12">
                                                    <FormGroup className="m-t-15">
                                                        <Input type="textarea" name="text" placeholder="Mensaje" />
                                                    </FormGroup>
                                                </Col> */}
                                <Col lg="12">

                                  <button className="hvr-sweep-to-right" type="submit">{buttonText}Enviar</button></Col>
                              </Row>
                            </Form>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </Row>
              </div>
            </div>
            <Footer2 />
          </div>

        </div>

      </div>
    );
  }
}

Contacto.propTypes = {
  classes: PropTypes.object
};

export default Contacto;
