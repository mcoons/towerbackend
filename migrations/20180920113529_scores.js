exports.up = function(knex, Promise) {
    return knex.schema.createTable("scores", table => {
        table.increments("id");
        table.text("initials");
        table.integer("level");
        table.integer("score")
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("scores");
};