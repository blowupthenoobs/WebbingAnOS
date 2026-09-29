


export default function AppIcon({openApp}: {openApp: () => void, Image: string}) {
    console.log(Image);

    return(
        <div className="w-15 h-15 border-2 border-computer-primary rounded-md hover:bg-computer-primary mb-5" onClick={openApp}>
            
        </div>
    )
}