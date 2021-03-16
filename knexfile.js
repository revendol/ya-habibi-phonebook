// Update with your config settings.
const path = require('path')
const dbPath = path.join(__dirname, 'db','ya_habibi.sqlite3')

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: dbPath
        },
        useNullAsDefault: true
    }

};
