// MySql Connection Setup
const mySql = require("mysql2");

const con = mySql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});


exports.view = (req, res) => {
    // Check DB Connection
    con.getConnection((error, connection) => {
        if (error) throw error
        console.log("Connection Success");

        connection.query("SELECT * FROM users", (err, rows) => {
            connection.release(); // close the connection
            if (!err) { console.log("Data Retrieve Successfully"); res.render("home", { rows }) }
            else console.log('Error' + err);
        });
    });
};

exports.addUser = (req, res) => {
    res.render("addUsers");
}
exports.save = (req, res) => {

    con.getConnection((error, connection) => {
        if (error) throw error

        const { usrname, usrage, usrcity } = req.body;
        console.log(usrname)
        console.log(usrage);
        console.log(usrcity);
        connection.query("INSERT INTO  users(NAME,AGE,CITY) values(?,?,?)",[usrname,usrage,usrcity], (err, rows) => {
            connection.release(); // close the connection
            if (!err) { console.log("Good"); res.render("addUsers"); }
            else console.log('Error' + err);
        });
    });


}