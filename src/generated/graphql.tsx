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
  gender?: Maybe<Gender>;
  colorGroup?: Maybe<Scalars['String']>;
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
  helloWorld: Scalars['String'];
  products?: Maybe<Array<Maybe<Product>>>;
  product?: Maybe<Product>;
  user?: Maybe<User>;
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

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'description' | 'type' | 'gender' | 'price' | 'images'>
  )>>> }
);

export type GetProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'modelId' | 'title' | 'description' | 'type' | 'colorGroup' | 'availableColors' | 'availableSizes' | 'gender' | 'price' | 'images'>
  )> }
);


export const GetProductDocument = gql`
    query getProduct($id: ID!) {
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
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
      }
export function useGetProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = ApolloReactCommon.QueryResult<GetProductQuery, GetProductQueryVariables>;