const express = require('express');
const path = require('path');
const examdata = require('./Examdata');
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname,'public')));

app.get('/student', (req, res) => {
  res.json(examdata);
});

app.get('/student/:id', (req, res) => {
    res.json(examdata.filter(std => std.ID === req.params.id));
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})