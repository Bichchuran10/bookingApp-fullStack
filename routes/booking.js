const express=require('express')
const router=express.Router();
const bookingController=require('../controllers/BookingControl')

router.get('/get-users',bookingController.getBookings);
router.post('/add-user',bookingController.postBookings);
router.delete('/delete-user/:id',bookingController.deleteBookings);

module.exports=router;