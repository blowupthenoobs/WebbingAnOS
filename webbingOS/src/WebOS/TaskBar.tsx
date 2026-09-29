import { useState } from "react";



export default function TaskBar() {
    const [currentTime, setTime] = useState<string>();

    const UpdateTime = () => {
        const time = new Date();

        let ending;
        if(time.getHours() >= 12)
            ending = " PM";
        else
            ending = " AM";

        let minutesText =  time.getMinutes().toString();
        if(time.getMinutes() < 10)
            minutesText = "0" + minutesText;

        setTime((time.getHours() % 12).toString() + " : " + minutesText + ending);
        // time.
        // console.log(time);
    }
    setInterval(UpdateTime, 1000)
    return (
        <div className={" text-computer-primary border-2 border-computer-primary h-12 w-full flex align-middle "}>
            <div className="w-[50%] flex flex-row align-middle">
                {/* <p>Thing one</p> */}
            </div>

            <div className="w-[50%] h-full flex flex-row-reverse items-center">
                <div className="border-l-2 w-30 text-center h-full flex">
                    <div className="mt-auto mb-auto w-full flex flex-row justify-around">
                        {/* <p className="w-5 h-5 border border-blue-300">.</p> */}
                        <p>{currentTime}</p>
                    </div>
                </div>

                {/* <p>hi</p> */}
            </div>
        </div>
    )
}