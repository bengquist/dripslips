import styled from "styled-components";
import SEO from "../../app/SEO";
import Loader from "../../ui/Loader";

const WishlistPage = () => {
  return (
    <Loader>
      <SEO title="My Wishlist" />

      <Container>Wishlist</Container>
    </Loader>
  );
};

export default WishlistPage;

const Container = styled.div`
  height: 100%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;
