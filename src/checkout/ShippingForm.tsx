import { Formik } from "formik";
import React from "react";
import styled from "styled-components";
import phoneCodes from "../data/phoneCodes";
import states from "../data/states";
import { flexAlignEnd, gap } from "../style/helpers";
import Checkbox from "../ui/Checkbox";
import Input from "../ui/Input";
import Radio from "../ui/Radio";
import Select from "../ui/Select";
import SquareButton from "../ui/SquareButton";

type ShippingFormValues = {
  title: string;
  firstName: string;
  lastName: string;
  companyName: string;
  addressOne: string;
  addressTwo: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  phoneCountry: string;
  phoneNumber: string;
  shippingMethod: string;
  email: string;
};

const initialValues: ShippingFormValues = {
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

const ShippingForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => console.log({ values, actions })}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
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
            />
            <Input
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              label="First Name *"
            />
            <Input
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              label="Last Name *"
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
            />
            <Input
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              label="City *"
            />
            <Select
              name="state"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
              label="State *"
              options={states}
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
              />
            </div>
          </FormSection>

          <FormSection>
            <Checkbox label="Use for Billing Address" defaultChecked />
          </FormSection>

          <h1>SHIPPING METHOD</h1>
          <FormSection>
            <Radio
              defaultChecked
              name="shipping-method"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shippingMethod}
              label="Standard"
              subLabel="2-5 Business days Complimentary"
            />
            <Radio
              name="shipping-method"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shippingMethod}
              label="Express"
              subLabel="1-4 Business days $15.00"
            />
            <Radio
              name="shipping-method"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shippingMethod}
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              label="Email"
            />
          </FormSection>

          <SquareButton>Proceed to Billing</SquareButton>
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
