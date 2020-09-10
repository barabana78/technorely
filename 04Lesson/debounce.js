//debounce decorator

let v = debounce(console.log, 1000);

function debounce(fn, ms) {
    let isCooldown = false;

    return function () {
        if (isCooldown) return;
        fn.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => {
            isCooldown = false;
        }, ms);
    }
}

v('v= ', 1);
v('v= ', 2);
setTimeout(() => {
    v('v= ', 3)
}, 100);
setTimeout(() => {
    v('v= ', 4)
}, 1100);
setTimeout(() => {
    v('v= ', 5)
}, 1500);
