const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.json({ message: `Hello ${name}` });
});

app.listen(PORT, () => console.log(`App is running on PORT:${PORT}`))