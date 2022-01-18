const dgram = require('dgram');
const wait = require('wait');
const commandDelays = require('./commandDelays')

const PORT = 8000;
const HOST = '192.168.10.1';



const drone = dgram.createSocket('udp4');
drone.bind(PORT);

const droneState = dgram.createSocket('udp4');
droneState.bind(8000)

drone.on('message', message => {
    console.log(`🚁 : ${message}`);
});

function handleError(err) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    }
}

drone.send('command', 0, 7, PORT, HOST, handleError);
drone.send('battery?', 0, 8, PORT, HOST, handleError);

// drone.send('command', 0, 7, PORT, HOST, handelError);
//drone.send('battery?', 0, 8, PORT, HOST, handelError);

const commands = ['commands', 'battery?', 'takeoff', 'land'];

let i = 0;

async function go() {
    const command = commands[i];

    const delay = commandDelays[command];
    console.log(`running command: ${command}`);
    drone.send(command, 0, command.lenght, PORT, HOST, handleError);
    await wait(delay);
    i += 1;
    if (i < commands.length) {
        return go()
    }
    console.log('done');
}
go();