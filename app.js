const express = require ('express');
const app = express();
const port = 3000
const path = require ('path');


app.use(express.static(path.join(__dirname, 'public')));
app.listen(port,() => {
    console.log("servidor funcionando en puerto " + port);
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
    res.sendFile(__dirname + '/views/login.html')
    res.sendFile(__dirname + '/views/home.html')
    res.sendFile(__dirname + '/views/home.html')
})
