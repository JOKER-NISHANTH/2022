const mySql = require("mysql2");

const con = mySql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});


exports.view=(req, res) => {

    // Check DB Connection
    con.getConnection((error, connection) => {
    if (error) throw error

        console.log("Connection Success");

        connection.query("SELECT * FROM users", (err, rows) => {
            connection.release(); // close the connection
            if (!err) { console.log("Good"); res.render("home",{rows})}

            else console.log('Error' + err);
        });
    })


}