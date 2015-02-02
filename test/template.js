var fs = require('fs');
var test = require('tape');
var text2string = require('../index');

var expectDouble = '"<ul id=\\"stores\\" onClick=\\"console.log(\'clicked\')\\">\\n\\t<li class=\\"emily\\">emily\'s store</li>\\n\\t<li class=\\"punky\\">funky store</li>\\n</ul>\\n"';
var expectSingle = '\'<ul id="stores" onClick="console.log(\\\'clicked\\\')">\\n\\t<li class="emily">emily\\\'s store</li>\\n\\t<li class="punky">funky store</li>\\n</ul>\\n\''


test('template file', function (t) {
	t.plan(2);
	var tmpl = fs.readFileSync(__dirname + '/fixtures/index.tmpl', 'utf-8');


	// convert text into single line string wrapped with double quotes
	var double = text2string(tmpl);
	//console.log('string wrapped with double quotes\n', double);

	// convert text into single line string wrapped with single quotes
	var single = text2string(tmpl, "'");
	//console.log('string wrapped with single quotes\n', single);


	t.equals(double, expectDouble);
	t.equals(single, expectSingle);

});
