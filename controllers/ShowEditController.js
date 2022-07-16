const Customer = require('../models/Customer')


const ShowEditController = (req, res, next) => {
	Customer.findById({_id: req.params.id}, (err, doc) => {
		if(err){
			console.log(err)
		} else {
			res.render('edit_customer', {title: "Edit Customer's Details",
				                         id: doc.id,
		                                 name: doc.name,
		                                 email: doc.email,
		                                 address: doc.address,
		                                 bio: doc.bio})
			next()
		}

	})

}

module.exports = ShowEditController