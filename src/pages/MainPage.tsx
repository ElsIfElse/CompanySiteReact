import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import TestimonyCard from "../components/TestimonyCard";
import logo from "../imgs/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faL } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import CardButton from "../components/CardButton";
import ImageBox from "../components/ImageBox";
import { useSpring,animated } from "@react-spring/web";

const MainPage = () => {

    const [isPaused,setIsPaused] = useState<boolean>(false)

    const handleMouseEnter = ()=>{
        setIsPaused(true)
    }

    const handleMouseExit = ()=>{
        setIsPaused(false)
    }



    const [toggled,setToggled] = useState<boolean>(false)
    const images = useRef(null)




    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) =>{
                setToggled(entry.isIntersecting)
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            }
            
        )
        observer.observe(images.current)

    },[])


    const heroAnimOnLoad = useSpring({
        from: {transform: 'translateY(-100px) ' ,},
        to: {transform: 'translateY(0px) '},
        config:{mass:2}
    })
    const logoOnLoad = useSpring({
        from: {transform: 'rotateY(360deg) scale(0.0)' ,},
        to: {transform: 'rotateY(0deg) scale(1)'},
        config:{mass:3}
    })

    const sectionOnLoadFromLeft = useSpring({
        from: {transform: 'translateX(-200px)' ,},
        to: {transform: 'translateX(0px)'},
        config:{mass:2}
    })
    const sectionOnLoadFromRight = useSpring({
        from: {transform: 'translateX(200px)' ,},
        to: {transform: 'translateX(0px)'},
        config:{mass:2}
    })

    const imagesTurn = useSpring({
        transform: toggled ? 'translateY(0px)' : 'translateY(200px)',
    })


    return ( 
        <div className="flex flex-col align-middle items-center">
            <Navbar buttonRef1={'#introduction'} buttonRef2={'#testimony'} buttonRef3={'#contact'} buttonref4={'#gallery'}/>
            <div id='introduction' className="mt-5 pl-32 pr-32 w-full max-w-[2000px] flex flex-col">
                <div  className="flex flex-col justify-center items-center mt-0 bg-white h-[25vh] pt-[100px]">
                    <animated.h1 style={heroAnimOnLoad} className="text-black font-arvo text-6xl font-extralight text-center">Danny's Tires</animated.h1>
                    <animated.img style={logoOnLoad} className="mt-2 w-12 h-12 inline-" src={logo} alt="" />
                </div>
                {/* <hr className=" items-center border border-black w-full mb-0"/> */}
                <div className="flex flex-col w-full items-center pl-[150px] pr-[100px]">
                    <div className="flex flex-col justify-end w-2/3 max-w-[1200px] p-10  rounded-md font-montserrat mt-15">
                        <animated.h2 style={sectionOnLoadFromLeft} className="text-center font-light text-4xl mb-10">Our Mission</animated.h2>
                        <animated.h2 style={sectionOnLoadFromRight} className="text-2xl font-extralight text-center">At Danny's tires, we are dedicated to providing top-notch automotive repair and maintenance services to keep your vehicle running smoothly. With years of experience in the industry, our skilled technicians are equipped to handle everything from routine oil changes to complex engine repairs.</animated.h2>
                    </div>
                </div>
            </div>
            <div id="testimony" className="mb-1 w-full max-w-[1500px] h-[300px] mt-[50px] flex items-center justify-around rounded-md">
                <Card btnText="Contact Us" title="Where?" text="At Danny's Tires, we provide automotive services at our dedicated service center."/>
                <Card btnText="Gallery" title="How?" text="We assess your vehicle, recommend services, and perform repairs with skilled technicians."/>
                <Card btnText="Reserve" title="When?" text="You can schedule an appointment anytime that works for you, and we’ll notify you when your vehicle is ready."/>
                <Card btnText="Ask for offer" title="How Much?" text="Pricing varies based on the services needed. We provide a clear estimate before any work begins." />
            </div>
            <div  className="flex flex-col justify-center items-center bg-blue-300 w-full">
                <div className="mt-12 mb-12">
                    <h3 className=" italic font-montserrat text-xl">Don't have to listen to us...</h3>
                    <h3 className=" italic text-2xl font-montserrat pl-[40px]">...listen to our satisfied <span className="italic font-semibold">Customers</span></h3>
                </div>
                
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} className="flex flex-row w-full max-w-[1500px] h-[400px] overflow-hidden p-10">
                    {/* <TestimonyCard delay={7500}/> */}
                    <TestimonyCard name="John Wick" text='"Great service every time! The staff at Danny’s Tires are always efficient, and they treat customers with respect. I appreciate how thorough they are when working on my car, and they keep me informed every step of the way. Wouldn’t take my car anywhere else."' isPaused={isPaused} delay={8000}/>
                    <TestimonyCard name="Sharon Baker" text='"If you’re looking for a reliable tire shop, Danny’s Tires is the place to go. I came in for new tires, and they had everything installed and aligned in no time. The prices are competitive, and the team is really friendly. They’ve earned a loyal customer in me!"' isPaused={isPaused} delay={6000}/>
                    <TestimonyCard name="Peter Parker" text='"I had an engine problem that two other shops couldnt figure out, but Dannys Tires diagnosed it quickly and got my car running smoothly again. The technicians are clearly skilled, and the customer service is fantastic. Im so glad I found them!"' isPaused={isPaused} delay={4000}/>
                    <TestimonyCard name="Tom Peterson" text='"Great service every time! The staff at Danny’s Tires are always efficient, and they treat customers with respect. I appreciate how thorough they are when working on my car, and they keep me informed every step of the way. Wouldn’t take my car anywhere else."' isPaused={isPaused} delay={2000}/>
                    <TestimonyCard name="Chad Chaderson" text='"I’ve been going to Danny’s Tires for years, and they never disappoint. The team is honest, and they take the time to explain what repairs are needed without pushing unnecessary services. Their pricing is fair, and the quality of work is outstanding. I trust them with all my vehicles."' isPaused={isPaused} delay={0}/>
                </div>
            </div>

            <div id="contact" className=" flex flex-col items-center w-full bg-white pt-10 pb-14">
                <div className="mb-12">
                    <h3 className="text-4xl font-montserrat font-light ">Get in touch with us</h3>
                </div>
                <div className="flex flex-row w-full max-w-[1500px] h-full items-center">

                    <div className="flex-1 flex-col bg-blue-100 rounded-md h-[350px] justify-center align-middle p-8">
                            <h3 className="font-montserrat text-center text-2xl border-black">Contact</h3>
                        <div className="flex flex-col mt-10">
                            <ul>
                                <li className="font-montserrat mt-3 font-light text-xl" ><FontAwesomeIcon icon={faEnvelope} className="mr-3"/>dannystires@gmail.com</li>
                                <li className="font-montserrat mt-3 font-light text-xl" ><FontAwesomeIcon icon={faPhone} className="mr-3"/>+3675336543</li>
                                <li className="font-montserrat mt-3 font-light text-xl" > <FontAwesomeIcon icon={faHouse} className="mr-3"/>1156, Budapest Zsókavár street 20</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-1 items-center justify-center">
                        <h2 className="text-2xl font-light italic font-montserrat border-b border-black">or text us now</h2>
                    </div>

                    <div className="flex-1 flex-col bg-blue-100 rounded-md h-[350px] justify-center items-center p-8 border-black">
                        <div className="flex flex-col  items-center w-full pb-[30px]">
                            <input className="font-montserrat focus:bg-blue-50 bg-transparent focus:border-bl-800 border-b border-black rounded-t-md p-1 w-4/5 outline-none mb-2" type="text" name="" id="" placeholder="Name"/>
                            <input className="font-montserrat focus:bg-blue-50 bg-transparent focus:border-bl-800 border-b border-black rounded-t-md p-1 w-4/5 outline-none" type="text" placeholder="Email"/>
                        </div>

                        <div className="flex flex-col items-center w-full h-[200px]">
                            <textarea placeholder="Reason of contact.." className="font-montserrat rounded-t-md focus:outline-none focus:bg-blue-50 w-4/5 bg-transparent border border-b-black resize-none h-full p-1 mb-10" name="" id=""></textarea>
                            <CardButton text="Send"/>
                        </div>
                    </div>
                </div>
            </div>
                
            <div id="gallery" className=" flex flex-col items-center w-full bg-blue-300 pt-10 pb-14">
                <div  ref={images} className="w-full max-w-[1500px]">
                    <h2 className="text-center font-montserrat text-4xl font-light">Gallery</h2>   
                    <animated.div style={imagesTurn} className="mt-8">
                        <ul className="flex flex-grid">
                            <ImageBox imgsource="https://www.uniteautomotive.com/image/catalog/blog/the-right-equipment-and-premises-to-start-an-auto-repair-workshop.jpg"/>
                            <ImageBox imgsource="https://media.cnn.com/api/v1/images/stellar/prod/220721175751-woman-mechanic-stock.jpg?c=original"/>
                        </ul>
                        <ul className="flex flex-grid">
                            <ImageBox imgsource="https://www.expondo.co.uk/inspirations/wp-content/uploads/2021/03/how-to-open-car-workshop.jpg"/>
                            <ImageBox imgsource="https://www.familyhandyman.com/wp-content/uploads/2023/11/GettyImages-1410693951.jpg"/>
                        </ul>
                        <ul className="flex flex-grid">
                            <ImageBox imgsource="https://www.eddiesrepairshop.com/custom/eddiesrepairbanner.jpg"/>
                            <ImageBox imgsource="https://www.lendio.com/wp-content/uploads/2020/03/iStock-181064136-scaled.jpg"/>
                        </ul>
                    </animated.div>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center bg-gray-100 w-full h-[80px]">
                <ul className="flex flex-row w-1/5 justify-evenly">
                    <button className="hover:scale-105"><li className="text-3xl"><FontAwesomeIcon icon={faFacebook} className="text-blue-700 mr-3"/></li></button>
                    <button className="hover:scale-105"><li className="text-3xl"><FontAwesomeIcon icon={faInstagram} className="text-blue-700 mr-3"/></li></button>
                    <button className="hover:scale-105"><li className="text-3xl"><FontAwesomeIcon icon={faTiktok} className="text-black mr-3"/></li></button>
                </ul>
            </div>
        </div>
     );
}
 
export default MainPage;