var should = require('chai').should(),
    fb = require('../index')();

// UTILITIES

describe('#fb.trimEndSlash', function() {
	it('Trims trailing slashes: /double/slashed/url/path// --> /double/slashed/url/path', function() {
		fb.trimEndSlash('/double/slashed/url/path//').should.equal('/double/slashed/url/path');
	});

	it('Trims trailing slashes: /single/slash/url/path/ --> /single/slash/url/path', function() {
		fb.trimEndSlash('/single/slash/url/path/').should.equal('/single/slash/url/path');
	});
});

describe('#fb.trimBeginSlash', function() {
	it('Trims leading slashes: //double/slashed/url/path/ --> double/slashed/url/path/', function() {
		fb.trimBeginSlash('//double/slashed/url/path/').should.equal('double/slashed/url/path/');
	});

	it('Trims leading slashes: /single/slash/url/path/ --> single/slash/url/path/', function() {
		fb.trimBeginSlash('/single/slash/url/path/').should.equal('single/slash/url/path/');
	});
});

// BROWSING FILES AND FOLDERS

// CREATING DIRECTORIES

// UPLOADING FILES

// DOWNLOADING FILES / DIRECTORIES

// REMOVING FILES
