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

var leds = [led1, led2, led3, led4, led5, led6, led7, led8, led9, led10, led11, led12]

var server = require('./server')(leds)
