// command to tell the drone how long it takes before each comannad is exicuted.

const commandDelays = {
    command: 500,
    takeoff: 5000,
    land: 5000,
    up: 7000,
    down: 7000,
    left: 5000,
    go: 7000,
    right: 5000,
    forward: 5000,
    back: 5000,
    cw: 5000,
    ccw: 5000,
    flip: 5000,
    speed: 5000,
    'battery?': 500,
    'speed?': 500,
    'time?': 500,
};
module.exports = commandDelays;