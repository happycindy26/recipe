
const debounce = (func, delay=1000) => {
     //event.key === 13?
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null,args);
        }, delay);
    };
};