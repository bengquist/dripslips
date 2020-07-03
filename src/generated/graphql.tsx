import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  product: Product;
  products: Array<Product>;
};


export type QueryProductArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  title: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  tokenVersion: Scalars['Float'];
  address: Array<Address>;
  cart: Array<CartItem>;
  orders: Array<Order>;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['ID'];
  companyName?: Maybe<Scalars['String']>;
  addressPrimary: Scalars['String'];
  addressSecondary?: Maybe<Scalars['String']>;
  postalCode: Scalars['Float'];
  city: Scalars['String'];
  state: Scalars['String'];
  country: Scalars['String'];
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  quantity: Scalars['Float'];
  productDetails: ProductDetail;
};

export type ProductDetail = {
  __typename?: 'ProductDetail';
  id: Scalars['ID'];
  size: Scalars['Float'];
  color: Scalars['String'];
  product: Product;
  productImages: Array<ProductImage>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  modelId: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  gender: Gender;
  details: Array<ProductDetail>;
};

export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export type ProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  amount: Scalars['Float'];
  status: OrderStatus;
  user: User;
  address: Address;
  items: Array<OrderItem>;
};

export enum OrderStatus {
  Pending = 'Pending',
  Completed = 'Completed'
}

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  quantity: Scalars['Float'];
  productDetails: ProductDetail;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddress: Address;
  login: LoginResponse;
  signup: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  addCartItem: CartItem;
  createOrder: Order;
  addProduct: Product;
};


export type MutationAddAddressArgs = {
  data: AddAddressInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  user: Scalars['String'];
};


export type MutationSignupArgs = {
  data: SignupInput;
};


export type MutationAddCartItemArgs = {
  data: AddCartItemInput;
};


export type MutationCreateOrderArgs = {
  data: CreateOrderInput;
};


export type MutationAddProductArgs = {
  data: AddProductInput;
};

export type AddAddressInput = {
  userId: Scalars['String'];
  companyName?: Maybe<Scalars['String']>;
  addressPrimary: Scalars['String'];
  addressSecondary?: Maybe<Scalars['String']>;
  postalCode: Scalars['Float'];
  city: Scalars['String'];
  state: Scalars['String'];
  country: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type SignupInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  title: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  isAdmin?: Maybe<Scalars['Boolean']>;
};

export type AddCartItemInput = {
  quantity: Scalars['Float'];
  productDetailsId: Scalars['String'];
};

export type CreateOrderInput = {
  addressId: Scalars['String'];
  status: OrderStatus;
};

export type AddProductInput = {
  modelId: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  gender: Gender;
  color: Scalars['String'];
  size: Scalars['Float'];
  images: Array<Scalars['String']>;
};

export type FilteredProductsQueryVariables = Exact<{
  gender?: Maybe<Scalars['String']>;
}>;


export type FilteredProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'modelId' | 'title' | 'description' | 'price' | 'gender'>
    & { details: Array<(
      { __typename?: 'ProductDetail' }
      & Pick<ProductDetail, 'size' | 'color'>
      & { productImages: Array<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'url'>
      )> }
    )> }
  )> }
);

export type ProductQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { product: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'modelId' | 'title' | 'description' | 'price' | 'gender'>
    & { details: Array<(
      { __typename?: 'ProductDetail' }
      & Pick<ProductDetail, 'size' | 'color'>
      & { productImages: Array<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'url'>
      )> }
    )> }
  ) }
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'modelId' | 'title' | 'description' | 'price' | 'gender'>
    & { details: Array<(
      { __typename?: 'ProductDetail' }
      & Pick<ProductDetail, 'size' | 'color'>
      & { productImages: Array<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'url'>
      )> }
    )> }
  )> }
);


export const FilteredProductsDocument = gql`
    query FilteredProducts($gender: String) {
  products {
    id
    modelId
    title
    description
    price
    gender
    details {
      size
      color
      productImages {
        url
      }
    }
  }
}
    `;

/**
 * __useFilteredProductsQuery__
 *
 * To run a query within a React component, call `useFilteredProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilteredProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilteredProductsQuery({
 *   variables: {
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useFilteredProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FilteredProductsQuery, FilteredProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<FilteredProductsQuery, FilteredProductsQueryVariables>(FilteredProductsDocument, baseOptions);
      }
export function useFilteredProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FilteredProductsQuery, FilteredProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FilteredProductsQuery, FilteredProductsQueryVariables>(FilteredProductsDocument, baseOptions);
        }
export type FilteredProductsQueryHookResult = ReturnType<typeof useFilteredProductsQuery>;
export type FilteredProductsLazyQueryHookResult = ReturnType<typeof useFilteredProductsLazyQuery>;
export type FilteredProductsQueryResult = ApolloReactCommon.QueryResult<FilteredProductsQuery, FilteredProductsQueryVariables>;
export const ProductDocument = gql`
    query Product($id: String!) {
  product(id: $id) {
    id
    modelId
    title
    description
    price
    gender
    details {
      size
      color
      productImages {
        url
      }
    }
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
      }
export function useProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = ApolloReactCommon.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    id
    modelId
    title
    description
    price
    gender
    details {
      size
      color
      productImages {
        url
      }
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = ApolloReactCommon.QueryResult<ProductsQuery, ProductsQueryVariables>;