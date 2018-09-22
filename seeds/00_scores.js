exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("scores")
    .del()
    .then(() => {
    return knex.raw("ALTER SEQUENCE scores_id_seq RESTART WITH 1;");})
    .then(function() {
        // Inserts seed entries
        return knex("scores").insert([
          {
            initials: "mlc",
            level: 1,
            score: 100
          },
          {
            initials: "mlc",
            level: 1,
            score: 99
          },
          {
            initials: "mlc",
            level: 1,
            score: 98
          },
          {
            initials: "mlc",
            level: 1,
            score: 97
          },
          {
            initials: "mlc",
            level: 1,
            score: 96
          }
        ]);
      });
  };