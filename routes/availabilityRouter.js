require("dotenv").config();
const express = require("express");
const router = express.Router();
const con = require("../dbConnection");
const authenticateToken = require("../middleware/auth");

const avail = [
  {
    id: 1,
    name: "",
    desc: "",
    price: "",
    img: "",
  },
  {
    id: 2,
    name: "",
    desc: "",
    price: "",
    img: "",
  },
  {
    id: 3,
    name: "",
    desc: "",
    price: "",
    img: "",
  },
  {
    id: 4,
    name: "",
    price: "",
    img: "",
  },
  {
    id: 5,
    name: "",
    desc: "",
    price: "",
    img: "",
  },
];

//CREATE
router.post("/", authenticateToken, (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) res.sendStatus(400);

  var sql = `INSERT INTO posts (post_title, post_body, post_date, post_author)  VALUES ('${title}', '${body}', '${getToday()}', '${
    req.user.user_id
  }')`;
  con
    .query(sql, function (err, result) {
      res.send({ msg: "Post created", post_id: result.insertId });
    })
    .on("error", () => res.sendStatus(400));
});

//READ ALL
router.get("/", (req, res) => {
  res.send(avail);
});

//READ ONE
router.get("/:id", (req, res) => {});

//UPDATE
router.put("/:id", (req, res) => {});

//DELETE
router.delete("/:id", (req, res) => {});

module.exports = router;
