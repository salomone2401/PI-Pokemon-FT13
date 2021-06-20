import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import myImage from '../../img/0.png';



const Container = styled.div`
   display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
const Box = styled.div`
display: flex;
justify-content: center;
`;
const Card = styled.div`
    box-shadow: 2px 2px 10px #666;
    padding: 1rem;
    background-color: #4B4453;
    border-radius: 10px;
`;

const Image = styled.img`
    width: 250px;
    height: 170px;
`;
const Text = styled.p`
    display: block;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    margin: 1rem;
    text-decoration: underline;
    text-decoration-color: #4B4453 ;
      
`;
const Span = styled.span`
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
`;

const Pokemon = ({ pokemon }) => {
    const { name, type, id, img } = pokemon;
let pop = type[0]
let pup  = type[1]
// for (const iterator of type) {
//     console.log(iterator)
    
// }
    return (
        <div>
            <Link to={`/pokemon/${id}`}>
                <Card>

                    <Text># {id}</Text>
                    <Text>< Span>{name}</ Span></Text>

                    {img ? <Image src={img} alt="pokemon character" />
                        : <Image src={`${myImage}`} alt="pokemon" />
                    }
                    <Box>
                    <Text>{type[0]}</Text>
                    <Text>{type[1]}</Text>
                    </Box>
                    
                </Card>
            </Link>
        </div>

    )
}
export default Pokemon;






