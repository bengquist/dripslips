import { Formik } from "formik";
import Router from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import phoneCodes from "../data/phoneCodes";
import states from "../data/states";
import { flexAlignEnd, gap } from "../style/helpers";
import Checkbox from "../ui/Checkbox";
import Input from "../ui/Input";
import Radio from "../ui/Radio";
import Select from "../ui/Select";
import SquareButton from "../ui/SquareButton";
import { ShippingFormValues } from "./types";

const initialValues = {
  title: "Mr",
  firstName: "",
  lastName: "",
  companyName: "",
  addressOne: "",
  addressTwo: "",
  postalCode: "",
  city: "",
  state: "",
  country: "United States",
  phoneCountry: "+ 1",
  phoneNumber: "",
  shippingMethod: "Standard",
  email: "",
};

const validate = (values: ShippingFormValues) => {
  const errors: Partial<ShippingFormValues> = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.addressOne) {
    errors.addressOne = "Required";
  }
  if (!values.postalCode) {
    errors.postalCode = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.state) {
    errors.state = "Required";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  }

  return errors;
};

const ShippingForm: React.FC = () => {
  const [sameAsBilling, setSameAsBilling] = useState(true);

  const onSubmit = () => {
    if (sameAsBilling) {
      Router.push("/checkout/payment");
    } else {
      Router.push("/checkout/billing");
    }
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
            <Input
              name="addressOne"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.addressOne}
              label="Address 1 *"
              error={
                errors.addressOne && touched.addressOne && errors.addressOne
              }
            />
            <Input
              name="addressTwo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.addressTwo}
              label="AddressTwo"
            />
            <Input
              name="postalCode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postalCode}
              label="Postal Code *"
              error={
                errors.postalCode && touched.postalCode && errors.postalCode
              }
            />
            <Input
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              label="City *"
              error={errors.city && touched.city && errors.city}
            />
            <Select
              name="state"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
              label="State *"
              options={states}
              error={errors.state && touched.state && errors.state}
            />
            <Input
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
              label="Country"
              disabled
            />
            <div css={[gap({ right: 1 }), flexAlignEnd]}>
              <Select
                name="phoneCountry"
                options={phoneCodes}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneCountry}
                label="Phone Number *"
              />
              <Input
                name="phoneNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumber}
                error={
                  errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber
                }
              />
            </div>
          </FormSection>

          <FormSection>
            <Checkbox
              label="Use for Billing Address"
              onChange={() => setSameAsBilling(!sameAsBilling)}
              checked={sameAsBilling}
            />
          </FormSection>

          <h1>SHIPPING METHOD</h1>
          <FormSection>
            <Radio
              defaultChecked
              name="shippingMethod"
              onChange={handleChange}
              onBlur={handleBlur}
              value="Standard"
              label="Standard"
              subLabel="2-5 Business days Complimentary"
            />
            <Radio
              name="shippingMethod"
              onChange={handleChange}
              onBlur={handleBlur}
              value="Express"
              label="Express"
              subLabel="1-4 Business days $15.00"
            />
            <Radio
              name="shippingMethod"
              onChange={handleChange}
              onBlur={handleBlur}
              value="Overnight"
              label="Overnight"
              subLabel="1 Business day $20.00"
            />
          </FormSection>

          <div css={gap({ bottom: 0.25 })}>
            <h1>YOUR EMAIL ADDRESS</h1>
            <p>TO TRACK YOUR SHIPMENT</p>
          </div>
          <FormSection>
            <Input
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              label="Email"
            />
          </FormSection>

          <SquareButton type="submit">Proceed to Billing</SquareButton>
        </form>
      )}
    </Formik>
  );
};

export default ShippingForm;

const FormSection = styled.section`
  padding: 2rem;
  margin-bottom: 3rem;
  ${gap({ bottom: 1.5 })};
  background: ${({ theme }) => theme.colors.white};
`;
