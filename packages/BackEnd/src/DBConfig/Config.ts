// this file will create a connection to the DB which will allow the models to query the DB
// #region imports
import mysql from 'mysql';
import dotenv from 'dotenv';
// #endregion
// #region config
dotenv.config();
// #endregion

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

export default pool;
