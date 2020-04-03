import { useEffect, MutableRefObject } from 'react';

export function useInterval(callback: Function, delay: number) {
  let currentCallback: Function;
  let id = -1;

  useEffect(() => {
    currentCallback = callback;
  }, [callback]);

  useEffect(() => {
    if (delay < 0) {
      clearInterval(id);
      id = -1;
      return null;
    }

    id = setInterval(() => currentCallback(), delay);
    return (): void => clearInterval(id);
  }, [delay]);
}

export function useOnClickOutside(ref: MutableRefObject<Node>, handler: Function) {
  useEffect(() => {
    const listener = (event: Event): void => {
      if (!ref.current || (event.target instanceof Node && ref.current.contains(event.target))) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return (): void => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
