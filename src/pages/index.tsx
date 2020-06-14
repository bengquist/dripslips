import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Head from "next/head";
import React from "react";
import ItemCard from "../item/ItemCard";

const IndexPage = () => {
  const { loading, data } = useQuery(gql`
    {
      items {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data.items.map((item) => (
        <ItemCard title={item.title} price={item.price} images={item.images} />
      ))}
    </div>
  );
};

export default IndexPage;
