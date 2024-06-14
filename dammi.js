
const express = require("express");
const { Schema, model, mongoose } = require('mongoose')

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => console.log(`running express on server port ${port}`));

const grocerrySchema = new Schema({
    item: {
        type: String,
        max: 50,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        max: 20,
        default: 1
    }
})

const GroceryModel = model('grocery', grocerrySchema)

//connect to the mongodb running in the local machine
mongoose.connect('mongodb://localhost:27017/shopping', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
const db = mongoose.connection
db.once('open', async () => {
    console.log(`running express on server port ${port}`)
    for (let index = 0; index < grocerylist.length; index++) {
        try {
            const element = grocerylist[index];
            console.log(element)
            const thisgrocery = new GroceryModel(element)
            await thisgrocery.save()
            console.log('item saved', element)
        } catch (err) {
            console.log(err, 'error saving item', grocerylist[index])
        }
    }
})

db.on('error', async (err) => console.log('database error', err))

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

app.patch('/groceries', (req, res) => {
    const grocery = req.body
    grocerylist.find((thisGrocery, index) => {
        if (thisGrocery.item === grocery.item) {
            grocerylist[index].quantity = grocerylist[index].quantity + grocery.quantity
        }
    })
    res.send(grocerylist);
})

app.delete('/groceries', (req, res) => {
    const grocery = req.body
    grocerylist.find((thisgrocery, index) => {
        if (thisgrocery.quantity === grocery.quantity) delete res.sendStatus
        grocerylist.splice(index, 1)
    }
    )
    res.send(grocerylist)

})

app.put('/groceries', (req, res) => {
    const grocery = req.body
    grocerylist.find((thisGrocery, index) => {
        if (thisGrocery.quantity === grocery.quantity) return res.sendStatus
        grocerylist[index].quantity = grocery.quantity

    })
    res.send(grocerylist);
})

