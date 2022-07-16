const Customer = require('../models/Customer')

const CustomerController = async (req, res) => {
	const customers = await Customer.find({});
	try {
		res.render("index", {title: "Welcome", customers: customers, messages: req.flash('info')})	
	} catch (error) {
		res.status(500).send(error);
	}
 }

 module.exports = CustomerController