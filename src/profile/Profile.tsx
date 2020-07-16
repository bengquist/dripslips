import React from "react";
import styled from "styled-components";
import { useGetUserAddressQuery } from "../generated/graphql";
import HeaderTitle from "../ui/HeaderTitle";
import AddressCard from "./AddressCard";

const Profile = () => {
  const { data } = useGetUserAddressQuery();

  return (
    <Container>
      <HeaderTitle>MY ADDRESS BOOK</HeaderTitle>
      <div>
        {data?.me?.address.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
      </div>
    </Container>
  );
};

export default Profile;

const Container = styled.section`
  max-width: 50rem;
`;
