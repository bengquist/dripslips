import address from "./address";
import items from "./products";

export default [
  {
    id: "1",
    email: "test@test.com",
    wishlistItems: items,
    cartItems: items,
    deliveryAddress: address,
    billingAddress: address,
  },
];
