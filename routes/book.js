
const bookController = require("../controllers/bookController");
const bookRouter=require("express").Router();


//add a book
bookRouter.post("/",bookController.addABook);
bookRouter.get("/",bookController.getAllBooks);

module.exports = bookRouter;