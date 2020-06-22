import * as idb from "idb-keyval";
import { Product } from "../product/types";

const cartDbKey = "cart";

const cartDb = {
  get: (): Promise<Product[] | undefined> => {
    return idb.get(cartDbKey);
  },
  set: (products: Product[]) => {
    idb.set(cartDbKey, products);
  },
  add: async (product: Product) => {
    const cartData = await cartDb.get();

    if (Array.isArray(cartData)) {
      cartDb.set([...cartData, product]);
    }
  },
  remove: async (productId: string) => {
    const cartData = await cartDb.get();

    if (Array.isArray(cartData)) {
      const filteredCartData = cartData.filter(
        (product) => product.id !== productId
      );
      cartDb.set(filteredCartData);
    }
  },
  clear: async () => {
    idb.del(cartDbKey);
  },
};

export default cartDb;
