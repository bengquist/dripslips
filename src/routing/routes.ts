export default {
  HOME: "/",
  MEN: "/product/men",
  WOMEN: "/product/women",
  WISHLIST: "/wishlist",
  CHECKOUT: "/checkout",
  CART: "/cart",
  MY_PROFILE: "/me",
  MY_ORDERS: "/me/orders",
  MY_WISHLIST: "/me/wishlist",
  PRODUCT: (id: string) => ({ href: "/product/[id]", as: `/product/${id}` }),
};
