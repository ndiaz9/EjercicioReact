import React from "react";
import useForm from "../customHooks/useForm";
import validateForm from "../utils/validateForm";

const SignForm = (data) => {
  const { handleChange, handleSubmit, errors } = useForm(validateForm, data);

  let formData = [];
  data.data.forEach((element) => {
    formData.push(
      <div className="form-group">
        <label htmlFor={element.fieldname}>{element.fieldname}: </label>
        <input
          className="form-control"
          type={element.fieldtype}
          name={element.fieldname}
          placeholder={element.fieldplaceholder}
          id={element.fieldname}
          onChange={handleChange}
        />
        {errors[element.fieldname] && <p>{errors[element.fieldname]}</p>}
      </div>
    );
  });

  return (
    <div>
      <h1 className="text-center">Formulario</h1>
      <form onSubmit={handleSubmit}>
        {formData}
        <button className="btn btn-primary btn-lg">Send</button>
      </form>
      <hr />
    </div>
  );
};

export default SignForm;
