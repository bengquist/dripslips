import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Head from "next/head";
import React from "react";
import Header from "../header/Header";

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
        images
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

      <Header />
    </div>
  );
};

export default IndexPage;
