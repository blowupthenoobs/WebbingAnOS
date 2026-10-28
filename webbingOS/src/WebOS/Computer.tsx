import { useEffect, useState } from "react"
import TaskBar from "./TaskBar"
import Terminal from "./Terminal"
import AppIcon from "./AppIcon"
import DiaryLogs from "./DiaryLogs"

import { BsTerminalFill } from "react-icons/bs"
import { DiTerminalBadge } from "react-icons/di"
import { PiNotebookThin } from "react-icons/pi"

export default function Computer() {
    const [terminalOpen, setTerminalOpen] = useState<boolean>(true);
    const [diaryOpen, setDiaryOpen] = useState<boolean>(false);
    const [zIndexes, setZIndexes] = useState<Array<number>>([12, 11]);
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

    const setWindowToTop = (windowIndex: number) => {
        console.log("setting window index")
        let indexes = [...zIndexes];
        let addOneAfter = false;
        for(let i = 0; i < indexes.length; i++) {
            if(indexes[i] != 0)
                indexes[i]--;
            else
                addOneAfter = true;
        }
        indexes[windowIndex] = 15;

        if(addOneAfter) {
            for(let i = 0; i < indexes.length; i++) {
                indexes[i]++;
            }
        }

        setZIndexes(indexes);
    }

    const createStartingCookies = () => {
        const check = localStorage.getItem("createdCookies");

        if(check !== "true")
        {
            localStorage.setItem("createdCookies", "true")
            localStorage.setItem("9/28/2026", "journal");
            localStorage.setItem("2/18/2023", "journal");
            localStorage.setItem("3/16/2022", "journal");
        }
    }

    useEffect(() => {
            createStartingCookies()
    }, [])

    return (
        <div className="bg-computer-black h-screen w-full flex flex-col overflow-hidden -z-100">
            <div> {/* windows */}
                {terminalOpen && <Terminal closeApp={closeTerminal} zPos={zIndexes[0]} setToTop={() => setWindowToTop(0)}/>}
                {diaryOpen && <DiaryLogs closeApp={closeDiary} zPos={zIndexes[1]} setToTop={() => setWindowToTop(1)}/>}
                
            </div>

            <div className="flex-1 w-full flex flex-col p-3">
                <AppIcon Icon={(<DiTerminalBadge className="w-[90%] h-[90%] align-middle ml-auto mr-auto mt-0.5 mb-auto"/>)} openApp={openTerminal}/>
                <AppIcon Icon={<PiNotebookThin className="w-[90%] h-[90%] align-middle ml-auto mr-auto mt-0.5 mb-auto"/>} openApp={openDiary}/>
            </div>

            <TaskBar/>
        </div>
    )
}