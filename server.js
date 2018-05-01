'use strict';

const express = require('express');

const PORT = 7593;
const HOST = '0.0.0.0'

const app = express();
app.get('/api/v1/calculator/add/(((-?[0-9]+)[/]*))+', (req, res) => {
   var numeros = req.params[0].split('/');
   var resultado = 0;

   for (var i in numeros){
       resultado += parseInt(numeros[i]);
   }

  res.send(resultado.toString());
});
app.get('/api/v1/calculator/div/(((-?[0-9]+)[/]*))+', (req, res) => {
    var numeros = req.params[0].split('/');
    var resultado = numeros[0];
    
    for (var i = 1 ; i < numeros.length ; i++){
        resultado = resultado / parseInt(numeros[i]);
    }
 
   res.send(resultado.toString());
 });
 app.get('/api/v1/calculator/subs/(((-?[0-9]+)[/]*))+', (req, res) => {
    var numeros = req.params[0].split('/');
    var resultado = 0;
 
    for (var i in numeros){
        resultado -= parseInt(numeros[i]);
    }
 
   res.send(resultado.toString());
 });
 app.get('/api/v1/calculator/mult/(((-?[0-9]+)[/]*))+', (req, res) => {
    var numeros = req.params[0].split('/');
    var resultado = 1;
 
    for (var i in numeros){
        resultado = resultado *  parseInt(numeros[i]);
    }
 
   res.send(resultado.toString());
 });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);