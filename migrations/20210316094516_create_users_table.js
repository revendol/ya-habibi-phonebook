
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('first_name');
        table.string('last_name');
        table.string('email').unique().nullable();
        table.timestamp('email_verified_at').nullable();
        table.string('password');
        table.timestamp('deleted_at').nullable();
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
