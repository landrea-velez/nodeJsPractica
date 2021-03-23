const Emitter = require('./emitter');
const emitter = new Emitter();

emitter.on("save", () => {
    console.log('ON SAVE ACTIVATED 1');
});

emitter.on("save", () => {
    console.log('ON SAVE ACTIVATED 2');
});

emitter.emit("save");