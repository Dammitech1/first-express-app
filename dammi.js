
const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => console.log(`running express on server port ${port}`));



const grocerylist = [
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

]
app.get('/groceries', (req, res) => {
    res.send(grocerylist);

});

app.post('/groceries', (req, res) => {
    console.log(req.body);
    res.send(200);
});
