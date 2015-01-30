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