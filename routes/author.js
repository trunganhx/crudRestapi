const authorController = require("../controllers/authorController");

const router=require("express").Router();

router.post("/",authorController.addAuthor);
router.get("/",authorController.getAllAuthors);

module.exports=router;