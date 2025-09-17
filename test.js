const http2 = require('node:http2');

const client = http2.connect('https://nghttp2.org');

const require = client.request([':path', '/', ':method', 'GET']);