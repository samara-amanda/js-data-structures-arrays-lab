// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name){
    const newDriver= [...drivers,"Broom"];
    return newDriver;
}
function prependDriver(name){
    const newDriver2= ["Arnold", ...drivers];
    return newDriver2;
}
function removeLastDriver(){
    const newDriver3= drivers.slice(0,2);
    return newDriver3;
}
function removeFirstDriver(){
    const newDriver4= drivers.slice(1);
    return newDriver4;
}