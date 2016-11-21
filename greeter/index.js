'use strict';
var APP_ID = 'amzn1.ask.skill.d9c764e1-5238-42c1-bea4-236622600934';
var AlexaSkill = require('./AlexaSkill');
var SPEECH_OUTPUT = "Hello";

var GreeterService = function() {
    AlexaSkill.call(this, APP_ID);
};

GreeterService.prototype = Object.create(AlexaSkill.prototype);

var helloResponseFunction = function(intent, session, response){
    response.tell(SPEECH_OUTPUT);
};

GreeterService.prototype.eventHandlers.onLanuch = helloResponseFunction;

GreeterService.prototype.intentHandlers = {
    'HelloWorldIntent' : helloResponseFunction
};

exports.handler = function(event, context){
    var greeterService = new GreeterService();
    greeterService.execute(event, context);
};