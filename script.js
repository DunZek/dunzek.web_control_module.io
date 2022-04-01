import * as set_style from './style.js';

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
const OPTIONS = {
    filters: [],
    optionalServices: [],
    acceptAllDevices: false,
};
navigator.bluetooth.requestDevice(/* OPTIONS */).then(device => {
    // FIXME: Failed to Execute 'requestDevice' on 'Bluetooth': Must be
    // handling a user gesture to show a permission request.
    set_style.setName(device.name);
    set_style.setId(device.id);
    set_style.setGatt(device.gatt);
}).catch(error => {
    console.error("Error: " + error);
});