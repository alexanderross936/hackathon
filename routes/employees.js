const express = require('express')
const router = express.Router()

const commentsController = require('../controllers/employees')

router.get('/', employeesController.getEmployees)

router.get('/:id', employeesController.getEmployeesById)

router.post('firstname/:first_name', employeesController.getEmployeesByFirstName)

module.exports = router