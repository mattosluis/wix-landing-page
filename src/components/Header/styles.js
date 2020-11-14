import styled from "styled-components";
import colors from '../../global/colors';

export const NavBar = styled.nav`
  width: 100%;
  height: 6rem;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;

  img {
    height: 100%;
  }
`;

export const PageLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 3;

  a {
    font-size: 1.5rem;
    margin-left: 4rem;
    color: ${colors.primary};
    transition-duration: 0.3s
  }

  a:hover {
    font-size: 1.8rem;
    transition-duration: 0.3s
  }
`;

export const WatchVideoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4rem;

  a {
    border: 0.2rem solid ${colors.primary};
    border-radius: 2rem; 
    padding: 0.6rem 2rem;
    color: ${colors.primary};
    transition-duration: 0.3s;
  }

  a:hover {
    background-color: ${colors.primary};
    color: ${colors.secondary};
    transition-duration: 0.3s
  }
`;
