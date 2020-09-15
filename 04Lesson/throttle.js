//throttle decorator
function f(a, b) {
    console.log(a, b);
}

let f1000 = throttle(f, 1000);

function throttle(func, ms) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = null;
                savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}

f1000('f1000= ', 1);
f1000('f1000= ', 2);
f1000('f1000= ', 3);
