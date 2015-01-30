# text-to-string
Transform Text into a single line String

## install

```bash
npm install text-to-string
```

## usage

```javascript
var text2string = require('text-to-string');
var text = fs.readFileSync(__dirname + '/README.md', 'utf-8');
var str = text2string(text);

```

## inspiration
 - https://github.com/substack/quote-stream/blob/master/index.js
 - https://github.com/tj/node-string-to-js/blob/master/index.js
 - http://stackoverflow.com/posts/7365089/revisions