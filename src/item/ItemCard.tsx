import React from "react";

type Props = {
  title: string;
  price: number;
  images: string[];
};

const ItemCard: React.FC<Props> = ({ title, price, images }) => {
  return (
    <div>
      <img src={images[0]} alt="" />
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
};

export default ItemCard;
