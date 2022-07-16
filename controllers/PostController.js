const Customer = require('../models/Customer')


const PostController = (req, res) => {
	const customer = new Customer ({
		name: req.body.name,
		email: req.body.email,
		address: req.body.address,
		bio: req.body.bio
	})
	customer.save((err) => {
		if(err){
			console.log(err)
		} else {
			req.flash('info', 'Customer Successfully Added!')
			res.redirect("/")
		}
	})	
}

module.exports = PostController