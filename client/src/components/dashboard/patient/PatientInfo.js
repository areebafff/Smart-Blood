import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function PatientInfo() {
  const initialValues = {
    patient_id: "",
    Reg_No: "",
    Phone_No: "",
    Blood_Group: "",
    Gender: "",
    Address: "",
    City: "",
  };

  const validationSchema = Yup.object().shape({
    patient_id: Yup.string().required("You must input ID!"),
    Reg_No: Yup.string().required().min(12).max(12),
    Phone_No: Yup.string().min(3).max(11).required(),
    Blood_Group: Yup.string().min(1).max(3).required(),
    Gender: Yup.string().min(1).max(1).required(),
    Address: Yup.string(),
    City: Yup.string().required()

  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3005/patient", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div className="Personal_Information">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Patient ID: </label>
          <ErrorMessage name="patient_id" component="span" />
          <Field
            autocomplete="on"
            id="inputEnterPatientInfo"
            name="patient_id"
            placeholder="(Ex. 00001,00002)"
          />
          <label>Registration: </label>
          <ErrorMessage name="Reg_No" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="Reg_No"
            placeholder="(Ex. 42101-***...)"
          />
          <label>Phone No: </label>
          <ErrorMessage name="Phone_No" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="Phone_No"
            placeholder="(Ex. +92**********...)"
          />
          <label>Blood Group: </label>
          <ErrorMessage name="Blood_Group" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="Blood_Group"
            placeholder="(Ex. A+,B-...)"
          />
          <label>Gender: </label>
          <ErrorMessage name="Gender" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="Gender"
            placeholder="(Ex. M,F...)"
          />
          <label>Address: </label>
          <ErrorMessage name="Address" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="Address"
            placeholder="(Ex. 380 WESTMINSTER ST, PROVIDENCE RI 02903...)"
          />
          <label>City: </label>
          <ErrorMessage name="City" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="City"
            placeholder="(Ex. Littleton...)"
          />

          <button type="submit"> Enter </button>
        </Form>
      </Formik>
    </div>
  );
}

export default PatientInfo;