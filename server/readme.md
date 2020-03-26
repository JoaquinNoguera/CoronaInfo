# Corona Info Server Api
Esta en una api REST creada con express.js y MongoDb que sirve como complemento para la pagina que pose el mismo nombre. El servidor esta alojado en un host en heroku gratuito al que se puede acceder a travez del siguiente enalce:

 > https://corona-info-api.herokuapp.com/


## Peticiones

- GET "/" - provee los datos globales sobre el coronaviurus y los paises 
    * Devuelve un objeto de tipo [Global](#Global)

- GET "/update" - como heroku duerme las paginas que no son visitadas en un margen de tiempo, crear un evento que periodicamente actualice los datos no fue posible, así con mediante esta url pueden actualizarse los datos que contiene la app.

- GET "/country" - provee los datos correspondientes a los paises pasasados mediante el elemento Body del request.

    * Estructura del Body: { countries: [ country ] }

        - Estructura de country: country: { name: String, cod: String } 
    * Devuelve un array de objetos de tipo [Country](#Country)
### Tipos de datos

#### Global

- Country: [ country ]
    * country: { name: String, cod: String}

- Days: [ day ]
    * day: [confirmed: Number, recovered: number, deaths: number, lastUpdate: Date, compare: number]

*Aclaracion: compare del objeto day es el valor dado por getTime() del objeto Date en la hora 0hs 0min 0seg a fines de poder saber si dos datos fueron provistos el mismo dia*

#### Country
- Name: String

- Code: String

- Days: [ day ]
    * day: [confirmed: Number, recovered: number, deaths: number, lastUpdate: Date, compare: number]

*Aclaracion: compare del objeto day es el valor dado por getTime() del objeto Date en la hora 0hs 0min 0seg a fines de poder saber si dos datos fueron provistos el mismo dia*

