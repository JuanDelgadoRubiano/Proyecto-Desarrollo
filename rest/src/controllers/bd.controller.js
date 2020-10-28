const { Pool } = require('pg');
const bcrypt = require('bcryptjs');


const pool = new Pool({
    host: process.env.hostbd,
    user: process.env.userbd,
    password: process.env.passwordbd,
    database: process.env.databasebd,
});

module.exports = {
  pool,
  bcrypt
}
