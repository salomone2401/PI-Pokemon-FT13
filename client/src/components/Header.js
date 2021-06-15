import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import myImage from '../img/e.png';

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #95E06C;
    padding-bottom: 3rem;

`;
const Text= styled.p`
margin: 2rem 5rem;
    text-align: center;
    padding: 1rem 1rem;
    font-size: 2rem;
    background-color: #C3F73A;
    display:inline-block;
    border: 1px solid #000000;
    border-radius:5px;
    box-sizing: border-box;
    text-decoration:none;
    font-weight:700;
    color:#000000;
    text-align:center;
    transition: all 0.15s;
    :hover{
      color: #FFFFFF;
      border-color:#FFFFFF;
      background-color: #1C1018;
    }
`;

const Image = styled.img`
        position: absolute;
            top: 1%;
            left: 5%;
            width: 90px;
            height: 90px;
          
            -webkit-animation:spin 4s linear infinite;
            -moz-animation:spin 4s linear infinite;
            animation:spin 4s linear infinite;
        @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
        @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
        @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;


const Header = () => {
    return (
         
        <Head>
            <div>
               <Image src={`${myImage}`} alt="pokemon" />;
            </div>
            <Link to={'/pokemon'} >
            <Text>Pokemon API</Text>
            </Link>

        </Head> 
     );
}
 
export default Header;