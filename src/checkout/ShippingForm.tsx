import React from "react";
import styled from "styled-components";
import { gap } from "../style/helpers";
import Input from "../ui/Input";
import SquareButton from "../ui/SquareButton";

const ShippingForm = () => {
  return (
    <div css={gap({ bottom: 2 })}>
      <h1>DELIVERY ADDRESS</h1>
      <Form>
        <Input label="Title *" />
        <Input label="First Name *" />
        <Input label="Last Name *" />
        <Input label="Company Name" />
        <Input label="Address 1 *" />
        <Input label="Address 2" />
        <Input label="Postal Code *" />
        <Input label="City *" />
        <Input label="State *" />
        <Input label="Country" />
        <Input label="Phone Number *" />
      </Form>

      <h1>SHIPPING METHOD</h1>
      <Form>
        <Input label="Title *" />
        <Input label="First Name *" />
        <Input label="Last Name *" />
      </Form>

      <div>
        <h1>YOUR EMAIL ADDRESS</h1>
        <p>TO TRACK YOUR SHIPMENT</p>
      </div>
      <Form>
        <Input label="Email" />
      </Form>

      <SquareButton>Proceed to Billing</SquareButton>
    </div>
  );
};

export default ShippingForm;

const Form = styled.form`
  padding: 2rem;
  margin-bottom: 3rem;
  ${gap({ bottom: 1.5 })};
  background: ${({ theme }) => theme.colors.white};
`;
