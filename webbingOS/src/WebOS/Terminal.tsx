import { useRef, useState } from "react";
import HandleBar from "./HandleBar"


export default function Terminal({closeApp, zPos, setToTop}: {closeApp: () => void, zPos: number, setToTop: () => void}) {
    
    const [xPosition, setXPos] = useState(window.innerWidth / 2);
    const [yPosition, setYPos] = useState(window.innerHeight / 2);

    const [currentCommand, setCurrentCommand] = useState("");
    const [message, setMessages] = useState<Array<string>>([]);
    const terminal = useRef<HTMLInputElement | null>(null);

    const terminalDefaultText = "root/>"

    // console.log(window.innerHeight)
    

    const moveWindow = (changeX: number, changeY: number) => {
        // console.log(changeX, " ", changeY)
        setXPos(prev => prev + changeX);
        setYPos(prev => prev + changeY);
        // console.log(xPosition);
    }

    const setFocus = () => {
        terminal.current?.focus();
    }

    const runCommand = (fullCommand: string) => {
        if(fullCommand === "") return;
        setCurrentCommand("");

        const commandMessage = terminalDefaultText + " " + fullCommand;
        console.log(commandMessage);
        const baseCommand = (fullCommand.trimStart()).split(" ")[0];
        console.log(baseCommand);
        let response = 'invalid command: use "help" command to get a list of the commands';
        let extraMessages: Array<string> = [];
        let clearing = false;
        switch(baseCommand) {
            case "echo":
                response = commandMessage;
                break;
            case "clear":
                clearing = true;
                break;
            case "help":
                break;
            default:
                break;
        }

        const prevMessages = [...message];
        prevMessages.push(commandMessage, response);
        setMessages(prevMessages.concat(extraMessages));

        if(clearing)
            clearConsole();
    }

    const clearConsole = () => {
        setMessages([]);
    }


    return (
        <div className={"bg-computer-light-black text-computer-primary border-2 border-computer-primary h-62.5 w-150 flex-1 mr-6 text-lg absolute translate-[-50%] z-1"}
            style={{top: yPosition, left: xPosition, zIndex: zPos}} onMouseDown={setToTop} onClick={setFocus}>
            <HandleBar closeApp={closeApp} moveWindow={moveWindow} windowName="Terminal"/>
            <div className="flex flex-col p-2">
                {message.map((item) => {
                        return(
                            <div className="">
                                <p>{item}</p>
                            </div>
                        )
                })}
                <div className="flex">
                    <p>{terminalDefaultText}</p>
                    <input className="ml-1 flex-1 focus:outline-0" ref={terminal} value={currentCommand} onChange={(e) => setCurrentCommand(e.target.value)} onKeyDown={(e) => {
                            if(e.key === "Enter") {
                                e.preventDefault();
                                runCommand(currentCommand); //working as intended
                            }
                        }}/>
                </div>
            </div>
        </div>
    )
}