var fs = require('fs');
var ext = process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
	for (var i = 0; i < list.length; i++) {
		if (list[i].slice(-3) == ".md") {
			console.log(list[i]);
		}
	};
});