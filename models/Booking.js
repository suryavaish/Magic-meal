const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  receivername: {
    type: String,
    trim: true,
  },
  phonenum: {
    type: String,
    },
   quantityrequired:{
    type:String,
   },
   pickuptime:{
       type:String,
   },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story',
  },
  itembooked:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story',
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Booking', BookingSchema)