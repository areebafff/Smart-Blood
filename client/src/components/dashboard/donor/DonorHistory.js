import "./DMenu.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function DonorHistory() {
  const initialValues = {
   // Serial_No: "",
    Previous_Medications: "",
    Drugs: ""
  };

  const validationSchema = Yup.object().shape({
    Previous_Medications: Yup.string().required(),
    Drugs: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3005/Donor_History", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div className="DonorHistory"> 
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
          <Form className="formContainer">
          <label>Previous Medications: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterdonorhistory"
            name="Previous_Medications"
            placeholder="(Ex: VitD,CalD)"
          />
          <label>Drugs: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterdonorhistory"
            name="Drugs"
            placeholder="(Ex. Yes/No)"
          />
          <button type="submit"> Submit </button>
        </Form>
      </Formik>
    </div>
  );
}

export default DonorHistory;