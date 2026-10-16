import { useEffect, useState } from "react"


export default function GlitchOverlay() {
    const [, setFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame(prev => prev + 1)
        }, 0.1)

        return () => clearInterval(interval);
    }, [])

   
    return (
        <div className={"w-full h-full overflow-clip pointer-events-none"}>
        {
            Array.from({ length: 150 }, () => (
                <div className="bg-computer-primary absolute"
                    style={{left: Math.floor(Math.random() * 100) + "%", top: Math.floor(Math.random() * 100) + "%", width: Math.floor(Math.random() * 80 ) + "px", height: Math.floor(Math.random() * 40 ) + "px"}}/>
            ))
        }
        </div>
    )
}