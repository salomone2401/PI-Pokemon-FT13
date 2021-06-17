import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import myImage from '../img/log.png';



const Container = styled.div`
   display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Card = styled.div`
      box-shadow: 2px 2px 10px #666;
    padding: 1rem;
    background-color: #83c39b;

`;
const Image = styled.img`
       width: 250px;
    height: 170px;
`;


const Pokemon = ({ pokemon }) => {
    const { name, type, id, img } = pokemon;

    return (
        <Container>
        <Link to={`/pokemon/${id}`}>
            <Card>
                <span>{id}</span>
                <span>{name}</span>
                <span>{type}</span>
                {img ? <Image src={img} alt="pokemon character" /> 
                :  <Image src={`${myImage}`} alt="pokemon" />
                    }
            </Card>
        </Link>
        </Container>

    )
}
export default Pokemon;






