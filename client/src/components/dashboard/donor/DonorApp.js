import "./DonorApp.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function DonorApp() {
  const initialValues = {
    appointment_id: "",
    Time: "",
    Blood_Group: "",
    Gender: "",
    Address: "",
    City: "",
  };

  const validationSchema = Yup.object().shape({
    appointment_id: Yup.string().required("You must input an ID!"),
    Blood_Group: Yup.string().required(),
    Gender: Yup.string().min(1).max(1).required(),
    Address: Yup.string(),
    City: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3005/Donor_Appointments", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div className="Appointment_Info">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Appointment ID: </label>
          <ErrorMessage name="appointment_id" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterappointmentInfo"
            name="appointment_id"
            placeholder="(Ex. 00001,00002)"
          />
          <label>Time: </label>
          <ErrorMessage name="Time" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterappointmentInfo"
            name="Time"
            placeholder="(Ex. 42101-*...)"
          />
          <label>Blood Group: </label>
          <ErrorMessage name="Blood_Group" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterappointmentInfo"
            name="Blood_Group"
            placeholder="(Ex. A+,B-...)"
          />
          <label>Gender: </label>
          <ErrorMessage name="Gender" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterappointmentInfo"
            name="Gender"
            placeholder="(Ex. M,F...)"
          />
          <label>Address: </label>
          <ErrorMessage name="Address" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterappointmentInfo"
            name="Address"
            placeholder="(Ex. 380 WESTMINSTER ST, PROVIDENCE RI 02903...)"
          />
          <label>City: </label>
          <ErrorMessage name="City" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterappointmentInfo"
            name="City"
            placeholder="(Ex. Littleton...)"
          />
          <button type="submit">Book Appointment</button>
        </Form>
      </Formik>
    </div>
  );
}

export default DonorApp;