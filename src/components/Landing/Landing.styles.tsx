import styled from "styled-components";
import img from "../images/background.jpeg";
import logo from "../images/logo.png";
import family from "../images/family.jpg";
import man from "../images/buildingman.jpg";

export const Wrapper = styled.div`
  font: 15px Arial, sans-serif;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    div {
      padding: 50px;
    }
  }
  div {
    display: flex;
    flex-basis: calc(50%);
    justify-content: center;
    flex-direction: column;
    align-items: center;

    height: 600px;
  }
`;

export const Header = styled.div`
  background-color: white;
  h1 {
    color: black;
    text-transform: uppercase;
    margin: 0;
    font-size: 40px;
    letter-spacing: -3px;
  }
  h2 {
    color: #01a6ff;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 30px;
    font-size: 16px;
  }

  p {
    font-size: 12px;
    max-width: 600px;
    min-width: 400px;
    padding: 0 50px 0 50px;
  }
  a {
    color: #01a6ff;
    text-transform: uppercase;
    border: 3px solid #01a6ff;
    text-decoration: none;
    padding: 5px 25px 5px 25px;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 50px;
  }
`;

export const Container = styled.div`
  min-width: 400px;
  background-image: url(${img});
  background-size: cover;
  p {
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    margin: 10px;
  }
`;

export const Grid = styled.div`
  min-width: 500px;
  @media (max-width: 1000px) {
    padding: 0px !important;
    div {
      padding: 0px !important;
    }
  }
  div {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
  }
  div > div {
    flex-basis: 50%;
    width: 50%;
  }
`;

export const Logo = styled.div`
  background-image: url(${logo});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Family = styled.div`
  background-image: url(${family});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Man = styled.div`
  background-image: url(${man});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Content = styled.div`
  background-image: url(${img});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  p {
    width: 80%;
  }
`;
