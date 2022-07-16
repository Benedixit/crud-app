const Customer = require('../models/Customer')


const UpdateController = (req, res) => {
	Customer.findByIdAndUpdate({_id: req.params.id}, req.body, (err, doc) => {
		if(err){
			console.log(err)
		} else {
			req.flash('info', 'Customer Details Updated Successfully!')
			res.redirect('/')
		    console.log(req.body)
		}
	})
}

module.exports = UpdateController