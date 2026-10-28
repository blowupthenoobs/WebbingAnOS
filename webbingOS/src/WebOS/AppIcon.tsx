import type { ReactNode } from "react"


export default function AppIcon({openApp, Icon}: {openApp: () => void, Icon: ReactNode}) {
    // console.log(Image);

    return(
        <div className="w-15 h-15 border-2 border-computer-primary rounded-md hover:bg-computer-primary mb-5 text-computer-primary hover:text-computer-black" onClick={openApp}>
            {/* <p className="place-self-center mt-auto mb-auto">{Image}</p> */}
            {Icon}
        </div>
    )
}