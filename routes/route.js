const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')
const CustomerController = require('../controllers/CustomerController')
const InsertController = require('../controllers/InsertController')
const DeleteController = require('../controllers/DeleteController')
const ShowEditController = require('../controllers/ShowEditController')
const UpdateController = require('../controllers/UpdateController')
const Customer = require('../models/Customer')



router.get('/', CustomerController)

router.get('/add_customer', InsertController)

router.get('/:id/delete',  DeleteController)

router.post('/customers', PostController)

router.get('/edit/:id', ShowEditController)

router.post('/update/:id', UpdateController)

module.exports = router

