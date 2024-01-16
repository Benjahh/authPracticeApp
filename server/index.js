const Pool = require('pg').Pool;
const express = require('express');
require('dotenv').config();
console.log(process.env.PG_USER);

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
