import React from "react";
import { AddressFieldsFragment } from "../generated/graphql";

type Props = {
  address: AddressFieldsFragment;
};

const AddressCard: React.FC<Props> = ({ address }) => {
  return (
    <div>
      <p>
        {address.title} {address.firstName} {address.lastName}
      </p>
      <p>{address.addressPrimary}</p>
      <p>
        {address.city}, {address.state} {address.postalCode}
      </p>
      <p>{address.country}</p>
      <p>{address.phoneNumber}</p>
    </div>
  );
};

export default AddressCard;
