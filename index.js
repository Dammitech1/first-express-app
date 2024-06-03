const express = require("express")
const app = express()
const port = 4000

const area = require('./first-class/area')

app.get("/", (req, res) => {
    res.send("hello world! i am here today")
})
app.get("/login", (req, res) =>
    res.send("do you want to login to your app?")
)

// create route for calculating the area of a circle by using the circle function
app.get('/calculate-area', (req, res) => {
    console.log(req.query);

    // get radius of the circle from the request query parameter
    let shape = req.query.shape
    if (shape === 'circle') {
        let radius = req.query.radius
        let cArea = area.circleArea(radius)
        res.send(`the area of a circle of radius ${radius} is ${cArea}`)

    } else if (shape === 'cylinder') {
        let radius = req.query.radius
        if(radius) {
        let height = req.query.height
        let cyArea = area.cylinderArea(radius, height)
        res.send(`the area of a cylinder of radius ${radius, height} is ${cyArea}`)

        }else {
            res.send('please provide the radius of the cylinder')
        }

    } else if (shape === 'square') {
        let side = req.query.side
        let square = area.squareArea(side)
        res.send(`the area of a squareArea of side ${side}} is ${squareArea}`)


    } else {

        res.end('please specify the shape you want to calculate its area')
    }






})





app.get("/register", (req, res) => {
    res.send("do you want to register an account?")
})
app.get("/register/nigeria", (req, res) => {
    res.send("do you want to register an account?")
})

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)

})