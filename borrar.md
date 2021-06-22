\

select column_name, data_type, character_maximum_length, 
column_default from INFORMATION_SCHEMA.COLUMNS where table_name = 'customers';

 column_name  |        data_type         | character_maximum_length | column_default 
--------------+--------------------------+--------------------------+----------------
 id           | uuid                     |                          | 
 name         | character varying        |                      255 | 
 healthpoints | integer                  |                          | 
 attack       | integer                  |                          | 
 defense      | integer                  |                          | 
 speed        | integer                  |                          | 
 height       | integer                  |                          | 
 weight       | integer                  |                          | 
 createdAt    | timestamp with time zone |                          | 
 updatedAt    | timestamp with time zone |                          | 
(10 rows)

1. **req.body**
Generally used in POST/PUT requests.
Use it when you want to send sensitive data(eg. form data) or super long JSON data to the server.

- How to send data in request body

using axios
```js
  axios.post('/giraffe', {
    key1: 'value1',
    key2: 'value2'
  })
  .then(response => {
    ...
  })
  .catch(error => {
    ...
  })
```
- How to get data from request body
```js
  app.get('/giraffe', (req, res) => {
   console.log(req.body.key1) //value1
   console.log(req.body.key2) //value2
  })
```
Remember to use express.json() middleware to parse request body else you'll get an error
app.use(express.json())

2. **req.params**
These are properties attached to the url i.e named route parameters. You prefix the parameter name with a colon(:) when writing your routes.

For instance,
```js
  app.get('/giraffe/:number', (req, res) => {
   console.log(req.params.number)
  })
```
To send the parameter from the client, just replace its name with the value
  GET  http://localhost:3000/giraffe/1

3. **req.query**

req.query is mostly used for searching,sorting, filtering, pagination, e.t.c
Say for instance you want to query an API but only want to get data from page 10, this is what you'd generally use.
It written as key=value
  GET  http://localhost:3000/animals?page=10

To access this in your express server is pretty simple too;
```js
  app.get('/animals', ()=>{
   console.log(req.query.page) // 10
  })
```


useParams() 
Ruta principal: debe contener

[ ] Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)  HECHO
[ ] Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /pokemons y deberá mostrar su:
Imagen
Nombre
Tipos (Electrico, Fuego, Agua, etc) ((FALTA LOS POKEMONS DE LA BASE DE DATOS))
[ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza
[ ] Paginado para ir buscando y mostrando los siguientes pokemons



me trae el listado ((FALTA ARREGLAR LOS OBJETOS CREADOS POR EL USUARIO))
[ ] GET /pokemons:
Obtener un listado de los primeros 12 pokemons desde pokeapi
Debe devolver solo los datos necesarios para la ruta principal



import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import myImage from '../img/e.png';

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;

`;
const Text= styled.p`
margin: 2rem;
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


  5    "type": "rock,bug",
   "type": "grass,poison",


   [
    {
        "id": 1,
        "name": "bulbasaur",
        "type": "grass,poison",
        "HP": 45,
        "attack": 49,
        "defense": 49,
        "speed": 45,
        "height": 7,
        "weight": 69
    }
]

[
    {
        "id": "31b34c1c-9b05-4460-9ee4-31a1801f41cb",
        "name": "lolo",
        "type": "rock,bug",
        "HP": 7,
        "attack": 78,
        "defense": 77,
        "speed": 78,
        "height": 77,
        "weight": 7
    }
]

    {/* /* <Image>
            <img src={pokemonDetail.img} alt="pokemon character" />
          </Image> */}

          {/* <Tipo>
            {/* <Type>{name}</Type>
            <Type>{street}</Type> */}
          {/* </Tipo>
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
          </Container> */ }
// if (pokemonDetail === null || pokemonDetail === undefined) {
  //   return (<Loading />)
  // } else {
    
    // var input = pokemonDetail.type
    // var fields = input.split(',');

    // var name = fields[0];
    // var street = fields[1];

    [
    {
        "id": "1",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        "name": "bulbasaur",
        "type": [
            "grass",
            "poison"
        ]
    },
    {
        "id": "2",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        "name": "ivysaur",
        "type": [
            "grass",
            "poison"
        ]
    },
    {
        "id": "3",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
        "name": "venusaur",
        "type": [
            "grass",
            "poison"
        ]
    },
    {
        "id": "4",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
        "name": "charmander",
        "type": [
            "fire"
        ]
    },
    {
        "id": "5",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
        "name": "charmeleon",
        "type": [
            "fire"
        ]
    },
    {
        "id": "6",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
        "name": "charizard",
        "type": [
            "fire",
            "flying"
        ]
    },
    {
        "id": "7",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
        "name": "squirtle",
        "type": [
            "water"
        ]
    },
    {
        "id": "8",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
        "name": "wartortle",
        "type": [
            "water"
        ]
    },
    {
        "id": "9",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
        "name": "blastoise",
        "type": [
            "water"
        ]
    },
    {
        "id": "10",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
        "name": "caterpie",
        "type": [
            "bug"
        ]
    },
    {
        "id": "11",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
        "name": "metapod",
        "type": [
            "bug"
        ]
    },
    {
        "id": "12",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
        "name": "butterfree",
        "type": [
            "bug",
            "flying"
        ]
    },
    {
        "id": "13",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
        "name": "weedle",
        "type": [
            "bug",
            "poison"
        ]
    },
    {
        "id": "14",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
        "name": "kakuna",
        "type": [
            "bug",
            "poison"
        ]
    },
    {
        "id": "15",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
        "name": "beedrill",
        "type": [
            "bug",
            "poison"
        ]
    },
    {
        "id": "16",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
        "name": "pidgey",
        "type": [
            "normal",
            "flying"
        ]
    },
    {
        "id": "17",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
        "name": "pidgeotto",
        "type": [
            "normal",
            "flying"
        ]
    },
    {
        "id": "18",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
        "name": "pidgeot",
        "type": [
            "normal",
            "flying"
        ]
    },
    {
        "id": "19",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
        "name": "rattata",
        "type": [
            "normal"
        ]
    },
    {
        "id": "20",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
        "name": "raticate",
        "type": [
            "normal"
        ]
    },
    {
        "id": "21",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg",
        "name": "spearow",
        "type": [
            "normal",
            "flying"
        ]
    },
    {
        "id": "22",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
        "name": "fearow",
        "type": [
            "normal",
            "flying"
        ]
    },
    {
        "id": "23",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg",
        "name": "ekans",
        "type": [
            "poison"
        ]
    },
    {
        "id": "24",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
        "name": "arbok",
        "type": [
            "poison"
        ]
    },
    {
        "id": "25",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
        "name": "pikachu",
        "type": [
            "electric"
        ]
    },
    {
        "id": "26",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",
        "name": "raichu",
        "type": [
            "electric"
        ]
    },
    {
        "id": "27",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg",
        "name": "sandshrew",
        "type": [
            "ground"
        ]
    },
    {
        "id": "28",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg",
        "name": "sandslash",
        "type": [
            "ground"
        ]
    },
    {
        "id": "29",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg",
        "name": "nidoran-f",
        "type": [
            "poison"
        ]
    },
    {
        "id": "30",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg",
        "name": "nidorina",
        "type": [
            "poison"
        ]
    },
    {
        "id": "31",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
        "name": "nidoqueen",
        "type": [
            "poison",
            "ground"
        ]
    },
    {
        "id": "32",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg",
        "name": "nidoran-m",
        "type": [
            "poison"
        ]
    },
    {
        "id": "33",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg",
        "name": "nidorino",
        "type": [
            "poison"
        ]
    },
    {
        "id": "34",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
        "name": "nidoking",
        "type": [
            "poison",
            "ground"
        ]
    },
    {
        "id": "35",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
        "name": "clefairy",
        "type": [
            "fairy"
        ]
    },
    {
        "id": "36",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",
        "name": "clefable",
        "type": [
            "fairy"
        ]
    },
    {
        "id": "37",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",
        "name": "vulpix",
        "type": [
            "fire"
        ]
    },
    {
        "id": "38",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",
        "name": "ninetales",
        "type": [
            "fire"
        ]
    },
    {
        "id": "39",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg",
        "name": "jigglypuff",
        "type": [
            "normal",
            "fairy"
        ]
    },
    {
        "id": "40",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
        "name": "wigglytuff",
        "type": [
            "normal",
            "fairy"
        ]
    },
    {
        "id": "fadcd9a2-bdcc-4f8c-bc9b-7660e2eae3be",
        "name": "lolo",
        "healthpoints": 22,
        "attack": 34,
        "defense": 45,
        "speed": 34,
        "height": 78,
        "weight": 12,
        "img": null,
        "createdAt": "2021-06-22T01:39:30.279Z",
        "updatedAt": "2021-06-22T01:39:30.279Z",
        "type": [
            "poison",
            "grass"
        ]
    },
    {
        "id": "bc94ea77-bf61-40a9-90fd-3f6f90f0f3f1",
        "name": "lolo",
        "healthpoints": 22,
        "attack": 34,
        "defense": 45,
        "speed": 34,
        "height": 78,
        "weight": 12,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        "createdAt": "2021-06-22T01:40:23.408Z",
        "updatedAt": "2021-06-22T01:40:23.408Z",
        "type": [
            "poison",
            "grass"
        ]
    },
    {
        "id": "6813ff33-42d3-40f0-bbe4-7222d08017d8",
        "name": "mari",
        "healthpoints": 3,
        "attack": 3,
        "defense": 4,
        "speed": 3,
        "height": 3,
        "weight": 2,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUJBCnUjFMLwUEX8fJh1t9gbxXiBfXM6etQ&usqp=CAU",
        "createdAt": "2021-06-22T01:44:28.700Z",
        "updatedAt": "2021-06-22T01:44:28.700Z",
        "type": [
            "ghost",
            "water"
        ]
    }
]

exports.getPokemonById = async (req, res, next) => {
    try {
        if (req.params.id.length < 4) {

            const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
            let apiRes = api.data

            let object = {
                id: apiRes.id,
                img: apiRes.sprites.other.dream_world.front_default,
                name: apiRes.name,
                type: apiRes.types.map(x => x.type.name).toString(),
                HP: apiRes.stats[0].base_stat,
                attack: apiRes.stats[1].base_stat,
                defense: apiRes.stats[2].base_stat,
                speed: apiRes.stats[5].base_stat,
                height: apiRes.height,
                weight: apiRes.weight
            }
            res.send(object)
        } else {

            const hola = req.params
            const elem = await Pokemon.findAll()
            const arg = await PokemonType.findAll()
            for (let i = 0; i < elem.length; i++) {
                elem[i] = { ...elem[i].dataValues, type: [] }
            }
            for (let i = 0; i < arg.length; i++) {
                const pokeId = arg[i].dataValues.pokemonId;
                const tipoId = arg[i].dataValues.typeId;

                const typeName = await Type.findAll({
                    where: {
                        id: tipoId
                    }
                })
                for (let j = 0; j < elem.length; j++) {
                    if (pokeId.toString() === elem[j].id) {
                        elem[j].type.push(typeName[0].dataValues.name)
                    }
                }
            }
            for (let i = 0; i < elem.length; i++) {
                if (elem[i].id === hola.id) {
                    let obj = {
                        id: elem[i].id,
                        name: elem[i].name,
                        type: elem[i].type.toString(),
                        HP: elem[i].healthpoints,
                        attack: elem[i].attack,
                        defense: elem[i].defense,
                        speed: elem[i].speed,
                        height: elem[i].height,
                        weight: elem[i].weight,
                    }
                    res.send(obj)
                }
            }
        }

    } catch (error) {
        next(error);
    }
};
