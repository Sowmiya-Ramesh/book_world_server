const express = require('express');
const router = express.Router(); 
const Member = require('../model/Member');

router.get('/', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const newMember = new Member(req.body);
        await newMember.save();
        res.json(newMember);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

const mongoose = require('mongoose');

router.put('/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ msg: 'Invalid Member ID' });
        }

        const member = await Member.findByIdAndUpdate(
            req.params.id,
            {
                mem_id: req.body.mem_id,
                mem_name: req.body.mem_name,
                mem_phone: req.body.mem_phone,
                mem_email: req.body.mem_email,
            },
            { new: true }
        );

        if (!member) {
            return res.status(404).json({ msg: 'member not found' });
        }

        res.json(member);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
});



module.exports = router;
