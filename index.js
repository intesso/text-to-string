var map = {
	single: "'",
	double: '"'
};

var escapeSingleQuote = [
	[/'/g, "\\'"]
];

var escapeDoubleQuote = [
	[/"/g, '\\"']
];

var escapes = [
	[/\r\n|\r|\n/g, "\\n"],
	[/\t/g, "\\t"]
];

var s = escapeSingleQuote.concat(escapes);
var d = escapeDoubleQuote.concat(escapes);

/**
 * Transforms the given `text` into a single line String.
 * By default, the text is wrapped in double quotes `"` and the containing double quotes are being escaped `\\"`.
 * With the optional parameter `quote` you can change this behaviour to single quotes `\\'`.
 *
 * @param tex
 * @param quote
 * @returns {String} the transformed String.
 *
 */
module.exports = function (text, quote) {
	quote = quote || map.double;
	var replacements = (quote == map.double) ? d : s;

	for (var i = 0, len = replacements.length; i < len; i++) {
		var replacement = replacements[i];
		text = text.replace(replacement[0], replacement[1]);
	}

	return quote + text + quote;
};

/**
 * @deprecated
 * @ignore
 *
 * @param str
 * @returns {*}
 */
function detectQuote(str) {
	if (str == null || str.length == 0) return false;
	var first = str.charAt(0);
	var last = str.charAt(str.length - 1);
	if (first != last) return false;
	if (first == map.single) return map.single;
	if (first == map.double) return map.double;
	return false;
}


/*
 development notes:


 '\n'.charAt(0)
 "
 "

 '\n'.charCodeAt(0)
 10

 '"'.charCodeAt(0)
 34

 "'".charCodeAt(0)
 39


 var ret = '\n'.charAt(0) == "\n"
 undefined
 ret
 true

 */


/*
 inspiration:
 http://stackoverflow.com/posts/7365089/revisions
 https://github.com/substack/quote-stream/blob/master/index.js
 https://github.com/tj/node-string-to-js/blob/master/index.js
 */