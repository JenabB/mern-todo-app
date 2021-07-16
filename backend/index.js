const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

const PORT = 3030;
const app = express();
app.use(express.json());

dotenv.config({ path: './config/config.env' });
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());
app.use(cors());

connectDB();
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log('The server is listening on port ' + PORT);
});
