import { useEffect, useRef, useState } from "react";

interface TestimonyCardProps{
    delay:number,
    isPaused:boolean,
    name:string,
    text:string
}

const TestimonyCard:React.FC<TestimonyCardProps> = ({name,text,delay,isPaused}) => {

    const card = useRef<HTMLDivElement>(null)
    const [pos,setPos] = useState<number>(-1500)
    const speedRef = useRef<number>(1)

    // const [rect,setRect] = useState()

    const slidingAnimation = function(){
        setTimeout(()=>{
            let currentPos = -1500
            setPos(currentPos)
            const animation = ()=>{
                if(isPaused){
                    currentPos+=0
                }
                currentPos +=speedRef.current
                setPos(currentPos)
                if(currentPos < window.innerWidth-1000){
                    requestAnimationFrame(animation)
                }
                else{
                    setPos(-1500)
                    currentPos = -1500
                    requestAnimationFrame(animation)
                }
            }
            requestAnimationFrame(animation)

        },delay)
    }

    useEffect(()=>{
        slidingAnimation()
    },[])

    useEffect(()=>{
        if(isPaused){
            speedRef.current = 0
        }
        else{
            speedRef.current = 1
        }
    },[isPaused])


    return ( 
        <div ref={card} 
            className="hover:bg-slate-200 border border-black shadow-lg overflow-hidden w-[500px] h-[220px] rounded-xl flex flex-col items-start pt-5 pl-6 pr-6 bg-white z-0" 
            style={{transform:`translateX(${pos}px)`}}>
            <h3 className="font-montserrat text-sm font-medium">{name}</h3>
            <p className="text-xs font-montserrat font-light mt-[10px] italic">{text}</p>
        </div>
     );
}
 
export default TestimonyCard;