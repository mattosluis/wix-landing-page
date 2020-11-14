import styled from "styled-components";
import colors from '../../global/colors';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  background-color: ${colors.primary}; 
  color: ${colors.secondary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  span {
    font-weight: 200;
    font-size: 2.6rem;
  }

  p {
    max-width: 65rem;
    text-align: justify;
    margin-top: 2rem;
    font-size: 1rem;
  }
`

export const BottomLinks = styled.div`
  max-width: 80rem;
  display: flex;
  margin-top: 2rem;

  a {
    color: ${colors.secondary};
    padding: 0.2rem 2rem;
    font-size: 1.2rem;
  }

  a + a {
    border-left: 0.1rem solid ${colors.secondary};
  }

  p {
    margin-left: 5rem;
    font-size: 1.2rem;
  }
`;
