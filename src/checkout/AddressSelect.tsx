import React from "react";
import styled from "styled-components";
import { AddressFieldsFragment } from "../generated/graphql";
import Select from "../ui/Select";

type Props = {
  addresses: AddressFieldsFragment[];
};

const AddressSelect: React.FC<Props> = ({ addresses }) => {
  return (
    <Container>
      <div>
        <h3>Select an Address</h3>
        <div style={{ display: "inline-block" }}>
          <Select options={addresses.map((address) => address.name)} />
        </div>
      </div>
    </Container>
  );
};

export default AddressSelect;

const Container = styled.div`
  background: white;
  padding: 3rem;
`;
