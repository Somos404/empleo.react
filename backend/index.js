const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// res.header('Access-Control-Allow-Origin', '*');
// res.header('Access-Control-Allow-Headers', 'Content-Type');
// res.header('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "subsecretariaempleochaco@gmail.com",
      pass: "eMPLeo.2020//",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const asunto = req.body.asunto;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "subsecretariaempleochaco@gmail.com",
      subject: "Contact Form Message",
      html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Asunto: ${asunto}</p><p>Mensaje: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "failed" });
      } else {
        res.json({ status: "sent" });
      }
    });
  });

  
const contactEmailEmpresas = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "interagencia.empleo@gmail.com",
    pass: "albertopresidenta",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contacto-empresas", (req, res) => {
  const name = req.body.name;
  const empresa = req.body.empresa;
  const cuil = req.body.cuil;
  const localidad = req.body.localidad; 
  const email = req.body.email; 
  const telefono = req.body.telefono; 
  const mail = {
    from: name,
    to: "interagencia.empleo@gmail.com",
    subject: "Contact Form Message",
    html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Empresa: ${empresa}</p><p>Cuil: ${cuil}</p><p>Localidad: ${localidad}</p><p>Telefono: ${telefono}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "failed" });
    } else {
      res.json({ status: "sent" });
    }
  });
});