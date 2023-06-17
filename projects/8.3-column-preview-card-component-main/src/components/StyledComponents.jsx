import styled from 'styled-components'
import { colors } from '../styles/colors'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 280px;
  /* @media screen and (max-width: 768px) {
    flex-direction: column;
  } */
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 30px;
  padding: 40px;
  max-width: 280px;
  min-height: 500px;
  background-color: ${({ bgcolor }) => bgcolor};
  svg {
    width: 100%;
  }
  h1 {
    font-size: 2.5rem;
    font-family: 'Big Shoulders Display', cursive;
    color: ${colors.veryLightGray};
  }
  p {
    color: ${colors.transparentWhite};
    font-size: 15px;
    line-height: 1.5;
  }
  a {
    margin-top: auto;
    text-decoration: none;
    background-color: ${colors.veryLightGray};
    padding: 10px 20px;
    border-radius: 20px;
    border: 2px solid ${colors.veryLightGray};
    font-size: .9rem;
    text-align: center;
    color: ${({ bgcolor }) => bgcolor};
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
      background-color: transparent;
      color: ${colors.veryLightGray};
    }
  }
  @media screen and (max-width: 768px) {
    min-height: auto;
    padding: 25px;
  }
`
