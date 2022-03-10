
const EventEmitter = require('events');
const { overArgs } = require('lodash');

const customEmitter = new EventEmitter();       // on - listen for an event, emit - emit an event

// Also the order that you setup the .on and .emit matters, .on must always be first.
//  The other way around would make it so that you emit the event and will not get the .on's firing

customEmitter.on('response', (name, id)=> {
    console.log(`data received: ${name} : id ${id}`);
});

customEmitter.on('response', ()=> {             // nothing stopping you from listening to mulitple 'response' events
    console.log(`some other logic here:`);
});

customEmitter.emit('response', 'chris', 123456);

