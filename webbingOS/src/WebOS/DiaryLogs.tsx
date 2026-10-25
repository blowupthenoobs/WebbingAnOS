import { useEffect, useState } from "react";
import HandleBar from "./HandleBar"
import GlitchOverlay from "./GlitchOverlay";


export default function DiaryLogs({closeApp, zPos, setToTop}: {closeApp: () => void, zPos: number, setToTop: () => void}) {
    
    const [xPosition, setXPos] = useState(window.innerWidth / 2);
    const [yPosition, setYPos] = useState(window.innerHeight / 2);
    const [glitchTime, setGlitchTime] = useState(5);
    const [diary, setDiaryEntries] = useState<Array<string>>(["9/28/2026"]);
    const [currentEntry, startReading] = useState("9/28/2026")
    const [currentContent, setDiaryContent] = useState(`Here's my web OS thingy. I intend to make it a sort of ARG thing, so stuff like note taking will not work, but it should hopefully still be fun to mess with when it's done. And here's a bunch of text to get the scroll bar to work.
    
    oaisjdfoiajwoifjaoiefjoiasjdfoijwaoi aoidfjaowisjefoij aowifjoawijef aiushdfiuakhsdfiuahiu asidjfaiwejfoij asidfj asdlkifjaoiwje aoidfjaeigb aubgajhbdfoi adba efikfnvhban edmndaiubdsnfvafdgv cdkxfgaebsdjhmnc, mdnguvbjhasdnmfdagrsbdjf asedfhna jiseyfhvbhcanjsijfdhgyujashdmfmaow khsmefy iask,hdb jhadmnxfc isafjhcmjnsdmf csdzxfn hckdzjfn aofjoiajsdfoijawofidj ajsdofajwo ijaoijdfoij aoidfjoawij ijaowdfijawijfoiawjd adiofjao iejfoai jdofijaosidjfoiaj oiejfoiajsdfoijaoijfo ijaoijdfoijjaoijf ah diufknj aiuefjhk naefhjbandiuf khansfeuihnm`);
    const keys = ["9/28/2026", "2/18/2023", "3/16/2022"]

    // console.log(window.innerHeight)
    

    const moveWindow = (changeX: number, changeY: number) => {
        // console.log(changeX, " ", changeY)
        setXPos(prev => prev + changeX);
        setYPos(prev => prev + changeY);
        console.log(xPosition);
    }

    const glitch = () => {
        setGlitchTime(0);
    }

    const switchDiary = (newDiary: string) => {
        startReading(newDiary);
        switch(newDiary)
        {
            case "9/28/2026":
                setDiaryContent(`Here's my web OS thingy. I intend to make it a sort of ARG thing, so stuff like note taking will not work, but it should hopefully still be fun to mess with when it's done. And here's a bunch of text to get the scroll bar to work.
                    oaisjdfoiajwoifjaoiefjoiasjdfoijwaoi aoidfjaowisjefoij aowifjoawijef aiushdfiuakhsdfiuahiu asidjfaiwejfoij asidfj asdlkifjaoiwje aoidfjaeigb aubgajhbdfoi adba efikfnvhban edmndaiubdsnfvafdgv cdkxfgaebsdjhmnc, mdnguvbjhasdnmfdagrsbdjf asedfhna jiseyfhvbhcanjsijfdhgyujashdmfmaow khsmefy iask,hdb jhadmnxfc isafjhcmjnsdmf csdzxfn hckdzjfn aofjoiajsdfoijawofidj ajsdofajwo ijaoijdfoij aoidfjoawij ijaowdfijawijfoiawjd adiofjao iejfoai jdofijaosidjfoiaj oiejfoiajsdfoijaoijfo ijaoijdfoijjaoijf ah diufknj aiuefjhk naefhjbandiuf khansfeuihnm`)
                break;
            case "2/18/2023":
                setDiaryContent(`need to come up with something to put here...`);
                break;
            case "3/16/2022":
                setDiaryContent(`Got called into HR today. Apparently my mood as of late has been sort of a bother to everyone in the office, so I guess the meeting with HR turned into sort of a therapy session. I was recommended to try some sort of journaling to get my feelings out, so I figured I could write here. Not like anyone's going to be snooping around my computer, right?
                Today was an alright day, arrived at 7am like I normally do, went straight to the break room for a cup of coffee before heading to my desk to work on _________. Later I had... (figuring out what to write here later)`);
                break;
            default:
                setDiaryContent(`Here's my web OS thingy. I intend to make it a sort of ARG thing, so stuff like note taking will not work, but it should hopefully still be fun to mess with when it's done. And here's a bunch of text to get the scroll bar to work.
                    oaisjdfoiajwoifjaoiefjoiasjdfoijwaoi aoidfjaowisjefoij aowifjoawijef aiushdfiuakhsdfiuahiu asidjfaiwejfoij asidfj asdlkifjaoiwje aoidfjaeigb aubgajhbdfoi adba efikfnvhban edmndaiubdsnfvafdgv cdkxfgaebsdjhmnc, mdnguvbjhasdnmfdagrsbdjf asedfhna jiseyfhvbhcanjsijfdhgyujashdmfmaow khsmefy iask,hdb jhadmnxfc isafjhcmjnsdmf csdzxfn hckdzjfn aofjoiajsdfoijawofidj ajsdofajwo ijaoijdfoij aoidfjoawij ijaowdfijawijfoiawjd adiofjao iejfoai jdofijaosidjfoiaj oiejfoiajsdfoijaoijfo ijaoijdfoijjaoijf ah diufknj aiuefjhk naefhjbandiuf khansfeuihnm`)
            
        }
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            setGlitchTime(prev => prev + 1)
        }, 80)

        let diaries: string[] = [];

        for(let i = 0; i < keys.length; i++) {
            const temp = localStorage.getItem(keys[i])

            if(temp === "journal")
                diaries[diaries.length] = keys[i];
            console.log(diaries);
        }


        setDiaryEntries(diaries);
        return () => clearInterval(interval);

    }, [])

    return (
        <div className={"bg-computer-light-black text-computer-primary border-2 border-computer-primary h-65 w-150 flex-1 mr-6 text-lg absolute translate-[-50%] "}
            style={{top: yPosition, left: xPosition, zIndex: zPos}} onMouseDown={setToTop}>
            <HandleBar closeApp={closeApp} moveWindow={moveWindow} windowName="Logs"/>
            <div className="flex flex-row w-full h-[calc(100%-40px)] overflow-hidden relative">
                <div className="w-30 shrink-0 border-r-2 border-computer-primary flex flex-col">
                    <div className="w-full border-b h-10">
                        <p className="mt-1 mb-auto ml-auto mr-auto border w-[90%] h-[80%] p-1 text-sm cursor-pointer" onClick={glitch}>Add Entry +</p>
                    </div>
                    {diary.map((item) => {
                        return(
                        <div className="w-full border-b h-10 content-center text-center cursor-pointer" onClick={() => switchDiary(item)}>
                            <p className="mt-auto mb-auto ml-auto mr-auto pointer-events-none">{item}</p>
                        </div>
                        )
                    })
                    }
                    
                </div>
                <div className="p-1 flex-1">
                    <h1 className="text-xl ml-2">Diary {currentEntry}</h1>
                    <p className="text-[13px] bg-lighter-black p-2 scrollbar-thin overflow-y-scroll flex-auto h-[calc(100%-30px)] w-full">{currentContent}</p>
                </div>
                {glitchTime <= 2 &&
                    <GlitchOverlay/>
                }
            </div>
        </div>
    )
}