filebase
========

A filebrowser plugin for a website in node.js. The file-structure is maintained in a database, such that files can be given a virtual owner with access rights.

## Installation

	npm install filebase --save

## Usage

	For an example see the file exampleApp.js

	var filebase = require('filebase')();

	var urlWithSlashes = '///this/url/has/some/slashes/at/the/beginning/and/end////',
		endSlashesRemoved = filebase.trimEndSlash(urlWithSlashes),
		beginSlashesRemoved = filebase.trimBeginSlash(urlWithSlashes);

	console.log('urlWithSlashes:', urlWithSlashes, 'Removed trailing slashes:', endSlashesRemoved, 'Removed leading slashes:', beginSlashesRemoved);

## Tests

	npm test

## Release History

* 0.0.0 Internal development version
