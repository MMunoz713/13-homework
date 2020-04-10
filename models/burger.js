//ORM being called into Burger.js
const orm = require("../config/orm")

//specifies all items in the Burger Database
let burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
//Creates new items to be put in the database
    create: function(name, cb) {
      orm.create("burgers", [
        "burger_name", "devoured"
      ], [
        name, false
      ], cb);
    },
//updates the database with new items and gives it an ID number
    update: function(id, cb) {
      let condition = "id=" + id;
      orm.update("burgers", {
        devoured: true
      }, condition, cb);
    }
  };
//exports file to be used elsewhere
module.exports = burger;