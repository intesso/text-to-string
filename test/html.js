var fs = require('fs');
var test = require('tape');
var text2string = require('../index');

var expect = '"<!-- html template -->\\n<ul id=\\"fruits\\">\\n    <li class=\\"apple\\">Apple</li>\\n    <li class=\\"orange\\">Orange</li>\\n    <li class=\\"pear\\">Pear</li>\\n</ul>\\n<div>\\n\\t<span id=armin\\">\\n        <button data-run=\\"\'wahn\'\\">zahn</button>\\n    </span>\\n </div>\\n"';

test('html file single text-to-string call', function(t) {
	t.plan(2);
	var tmpl =  fs.readFileSync(__dirname + '/fixtures/index.html', 'utf-8');
	var str = text2string(tmpl);
	t.ok(str, 'should exist');
	t.equals(str, expect);
});


test('html file multiple text-to-string calls', function(t) {
	t.plan(2);
	var tmpl =  fs.readFileSync(__dirname + '/fixtures/index.html', 'utf-8');
	var str = text2string(tmpl);
	t.equals(str, expect);
	var tmpl =  fs.readFileSync(__dirname + '/fixtures/index.html', 'utf-8');
	var str = text2string(tmpl);
	t.equals(str, expect);
});

