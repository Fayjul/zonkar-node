const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Allah please help me, Ya rab');
});

const users = [
  { id: 1, name: 'Shakib' },
  { id: 2, name: 'Shakib' },
  { id: 3, name: 'Shakib' },
];

app.get('/users', (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    req.send(searchResult);
  } else {
    req.send(users);
  }
});

app.listen(port, () => {
  console.log('port', port, ' is running sucsesfully');
});