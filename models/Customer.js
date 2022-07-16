const mongoose = require('mongoose')

let Schema = mongoose.Schema


let customerSchema = new Schema ({
	name: {
		type: String,
	    required: true},
	email: {
		type: String,
	    required: true},
	address: {
		type: String,
	    required: true},
	bio: {
		type: String,
	    required: true}
	})

const CustomerModel = mongoose.model('CustomerModel', customerSchema, "Customers")


module.exports = CustomerModel
