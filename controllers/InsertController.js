const Customer = require('../models/Customer')

const InsertController = (req, res) => {
	res.render("add_customer", {title: "Add Customer"})
}

module.exports = InsertController