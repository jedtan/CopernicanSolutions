var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Gmail",
	auth: {
		user: "jedtan@gmail.com",
		pass: "agentmichaelscarn"
	}
});

exports.view = function(req, res){
	res.render('index');
	
};

exports.mail = function(req, res){
	smtpTransport.sendMail({
   from: req.body.name + "<" + req.body.email + ">", // sender address
   to: "Jed Tan <jedtan@gmail.com>", // comma separated list of receivers
   subject: "Contact", // Subject line
   text: "From: " + req.body.name + "\nEmail: " + req.body.email + "\nMessage: " + req.body.message// plaintext body
	}, function(error, response){
	if(error){
		console.log(error);
	}else{
		console.log("Message sent: " + response.message);
	}
});
	res.end();

};


