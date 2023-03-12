import "./DMenu.css"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function BloodDonor() {
  const initialValues = {
    donor_id: "",
    Phone_No: "",
    Blood_Group: "",
    Gender: "",
    Address: "",
    City: "",
  };

  const validationSchema = Yup.object().shape({
    donor_id: Yup.string().min(5).max(5).required("You must input an ID!"),
    Phone_No: Yup.string().min(11).max(11).required("Maximum 15 characters allowed"),
    Blood_Group: Yup.string().min(1).max(3).required(),
    Gender: Yup.string().min(1).max(1).required(),
    Address: Yup.string(),
    City: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/Blood_Donor", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div className="BloodDonor">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Donor ID: </label>
          <ErrorMessage name="donor_id" component="span" />
          <Field
            autocomplete="on"
            id="inputEnterdonorInfo"
            name="donor_id"
            placeholder="(Ex. 00001,00002)"
          />
          <label>Phone Number: </label>
          <ErrorMessage name="Phone_No" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="Phone_No"
            placeholder="(Ex. +92****...)"
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
            id="inputEnterdonorInfo"
            name="Gender"
            placeholder="(Ex. M,F...)"
          />
          <label>Address: </label>
          <ErrorMessage name="Address" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterdonorInfo"
            name="Address"
            placeholder="(Ex. 380 WESTMINSTER ST, PROVIDENCE RI 02903...)"
          />
          <label>City: </label>
          <ErrorMessage name="City" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterdonorInfo"
            name="City"
            placeholder="(Ex. Littleton...)"
          />

          <button type="submit"> Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default BloodDonor;