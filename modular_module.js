var fs = require('fs');

function filterDir(dirName, ext, callback) {
	fs.readdir(dirName, function(err, list) {
		if (err) {
			return callback(err, null);
		}
		var data = [];
		for (var i = 0; i < list.length; i++) {
			if (list[i].slice(-3) == "." + "md") {
				data.push(list[i]);
			}
		};
		callback(null, data);
	});
}

module.exports = filterDir;