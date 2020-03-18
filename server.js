const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

app.use('/api/arrays', require('./routes/arrays'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));