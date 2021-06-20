import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import myImage from '../img/e.png';




const Head = styled.div`
   background: #DDD4E6;
   padding: 1rem;
   max-width: 100%;
   display: flex;
 justify-content: center;
 margin-bottom: 0;
`;

const Text= styled.p`
    text-align: center;
    padding: 1rem 1rem;
    font-size: 1.7rem;
    background-color: #FFEC45;
    display:inline-block;
    border: 1px solid #000000;
    border-radius:5px;
    box-sizing: border-box;
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

const Header = () => {
    return (
         
        <Head>
            <Link to={'/pokemon'} >
            <Text>Pokemon App</Text>
            </Link>

        </Head> 
     );
}
 
export default Header;