import NavBar from "./NavBar"
import useScrollAwareHeader from "../hooks/useScrollAwareHeader"
interface props {
    name: string
}
function ScrollAwareHeader(props: props) {
    const { headerRef, sentinelRef } = useScrollAwareHeader()
    return (
        <>

            <div ref={sentinelRef} className="h-10 absolute top-0 left-0 right-0"></div>
            <header ref={headerRef} className="header fixed top-0 left-0 right-0 z-50 bg-white">
                <NavBar name={props.name} />
            </header>
        </>
    )
}

export default ScrollAwareHeader