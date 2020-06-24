export type ShippingFormValues = {
  title: string;
  firstName: string;
  lastName: string;
  companyName: string;
  addressOne: string;
  addressTwo: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  phoneCountry: string;
  phoneNumber: string;
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
