const express = require('express');
const app = express();
const port = 3000;


app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/main.html');
   });

app.get('/kontakt', (req, res) => {
    res.sendFile(__dirname + '/views/kontakt.html');
   });

app.get('/join_info', (req, res) => {
    res.sendFile(__dirname + '/views/join_info.html');
   });

app.get('/information', (req, res) => {
    res.sendFile(__dirname + '/views/information.html');
   });



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});