import React from 'react'
import { useState } from "react"; 

const FlipCard = ({ flag, frontData, backData }) => {
    const [showBack,setShowBack]=useState(false);

    const handleClick=()=>{
        setShowBack(!showBack);
    }
    return (
        <div
        className=" h-full flex justify-center items-center gap-x-16 mb-6"
        onClick={handleClick}
        >
            <div
                className="w-full h-[480px]  flex flex-col bg-transparent cursor-pointer group perspective"
            >
                <div
                    className={`relative preserve-3d ${showBack && "rotate-y-180"} w-full h-full duration-1000`}
                >
                    <div className="absolute backface-hidden rotate-y-0   w-full h-full px-4 md:px-16 flex items-center flex-col justify-center py-10 md:py-24 border rounded-lg bg-white border-gray-300 text-4xl text-gray-800 font-semibold  cursor-pointer mb-10">
                       
                            <img className='w-18 h-18 mb-6 rounded-md border' src={`${flag}`} alt="_flag" />
                            <p className="content-box-text  text-center">

                                {frontData}</p>
                      
                    </div>
                    <div
                        className="absolute rotate-y-180 backface-hidden w-full h-full overflow-hidden px-4 md:px-16 flex items-center flex-col justify-center py-10 md:py-24 border rounded-lg bg-white border-gray-300 text-4xl text-gray-800 font-semibold  cursor-pointer mb-10"
                    >
                          <div >
                           
                            <p className="content-box-text  text-center">

                            {backData}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard;