const {Pool} = require('pg');

module.exports = new Pool({
    connectionString: process.env.MY_DATABASE_CONNECTION_STRING
});