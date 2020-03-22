export const debounce = (callback: Function, wait: number, leading: boolean): Function => {
    let timeout = -1;

    return (...args: object[]): void => {
        const invokeImmediately = leading && timeout !== -1;

        const invokeTrailing = (): void => {
            timeout = -1;
            if (!leading) {
                callback(...args);
            }
        };

        clearTimeout(timeout);
        timeout = setTimeout(invokeTrailing, wait);

        if (invokeImmediately) {
            callback(...args);
        }
    };
};

export const throttle = (callback: Function, wait: number): Function => {
    let timeout = -1;

    return (...args: object[]): void => {
        if (timeout !== -1) {
            callback(...args);
            timeout = setTimeout(() => {
                timeout = -1;
            }, wait);
        }
    };
};
