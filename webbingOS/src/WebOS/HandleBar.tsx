


export default function HandleBar({closeApp, moveWindow, windowName}: {closeApp: () => void, moveWindow: (moveX: number, moveY: number) => void, windowName: string}) {
    
    let lastX = 0;
    let lastY = 0;

    const dragWindow = (event: React.MouseEvent) => { //tbh, I have no idea why the MouseEvent thing works as a param here
        lastX = event.clientX;
        lastY = event.clientY;

        window.addEventListener("mousemove", getMouseCoords)
        window.addEventListener("mouseup", dropWindow)
    }

    const dropWindow = () => {
        window.removeEventListener("mousemove", getMouseCoords);
        window.removeEventListener("mouseup", dropWindow);
    }

    const getMouseCoords = (event: MouseEvent) => {
        // console.log(event.clientX, " ", event.clientY)
        moveWindow(event.clientX - lastX, event.clientY - lastY);
        lastX = event.clientX; lastY = event.clientY;
    }
    
    return (
        <div className={"bg-off-black text-computer-primary border-b-2 border-computer-primary h-10.5 w-full text-lg cursor-move flex justify-between"} onMouseDown={dragWindow}>
            <div className="h-full aspect-square"> {/* temp styling to get text to center */}
            
            </div>
            
            <p className="mt-auto mb-auto">{windowName}</p>

            <div className="flex flex-row-reverse">
                <button className="h-full aspect-square border-l-2 border-computer-primary" onClick={closeApp}>X</button>
            </div>
        </div>
    )
}