module.exports = function filebrowser() {

	var module = {};


	var fs = require('fs');
	var path = require('path');
	var async = require('async');
	var util = require('util');
	var mime = require('mime');
	var url = require('url');

	/**
	 * Initializes a default dictionary with icons for the representation of the various mime-types of the files.
	 */
	module.iconDictionary = {
		'unknown': '/public/images/icons/unknown.png',
		'text': '/public/images/icons/text.png',
		'image': '/public/images/image.png',
		'video': '/public/images/icons/video.png',
		'audio': '/public/images/icons/audio.png',
	}

	/**
	 * Initializes a dictionary with icons for the representation of the various mime-types of the files.
	 * Using a json-file as input.
	 *
	 * @param  {String} filePath: the file path of the json-file
	 */
	module.loadIconDictionary = function( filePath ) {
		module.iconDictionary = require( filePath );
	}

	/**
	 * Gets the file path of a icon corresponding to a mime-type using a dictionary giving the mime-type vs filepaths.
	 *
	 * @param  {String} mimeType: The mime-type (e.g. image/jpeg)
	 * @param  {Object} The dictionary containing the mime-types and their corresponding icon file paths.
	 * @return {String} iconPath: the corresponding file path of the 
	 */
	module.mimeTypeIcon = function ( mimeType, iconDictionary ) {

		var iconPath = iconDictionary[mimeType];

		if ( iconPath ) {
			// When the mimeType has a known corresponding icon: return the path to the icon-image 
			return iconPath;
		} else {
			iconPath = iconDictionary[mimeType.split('/')[0]]
			if ( iconPath ) {
				// One of the generic icons: image, audio, video: return the path to the generic icon-image 
				return iconPath;
			} else {
				// No icon found: return the path to the 'unknown' icon-image 
				return iconDictionary['unknown'];
			}
		}
		
	}

	/**
	 * converts an image to a base64 string and formats this string to use in an html <img src=...> tag.
	 *
	 * @param  {String} src: the file path of the image.
	 * @return {String} The resulting base64 formatted string with the mime-type.
	 */
	module.base64Image = function (src) {
		var data = fs.readFileSync(src).toString("base64");
		return util.format("data:%s;base64,%s", mime.lookup(src), data);
	}

	/**
	 * Trim the trailing (at the end) slashes ("/") of a string.
	 *
	 * @param  {String} str: the string
	 * @return {String} The resulting string with the trailing slashes being removed.
	 */
	module.trimEndSlash = function (str) {
		return str.replace(/\/+$/,'');
	}

	/**
	 * Trim the leading (at the beginning) slashes ("/") of a string.
	 *
	 * @param  {String} str: the string
	 * @return {String} The resulting string with the leading slashes being removed.
	 */
	module.trimBeginSlash = function (str) {
		return str.replace(/^\/+/,'');
	}

	/**
	 * Trim both leading (at the beginning) and trailing (at the end) slashes ("/") of a string.
	 *
	 * @param  {String} str: the string
	 * @return {String} The resulting string with the leading and trailing slashes being removed.
	 */
	module.trimBeginAndEndSlash = function (str) {
		console.log('Before trim: ' + str);
		var res = str.replace(/^\/+|\/+$/, '');
		console.log('After trim: ' + res);
		return res;
	}

	/**
	 * From a url (string) find the parent-url by removing the last word (be it followed by a slash).
	 *
	 * @param  {String} str: the string representing the url
	 * @return {String} The resulting string representing the parent url.
	 */
	module.parentUrl = function (str) {
		console.log('Child url: ' + str);
		var res = str.replace(/[^\/]+$|[^\/]+\/$/, '');
		console.log('Parent url: ' + res);
		return res;
	}

	
	return module;
};
