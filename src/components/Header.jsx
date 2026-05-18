import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import blue from "../assets/avatars/blue.png";

const Container = styled.header`
  height: 5rem;
  ${(props) =>
    props.profile
      ? null
      : "border-bottom: 1.5px solid rgba(255, 255, 255, 0.2);"}
  padding: 0 4rem;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  color: red;
  margin: 0 2rem;
`;

const NavMenu = styled.nav`
  width: 100%;
  display: flex;
  gap: 1.2rem;
  & a {
    color: white;
    text-decoration: none;
  }

  & .active {
    font-weight: bold;
  }
`;

const UserControl = styled.div`
  color: white;
  display: flex;
  gap: 2rem;
  align-items: center;
  & a {
    color: white;
    text-decoration: none;
  }
`;

const ProfileImage = styled.img`
  border-radius: 0.5rem;
  width: 3rem;
`;

function Header(props) {
  const { className, profile } = props;

  return (
    <Container className={className} profile={profile}>
      <Logo>WitFLiX</Logo>
      {profile && (
        <>
          <NavMenu>
            <NavLink to="/browse">Home</NavLink>
            <NavLink to="/shows">Shows</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/games">Games</NavLink>
            <NavLink to="/new">New&Popular</NavLink>
            <NavLink to="/list">My List</NavLink>
            <NavLink to="/lang">Browse by Languages</NavLink>
          </NavMenu>
          <UserControl>
            <i class="fa fa-search fa-lg" aria-hidden="true"></i>
            <NavLink to="/kids">Kids</NavLink>
            <i class="fa fa-bell fa-lg" aria-hidden="true"></i>
            <ProfileImage src={blue} />
          </UserControl>
        </>
      )}
    </Container>
  );
}

export default Header;
