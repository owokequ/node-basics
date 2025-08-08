const url = require('url');

const myUrl = new URL('http://example.com/path/name?query=test#hash')
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams.get('query'));

