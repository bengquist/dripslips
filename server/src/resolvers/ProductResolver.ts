import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import products from "../data/products";
import Product from "../models/Product";
import ProductDetail from "../models/ProductDetail";
import { ProductImage } from "../models/ProductImage";
import AddProductInput from "./inputs/AddProductInput";

@Resolver(() => Product)
export default class ProductResolver {
  @Query(() => Product)
  product(@Arg("id") id: string) {
    const product = products.find((product) => product.id === id);
    return product;
  }

  @Query(() => [Product])
  async products() {
    const products = await Product.find();

    return products;
  }

  @Mutation(() => Product)
  async addProduct(
    @Arg("data") { color, size, images, ...newProductData }: AddProductInput
  ) {
    const product = await Product.create(newProductData);
    const details = await ProductDetail.create({ color, size });
    const productImages = images.map((image) => {
      const productImage = ProductImage.create({ url: image });
      productImage.productDetails = details;
      return productImage;
    });

    product.productDetails = [details];
    details.productImages = productImages;
    details.product = product;

    await product.save();
    await details.save();
    await Promise.all(productImages.map((image) => image.save()));

    return product;
  }

  @FieldResolver()
  async productDetails(@Root() product: Product): Promise<ProductDetail[]> {
    return ProductDetail.find({ where: { productId: product.id } });
  }
}
