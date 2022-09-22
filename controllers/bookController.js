const {Book,Author} = require("../model/model");

const bookController={

    addABook: async (req, res) => {
        try {
            const newBook = new Book(req.body);
            console.log(req.body)
            console.log(newBook)
            
            // const savedBook = await newBook.save();
            // if (req.body.author) {
            //     const author = Author.findById(req.body.author);
            //     await author.updateOne({ $push: { books: savedBook._id } });
            // }
            // res.json(savedBook);
            
        }
        catch (err) {
            res.status(500).json(err.msg)
            console.log(err)
        }

    },

    getAllBooks: async(req, res) => {
        try {
            const authors = await Book.find();
            res.status(200).json(authors);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports=bookController;