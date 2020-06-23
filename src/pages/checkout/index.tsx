import Router from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../auth/AuthContext";

const CheckoutPage = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      Router.replace("/checkout/billing");
    } else {
      Router.replace("/checkout/auth");
    }
  }, []);

  return null;
};

export default CheckoutPage;
