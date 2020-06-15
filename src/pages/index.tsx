import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import SEO from "../app/SEO";
import ItemCard from "../item/ItemCard";
import ItemListNav from "../item/ItemListNav";
import { fluidGrid } from "../style/helpers";

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
      <SEO title="Home" />

      <ItemListNav />

      <div css={fluidGrid}>
        {data.items.map((item: any) => (
          <ItemCard
            key={item.id}
            title={item.title}
            price={item.price}
            images={item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
