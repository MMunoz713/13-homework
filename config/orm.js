const conenction = require("./connection")

//creates a string of question marks
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
//converts object key and value pairs so that SQL can read it
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}
//all sql statement functions
const orm = {
    all: function (table1, cb) {
        const queryString = `SELECT * FROM  ${table1};`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, vals, cb) {
        //inserting a new table
        const queryString = "INSERT INTO " + table;

        console.log(queryString);
        //insetering values into table
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //updates and prints out a new table from the above input
    update: function (table1, multipleColObj, condition, cb) {
        const queryString = `UPDATE ${table1} 
                            SET ${objToSql(multipleColObj)}
                            WHERE ${condition};`

        //checks connection and prints out error if can not connect
        connection.uery(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
};

module.exports = orm;
