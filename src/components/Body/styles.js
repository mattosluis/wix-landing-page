import styled, { css } from 'styled-components';
import colors from '../../global/colors';

export const FirstSection = styled.section(
  props => props.image && css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: ${props.image};
    background-size: cover;
    width: 100vw;
    height: 100vh;
  `
);

export const FirstSectionContent = styled.div`
  max-width: 60rem;

  span {
    color: ${colors.secondary};
    font-size: 2.2rem;
  }

  h1 {
    margin-bottom: 5rem;
    color: ${colors.secondary};
    font-size: 7rem;
  }
`;

export const SecondSection = styled.section(
  props => props.image && css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background-image: ${props.image};
    background-size: cover;
    width: 100vw;
    height: 100vh;
  `
);

export const SecondSectionContent = styled.div`
  margin-left: 18%;
  max-width: 45rem;

  h1 {
    text-align: left;
    color: ${colors.primary};
    font-size: 7rem;
  }

  p {
    text-align: left;
    margin: 2.5rem 0;

    color: ${colors.primary};
    font-size: 1.5rem;
  }
`;

export const ThirdSection = styled.section(
  props => props.image && css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    background-image: ${props.image};
    background-size: cover;
    width: 100vw;
    height: 100vh;
  `
);

export const ThirdSectionContent = styled.div`
  margin-right: 15%;
  max-width: 45rem;

  h1 {
    text-align: left;
    margin-bottom: 2rem; 
    color: ${colors.secondary};
    font-size: 7rem;
  }
`;

export const StepsSection = styled.div`
  display: flex;

  margin-bottom: 4rem; 
  color: ${colors.secondary};

  span {
    font-size: 6rem;
  }
`;

export const StepTitleAndDescription = styled.div`
  margin-left: 2rem;
  text-align: left;
  line-height: 2.5rem;
`;

export const FourthSection = styled.section(
  props => props.image && css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background-image: ${props.image};
    background-size: cover;

    width: 100vw;
    height: 100vh;
  `
);

export const FourthSectionContent = styled.div`
  margin-left: 18%;
  max-width: 45rem;

  h1 {
    text-align: center;
    color: ${colors.primary};
    font-size: 7rem;
    margin-bottom: 2rem;
  }

  p {
    line-height: 2.5rem;
    margin-bottom: 4rem;
  }
`;

export const FifthSection = styled.section(
  props => props.image && css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-image: ${props.image};
    background-size: cover;

    width: 100vw;
    height: 100vh;
  `
);

export const FifthSectionContent = styled.div`
  margin-top: 5%;
  max-width: 70rem;

  h1 {
    text-align: center;
    color: ${colors.secondary};
    font-size: 7rem;
    margin-bottom: 4rem;
  }
`;
