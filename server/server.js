const express = require('express')
    , app = express()
    , server = require('http').Server(app);

app.use(express.static('./../'));

server.listen(8000, function() {
    console.log('server started on  8000');
});
