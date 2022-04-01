// Various dynamic-styling functions 
const STATUS = document.querySelector('p span');

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

export { 
    statusUnknown, statusAvailable, statusUnavailable
};