const Customer = require('../models/Customer')


const DeleteController = (req, res) => {
	 Customer.deleteOne({_id: req.params.id}, (err) => {
		if(err){
			console.log(err)
		} else {
			req.flash('info', 'Customer Successfully Deleted!')
			res.redirect('/')
		}
	})
}

module.exports = DeleteController