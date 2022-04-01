/* Various dynamic-styling functions */

// DOM Elements involved and styled:
const STATUS = document.querySelector('header p span[id=status]');
const SPAN_NAME = document.querySelector('article p span[id=device_name]');
const SPAN_ID = document.querySelector('article p span[id=device_id]');
const SPAN_GATT = document.querySelector('article p span[id=device_gatt]');

// <span id="status">
function statusUnknown() {
    STATUS.innerHTML = "unknown";
    STATUS.className = "unknown";
}

function statusAvailable() {
    STATUS.innerHTML = "available";
    STATUS.className = "available";
}

function statusUnavailable() {
    STATUS.innerHTML = "Unavailable";
    STATUS.className = "unavailable";
}

// <span id="device_*">
function setName(device_name) {
    SPAN_NAME.innerHTML = device_name;
}

function setId(device_id) {
    SPAN_ID.innerHTML = device_id;
}

function setGatt(device_gatt) {
    SPAN_GATT.innerHTML = device_gatt;
}

export { 
    statusUnknown, statusAvailable, statusUnavailable,
    setName, setId, setGatt,
};