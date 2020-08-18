import { useRef, useEffect, RefObject } from 'react';

export const useFocus = (): RefObject<HTMLInputElement> => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        ref.current?.focus();
    });

    return ref;
};
