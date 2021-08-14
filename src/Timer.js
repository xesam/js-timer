const IntervalTick = require('./IntervalTick');
const Ticker = require('./Ticker');


class Timer extends IntervalTick {
    constructor(interval = 1000, handleEvent) {
        super(interval, handleEvent);
    };

    getInitialTicker() {
        return new Ticker(flyMills => {
            const keepContinue = this.onTick(flyMills);
            this.onEvent({type: 'tick'});
            this.onEvent('tick');
            if (keepContinue) {
                this._ticker.start(this._interval);
            }
        });
    }
}

module.exports = Timer;
