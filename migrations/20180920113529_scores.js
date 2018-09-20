exports.up = function(knex, Promise) {
    return knex.schema.createTable("scores", table => {
        table.increments("id");
        table.text("initials");
        table.text("score")
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("scores")
};