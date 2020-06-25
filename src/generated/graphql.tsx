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
  product: Product;
  products: Array<Product>;
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryProductsArgs = {
  gender?: Maybe<Scalars['String']>;
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
  gender: Scalars['String'];
  colorGroup: Scalars['String'];
  availableColors: Array<Scalars['String']>;
  availableSizes: Array<Scalars['String']>;
  images: Array<Scalars['String']>;
};

export type FilteredProductsQueryVariables = Exact<{
  gender?: Maybe<Scalars['String']>;
}>;


export type FilteredProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'availableColors' | 'price' | 'images'>
  )> }
);

export type ProductQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { product: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'modelId' | 'title' | 'description' | 'type' | 'colorGroup' | 'availableColors' | 'availableSizes' | 'gender' | 'price' | 'images'>
  ) }
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'availableColors' | 'price' | 'images'>
  )> }
);


export const FilteredProductsDocument = gql`
    query FilteredProducts($gender: String) {
  products(gender: $gender) {
    id
    title
    availableColors
    price
    images
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