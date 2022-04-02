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

// Availability handler:
navigator.bluetooth.onavailabilitychanged = function(event) {
    console.log("Bluetooth availability changed: " + event);
}

// 2. Request bluetooth devices
const OPTIONS = {
    // filters: [],
    optionalServices: [],
    acceptAllDevices: true,
};
navigator.bluetooth.requestDevice(OPTIONS).then(device => {
    // FIXME: Failed to Execute 'requestDevice' on 'Bluetooth': Must be
    // handling a user gesture to show a permission request.
    set_style.setName(device.name);
    set_style.setId(device.id);
    set_style.setGatt(device.gatt);
}).catch(error => {
    console.error("Error: " + error);
});

// 3. Connect

// 4. Find service of interest

// 5. Get characteristic

// 6. Perform operations on characteristic (Read, Write, etc.)

// navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service']}]}).then(device => device.gatt_connect())
//   .then(server => {
//       // Getting Battery Service...
//       return server.getPrimaryService('battery_service');
//   }).then(service => {
//       // Getting Battery Level Characteristic...
//       return service.getCharacteristic('battery_level');
//   }).then(characteristic => {
//       // Reading Battery Level...
//       return characteristic.readValue();
//   }).then(value => {
//       console.log('Battery percentage is ' + value.getUint8(0));
//   }).catch(error => console.error(error));
