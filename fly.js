const dgram = require('dgram');
const wait = require('wait');

const PORT = 8000;
const HOST = '192.168.10.1';

const drone = dgram.createSocket('udp4');
drone.bind(PORT);

drone.on('message', message => {
    console.log(`🚁 : ${message}`);
});

function handleError(err) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    }
}