"use client"
import Image from "next/image";
import cardBar from "../Images/main bar.png";
import { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Card = () => {
    const [isCardNumberInputFieldEmpty, setIsCardNumberInputFieldEmpty ]=useState(true);
    const [currentCardInputNumber, setCurrentCardInputNumber]=useState(" ");

    const [invalidCardNumberErrorMessage, setInvalidCardNumberErrorMessage]=useState("")
    const [invalidCvcErrorMessage,setInvalidCvcErrorMessage ] = useState(" ")
    const [checkCvcNumber, setCheckCvcNumber]=useState(" ");
    const [name, setName]=useState(" ");
    
    
    
    const getCurrentCardInputNumber =(e)=>{
        setCurrentCardInputNumber(e.target.value);
        if(currentCardInputNumber != " "){
            setIsCardNumberInputFieldEmpty(false)
        }

        if(currentCardInputNumber.length>16){
            setInvalidCardNumberErrorMessage("Please put valid credit card  number");
            setTimeout(()=>{
                setInvalidCardNumberErrorMessage(" ")
            }, 5000)
        }
    }

    const cvcNumber = (e)=>{
        setCheckCvcNumber(e.target.value);
        if(checkCvcNumber.length>3){
            setInvalidCvcErrorMessage("Please put valid CVC number");
            
        }
        setTimeout(()=>{
            setInvalidCvcErrorMessage(" ")
        },5000)
    }
    const toVelifyAllInputsBeforeSending=()=>{
        cvcNumber();
        getCurrentCardInputNumber()
    }
    return ( 
        <section >
            <main className=" flex justify-center  w-full h-auto  md:h-fill lg:h-fill lg:bg-cover xl:bg-cover ">
            {/* credit grid container */}
            <div className=" flex flex-col-reverse m-3 h-auto  md:w-5/6 md:h-5/6  md:grid grid-cols-2 items-center  md:mt-20  md:w-3/6 sm:h-5/6   lg:w-3/6 lg:h-5/6  xl:w-3/6   ">
                {/* credit card left container */}
                <div className=" w-full h-full   p-6 bg-leftCardbg text-white rounded-tl-lg rounded-bl-lg sm:h-full md:w-auto  lg:h-full">
                    {/* left container informations */}
                    <div>
                        {/* main card container */}
                        <div className=" rounded-xl h-48 p-3 bg-gradient-to-bl via-white-900 from-cardFirstColor to-cardSecond">
                            {/* card info container */}
                            <div className="p-2 h-20 relative ">
                                <p>Credit Card</p>
                                <Image src={cardBar} className="w-10 h-18 mt-5"/>
                                <p className=" text-xl mt-3"> {isCardNumberInputFieldEmpty?"1234 5678 9012 3456": currentCardInputNumber} </p>
                                {/* expiration container */}
                                <div className="flex items-center absolute right-5">
                                <p className=" text-special text-textColor"> VALID <br/> THRU </p>
                                <ArrowRightIcon />
                                <p  className="text-xl">01/80</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* form */}
                    <form action="" className="flex flex-col gap-y-2 text-textColor mt-10">
                        <label for="name">Name of credit card owner</label>
                        <input type="text" id="name" onChange={(e)=>setName(e.target.value)} value={name} className="bg-inputbg p-2 rounded-lg border border-inputbg  focus:outline-none border focus:border-inputFocusBg"/>
                        <label for="number">Card number</label>
                        <input type="number" id="number" onChange={getCurrentCardInputNumber} value={currentCardInputNumber} max={1-16} className="bg-inputbg p-2 rounded-lg border border-inputbg  focus:outline-none border focus:border-inputFocusBg "/>
                        <p className="text-red-500">{invalidCardNumberErrorMessage}</p>
                        <label for="expiration">Expiration date</label>
                        <input type="number" id="expiration" className="bg-inputbg p-2 rounded-lg border border-inputbg  focus:outline-none border focus:border-inputFocusBg "/>
                        <label for="cvc">CVC</label>
                        <input type="number" id="cvc" onChange={cvcNumber} value={checkCvcNumber} className="bg-inputbg p-2 rounded-lg border border-inputbg  focus:outline-none border focus:border-inputFocusBg  "  />
                        <p className="text-red-500">{invalidCvcErrorMessage}</p>
                    {/* Form btn container */}
                    <div className="flex justify-center pt-2 ">
                        <button className="bg-btn rounded-lg w-32 p-2 text-black" type="submit" onClick={toVelifyAllInputsBeforeSending}>Pay Now</button>
                    </div>
                    </form>
                </div>
                {/* credit card right container */}
                <div className=" hidden w-full h-full bg-cardRightBgImage bg-cover  rounded-tr-lg rounded-br-lg md:block">
                    {/* text container */}
                    <div className=" h-full flex justify-center flex-col bg-gradient-to-br  from-leftCardbg to-transparent rounded-tr-lg relative">
                        <h4 className="text-center text-white text-xl">Title</h4>
                        <p className=" ml-10 tracking-1 text-textColor">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniam</p>
                        <h2 className="text-white text-5xl absolute right-5 bottom-5">CF</h2>
                    </div>
                
                    
                </div>
                
            </div>
            </main>
        </section>
     );
}
 
export default Card;