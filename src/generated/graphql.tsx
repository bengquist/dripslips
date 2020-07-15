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


export type QueryProductsArgs = {
  data?: Maybe<ProductInput>;
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
  cart: Cart;
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
  name: Scalars['String'];
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID'];
  count: Scalars['Float'];
  total: Scalars['Float'];
  user: User;
  items: Array<CartItem>;
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

export type ProductInput = {
  gender?: Maybe<Gender>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddress: Address;
  login: LoginResponse;
  signup: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  addCartItem: CartItem;
  removeCartItem: Scalars['Boolean'];
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
  productDetailsId: Scalars['String'];
};


export type MutationRemoveCartItemArgs = {
  cartItemId: Scalars['String'];
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
  name: Scalars['String'];
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

export type CreateOrderInput = {
  addressId: Scalars['String'];
  stripeSource: Scalars['String'];
  email: Scalars['String'];
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

export type AddCartItemMutationVariables = Exact<{
  productDetailsId: Scalars['String'];
}>;


export type AddCartItemMutation = { __typename?: 'Mutation', addCartItem: { __typename?: 'CartItem', id: string, quantity: number, productDetails: { __typename?: 'ProductDetail', id: string, size: number, color: string, product: { __typename?: 'Product', id: string, modelId: string, title: string, price: number }, productImages: Array<{ __typename?: 'ProductImage', url: string }> } } };

export type FilteredProductsQueryVariables = Exact<{
  gender?: Maybe<Gender>;
}>;


export type FilteredProductsQuery = { __typename?: 'Query', products: Array<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )> };

export type AddressFieldsFragment = { __typename?: 'Address', id: string, companyName?: Maybe<string>, addressPrimary: string, addressSecondary?: Maybe<string>, postalCode: number, city: string, state: string, country: string, name: string };

export type AddressFragment = { __typename?: 'User', address: Array<(
    { __typename?: 'Address' }
    & AddressFieldsFragment
  )> };

export type GetUserAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserAddressQuery = { __typename?: 'Query', me?: Maybe<(
    { __typename?: 'User' }
    & AddressFragment
  )> };

export type CartItemProductDetailFragment = { __typename?: 'ProductDetail', id: string, size: number, color: string, product: { __typename?: 'Product', id: string, modelId: string, title: string, price: number }, productImages: Array<{ __typename?: 'ProductImage', url: string }> };

export type CartItemsFragment = { __typename?: 'CartItem', id: string, quantity: number, productDetails: (
    { __typename?: 'ProductDetail' }
    & CartItemProductDetailFragment
  ) };

export type CartFragment = { __typename?: 'Cart', count: number, total: number, items: Array<(
    { __typename?: 'CartItem' }
    & CartItemsFragment
  )> };

export type GetUserCartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserCartQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', cart: (
      { __typename?: 'Cart' }
      & CartFragment
    ) }> };

export type LoginMutationVariables = Exact<{
  user: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type ProductFieldsFragment = (
  { __typename?: 'Product' }
  & ProductInfoFragment
  & ProductImagesFragment
);

export type ProductQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProductQuery = { __typename?: 'Query', product: (
    { __typename?: 'Product' }
    & ProductFieldsFragment
  ) };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )> };

export type RemoveCartItemMutationVariables = Exact<{
  cartItemId: Scalars['String'];
}>;


export type RemoveCartItemMutation = { __typename?: 'Mutation', removeCartItem: boolean };

export type ProductImagesFragment = { __typename?: 'Product', details: Array<{ __typename?: 'ProductDetail', productImages: Array<{ __typename?: 'ProductImage', url: string }> }> };

export type ProductDetailsFragment = { __typename?: 'ProductDetail', id: string, size: number, color: string, productImages: Array<{ __typename?: 'ProductImage', url: string }> };

export type ProductInfoFragment = { __typename?: 'Product', id: string, modelId: string, title: string, description: string, price: number, gender: Gender, details: Array<(
    { __typename?: 'ProductDetail' }
    & ProductDetailsFragment
  )> };

export const AddressFieldsFragmentDoc = gql`
    fragment AddressFields on Address {
  id
  companyName
  addressPrimary
  addressSecondary
  postalCode
  city
  state
  country
  name
}
    `;
export const AddressFragmentDoc = gql`
    fragment Address on User {
  address {
    ...AddressFields
  }
}
    ${AddressFieldsFragmentDoc}`;
export const CartItemProductDetailFragmentDoc = gql`
    fragment CartItemProductDetail on ProductDetail {
  id
  size
  color
  product {
    id
    modelId
    title
    price
  }
  productImages {
    url
  }
}
    `;
export const CartItemsFragmentDoc = gql`
    fragment CartItems on CartItem {
  id
  quantity
  productDetails {
    ...CartItemProductDetail
  }
}
    ${CartItemProductDetailFragmentDoc}`;
export const CartFragmentDoc = gql`
    fragment Cart on Cart {
  count
  total
  items {
    ...CartItems
  }
}
    ${CartItemsFragmentDoc}`;
export const ProductDetailsFragmentDoc = gql`
    fragment ProductDetails on ProductDetail {
  id
  size
  color
  productImages {
    url
  }
}
    `;
export const ProductInfoFragmentDoc = gql`
    fragment ProductInfo on Product {
  id
  modelId
  title
  description
  price
  gender
  details {
    ...ProductDetails
  }
}
    ${ProductDetailsFragmentDoc}`;
export const ProductImagesFragmentDoc = gql`
    fragment ProductImages on Product {
  details {
    productImages {
      url
    }
  }
}
    `;
export const ProductFieldsFragmentDoc = gql`
    fragment ProductFields on Product {
  ...ProductInfo
  ...ProductImages
}
    ${ProductInfoFragmentDoc}
${ProductImagesFragmentDoc}`;
export const AddCartItemDocument = gql`
    mutation AddCartItem($productDetailsId: String!) {
  addCartItem(productDetailsId: $productDetailsId) {
    id
    quantity
    productDetails {
      id
      size
      color
      product {
        id
        modelId
        title
        price
      }
      productImages {
        url
      }
    }
  }
}
    `;
export type AddCartItemMutationFn = ApolloReactCommon.MutationFunction<AddCartItemMutation, AddCartItemMutationVariables>;

/**
 * __useAddCartItemMutation__
 *
 * To run a mutation, you first call `useAddCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCartItemMutation, { data, loading, error }] = useAddCartItemMutation({
 *   variables: {
 *      productDetailsId: // value for 'productDetailsId'
 *   },
 * });
 */
export function useAddCartItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCartItemMutation, AddCartItemMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCartItemMutation, AddCartItemMutationVariables>(AddCartItemDocument, baseOptions);
      }
export type AddCartItemMutationHookResult = ReturnType<typeof useAddCartItemMutation>;
export type AddCartItemMutationResult = ApolloReactCommon.MutationResult<AddCartItemMutation>;
export type AddCartItemMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCartItemMutation, AddCartItemMutationVariables>;
export const FilteredProductsDocument = gql`
    query FilteredProducts($gender: Gender) {
  products(data: {gender: $gender}) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

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
export const GetUserAddressDocument = gql`
    query GetUserAddress {
  me {
    ...Address
  }
}
    ${AddressFragmentDoc}`;

/**
 * __useGetUserAddressQuery__
 *
 * To run a query within a React component, call `useGetUserAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAddressQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserAddressQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserAddressQuery, GetUserAddressQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserAddressQuery, GetUserAddressQueryVariables>(GetUserAddressDocument, baseOptions);
      }
export function useGetUserAddressLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserAddressQuery, GetUserAddressQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserAddressQuery, GetUserAddressQueryVariables>(GetUserAddressDocument, baseOptions);
        }
export type GetUserAddressQueryHookResult = ReturnType<typeof useGetUserAddressQuery>;
export type GetUserAddressLazyQueryHookResult = ReturnType<typeof useGetUserAddressLazyQuery>;
export type GetUserAddressQueryResult = ApolloReactCommon.QueryResult<GetUserAddressQuery, GetUserAddressQueryVariables>;
export const GetUserCartDocument = gql`
    query GetUserCart {
  me {
    cart {
      ...Cart
    }
  }
}
    ${CartFragmentDoc}`;

/**
 * __useGetUserCartQuery__
 *
 * To run a query within a React component, call `useGetUserCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCartQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserCartQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserCartQuery, GetUserCartQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserCartQuery, GetUserCartQueryVariables>(GetUserCartDocument, baseOptions);
      }
export function useGetUserCartLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserCartQuery, GetUserCartQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserCartQuery, GetUserCartQueryVariables>(GetUserCartDocument, baseOptions);
        }
export type GetUserCartQueryHookResult = ReturnType<typeof useGetUserCartQuery>;
export type GetUserCartLazyQueryHookResult = ReturnType<typeof useGetUserCartLazyQuery>;
export type GetUserCartQueryResult = ApolloReactCommon.QueryResult<GetUserCartQuery, GetUserCartQueryVariables>;
export const LoginDocument = gql`
    mutation Login($user: String!, $password: String!) {
  login(user: $user, password: $password) {
    accessToken
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      user: // value for 'user'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const ProductDocument = gql`
    query Product($id: String!) {
  product(id: $id) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

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
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

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
export const RemoveCartItemDocument = gql`
    mutation RemoveCartItem($cartItemId: String!) {
  removeCartItem(cartItemId: $cartItemId)
}
    `;
export type RemoveCartItemMutationFn = ApolloReactCommon.MutationFunction<RemoveCartItemMutation, RemoveCartItemMutationVariables>;

/**
 * __useRemoveCartItemMutation__
 *
 * To run a mutation, you first call `useRemoveCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCartItemMutation, { data, loading, error }] = useRemoveCartItemMutation({
 *   variables: {
 *      cartItemId: // value for 'cartItemId'
 *   },
 * });
 */
export function useRemoveCartItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveCartItemMutation, RemoveCartItemMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveCartItemMutation, RemoveCartItemMutationVariables>(RemoveCartItemDocument, baseOptions);
      }
export type RemoveCartItemMutationHookResult = ReturnType<typeof useRemoveCartItemMutation>;
export type RemoveCartItemMutationResult = ApolloReactCommon.MutationResult<RemoveCartItemMutation>;
export type RemoveCartItemMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveCartItemMutation, RemoveCartItemMutationVariables>;