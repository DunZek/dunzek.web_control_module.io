import * as set_style from './style.js';

const STATUS = document.querySelector('p span');

// 1. Check availability
navigator.bluetooth.getAvailability().then(available => {
    if (available) {
        set_style.statusAvailable()
        console.log("This device supports bluetooth")
    }
    else {
        set_style.statusUnavailable()
        console.log("This device does NOT support bluetooth")
    }
});

// 2. Request bluetooth devices