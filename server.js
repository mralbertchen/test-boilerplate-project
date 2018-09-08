const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./'));
app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/api/:p', (req, res) => {
  const { p } = req.params;
  res.status(200).json({ parameter: p });
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});
