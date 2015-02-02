# text-to-string
Transform Text into a single line String

## install

```bash
npm install text-to-string
```

## usage

this utility function can be used in node.js as well as in the browser e.g. with browserify.
it can be useful, when you have to read a file, textarea value etc. and want to use it in the code in the form of a string variable.

with the given template file: `index.tmpl`

```html
<ul id="stores" onClick="console.log('clicked')">
        <li class="emily">emily's store</li>
        <li class="punky">funky store</li>
</ul>
```

this javascript code: 
```javascript
var text2string = require('text-to-string');
var text = fs.readFileSync(__dirname + '/fixtures/index.tmpl', 'utf-8');

// convert text into single line string wrapped with double quotes
var double = text2string(tmpl);
console.log('string wrapped with double quotes\n', double);
	
// convert text into single line string wrapped with single quotes	
var single = text2string(tmpl, "'");
console.log('string wrapped with single quotes\n', single);
```
produces this output:

```text
string wrapped with double quotes
 "<ul id=\"stores\" onClick=\"console.log('clicked')\">\n\t<li class=\"emily\">emily's store</li>\n\t<li class=\"punky\">funky store</li>\n</ul>\n"


string wrapped with single quotes
 '<ul id="stores" onClick="console.log(\'clicked\')">\n\t<li class="emily">emily\'s store</li>\n\t<li class="punky">funky store</li>\n</ul>\n'
```

## inspiration
 - https://github.com/substack/quote-stream/blob/master/index.js
 - https://github.com/tj/node-string-to-js/blob/master/index.js
 - http://stackoverflow.com/posts/7365089/revisions
