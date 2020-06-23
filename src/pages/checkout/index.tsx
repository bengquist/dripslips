import Router from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../auth/AuthContext";

const CheckoutPage = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      Router.push("/checkout/billing");
    } else {
      Router.push("/checkout/auth");
    }
  }, []);

  return null;
};

export default CheckoutPage;
