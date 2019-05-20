const {Timer} = require('../src');

new Timer(1000, {
    onStart(timer) {
        console.log('onStart');
    },
    onStop(timer) {
        console.log('onStop');
    },
    onTick(timer, fly) {
        console.log(fly);
    }
}).start();
