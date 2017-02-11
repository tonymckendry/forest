 var Gpio = require('onoff').Gpio
var led1 = new Gpio(4, 'out')
var led2 = new Gpio(17, 'out')
var led3 = new Gpio(27, 'out')
var led4 = new Gpio(22, 'out')
var led5 = new Gpio(5, 'out')
var led6 = new Gpio(6, 'out')
var led7 = new Gpio(18, 'out')
var led8 = new Gpio(23, 'out')
var led9 = new Gpio(24, 'out')
var led10 = new Gpio(25, 'out')
var led11 = new Gpio(12, 'out')
var led12 = new Gpio(16, 'out')
	
 
setInterval(function(){
	led1.writeSync(led1.readSync() === 0 ? 1 : 0)
}, 100);


setTimeout(function(){
setInterval(function(){
        led2.writeSync(led1.readSync() === 0 ? 1 : 0)
}, 100);
}, 100)


 
// Stop blinking the LED and turn it off after 5 seconds.
setTimeout(function() {
    clearInterval(iv); // Stop blinking
    led1.writeSync(0);  // Turn LED off.
    led1.unexport();    // Unexport GPIO and free resources
}, 12000)
