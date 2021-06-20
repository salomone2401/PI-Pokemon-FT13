import React from 'react';
import styled from 'styled-components';
import myImage from '../img/e.png';

const Image = styled.img`
      width: 180px;
      height: 180px;
      -webkit-animation:spin 4s linear infinite;
      -moz-animation:spin 4s linear infinite;
      animation:spin 4s linear infinite;
      @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
      @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;


const Load = styled.p`
display: flex;

    font-size: 3rem;
    font-weight: 700;
    border-radius:5px;
    text-align: center;
`;
const Container = styled.div`
 display: flex;
 background-color: red;
 border-radius: 20px;
 justify-content: center;
 align-items: center;

`;
const Loading = () => {
    return ( 
        <Container>
            <Load >Loading...</Load>
       
            <Image src={`${myImage}`} alt="pokemon" />;
        
          </Container>
     );
}
 
export default Loading;
