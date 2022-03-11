
const EventEmitter = require('events');

const customEmitter = new EventEmitter();       // on - listen for an event, emit - emit an event

// Also the order that you setup the .on and .emit matters, .on must always be first.
//  The other way around would make it so that you emit the event and will not get the .on's firing

customEmitter.on('response', (name, id)=> {
    console.log(`Event 1: data received: ${name} : id ${id}`);
});

customEmitter.on('response', ()=> {             // nothing stopping you from listening to mulitple 'response' events
    console.log(`Event 2: some other logic here:`);
});

customEmitter.prependListener('response', (name, id) => {
    console.log(`Event 3: put this listener before the other 2 events...: ${name} : id ${id}`);
});

customEmitter.emit('response', 'chris', 123456);

const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');