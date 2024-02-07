const express = require('express');
const router = express.Router(); 
const Issuance = require('../model/Issuance');

router.get('/', async (req, res) => {
    try {
        const issuances = await Issuance.find();
        res.json(issuances);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const newIssuance = new Issuance(req.body);
        await newIssuance.save();
        res.json(newIssuance);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

const mongoose = require('mongoose');

router.put('/:id', async (req, res) => {
    try {
        // to validate if req.params.id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ msg: 'Invalid Issuance ID' });
        }

        const issuance = await Issuance.findByIdAndUpdate(
            req.params.id,
            {  
                issuance_id: req.body.issuance_id,
                book_id: req.body.book_id,
                issuance_date: req.body.issuance_date,
                issuance_member: req.body.issuance_member,
                issued_by: req.body.issued_by,
                target_return_date: req.body.target_return_date,
                issuance_status: req.body.issuance_status,
            },
            { new: true }
        );

        if (!issuance) {
            return res.status(404).json({ msg: 'Issuance not found' });
        }

        res.json(issuance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
});



module.exports = router; 
