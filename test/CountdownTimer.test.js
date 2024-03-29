const {CountdownTimer} = require('../index');
jest.useFakeTimers('modern');

describe('test CountdownTimer', () => {
    it('normal start', () => {
        const startCallback = jest.fn();
        const timer = new CountdownTimer(10000, 1000, event => {
            if (event.type === 'start') {
                startCallback();
            }
        });
        expect(startCallback).not.toBeCalled();
        timer.start();
        expect(startCallback).toBeCalledTimes(1);
    });

    it('start tick finish', () => {
        const finishCallback = jest.fn();
        const timer = new CountdownTimer(10000, 1000, event => {
            if (event.type === 'finish') {
                finishCallback();
            }
        });
        timer.start();
        jest.advanceTimersByTime(9999);
        expect(finishCallback).not.toBeCalled();
        expect(timer.getDuration()).toEqual(10000);
        jest.advanceTimersByTime(1);
        expect(finishCallback).toBeCalledTimes(1);
    });
});


