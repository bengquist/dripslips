import styled from "styled-components";
import SEO from "../../app/SEO";
import Loader from "../../ui/Loader";

const MePage = () => {
  return (
    <Loader>
      <SEO title="My Profile" />

      <Container>yo</Container>
    </Loader>
  );
};

export default MePage;

const Container = styled.div`
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;
