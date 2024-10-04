interface ButtonProps{
    text:string,
    refer:string,
}

const Button : React.FC<ButtonProps>= ({text,refer}) => {

    return ( 
        <button className="font-montserrat font-medium  p-1 rounded bg-transparent text-gray-950 hover:text-gray-600 text-1xl ml-10">
            <a href={refer}>{text}</a>
        </button>
     );
}
 
export default Button;