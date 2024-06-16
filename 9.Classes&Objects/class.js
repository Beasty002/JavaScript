// class is a program code template for creating objects.
// Those objects will have some state (variables) and soem behaviour (functions) inside it
// ---------------------------------------------------Constructor
// it is a special keyboard that gets automatically called when new object is created
// It is mainly used to initialize the values

class ToyotaCar {
    constructor(msg) {
        console.log("I have been called from constructor", msg);
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop")
    }
    setBrand(model) {
        this.modelName = model; // we can have both the name same modeName and model too
        console.log(`Your model is ${this.modelName}`)
    }
}
let fortuner = new ToyotaCar("Helo");
fortuner.start();
fortuner.stop();
fortuner.setBrand("MXY24")
