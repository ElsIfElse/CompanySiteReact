interface ImageBoxProps{
    imgsource:string
}

const ImageBox:React.FC<ImageBoxProps> = ({imgsource}) => {
    return ( 
        <div className="flex flex-1">
            <img className="w-full h-full p-2 rounded-xl" src={imgsource} alt="" />
        </div>
     );
}
 
export default ImageBox;