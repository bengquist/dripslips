import Router from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../auth/AuthContext";
import routes from "../../routing/routes";

const CheckoutPage = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      Router.replace(routes.CHECKOUT_SHIPPING);
    } else {
      Router.replace(routes.CHECKOUT_AUTH);
    }
  }, []);

  return null;
};

export default CheckoutPage;
