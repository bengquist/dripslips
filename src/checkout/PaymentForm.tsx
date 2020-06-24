import { Formik } from "formik";
import React from "react";
import styled from "styled-components";
import { gap } from "../style/helpers";
import Input from "../ui/Input";
import Select from "../ui/Select";
import SquareButton from "../ui/SquareButton";
import { PaymentFormValues } from "./types";

const initialValues = {
  cardNumber: "",
  cardHolder: "",
  expirationDate: "",
  securityCode: "",
};

const validate = (values: PaymentFormValues) => {
  const errors: Partial<PaymentFormValues> = {};

  if (!values.cardNumber) {
    errors.cardNumber = "Required";
  }
  if (!values.cardHolder) {
    errors.cardHolder = "Required";
  }
  if (!values.expirationDate) {
    errors.expirationDate = "Required";
  }
  if (!values.securityCode) {
    errors.securityCode = "Required";
  }

  return errors;
};

const PaymentForm: React.FC = () => {
  const onSubmit = () => {
    console.log("Submitted!");
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form css={gap({ bottom: 2 })} onSubmit={handleSubmit}>
          <h1>DELIVERY ADDRESS</h1>
          <FormSection>
            <Select
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              label="Title *"
              options={["Mr", "Mrs", "Ms"]}
              error={errors.title && touched.title && errors.title}
            />
            <Input
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              label="First Name *"
              error={errors.firstName && touched.firstName && errors.firstName}
            />
            <Input
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              label="Last Name *"
              error={errors.lastName && touched.lastName && errors.lastName}
            />
            <Input
              name="companyName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.companyName}
              label="Company Name"
            />
          </FormSection>

          <SquareButton type="submit">Proceed to Checkout</SquareButton>
        </form>
      )}
    </Formik>
  );
};

export default PaymentForm;

const FormSection = styled.section`
  padding: 2rem;
  margin-bottom: 3rem;
  ${gap({ bottom: 1.5 })};
  background: ${({ theme }) => theme.colors.white};
`;
