import { useEffect, useState } from 'react';

const useOnScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        
        const handleScroll = () => {
            const currentPosition = window.scrollY || document.documentElement.scrollTop;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup: Remove the event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
};

export default useOnScroll;