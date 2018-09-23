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
            level: 5,
            score: 5000
          },
          {
            initials: "mlc",
            level: 4,
            score: 4000
          },
          {
            initials: "mlc",
            level: 3,
            score: 3000
          },
          {
            initials: "mlc",
            level: 2,
            score: 1000
          },
          {
            initials: "mlc",
            level: 1,
            score: 500
          }
        ]);
      });
  };