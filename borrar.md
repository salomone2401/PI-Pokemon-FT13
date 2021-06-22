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