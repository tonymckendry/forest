var http = require("http"),
port = 8088;
module.exports = function(leds) {
var server = http.createServer(function(request, response) {
if (request.url === '/trigger' && request.method == 'GET') {
// turn on the buzzer

var time = 0
leds.forEach((l)=>{
  setTimeout(function(){
    l.writeSync(1)
  }, time)
  time += 100
})

var time2 = 100
setTimeout(function() {
  leds.forEach((l)=>{
    setTimeout(function(){
      l.writeSync(0)
    }, time2)
  })
}, 100);

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
