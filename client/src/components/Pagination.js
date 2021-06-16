import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const Link = styled.a`
    text-decoration: none;
    color: #000000;
    font-size: 2rem;
    
`;

const Pages = styled.p`
    font-size: 2rem;
    text-align: center;
    background-color: #C3F73A;
    border: 1px solid #000000;
   
    margin: 0 .5rem;
    padding: .5rem 1rem;

`;

const Pagination = ({ pokemonsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(40 / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav >
       <Link href="#">&laquo;</Link>
        {pageNumbers.map(number => (
          <Pages key={number} >
        
            <Link onClick={() => paginate(number)} href='#!'>
              {number}
            </Link>
           
          </Pages>
          
        ))}
         <Link href="#">&raquo;</Link>
    </Nav >
  );
};

export default Pagination;