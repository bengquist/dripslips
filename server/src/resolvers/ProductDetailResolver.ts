import { FieldResolver, Resolver, Root } from "type-graphql";
import Product from "../models/Product";
import ProductDetail from "../models/ProductDetail";
import { ProductImage } from "../models/ProductImage";

@Resolver(() => ProductDetail)
export default class ProductDetailResolver {
  @FieldResolver()
  product(@Root() productDetail: ProductDetail): Promise<Product> {
    const product = Product.findOne(productDetail.productId);

    if (!product) {
      throw Error("No product found with provided id");
    }

    //@ts-ignore
    return product;
  }

  @FieldResolver()
  productImages(@Root() productDetail: ProductDetail): Promise<ProductImage[]> {
    const productImages = ProductImage.find({
      where: { productDetailsId: productDetail.id },
    });

    return productImages;
  }
}
