import React from "react";
import styled from "styled-components";
import { AddressFieldsFragment } from "../generated/graphql";
import { flexAlignCenter, gap } from "../style/helpers";
import SquareButton from "../ui/SquareButton";

type Props = {
  address: AddressFieldsFragment;
};

const AddressCard: React.FC<Props> = ({ address }) => {
  return (
    <Container>
      <h2>{address.name}</h2>

      <div css={gap({ bottom: 0.5 })}>
        <p>
          {address.title} {address.firstName} {address.lastName}
        </p>
        <p>{address.addressPrimary}</p>
        <p>
          {address.city}, {address.state} {address.postalCode}
        </p>
        <p>{address.country}</p>
      </div>

      <div css={[flexAlignCenter, gap({ right: 1 })]}>
        <div>
          <SquareButton>Edit</SquareButton>
        </div>
        <div>
          <SquareButton variant="secondary">Delete</SquareButton>
        </div>
      </div>
    </Container>
  );
};

export default AddressCard;

const Container = styled.div`
  ${gap({ bottom: 2 })};
  background: white;
  padding: 2rem;
`;
