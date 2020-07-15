export default {
  HOME: "/",
  MEN: "/men",
  WOMEN: "/women",
  WISHLIST: "/wishlist",
  CHECKOUT: "/checkout",
  CART: "/cart",
  PRODUCT: (id: string) => ({ href: "/product/[id]", as: `/product/[${id}]` }),
};
