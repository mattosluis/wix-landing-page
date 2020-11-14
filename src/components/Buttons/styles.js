import styled from "styled-components";
import colors from '../../global/colors';

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
`;
