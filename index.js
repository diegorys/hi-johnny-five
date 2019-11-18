const five = require("johnny-five");

console.log('Hi Johny Five from diegorys.es');

const board = five.Board();
board.on("ready", () => {
    console.log('The board is ready!');
    const led = new five.Led(13);
    led.blink();
    console.log('The led is blinking!');
});
