import { useState } from "react";
import HandleBar from "./HandleBar"


export default function DiaryLogs({closeApp}: {closeApp: () => void}) {
    
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
        <div className={"bg-computer-light-black text-computer-primary border-2 border-computer-primary h-65 w-150 flex-1 mr-6 text-lg absolute translate-[-50%] "}
            style={{top: yPosition, left: xPosition}}>
            <HandleBar closeApp={closeApp} moveWindow={moveWindow} windowName="Logs"/>
            <div className="flex flex-row w-full h-[calc(100%-40px)]">
                <div className="w-30 shrink-0 border-r-2 border-computer-primary flex flex-col">
                    <div className="w-full border-b h-10">
                        <p className="mt-1 mb-auto ml-auto mr-auto border w-[90%] h-[80%] p-1 text-sm">Add Entry +</p>
                    </div>
                    <div className="w-full border-b h-10 content-center text-center">
                        <p className="mt-auto mb-auto ml-auto mr-auto">9/28/2026</p>
                    </div>
                </div>
                <div className="p-1">
                    <h1 className="text-xl ml-2">Diary 9/28/2026</h1>
                    <p className="text-[13px] bg-lighter-black p-2 scrollbar-thin overflow-y-scroll flex-auto h-[calc(100%-30px)]">Here's my web OS thingy. I intend to make it a sort of ARG thing, so stuff like note taking will not work, but it should hopefully still be fun to mess with when it's done. And here's a bunch of text to geth the scroll bar to work.
                    <br/>
                    <br/>
                    oaisjdfoiajwoifjaoiefjoiasjdfoijwaoi aoidfjaowisjefoij aowifjoawijef aiushdfiuakhsdfiuahiu asidjfaiwejfoij asidfj
                    asdlkifjaoiwje aoidfjaeigb aubgajhbdfoi adba efikfnvhban edmndaiubdsnfvafdgv cdkxfgaebsdjhmnc, mdnguvbjhasdnmfdagrsbdjf getMouseCoords
                     asedfhna jiseyfhvbhcanjsijfdhgyujashdmfmaow khsmefy iask,hdb jhadmnxfc isafjhcmjnsdmf csdzxfn hckdzjfn
                     aofjoiajsdfoijawofidj ajsdofajwo ijaoijdfoij aoidfjoawij ijaowdfijawijfoiawjd adiofjao iejfoai jdofijaosidjfoiaj oiejfoiajsdfoijaoijfo ijaoijdfoijjaoijf
                     aoidfjaoisjdf oija doifjaoijdfoiahsdf iaw fhbauejhfhuaye jhfgbnv manisdhfbuaksdfuh bam,xf jhbznvmnscvnao;dskufgba 
                     ah diufknj aiuefjhk naefhjbandiuf khansfeuihnm</p>
                </div>
            </div>
        </div>
    )
}