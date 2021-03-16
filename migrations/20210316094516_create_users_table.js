
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name');
        table.string('phone').unique();
        table.string('email').unique().nullable();
        table.timestamp('phone_verified_at').nullable();
        table.string('password');
        table.timestamp('deleted_at').nullable();
        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
