const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController=require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city',CityController.getAll)
router.post('/airport',AirportController.create);

module.exports = router;