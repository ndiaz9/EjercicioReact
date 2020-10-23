import React from "react";
import ReactDOM from "react-dom";
import SignForm from "./components/signForm";

const data = [
  {
    fieldname: "Nombre de Usuario",
    fieldtype: "text",
    fieldplaceholder: "Usuario",
    fieldminlength: 5,
  },
  {
    fieldname: "Correo electrónico",
    fieldtype: "email",
    fieldplaceholder: "Correo",
    fieldminlength: 5,
  },
  {
    fieldname: "Contraseña",
    fieldtype: "password",
    fieldplaceholder: "Contraseña",
    fieldminlength: 5,
  },
];

ReactDOM.render(<SignForm data={data} />, document.getElementById("root"));
