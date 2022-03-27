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
exports.saveUser = (req, res) => {

    con.getConnection((error, connection) => {
        if (error) throw error

        const { usrname, usrage, usrcity } = req.body;
        console.log(usrname)
        console.log(usrage);
        console.log(usrcity);
        connection.query("INSERT INTO  users(NAME,AGE,CITY) values(?,?,?)",[usrname,usrage,usrcity], (err, rows) => {
            connection.release(); // close the connection
            if (!err) { console.log("Good"); res.render("addUsers",{msg:"User Details added success"}); }
            else console.log('Error' + err);
        });
    });


}

exports.updateUser = (req, res) => {

    // display the data
    con.getConnection((error, connection) => {
        if (error) throw error;
        // get id from url
        const { id } = req.params;
        connection.query("SELECT * FROM users WHERE id=?", [id], (err, rows) => {
            connection.release(); // close the connection
            if (!err) {
                res.render("updateUser", { rows });
            }
            else {
                console.log('Error' + err);
            }
        });
    });
}

exports.saveUpdate = (req,res) => {
    con.getConnection((error, connection) => {
        if (error) throw error;
        const { id } = req.params;
        const { usrname, usrage, usrcity } = req.body;

        connection.query("UPDATE  users set NAME=?,AGE=?,CITY=? WHERE ID=?",[usrname,usrage,usrcity,id], (err, rows) => {
            connection.release(); // close the connection
            if (!err) {

                con.getConnection((error, connection) => {
                    if (error) throw error;
                    // get id from url
                    const { id } = req.params;
                    connection.query("SELECT * FROM users WHERE id=?", [id], (err, rows) => {
                        connection.release(); // close the connection
                        if (!err) {
                            res.render("updateUser", {rows, msg: "User Details Updated success" });
                        }
                        else {
                            console.log('Error' + err);
                        }
                    });
                });

            }
            else console.log('Error' + err);
        });
    });
}

exports.deleteUser = (req, res) => {
    con.getConnection((err, connection) => {
        if (err) throw err;
        const { id } = req.params;
        connection.query("DELETE FROM users WHERE ID=?", [id], (err, rows) => {
            connection.release(); // close the connection
            if (!err) {
                res.redirect("/");
            } else {
                console.log(err)
            }
        });
    })
}