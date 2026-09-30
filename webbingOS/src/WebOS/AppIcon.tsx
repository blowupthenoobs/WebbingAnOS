


export default function AppIcon({openApp, Image}: {openApp: () => void, Image: string}) {
    console.log(Image);

    return(
        <div className="w-15 h-15 border-2 border-computer-primary rounded-md hover:bg-computer-primary mb-5" onClick={openApp}>
            <p className="place-self-center mt-auto mb-auto">{Image}</p>
        </div>
    )
}