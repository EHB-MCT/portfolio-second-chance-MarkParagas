console.log(test)

const express = require("express");
const app = express();

app.listen(8080, (error) => {
    if(!error) {
        console.log("test" + 8080)
    } else {
        console.error(error)
    }
})