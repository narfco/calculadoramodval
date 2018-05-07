'use strict';

const express = require('express');

const PORT = 7593;
const HOST = '0.0.0.0'
var regex = new RegExp("^((((-?[0-9]+)[\/]*))+)$");

const app = express();
app.get('/api/v1/calculator/add/*', (req, res) => {

    if (regex.test(req.params[0].toString())) {
        var numeros = req.params[0].split('/');
        var resultado = 0;

        for (var i in numeros) {
            resultado += parseInt(numeros[i]);
        }

        res.send({ "result": + resultado.toString() });
    } else {
        res.send(404);
    }
});
app.get('/api/v1/calculator/div/*', (req, res) => {

    if (regex.test(req.params[0].toString())) {
        var numeros = req.params[0].split('/');
        var resultado = numeros[0];

        for (var i = 1; i < numeros.length; i++) {
            if (numeros[i] != 0) {
                resultado = resultado / parseInt(numeros[i]);
            } else {
                resultado = "∞";
                i = numeros.length;
            }
        }

        res.send(resultado.toString());
    } else {
        res.send(404);
    }
});
app.get('/api/v1/calculator/subs/*', (req, res) => {
    if (regex.test(req.params[0].toString())) {
        var numeros = req.params[0].split('/');
        var resultado = 0;

        for (var i in numeros) {
            resultado -= parseInt(numeros[i]);
        }

        res.send(resultado.toString());
    } else {
        res.send(404);
    }
});
app.get('/api/v1/calculator/mult/*', (req, res) => {
    if (regex.test(req.params[0].toString())) {
        var numeros = req.params[0].split('/');
        var resultado = 1;

        for (var i in numeros) {
            resultado = resultado * parseInt(numeros[i]);
        }

        res.send(resultado.toString());
    } else {
        res.send(404);
    }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);