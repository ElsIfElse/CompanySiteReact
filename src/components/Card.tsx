import CardButton from "./CardButton";

interface CardProps{
    title:string,
    text:string,
    btnText:string
}

const Card:React.FC<CardProps> = ({title,text,btnText}) => {
    return ( 
        <div className="shadow-md w-[300px] h-[250px] border border-bl-100 rounded-md bg-blue-100 flex flex-col font-montserrat items-start p-7 transition-all duration-200 hover:-translate-y-1">
            <div className="h-full">
                <h3 className="mb-5 text-xl font-medium">{title}</h3>
                <p className="text-start text-sm">{text}</p>
            </div>
            <CardButton text={btnText} />
        </div> 
     );
}
 
export default Card;