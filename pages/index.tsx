import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Head from "next/head";
import React from "react";

const IndexPage = () => {
  const { data } = useQuery(gql`
    {
      item(id: "2") {
        id
        title
        description
        type
        gender
        price
        image
      }
    }
  `);

  console.log(data);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Hello</p>
    </div>
  );
};

export default IndexPage;
