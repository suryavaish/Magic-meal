const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');
const Booking = require('../models/Booking');

//@desc book food
//@route Get /stories/book/:id
router.get('/book/:id', ensureAuth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).lean();
    res.render('stories/book', {
      name: req.user.firstName,
      bookings,
    });
  } catch (error) {
    console.log(error);
  }
});

//@desc Process add form
//@route POST /stories
router.post('/', ensureAuth, async (req, res) => {
  try {
    await Booking.create(req.body);
    res.redirect('/dashboard');
  } catch (error) {
    console.log(error);
    res.render('error/500');
  }
});

module.exports = router;
