interface CardButtoProps{
    text:string,
}

const CardButton:React.FC<CardButtoProps> = ({text}) => {
    return ( 
        <div className="w-full flex justify-center">
            <button className=" shadow-sm bg-blue-300 p-1 pl-3 pr-3 rounded-md font-montserrat text-xs uppercase font-semibold hover:scale-105 transition-all duration-200">{text}</button>
        </div>
     );
}
 
export default CardButton;