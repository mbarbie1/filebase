var filebase = require('./index.js')();

var urlWithSlashes = '///this/url/has/some/slashes/at/the/beginning/and/end////',
	endSlashesRemoved = filebase.trimEndSlash(urlWithSlashes),
	beginSlashesRemoved = filebase.trimBeginSlash(urlWithSlashes);

console.log('\n Url with slashes: ', urlWithSlashes, '\n Removed trailing: ', endSlashesRemoved, '\n Removed leading : ', beginSlashesRemoved);
