


export default function HandleBar({closeApp, moveWindow}: {closeApp: () => void, moveWindow: (moveX: number, moveY: number) => void}) {
    
    let lastX = 0;
    let lastY = 0;

    const dragWindow = (event: MouseEvent) => { //tbh, I have no idea why the MouseEvent thing works as a param here
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
        <div className={"bg-off-black text-computer-primary border-b-2 border-computer-primary p-5 h-2.5 w-full flex-1 mr-6 text-lg cursor-move"} onMouseDown={dragWindow} onClick={closeApp}>
        </div>
    )
}