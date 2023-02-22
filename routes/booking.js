const express=require('express')
const router=express.Router();
const bookingController=require('../controllers/BookingControl')

router.get('/get-users',bookingController.getBookings);
router.post('/add-user',bookingController.postBookings);
//router.delete('/delete-bookings');

module.exports=router;