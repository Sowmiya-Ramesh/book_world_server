const express = require('express');
const router = express.Router(); 
const Book = require('../model/Book');

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.json(newBook);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// mongoose added
const mongoose = require('mongoose');

router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        // to validate if req.params.id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ msg: 'Invalid book ID' });
        }

        const book = await Book.findByIdAndUpdate(
            req.params.id,
            {
                book_id: req.body.book_id,
                book_name: req.body.book_name,
                book_cat_id: req.body.book_cat_id,
                book_collection_id: req.body.book_collection_id,
                book_launch_date: req.body.book_launch_date,
                book_publisher: req.body.book_publisher,
            },
            { new: true }
        );

        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }

        res.json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
});



module.exports = router; 
