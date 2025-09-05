// import Link from "next/link";
import React from "react";

export default function Home() {
    // const tabs = {
    //     color: "white"
    // }; 
    return(
        <div>

            <div className="text-center items-center">
                <p className="w-full h-20 flex items-center align-middle justify-center items-center">SELECT HALL</p>
            </div>
            <div className="tabs tabs-box justify-center">
                <input type="radio" name="hall-tab" className="tab w-1/2 text-xl h-20 hover:text-cyan-400 transition duration-200" aria-label="Eureka Hall" defaultChecked/>
                <div className="tab-content bg-base-100 p-10 ">
                    <div className="w-full h-100 flex align-middle items-center align-middle justify-center relative">
                        <div className="border w-1/2 h-full flex items-center justify-center">
                            EUREKA HALL IMAGE 1
                        </div>
                        <div className="border w-1/2 h-full flex items-center justify-center">
                            EUREKA HALL IMAGE 2
                        </div>
                    </div>
                    <div className="w-full h-100 flex items-center justify-center">
                        PACKAGE DESCRIPTION - EUREKA
                    </div>
                </div>

                <input type="radio" name="hall-tab" className="tab w-1/2 text-xl h-20 hover:text-cyan-400 transition duration-200" aria-label="Hudan Hall" />
                <div className="tab-content bg-base-100 p-10 ">
                    <div className="w-full h-100 flex align-middle items-center justify-center">
                        <div className="border w-1/2 h-full flex items-center justify-center">
                            HUDAN HALL IMAGE 1
                        </div>
                        <div className="border w-1/2 h-full flex items-center justify-center">
                            HUDAN HALL IMAGE 2
                        </div>
                    </div>
                    <div className="w-full h-100 flex items-center justify-center">
                        PACKAGE DESCRIPTION - HUDAN
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Test() {
    return (
        <div>Nothing</div>
    )
}
