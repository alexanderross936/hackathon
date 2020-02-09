const express = require('express')
const router = express.Router()

const salariesController = require('../controllers/salaries')

router.get('/', salariesController.getAllEmployees)

router.get('/:id', salariesController.getEmployeeById)

router.post('firstname/:first_name', salariesController.get_first_names)

module.exports = router