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
        <Select label="State *" options={states} />
        <Input label="Country" value="United States" disabled />
        <div css={[gap({ right: 1 }), flexAlignEnd]}>
          <Select label="Phone Number *" options={phoneCodes} />
          <Input />
        </div>
      </FormSection>

      <FormSection>
        <Checkbox label="Use for Billing Address" />
      </FormSection>

      <h1>SHIPPING METHOD</h1>
      <FormSection>
        <Radio
          name="shipping-method"
          label="Standard"
          subLabel="2-5 Business days Complimentary"
        />
        <Radio
          name="shipping-method"
          label="Express"
          subLabel="1-4 Business days $15.00"
        />
        <Radio
          name="shipping-method"
          label="Overnight"
          subLabel="1 Business day $20.00"
        />
      </FormSection>

      <div css={gap({ bottom: 0.25 })}>
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
