const {Pool} = require('pg');

module.exports = new Pool({
    connectionString: process.env.RAILWAY_DATABASE_CONNECTION_STRING
});