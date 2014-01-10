exports.get = function(prop, req) {
	var flashData = req.session[prop];
	delete req.session[prop];

	return flashData;
};