const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

let votes = { yes: 0, no: 0 };

app.use(express.static('public'));
app.use(express.json());

app.get('/api/votes', (req, res) => {
  res.json(votes);
});

app.post('/api/vote', (req, res) => {
  const { vote } = req.body;
  if (vote === 'yes' || vote === 'no') {
    votes[vote]++;
    return res.json({ success: true, votes });
  }
  res.status(400).json({ success: false, message: 'Invalid vote' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});