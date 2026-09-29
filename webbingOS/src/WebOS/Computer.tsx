import { useState } from "react"
import TaskBar from "./TaskBar"
import Terminal from "./Terminal"
import AppIcon from "./AppIcon"
import DiaryLogs from "./DiaryLogs"


export default function Computer() {
    const [terminalOpen, setTerminalOpen] = useState<boolean>(true);
    const [diaryOpen, setDiaryOpen] = useState<boolean>(false);
    const closeTerminal = () => {
        setTerminalOpen(false);
    }
    const openTerminal = () => {
        setTerminalOpen(true);
    }
    const closeDiary = () => {
        setDiaryOpen(false);
    }
    const openDiary = () => {
        setDiaryOpen(true);
    }

    return (
        <div className="bg-computer-black h-screen w-full flex flex-col overflow-hidden">
            <div> {/* windows */}
                {terminalOpen && <Terminal closeApp={closeTerminal}/>}
                {diaryOpen && <DiaryLogs closeApp={closeDiary}/>}
                
            </div>

            <div className="flex-1 w-full flex flex-col p-3">
                <AppIcon Image={""} openApp={openTerminal}/>
                <AppIcon Image={""} openApp={openDiary}/>
            </div>

            <TaskBar/>
        </div>
    )
}