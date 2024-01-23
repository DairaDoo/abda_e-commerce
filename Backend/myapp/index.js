const express = require("express") //Ya instalada la dependencia Express, para poder utilizarla en nuestro codigo se define la constante express y se llama con la funcion require (funcion incorporada de Node Js para "llamar" librerias a utilizar)

const app = express() //Se inicializa nuestro servidor express en esta constante app, que hace referencia a nuestra apllicacion del servidor

const port = 3000 //se define un puerto para nuestra aplicacion Express


//Nuestra aplicacion express, utiliza su metodo get para en este caso mostrar la ruta inicial "/" o Home de nuestra pagina
app.get('/', (req, res)=> {
    res.send('Hello world')
})


//Se define quer nuestra aplicacion esta "escuchando" al puerto ya definido
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})