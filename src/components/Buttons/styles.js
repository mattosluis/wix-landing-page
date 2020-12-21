import styled from "styled-components";
import colors from '../../global/colors';
import { mobile } from "../../global/deviceSizes";

export const Primary = styled.a`
  border-radius: 2rem; 
  padding: 1.2rem 3rem;
  color: ${colors.primary};
  background-color: ${colors.secondary};
  transition-duration: 0.3s;

  :hover {
    color: ${colors.secondary};
    background-color: ${colors.primary};
    transition-duration: 0.3s;
  }

  @media(max-width: ${mobile}) {
    font-size: 1.3rem;
    padding: 1rem 2.4rem;
  }
`;

export const Second = styled.a`
  border-radius: 2rem; 
  padding: 1.2rem 3rem;
  color: ${colors.secondary};
  background-color: ${colors.primary};
  transition-duration: 0.3s;

  :hover {
    color: ${colors.primary};
    background-color: ${colors.secondary};
    transition-duration: 0.3s;
  }
  
  @media(max-width: ${mobile}) {
    font-size: 1.3rem;
    padding: 1rem 2.4rem;
  }
`;
