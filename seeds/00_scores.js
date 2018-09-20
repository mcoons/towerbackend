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
            score: "100"
          },
          {
            initials: "mlc",
            score: "99"
          },
          {
            initials: "mlc",
            score: "98"
          },
          {
            initials: "mlc",
            score: "97"
          },
          {
            initials: "mlc",
            score: "96"
          }
        ]);
      });
  };