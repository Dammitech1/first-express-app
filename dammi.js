
const express = require("express");

const app = express();
const port = 5000;


app.get('/groceries', (req, res) => {
    res.send([
        {
            item: 'milk',
            quantity: 5,
        },
        {
            item: 'egg',
            quantity: 10,
         },
         {
            item: 'baking-powder',
            quantity: 15,
         },

    ]);
});

app.listen(port, () => console.log(`running express on server port ${port}`));
