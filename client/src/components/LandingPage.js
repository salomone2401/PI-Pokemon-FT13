import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import myImage from '../img/1.png';
import my from '../img/descarga.jpeg';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${my});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Button = styled.button`
  color: white;
  font-size: 3.5rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  padding: 1rem 1rem;
  border-radius: 10px;
 
  background-color: black;

  &:before {
    content: "";
    background-color: rgba(255,255,255,0.5);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  &:hover {

    background-color: black;
    border: 3px solid black;
    color: white;
    border-bottom: 4px solid darken(#FCA311, 10%);
    &:before {
      transform: skewX(-45deg) translateX(13.5em);
     transition: all 0.9s ease-in-out;
       }
    }`;

const Title = styled.h1`
      font-size: 3.5rem;
      margin-bottom: 0.7rem;
`;
const Wrapper = styled.div`
       display: block;
       text-align: center;
       @media (max-width: 992px) {
        display: block;
       text-align: center;
       margin-top: 25rem;
       }
`;
const Phrase = styled.h1`
      font-size: 2rem;
      margin: .5rem;

`;

const Image = styled.img`
position:absolute; 
top: 27%;
left: 10%;
z-index:1;
margin-left: 2rem;
   
`;

const LandingPage = () => {
  return (
    <Fragment>
      < GlobalStyle />
      <Image src={`${myImage}`} alt="pokemon" />;
      <Wrapper>
        <Title>Welcome!</Title>
        <Phrase>Find your favorite Pokemon character or create your own</Phrase>

        <Link to={'/pokemon'}>
          <Button>HOME</Button>
        </Link>
      </Wrapper>

    </Fragment>

  );
}

export default LandingPage;