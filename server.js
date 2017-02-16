var http = require("http"),
port = 8088;
module.exports = function(leds) {
var server = http.createServer(function(request, response) {
if (request.url === '/trigger' && request.method == 'GET') {
// turn on the buzzer
leds.forEach((l)=>{
  console.log('on')
  console.log(l)
  l.writeSync(1)
})
leds.forEach((l)=>{
  console.log('off')
  console.log(l)
  l.writeSync(0)
})

// turn off the buzzer after 2 seconds
// setTimeout(function() {
// led.writeSync(0);
// }, 2000);
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
