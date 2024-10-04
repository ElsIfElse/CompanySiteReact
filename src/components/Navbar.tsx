import Button from "./Button";
import logo from "../imgs/logo.png"

interface NavbarProps{
    buttonRef1: string,
    buttonRef2: string,
    buttonRef3: string,
    buttonref4:string
}

const Navbar:React.FC<NavbarProps> = ({buttonRef1,buttonRef2,buttonRef3,buttonref4}) => {
    return ( 
        <div className="z-10 flex flex-col bg-gray-100 fixed w-full h-16">
            <div className="flex justify-start align-middle flex-col pl-10 pt-3 pb-3">
                <div className="flex flex-row w-[1000px] justify-start ">
                    <button className="h-full w-10">
                        <img src={logo} alt="" className="w-full h-full p-0"/>
                    </button>
                    <div className="w-[600px] flex justify-between pl-5">
                        <Button refer={buttonRef1} text="Home Page"/>
                        <Button refer={buttonRef2} text="References "/>
                        <Button refer={buttonRef3} text="Contact"/>
                        <Button refer={buttonref4} text='Gallery'/>
                    </div>

                    
                </div>
            </div>
            <hr className=" border border-b-black w-full mb-0"/>
        </div>

        
     );
}
 
export default Navbar;