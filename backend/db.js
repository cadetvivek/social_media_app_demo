const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Vivek@#123',
  database: 'social_media_app'
});

module.exports = pool.promise();
