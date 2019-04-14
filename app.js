//----------------------------------------------------------------------------------------
//1.-Requerir librerías y drivers
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoDBUrl = require('./keys');
const TourController = require('./controllers/admin');
//----------------------------------------------------------------------------------------
//2.-Configurar web server y parsee los datos
const app = express();
const port = 3000;
app.use(bodyParser.json());

//----------------------------------------------------------------------------------------
//3.- Definir paths disponibles
app.get('/', (req, res, next) => { res.send('Mongo Express.... Porfavor use /api/tours');});
app.get('/api/tours',TourController.inq);
app.get('/api/tours/:id',TourController.inqById);
app.get('/api/tours/names/:name',TourController.inqByName);
app.post('/api/tours',TourController.add);
app.put('/api/tours/:id',TourController.mod);
app.delete('/api/tours/:id',TourController.del);
//----------------------------------------------------------------------------------------
//4.- Encender webserver y dbserver
app.listen(port,()=>{
    console.log('Server Inicializado en el puerto: '+port);
    mongoose.connect(MongoDBUrl.conn, { useNewUrlParser: true }).then(() => {
        console.log('Server mongodb Conectado...') }, err =>
         { console.log(err)});
  });
  //----------------------------------------------------------------------------------------
