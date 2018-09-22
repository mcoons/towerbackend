const database = require("./database-connection");

module.exports = {

  list() {
    return database("scores")
      .select()
      .orderBy("score","desc");
  },

  create(score) {
    return database("scores")
      .insert(score)
      .returning("*")
      .then(record => record[0]);
  },

  read(attribute, value) {
    return database("scores")
      .select()
      .where(attribute, value)
      .orderBy("score");
  },

  // update(id, scores) {
  //   return database("scores")
  //     .update(scores)
  //     .where("id", id)
  //     .returning("*")
  //     .then(record => record[0]);
  // },

  delete(id) {
    return database("scores")
      .delete()
      .where("id", id);
  }

};