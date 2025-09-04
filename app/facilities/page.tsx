// import Link from "next/link";
import React from "react";

export default function Home() {
    const tabs = {
        color: "white"
    }; 
    return(
        <div>
            <style>
                
            </style>
            <div className="text-center items-center">
                <p className="w-full h-20 flex items-center align-middle justify-center items-center">SELECT HALL</p>
            </div>
            <div className="tabs tabs-box justify-center">
                <input type="radio" id="eureka-tab" className="tab text-red w-1/2 text-xl h-20 hover:text-2xl" aria-label="Eureka Hall" defaultChecked/>
                <label htmlFor="eureka-tab">Test Label</label>
                <div className="tab-content bg-base-100 p-10 ">
                    
                    <div className="w-full h-100 flex align-middle items-center align-middle justify-center relative">
                        <div className="border w-1/2 h-full flex items-center justify-center">
                            EUREKA HALL IMAGE 1
                        </div>
                        <div className="border w-1/2 h-full flex items-center justify-center">
                            EUREKA HALL IMAGE 2
                        </div>
                    </div>
                    <div className="w-full h-100 flex align-middle items-center align-middle justify-center relative">
                        PACKAGE DESCRIPTION - EUREKA
                    </div>
                </div>

                <input type="radio" name="hudan-tab" className="tab w-1/2 text-xl h-20 hover:text-2xl" aria-label="Hudan Hall" />
                <div className="tab-content bg-base-100 p-10 ">
                    <div className="w-full h-100 flex align-middle items-center align-middle justify-center relative">
                        <div className="border w-1/2 h-full flex items-center justify-center">
                            HUDAN HALL IMAGE 1
                        </div>
                        <div className="border w-1/2 h-full flex items-center justify-center">
                            HUDAN HALL IMAGE 2
                        </div>
                    </div>
                    <div className="w-full h-100 flex align-middle items-center align-middle justify-center relative">
                        PACKAGE DESCRIPTION - HUDAN
                    </div>
                </div>
            






            {/* <div className="border w-full h-20 tabs justify-center bg-slate-400">
                <input type="radio" name="my_tabs_1" className="border tab w-1/2 h-full text-2xl hover:bg-cyan-400 hover:text-white tab-active [--tab-bg:cyan]" aria-label="Eureka Hall" defaultChecked/>
                    <div className="tab-content h-10">
                        <div className="">
                            <p>Facilities tab 1 page</p>
                        </div>
                    </div>
                <input type="radio" name="my_tabs_1" className="border tab w-1/2 h-full text-2xl hover:bg-cyan-400 hover:text-white" aria-label="Hudan Hall" />
                    <div className="tab-content h-10">
                        <div className="">
                            <p>Facilities tab 2 page</p>
                        </div>
                    </div>
            </div> */}
            {/* <div className="border flex w-screen h-80 ">
                <div className="border w-1/2 h-full  ">
                    <p>Facilities page</p>
                </div>
                <div className="border w-1/2 h-full text-center text-center items-center center align-middle">
                    <p>Facilities page</p>
                </div>
            </div> */}
            </div>
        </div>
    )
}

export function Test() {
    return (
        <div>Nothing</div>
    )
}
