import { Formik } from "formik";
import React from "react";
import styled from "styled-components";
import months from "../data/months";
import years from "../data/years";
import { flexAlignEnd, gap } from "../style/helpers";
import Input from "../ui/Input";
import Select from "../ui/Select";
import SquareButton from "../ui/SquareButton";
import { PaymentFormValues } from "./types";

const initialValues = {
  cardNumber: "",
  cardHolder: "",
  expirationMonth: "January",
  expirationYear: String(new Date().getFullYear()),
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
  if (!values.expirationMonth) {
    errors.expirationMonth = "Required";
  }
  if (!values.expirationYear) {
    errors.expirationYear = "Required";
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
          <FormSection>
            <Input
              name="cardNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cardNumber}
              label="Credit Card Number *"
              error={
                errors.cardNumber && touched.cardNumber && errors.cardNumber
              }
            />
            <Input
              name="cardHolder"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cardHolder}
              label="Name of Card Holder *"
              error={
                errors.cardHolder && touched.cardHolder && errors.cardHolder
              }
            />
            <div css={[flexAlignEnd, gap({ right: 0.5 })]}>
              <Select
                name="expirationMonth"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.expirationMonth}
                label="Expiration Date *"
                options={months}
              />
              <Select
                name="expirationYear"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.expirationYear}
                options={years}
              />
            </div>
            <Input
              name="securityCode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.securityCode}
              label="Security Code *"
              error={
                errors.securityCode &&
                touched.securityCode &&
                errors.securityCode
              }
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
