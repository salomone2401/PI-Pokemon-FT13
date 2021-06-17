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