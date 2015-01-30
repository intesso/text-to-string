var fs = require('fs');
var test = require('tape');
var text2string = require('../index');

var expect = '"@import url(\\"//fonts.googleapis.com/css?family=Ubuntu\\");\\n\\n@font-face {\\n  font-family: \'Glyphicons Halflings\';\\n  src: url(\'../fonts/glyphicons-halflings-regular.eot\');\\n  src: url(\'../fonts/glyphicons-halflings-regular.eot?#iefix\') format(\'embedded-opentype\'), url(\'../fonts/glyphicons-halflings-regular.woff2\') format(\'woff2\'), url(\'../fonts/glyphicons-halflings-regular.woff\') format(\'woff\'), url(\'../fonts/glyphicons-halflings-regular.ttf\') format(\'truetype\'), url(\'../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular\') format(\'svg\');\\n}\\n.glyphicon {\\n  position: relative;\\n  top: 1px;\\n  display: inline-block;\\n  font-family: \'Glyphicons Halflings\';\\n  font-style: normal;\\n  font-weight: normal;\\n  line-height: 1;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n@media print {\\n  .hidden-print {\\n    display: none !important;\\n  }\\n}\\n"';

test('css file', function (t) {
	t.plan(2);
	var tmpl = fs.readFileSync(__dirname + '/fixtures/index.css', 'utf-8');
	var str = text2string(tmpl);
	t.ok(str, 'should exist');
	t.equals(str, expect);
});