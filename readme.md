# Crud MongoDB y NodeJS

![Crud Imagen](./img/crud.png)

## Descripción
---
Este repositorio es un CRUD con MongoDB y NodeJs usando el Template Engine de Express (Handlebars).
- Se utilizo un compilador de JavaScript llamado Babel, que convierte codigo nuevo de ES6 a codigo legacy antes de ser ejecutado.

<div align="center">
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" title="NodeJS" alt="Node" width="40" height="40"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg" title="MongoDB" alt="Mongo" width="40" height="40"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/handlebars/handlebars-original-wordmark.svg" title="Express-Handlebars" alt="Handlebars" width="40" height="40"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/babel/babel-original.svg" title="BabelJS" alt="Babel" width="40" height="40"/>
</div>

## Instrucciones
---
Si quieres ejecutar el proyecto debes seguir los siguientes pasos despues de clonar el repositorio.

- Crear un archivo .env y agregar la variable de entorno DB_URI y agregar la uri de tu base de datos con MongoDB
<div align = "center"> 

![env](./img/env.png)

</div>

- Ejecutar el siguiente comando que creara una carpeta llamada "dist" que contendra el codigo legacy para produccion:

$ npm run production

<div align = "center"> 

![dist](./img/dist.png)

</div>

- Ejecutar el siguiente comando, que ejecutara el proyecto:

$ npm run start

ó

$ node dist/index.js

- En caso de que quieras modificar el proyecto debes correrlo con el siguiente comando:

$ npm run test

Si el proyecto se ejecuta correctamente deberias ver el siguiente mensaje en la terminal.

![Terminal](./img/terminal.png)
