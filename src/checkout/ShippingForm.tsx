import React from "react";
import styled from "styled-components";
import { gap } from "../style/helpers";
import Checkbox from "../ui/Checkbox";
import Input from "../ui/Input";
import Select from "../ui/Select";
import SquareButton from "../ui/SquareButton";

const ShippingForm = () => {
  return (
    <Form css={gap({ bottom: 2 })}>
      <h1>DELIVERY ADDRESS</h1>
      <FormSection>
        <Select label="Title *" options={["Mr", "Mrs", "Ms"]} />
        <Input label="First Name *" />
        <Input label="Last Name *" />
        <Input label="Company Name" />
        <Input label="Address 1 *" />
        <Input label="Address 2" />
        <Input label="Postal Code *" />
        <Input label="City *" />
        <Select label="State *" options={["Nebraska"]} />
        <Input label="Country" value="United States" disabled />
        <Input label="Phone Number *" />
      </FormSection>

      <FormSection>
        <Checkbox label="Use for Billing Address" />
      </FormSection>

      <h1>SHIPPING METHOD</h1>
      <FormSection>
        <Input label="Title *" />
        <Input label="First Name *" />
        <Input label="Last Name *" />
      </FormSection>

      <div>
        <h1>YOUR EMAIL ADDRESS</h1>
        <p>TO TRACK YOUR SHIPMENT</p>
      </div>
      <FormSection>
        <Input label="Email" />
      </FormSection>

      <SquareButton>Proceed to Billing</SquareButton>
    </Form>
  );
};

export default ShippingForm;

const Form = styled.form``;

const FormSection = styled.section`
  padding: 2rem;
  margin-bottom: 3rem;
  ${gap({ bottom: 1.5 })};
  background: ${({ theme }) => theme.colors.white};
`;
