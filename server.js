const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const task = [
    {id:1, descripcion: 'Estudiar', hecho:'false'},
    {id:2, descripcion: 'Hacer mercado', hecho:'false'},
    {id:3, descripcion: 'Leer un libro', hecho:'true'},
]; 

app.get('/task', (req, res) =>{
    res.json(task);
});

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`);
});