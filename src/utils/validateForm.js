export default function validateForm(values, data) {
  const err = {};

  data.data.forEach((element) => {
    if(data){
      if (values[element.fieldname].length < element.fieldminlength) {
        err[element.fieldname] =
          'Length of element "' + element.fieldname + '" is too short.';
      }
    }else{
      console.log();
    }
  });

  return err;
}
