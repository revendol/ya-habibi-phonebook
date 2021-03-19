const knex = require('knex');
const config = require('../knexfile');

var db = knex(config.development);

const table = 'users';

/************************************************
 * Methods of operation                         *
 * Create record on database                    *
 * Read records from database                   *
 * Read single record from database             *
 * Update record on database                    *
 * Delete record from database                  *
 ************************************************/

async function create(data){
    var [id] = await db(table).insert(data);
    return id;
}

function all(){
    return db(table);
}

function findByID(id){
    return db(table).where({id: id});
}

function update(id, data){
    return db(table).where({id: id}).update(data,[id]);
}

function remove(id){
    return db(table).where({id: id}).del();
}

module.exports = {
    create, all, findByID, update, remove
}
