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

var turnOn=()=>{
  led1.writeSync(1)
  setTimeout(()=>{
    led2.writeSync(1)
  }, 50)
  setTimeout(()=>{
    led3.writeSync(1)
  }, 100)
  setTimeout(()=>{
    led4.writeSync(1)
  }, 150)
  setTimeout(()=>{
    led5.writeSync(1)
  }, 200)
  setTimeout(()=>{
    led6.writeSync(1)
  }, 250)
  setTimeout(()=>{
    led7.writeSync(1)
  }, 300)
  setTimeout(()=>{
    led8.writeSync(1)
  }, 350)
  setTimeout(()=>{
    led9.writeSync(1)
  }, 400)
  setTimeout(()=>{
    led10.writeSync(1)
  }, 450)
  setTimeout(()=>{
    led11.writeSync(1)
  }, 500)
  setTimeout(()=>{
    led12.writeSync(1)
  }, 550)
  setTimeout(()=>{
    turnOff()
  }, 600)
}

var turnOff=()=>{
  led1.writeSync(0)
  setTimeout(()=>{
    led2.writeSync(0)
  }, 50)
  setTimeout(()=>{
    led3.writeSync(0)
  }, 100)
  setTimeout(()=>{
    led4.writeSync(0)
  }, 150)
  setTimeout(()=>{
    led5.writeSync(0)
  }, 200)
  setTimeout(()=>{
    led6.writeSync(0)
  }, 250)
  setTimeout(()=>{
    led7.writeSync(0)
  }, 300)
  setTimeout(()=>{
    led8.writeSync(0)
  }, 350)
  setTimeout(()=>{
    led9.writeSync(0)
  }, 400)
  setTimeout(()=>{
    led10.writeSync(0)
  }, 450)
  setTimeout(()=>{
    led11.writeSync(0)
  }, 500)
  setTimeout(()=>{
    led12.writeSync(1)
  }, 550)
}

turnOn()

// Stop blinking the LED and turn it off after 5 seconds.
setTimeout(function() {
    led1.writeSync(0);  // Turn LED off.
    led1.unexport();    // Unexport GPIO and free resources
    led2.writeSync(0);  // Turn LED off.
    led2.unexport();    // Unexport GPIO and free resources
    led3.writeSync(0);  // Turn LED off.
    led3.unexport();    // Unexport GPIO and free resources
    led4.writeSync(0);  // Turn LED off.
    led4.unexport();    // Unexport GPIO and free resources
    led5.writeSync(0);  // Turn LED off.
    led5.unexport();    // Unexport GPIO and free resources
    led6.writeSync(0);  // Turn LED off.
    led6.unexport();    // Unexport GPIO and free resources
    led7.writeSync(0);  // Turn LED off.
    led7.unexport();    // Unexport GPIO and free resources
    led8.writeSync(0);  // Turn LED off.
    led8.unexport();    // Unexport GPIO and free resources
    led9.writeSync(0);  // Turn LED off.
    led9.unexport();    // Unexport GPIO and free resources
    led10.writeSync(0);  // Turn LED off.
    led10.unexport();    // Unexport GPIO and free resources
    led11.writeSync(0);  // Turn LED off.
    led11.unexport();    // Unexport GPIO and free resources
    led12.writeSync(0);  // Turn LED off.
    led12.unexport();    // Unexport GPIO and free resources
}, 12000)
