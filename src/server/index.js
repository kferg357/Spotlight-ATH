
const express = require("express");
const mysql = require("mysql");



const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  fullname: "root",
  host: "localhost",
  password: "password",
  database: "b_user",
});

app.post('/register', (req, res) => {

    const fullnmae = req.body.fullname
    const password = req.body.password

    db.query("INSERT INTO users (fullname, password) VALUES (?,?)", 
    [fullname, password],
     (err, result) => {
        console.log(err);
    }
    );
})

app.listen(3001, () => {
  console.log("running server");
});