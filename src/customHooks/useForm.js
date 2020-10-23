import { useState } from "react";

const useForm = (validateForm, data) => {
  let valuesObj = {};
  data.data.forEach((element) => {
    valuesObj[element.fieldname] = "";
  });

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(valuesObj);

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
    console.log(values);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validateForm(values, data));
  };

  return { handleChange, handleSubmit, errors };
};

export default useForm;
