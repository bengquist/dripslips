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

export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export type Address = {
  __typename?: 'Address';
  title: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  companyName?: Maybe<Scalars['String']>;
  addressPrimary: Scalars['String'];
  addressSecondary?: Maybe<Scalars['String']>;
  postalCode: Scalars['Int'];
  city: Scalars['String'];
  state: Scalars['String'];
  country: Scalars['String'];
  phoneNumber: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  modelId: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  size: Scalars['Float'];
  type: Scalars['String'];
  gender: Gender;
  colorGroup: Scalars['String'];
  availableColors: Array<Maybe<Scalars['String']>>;
  availableSizes: Array<Maybe<Scalars['String']>>;
  images: Array<Maybe<Scalars['String']>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  wishlistProducts?: Maybe<Array<Maybe<Product>>>;
  cartProducts?: Maybe<Array<Maybe<Product>>>;
  deliveryAddress?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
};

export type Query = {
  __typename?: 'Query';
  products: Array<Maybe<Product>>;
  product?: Maybe<Product>;
  user: User;
};


export type QueryProductsArgs = {
  type?: Maybe<Scalars['String']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type ProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'modelId' | 'title' | 'description' | 'type' | 'colorGroup' | 'availableColors' | 'availableSizes' | 'gender' | 'price' | 'images'>
  )> }
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'availableColors' | 'price' | 'images'>
  )>> }
);


export const ProductDocument = gql`
    query Product($id: ID!) {
  product(id: $id) {
    id
    modelId
    title
    description
    type
    colorGroup
    availableColors
    availableSizes
    gender
    price
    images
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
    title
    availableColors
    price
    images
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