


interface AppIcon {
    Image: string;
}

const AppIcon: React.FC<AppIcon> = ({Image}) => {
    console.log(Image);

    return(
        <div className="">
            
        </div>
    )
}

export default AppIcon;