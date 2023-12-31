const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, './build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
})

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${PORT} порту!`)
})
