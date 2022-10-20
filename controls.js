const pool = require("../config/db/db");
const bcrypt = require("bcryptjs");

const getResponse = (req, res) => {
  pool.query("SELECT * FROM admin", (err, result) => {
    if (err) {
      console.log(err, "Error occured");
    }
    res.status(200).json(result.rows);
  });
};
const postResponse = async (req, res) => {
  try {
    var pass = "HA#123aa";
    const hash = await bcrypt.hash(pass, 10);
    let name = "harry";
    const query = `INSERT INTO admin (username,password) VALUES ('${name}','${hash}')`;
    pool
      .query(query)
      .then((res) => {
        console.log("inserted");
      })
      .catch((e) => {
        console.log(e);
      });
    res.status(200).json("all set");
    console.log(hash);
  } catch (e) {
    console.log(e, "Error");
    res.status(400).send("Some error occured");
  }
};


const validateUser = async (req, res) => {
  let { username, password } = req.body;
  console.log(username, password);
  const query = `SELECT * FROM admin WHERE username='${username}'`
  pool
    .query(query)
    .then(async (data) => {
      console.log(data.rows[0], "data from query");
      let hashPass = data.rows[0].password;
      let com = await bcrypt.compare(password, hashPass);
      if (com) {
        res.status(200).json({ msg: "authentication successfully"});
      } else {
        res.status(400).json({ msg: "invalid credentials" });
      }
    })
    .catch((e) => {
      console.log(e, "eeeee");
      res.status(400).json({ msg: "user doesnot exist" });
    });
};
const addProduct = async (req, res) => {
  console.log("testing")
  console.log(req.body);
  console.log(req.file,"images")

  let { title,description,color,size} = req.body;
  const query = `INSERT INTO products (title,description,color,size,image) 
  VALUES ('${title}','${description}','${color}','${size}','${req.file.filename}')
  `
  pool
    .query(query)
    .then(async (data) => {
      console.log(data.rows[0], "data from query");
      res.status(200).send("product added")
    })
    .catch((e) => {
      console.log(e, "eeeee");
      res.status(400).json({ msg: "user doesnot exist" });
    });
};
module.exports = {
  getResponse,
  postResponse,
  validateUser,
  addProduct,
};
