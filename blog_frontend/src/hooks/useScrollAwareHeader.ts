import { useRef, useEffect } from 'react'

function useScrollAwareHeader() {

    const headerRef = useRef<HTMLElement>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting && headerRef.current) {
                (headerRef.current as HTMLElement).className = "header fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm -translate-y-2 shadow-md transition-all duration-300";
            } else if (entry.isIntersecting && headerRef.current) {
                (headerRef.current as HTMLElement).className = "header fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300";
            }
        })
        if (sentinelRef.current && headerRef.current) {
            observer.observe(sentinelRef.current)
        }

        // 清理函数
        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [])

    return {
        headerRef, sentinelRef
    }
}

export default useScrollAwareHeader;