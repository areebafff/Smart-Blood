import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function TestReports() {
  const initialValues = {
    ID: "",
    Test_type: "",
    Test_name: "",
    Value: ""
  };

  const validationSchema = Yup.object().shape({
    ID: Yup.string().required("You must input ID!"),
    Test_type: Yup.string().required(),
    Test_name: Yup.string().required(),
    Value: Yup.string().required(),

  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3005/test_reports", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div className="Test_resports">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>ID: </label>
          <ErrorMessage name="ID" component="span" />
          <Field
            autocomplete="on"
            id="inputEnterPatientInfo"
            name="ID"
            placeholder="(Ex. 00001,00002)"
          />
       
          <label>Test name: </label>
          <ErrorMessage name="Test_name" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="Test_name"
            placeholder="(Ex. hemoglobin,RBC)"
          />

          <label>Test_type: </label>
          <ErrorMessage name="Test_type" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="Test_type"
            placeholder="(Ex. CBC, WBC )"
          />
          <label>Value: </label>
          <ErrorMessage name="Value" component="span" />
          <Field
            autocomplete="off"
            id="inputEnterPatientInfo"
            name="Value"
            placeholder="(Ex. 26.8,120.6)"
          />

          <button type="submit"> Enter </button>
        </Form>
      </Formik>
    </div>
  );
}

export default TestReports;