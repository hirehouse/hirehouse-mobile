let timeout: any = null;
let delay = 1000;
export default (fn: () => void) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
};
