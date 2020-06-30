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
  productDetails: Array<ProductDetail>;
  product: Product;
  products: Array<Product>;
  me?: Maybe<User>;
  user: User;
  users: Array<User>;
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type ProductDetail = {
  __typename?: 'ProductDetail';
  product: Product;
  productImages: Array<ProductImage>;
  id: Scalars['ID'];
  size: Scalars['Float'];
  color: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  productDetails: Array<ProductDetail>;
  id: Scalars['ID'];
  modelId: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  gender: Scalars['String'];
};

export type ProductImage = {
  __typename?: 'ProductImage';
  productDetails: ProductDetail;
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  address: Array<Address>;
  cartItems: Array<CartItem>;
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  user: User;
  id: Scalars['ID'];
  title: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  companyName: Scalars['String'];
  addressPrimary: Scalars['String'];
  addressSecondary: Scalars['String'];
  postalCode: Scalars['Float'];
  city: Scalars['String'];
  state: Scalars['String'];
  country: Scalars['String'];
};

export type CartItem = {
  __typename?: 'CartItem';
  user: User;
  id: Scalars['ID'];
  quantity: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProduct: Product;
  login: LoginResponse;
  signup: Scalars['Boolean'];
  logout: Scalars['Boolean'];
};


export type MutationAddProductArgs = {
  data: AddProductInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  user: Scalars['String'];
};


export type MutationSignupArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
};

/** New product data */
export type AddProductInput = {
  modelId: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  gender: Scalars['String'];
  color: Scalars['String'];
  size: Scalars['Float'];
  images: Array<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  amount: Scalars['Float'];
  status: Scalars['String'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  order: Order;
  productDetails: ProductDetail;
  id: Scalars['ID'];
  quantity: Scalars['Float'];
};

export type FilteredProductsQueryVariables = Exact<{
  gender?: Maybe<Scalars['String']>;
}>;


export type FilteredProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'modelId' | 'title' | 'description' | 'price' | 'gender'>
    & { productDetails: Array<(
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
    & Pick<Product, 'modelId' | 'title' | 'description' | 'price' | 'gender'>
    & { productDetails: Array<(
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
    & Pick<Product, 'modelId' | 'title' | 'description' | 'price' | 'gender'>
    & { productDetails: Array<(
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
    modelId
    title
    description
    price
    gender
    productDetails {
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
    modelId
    title
    description
    price
    gender
    productDetails {
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
    modelId
    title
    description
    price
    gender
    productDetails {
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