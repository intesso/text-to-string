var fs = require('fs');
var test = require('tape');
var text2string = require('../index');

var expect = '"var map = {\\n\\tsingle: \\"\'\\",\\n\\tdouble: \'\\"\'\\n};\\n\\nvar escapeSingleQuote = [\\n\\t[/\'/g, \\"\\\\\'\\"]\\n];\\n\\nvar escapeDoubleQuote = [\\n\\t[/\\"/g, \'\\\\\\"\']\\n];\\n\\nvar escapes = [\\n\\t[/\\r\\n|\\r|\\n/g, \\"\\\\n\\"],\\n\\t[/\\t/g, \\"\\\\t\\"]\\n];"';

test('javascript file', function (t) {
	t.plan(1);
	var tmpl = fs.readFileSync(__dirname + '/fixtures/index.js', 'utf-8');
	var str = text2string(tmpl);
	t.equals(str, expect);
});