const express = require('express')
const app = express()

app.use('/api/poems', (req, res) => {
  res.status(201).send('Poem router worked')
})

app.use('*', (req, res) => {
  res.status(405).send('Hit unknown endpoint')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
