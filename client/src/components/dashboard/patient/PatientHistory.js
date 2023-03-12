import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function PatientHistory() {
  const initialValues = {
    id: "",
    Previous_Medications: "",
    Drugs: "",
   
  };

  const validationSchema = Yup.object().shape({
    id: Yup.string().required("You must input a ID!"),
    Previous_Medications: Yup.string().required(),
    Drugs: Yup.string().required(),
   

  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3005/patient_history", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div className="Patient_History">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Patient ID: </label>
          <ErrorMessage name="id" component="span" />
          <Field
            autocomplete="on"
            id="inputEnterPatientInfo"
            name="id"
            placeholder="(Ex. 1,2)"
          />
          
          <label>Medical History </label>
          <ErrorMessage name="Previous_Medications" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="Previous_Medications" 
            placeholder="(Ex. shortness of breath,bilateral knee pain)"
          />
         
          
          <label>Drugs taken: </label>
          <ErrorMessage name="Drugs" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="Drugs"
            placeholder="(YES,NO)"
          />
    
          <button type="submit"> Enter </button>
        </Form>
      </Formik>
    </div>
  );
}

export default PatientHistory;