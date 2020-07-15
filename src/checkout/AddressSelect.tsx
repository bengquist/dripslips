import React, { useState } from "react";
import styled from "styled-components";
import { AddressFieldsFragment } from "../generated/graphql";
import { flexAlignCenter, gap } from "../style/helpers";
import Select from "../ui/Select";
import SquareButton from "../ui/SquareButton";

type Props = {
  addresses: AddressFieldsFragment[];
};

const AddressSelect: React.FC<Props> = ({ addresses }) => {
  const [selectedAddressId, setSelectedAddressId] = useState(addresses[0].id);
  const [showCreateAddress, setShowCreateAddress] = useState(false);

  const address = addresses.find((address) => address.id === selectedAddressId);

  return (
    <Container>
      <div css={gap({ bottom: 1.5 })}>
        <h3>Select an Address</h3>
        <div style={{ display: "inline-block" }}>
          <Select
            onSelect={(e) => setSelectedAddressId(e.currentTarget.value)}
            options={addresses.map((address) => ({
              text: address.name,
              value: address.id,
            }))}
          />
        </div>
      </div>

      <div css={gap({ bottom: 0.5 })}>
        <p>{address?.addressPrimary}</p>
        <p>
          {address?.city}, {address?.state} {address?.postalCode}
        </p>
        <p>{address?.country}</p>
        <p>{address?.companyName}</p>
      </div>

      <div css={[flexAlignCenter, gap({ right: 1 })]}>
        <SquareButton variant="secondary">Create a New Address</SquareButton>
      </div>
    </Container>
  );
};

export default AddressSelect;

const Container = styled.div`
  background: white;
  padding: 3rem;
  ${gap({ bottom: 2 })};
`;
