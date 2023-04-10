const express = require('express');
const router = express.Router();
const {Testimonial,GetAllTestimonial,topTestimonials} = require('../controllers/testimonialController');

router.post('/testimonials',Testimonial);
router.get('/getalltestimonials',GetAllTestimonial);
router.get('/topTestimonials',topTestimonials);

module.exports = router;