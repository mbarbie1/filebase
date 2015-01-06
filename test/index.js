var should = require('chai').should(),
    fb = require('../index')();

describe('#fb.trimEndSlash', function() {
	it('Trims any trailing slashes of a url: /double/slashed/url/path// --> /double/slashed/url/path', function() {
		fb.trimEndSlash('/double/slashed/url/path//').should.equal('/double/slashed/url/path');
	});

	it('Trims any trailing slashes of a url: /single/slash/url/path/ --> /single/slash/url/path', function() {
		fb.trimEndSlash('/single/slash/url/path/').should.equal('/single/slash/url/path');
	});
});

describe('#fb.trimBeginSlash', function() {
	it('Trims any leading slashes of a url: //double/slashed/url/path/ --> double/slashed/url/path/', function() {
		fb.trimBeginSlash('//double/slashed/url/path/').should.equal('double/slashed/url/path/');
	});

	it('Trims any trailing slashes of a url: /single/slash/url/path/ --> single/slash/url/path/', function() {
		fb.trimBeginSlash('/single/slash/url/path/').should.equal('single/slash/url/path/');
	});
});
