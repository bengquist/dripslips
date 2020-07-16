import { useFormik } from "formik";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import states from "../data/states";
import { Title, useGetUserAddressQuery } from "../generated/graphql";
import routes from "../routing/routes";
import { gap } from "../style/helpers";
import Checkbox from "../ui/Checkbox";
import Input from "../ui/Input";
import Radio from "../ui/Radio";
import Select from "../ui/Select";
import SquareButton from "../ui/SquareButton";
import { AddressFormValues } from "./types";

const initialValues = {
  title: Title.Mr,
  firstName: "",
  lastName: "",
  companyName: "",
  addressPrimary: "",
  addressSecondary: "",
  postalCode: "",
  city: "",
  state: "",
  country: "United States",
  shippingMethod: "Standard",
  email: "",
};

const validate = (values: AddressFormValues) => {
  const errors: Partial<AddressFormValues> = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.addressPrimary) {
    errors.addressPrimary = "Required";
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

  return errors;
};

const AddressForm: React.FC = () => {
  const { data } = useGetUserAddressQuery();
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [selectedAddressId, setSelectedAddressId] = useState("");

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  function onSubmit() {
    Router.push(routes.CHECKOUT_PAYMENT);
  }

  const addressOptions =
    data?.me?.address.map(({ name, id }) => ({
      text: name,
      value: id,
    })) ?? [];

  const selectedAddress = data?.me?.address.find(
    (address) => address.id === selectedAddressId
  );

  useEffect(() => {
    if (data?.me?.address[0]) {
      setSelectedAddressId(data?.me?.address[0].id);
    }
  }, [data?.me?.address]);

  useEffect(() => {
    setValues({
      ...values,
      addressPrimary: selectedAddress?.addressPrimary ?? "",
      addressSecondary: selectedAddress?.addressSecondary ?? "",
      companyName: selectedAddress?.companyName ?? "",
      country: selectedAddress?.country ?? "",
      title: selectedAddress?.title ?? Title.Mr,
      firstName: selectedAddress?.firstName ?? "",
      lastName: selectedAddress?.lastName ?? "",
      city: selectedAddress?.city ?? "",
      state: selectedAddress?.state ?? "",
      postalCode: selectedAddress?.postalCode
        ? String(selectedAddress?.postalCode)
        : "",
    });
  }, [selectedAddress]);

  const addressSelect = addressOptions.length ? (
    <div css={gap({ bottom: 1 })}>
      <h4>Select an address</h4>
      <Select
        onChange={(e) => setSelectedAddressId(e.target.value)}
        options={[...addressOptions, { text: "New Address", value: "" }]}
      />
    </div>
  ) : null;

  return (
    <form css={gap({ bottom: 2 })} onSubmit={handleSubmit}>
      <FormSection>
        {addressSelect}

        <Select
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
          label="Title *"
          options={[
            { text: Title.Mr, value: Title.Mr },
            { text: Title.Mrs, value: Title.Mrs },
            { text: Title.Ms, value: Title.Ms },
          ]}
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
          name="addressPrimary"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.addressPrimary}
          label="Address 1 *"
          error={
            errors.addressPrimary &&
            touched.addressPrimary &&
            errors.addressPrimary
          }
        />
        <Input
          name="addressSecondary"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.addressSecondary}
          label="addressSecondary"
        />
        <Input
          name="postalCode"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.postalCode}
          label="Postal Code *"
          error={errors.postalCode && touched.postalCode && errors.postalCode}
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
          options={states.map((state) => ({ text: state, value: state }))}
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
  );
};

export default AddressForm;

const FormSection = styled.section`
  padding: 2rem;
  margin-bottom: 3rem;
  ${gap({ bottom: 1.5 })};
  background: ${({ theme }) => theme.colors.white};
`;
