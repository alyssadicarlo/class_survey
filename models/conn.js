const host = 'kashin.db.elephantsql.com';
const database = 'omvfqcxu';
const user = 'omvfqcxu';
const password = 'MHLXGOrjZwKZDUZtZXfVj-tX1qvSrn8Y';

const pgp = require('pg-promise')({
    query: function(event) {
        console.log("QUERY: ", event.query);
    }
});

const options = {
    host,
    database,
    user,
    password
}

const db = pgp(options);

module.exports = db;