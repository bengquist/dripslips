import styled from "styled-components";
import SEO from "../../app/SEO";
import Loader from "../../ui/Loader";

const OrdersPage = () => {
  return (
    <Loader>
      <SEO title="My Orders" />

      <Container>Orders</Container>
    </Loader>
  );
};

export default OrdersPage;

const Container = styled.div`
  height: 100%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;
