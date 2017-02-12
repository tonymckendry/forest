var http = require("http"),
port = 8088;
module.exports = function(led) {
var server = http.createServer(function(request, response) {
if (request.url === '/trigger' && request.method == 'GET') {
// turn on the buzzer
led.writeSync(1);
// turn off the buzzer after 2 seconds
setTimeout(function() {
led.writeSync(0);
}, 2000);
response.writeHeader(200, {
"Content-Type": "application/json",
"Access-Control-Allow-Origin": "*"
});
response.write('{ "status": true }');
response.end();
} else {
response.writeHeader(200, {
"Content-Type": "application/json",
"Access-Control-Allow-Origin": "*"
});
response.write('{ "status": true }');
response.end();
}
});
server.listen(port);
console.log("Server Running on " + port + ".\nLaunch http://localhost:" + port);
return server;
}
