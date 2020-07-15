import styled from "styled-components";
import SEO from "../../app/SEO";
import Profile from "../../profile/Profile";
import Loader from "../../ui/Loader";

const ProfilePage = () => {
  return (
    <Loader>
      <SEO title="My Profile" />

      <Container>
        <Profile />
      </Container>
    </Loader>
  );
};

export default ProfilePage;

const Container = styled.div`
  height: 100%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;
