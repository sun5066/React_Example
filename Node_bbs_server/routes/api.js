const express = require("express");
const router = express.Router();

// 폴더에 index.js 파일이 있을경우
// 폴더를 require 하면 index.js 파일이 import 된다.
const { bbsDao } = require("../models");

router.get("/", (req, res) => {
    res.send("반갑다");
    // res.render("index", { data: "data" });
});

router.get("/bbslist", (req, res) => {
    const list = [
        { id: 0, write: "홍길동", subject: "게시판" },
        { id: 1, write: "이몽룡", subject: "게시판" },
        { id: 2, write: "성춘향", subject: "게시판" },
    ];

    bbsDao.findAll({ order: [["b_date_time", "DESC"]] }).then((bbsList) => {
        res.json(bbsList);
    });
});

router.get("/view/:id", (req, res) => {
    const b_id = req.params.id;

    bbsDao
        .findOne({
            where: { b_id: Number(b_id) },
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});

/**
 * web browser 로 부터 데이터 전달받기
 * ?변수=값 : req.query.변수
 * /:변수 : req.params.변수
 * form의 input tag 에서 name 으로 설정된변수 : req.body.변수
 * ajax 를 통해서 전달받은 데이터 : req.body.변수
 */
router.post("/insert", (req, res) => {
    bbsDao
        .create({
            b_writer: req.body.b_writer,
            b_date_time: Date().toString(),
            b_subject: req.body.b_subject,
            b_content: req.body.b_content,
        })
        .then((result) => {
            // res.json(result);
            res.redirect("/api/bbsList");
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post("/update/:id", (req, res) => {
    const b_id = req.params.id;
    bbsDao
        .update(
            {
                b_writer: req.body.b_writer,
                b_subject: req.body.b_subject,
                b_content: req.body.b_content,
            },
            { where: { b_id: Number(req.body.b_id) } }
        )
        .then((result) => {
            res.redirect("/api/bbslist");
        });
});

router.delete("/delete/:id", (req, res) => {
    const b_id = req.params.id;

    console.log("아이디는 : " + b_id);

    bbsDao
        .destroy({
            where: { b_id: Number(b_id) },
        })
        .then((result) => {
            res.json(result);
            // res.redirect("/api/bbslist")
        });
});

module.exports = router;
