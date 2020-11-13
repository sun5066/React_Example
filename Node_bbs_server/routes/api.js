const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("반갑다");
    // res.render("index", { data: "data" });
});

router.get("/bbsList", (req, res) => {
    const list = [
        { id: 0, write: "홍길동", subject: "게시판" },
        { id: 1, write: "이몽룡", subject: "게시판" },
        { id: 2, write: "성춘향", subject: "게시판" },
    ];
    res.json(list);
});

module.exports = router;
