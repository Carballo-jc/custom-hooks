import { Formik, Form } from "formik";
import { MyCheckbox, MyTextInput, MySelect } from "../components";
import { validationSchema } from "../validations/validationSchema";

import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Jose"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Carballo"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="jose@google.com"
              type="email"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Develper</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Termns & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
