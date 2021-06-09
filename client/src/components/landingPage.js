import React, { Fragment } from 'react';
import styled from 'styled-components';


const Button = styled.button`
  background-color: black ;
  text-align: center;
  text-decoration: none;
  color: white;
  border: 3px solid black;
  font-size: 3.5rem;
  font-weight: bold;
  border-radius: 0.3em;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  padding: 1.5rem 2rem;
  margin-top: 40rem;

  @media (max-width: 992px) {
      
       margin-top: 15rem;
       }

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
    background-color: #ffd600;
    color: black;
    border-bottom: 4px solid darken(#FCA311, 10%);
    &:before {
      transform: skewX(-45deg) translateX(13.5em);
     transition: all 0.9s ease-in-out;
       }
    }`;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

`;
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
// const Title = styled.h1`
// `;
const LandingPage = () => {
    return (
        <Fragment>
              
            <Wrapper>
                <Title>Welcome!</Title>
                <Phrase>Find your favorite Pokemon character or create your own</Phrase>
            </Wrapper>
            < Wrap>
                <Button type='submit' >HOME</Button>
            </ Wrap>
        </Fragment>
    );
}

export default LandingPage;