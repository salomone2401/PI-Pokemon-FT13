import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetail} from '../../actions/pokemonsAction';

import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import Header from '../Header';
import myImage from '../../img/pok.png';
import img from '../../img/pato.png';



const GlobalStyle = createGlobalStyle`
  body {
    background: #FAFAA0;
  }
`;
const Container = styled.div`
    background-color:#B39CD0;
    width: 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 2rem;
`;


const Image = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 2rem;

   :hover{
	-webkit-transform: scale(0.9);
	transform: scale(0.9);
}
`;

const Button = styled.button`
    margin-top: 1rem;
    padding: 1rem 2rem;
    border-radius: 7px;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: #00C9A7;
    color: black;
    border: 1px solid black;
    text-decoration: none;
    position: absolute;
        left: 1%;
        top: 0;

`;

const Tipo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Type = styled.p`
    margin: 2rem 2rem;
    background-color: #00C9A7;
    padding: 1rem 2rem;
    border-radius: 7px;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border: 1px solid black;
    :hover{
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
`;

const Type2 = styled.p`
    margin: 2rem 2rem;
    background-color: yellow;
    padding: 1rem 2rem;
    border-radius: 7px;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border: 1px solid black;
    :hover{
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
`;
const Span = styled.span`
    color: black;
    display: block;
    background-color: #B39CD0;
    padding: 1rem 2rem;
    border-radius: 7px;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 1rem;
    border: 1px solid black;
`;

const Text = styled.p`
    text-align: center;
    padding: 1rem 1rem;
    border-radius: 7px;
    font-size: 1.5rem;
    p:empty {
    display: none;
    }
`;


const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    background-color: #845EC2;
    border-radius: 15px;
    border: 1px solid black;
`;

const Image2 = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 200px;
    height: 100px;
`;

const Img = styled.img`
    width: 300px;
    height: 300px;
`;
const Imagen = styled.img`
    width: 350px;
    height: 500px;
    position: absolute;
    top: 20%;
    left: 40%;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    position: absolute;
    top: 10%;
    left: 35%;
`;
const IdPokemon = () => {

  //mostrar todos los pokemons
  const dispatch = useDispatch();
  const pokemonDetail = useSelector(state => state.pokemonDetail);
  const { id } = useParams()
  console.log('imprimiendo id', id)


  useEffect(() => {

    dispatch(getPokemonDetail(id));

    // eslint-disable-next-line
  }, [dispatch, id])

  if (pokemonDetail === null || pokemonDetail === undefined) {
    return (
      <div>
        <GlobalStyle />
        <Link to={'/pokemon'}>
          <Button>&laquo; BACK TO MAIN PAGE</Button>
        </Link>
        <Title>Ups.. There isn't a pokemon with that name</Title>
        <Imagen src={img} alt="pokemon character" />

      </div>

    )
  } else {
    console.log(pokemonDetail)
    var input = pokemonDetail.type
    var fields = input.split(',');

    var pop = fields[0];
    var street = fields[1];

    if (street) {
      console.log('hoal')
    } else {
      console.log('chau')
    }

    return (


      <>
        <GlobalStyle />
        <Header />
        <Link to={'/pokemon'}>
          <Button>&laquo; BACK TO MAIN PAGE</Button>
        </Link>
        <Container>

          <Image>
            {pokemonDetail.img ? <Img src={pokemonDetail.img} alt="pokemon character" /> :
              <Image2 src={myImage} alt="pokemon character" />
            }
          </Image>
          <Tipo>
            <Type>{pop}</Type>
            {street ? <Type>{street}</Type> : null
            }
          </Tipo>
          <Box>
            <div>
              <Text>Name<Span>{pokemonDetail.name}</Span></Text>
              <Text>HP<Span>{pokemonDetail.HP}</Span></Text>
            </div>

            <div>
              <Text>Attack<Span>{pokemonDetail.attack}</Span></Text>
              <Text>Defense<Span>{pokemonDetail.defense}</Span></Text>
            </div>

            <div>
              <Text>Height<Span>{pokemonDetail.height}</Span></Text>
              <Text>Weight<Span>{pokemonDetail.weight}</Span></Text>
            </div>
          </Box>
        </Container>
      </>
    )
  }
}

export default IdPokemon;
