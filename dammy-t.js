
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed



// The switch statement is described in the next chapter.

const express = require("express")
const app = express()
const port = 5000

app.get("/", (req, res) => {
 res.send("happy sunrise to the sunshine") 

 if (hour < 18) {
    greeting = "Good day";}
 })


app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})




