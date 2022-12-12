import { useEffect, useState } from 'react';

function ScrollInfo() {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    const listenerFunction = function () {
        console.log('scroll position will update');
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        console.log('scroll info use effect added');
        document.addEventListener('scroll', listenerFunction);

        return () => {
            console.log('scroll info use effect removed');
            document.removeEventListener('scroll', listenerFunction);
        };
    }, []);

    return <p>{scrollPosition}</p>;
}

export default ScrollInfo;
