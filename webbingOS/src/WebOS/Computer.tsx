import TaskBar from "./TaskBar"
import Terminal from "./Terminal"
import AppIcon from "./AppIcon"
import { useState } from "react"


export default function Computer() {
    const [terminalOpen, setTerminalOpen] = useState<boolean>(true);
    const closeTerminal = () => {
        // setTerminalOpen(false);
    }

    return (
        <div className="bg-lighter-black h-screen w-full flex flex-col overflow-hidden">
            <div> {/* windows */}
                {terminalOpen && <Terminal closeApp={closeTerminal}/>}
                
            </div>

            <div className="flex-1 w-full">
                <AppIcon Image={""} />
            </div>

            <TaskBar/>
        </div>
    )
}