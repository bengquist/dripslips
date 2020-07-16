export type AddressFormValues = {
  title: string;
  firstName: string;
  lastName: string;
  companyName: string;
  addressPrimary: string;
  addressSecondary: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  shippingMethod: string;
  email: string;
};

export type PaymentFormValues = {
  cardNumber: string;
  cardHolder: string;
  expirationMonth: string;
  expirationYear: string;
  securityCode: string;
};
