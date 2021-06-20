import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    width: 20%;
    justify-content: center;
    align-content: flex-end;
    align-items: center;
    padding: .5rem;
    background-color: #DDD4E6;
    border-radius: 8px;
    margin: 0 auto 1rem auto;
`;
const Link = styled.a`
    text-decoration: none;
    color: #000000;
    font-size: 2rem;
`;

const Pages = styled.p`
    font-size: 2rem;
    text-align: center;
    opacity: 0.6;
    border: 1px solid #000000;
    border-radius: 5px;
    margin: 0 .5rem;
    padding: .5rem 1rem;
   
    :hover{
      background-color: black;
    }

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