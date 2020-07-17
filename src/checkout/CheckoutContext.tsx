import { createContext, useContext, useState } from "react";
import { Title } from "../generated/graphql";

type ContextProps = {};

const CheckoutContext = createContext({} as ContextProps);

export const initialAddressValues = {
  title: Title.Mr,
  firstName: "",
  lastName: "",
  companyName: "",
  addressPrimary: "",
  addressSecondary: "",
  postalCode: "",
  city: "",
  state: "",
  country: "United States",
  shippingMethod: "Standard",
  email: "",
};

export const CheckoutProvider: React.FC = ({ children }) => {
  const [formValues, setFormValues] = useState(initialAddressValues);

  return (
    <CheckoutContext.Provider value={{}}>{children}</CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
