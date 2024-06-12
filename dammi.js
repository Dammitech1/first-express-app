
const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded());

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
     {
        item: 'car',
        quantity: 4,
    },
]

app.get('/groceries', (req, res) => {
    res.send(grocerylist);
});

app.post('/groceries', (req, res) => {
    const grocery = req.body
    grocerylist.push(grocery)
    res.send(grocerylist);
});

app.patch('/groceries', (req, res) =>{
    const grocery = req.body
    grocerylist.find((thisGrocery, index) => {
        if (thisGrocery.item === grocery.item) {
            grocerylist[index].quantity = grocery.quantity
        }
    } )
    res.send(grocerylist);
})

app.delete('/groceries', (req, res) => {
    const grocery = req.body
    grocerylist.find((thisgrocery, index) => {
        if (thisgrocery.item === grocery.item) {
            grocerylist.splice(index, 1)
        }
    })
    res.send(grocerylist)
})
