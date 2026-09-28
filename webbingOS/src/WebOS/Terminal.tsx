import { useState } from "react";
import HandleBar from "./HandleBar"


export default function Terminal({closeApp}: {closeApp: () => void}) {
    
    const [xPosition, setXPos] = useState(window.innerWidth / 2);
    const [yPosition, setYPos] = useState(window.innerHeight / 2);

    // console.log(window.innerHeight)
    

    const moveWindow = (changeX: number, changeY: number) => {
        // console.log(changeX, " ", changeY)
        setXPos(prev => prev + changeX);
        setYPos(prev => prev + changeY);
        console.log(xPosition);
    }


    return (
        <div className={"bg-off-black text-computer-primary border-2 border-computer-primary h-62.5 w-150 flex-1 mr-6 text-lg absolute translate-[-50%] "}
            style={{top: yPosition, left: xPosition}}>
            <HandleBar closeApp={closeApp} moveWindow={moveWindow}/>
            <p>Hello</p>
        </div>
    )
}