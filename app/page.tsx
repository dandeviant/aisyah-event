// import Head from "next/head";
// import Link from "next/link";
'use client'
import React from "react";

export default function Home() {
  return (
    // MASTER DIV
    <div className="bg-white text-black">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {/* iframe = Youtube embed */}
        <style jsx>{`
              .vl {border-left: 6px solid white; height: 40%;}
              .vl2 {border-left: 6px solid white; height: 100%;}
              iframe {width:600px; height:100%;}
              `}
        </style>
        <div className="bg-black h-230">
          <div className="flex items-center justify-center align-middle text-white h-3/10">
          <p className="text-6xl font-bold transition duration-150 hover:text-cyan-400"><b>Main Title</b></p>
          </div>
          <div className="flex items-center justify-center align-middle text-white h-7/10 pb-60">  
            {/* <div className="w-5/10 border items-right justify-end"> */}
            <div className="flex w-1/2 h-100 justify-end items-center pr-10">
                <div className="w-3/4 h-1/2 text-right items-center">
                  <p className="text-3xl"><b>Sub title or motto, whatever</b></p>
                  <p className="">(Subtext) Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. (include YouTube embed)</p>
                </div>
            </div>
            {/* <div className="flex w-1/20 h-2/5 items-center justify-center">
              <div className="vl2"></div>
            </div>  */}
            <div className="flex-1 w-3/5 h-100 text-left lg:flex items-left pl-10">
              <iframe src="https://www.youtube.com/embed/Lm9Qx1A3U6s?si=y3S55znVpUTUr_j_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        {/* IMAGE CAROUSEL */}
        <div>
          {/* <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full sticky">
              <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                className="w-full" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full" />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1 #tops" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
            <a href="#item4" className="btn btn-xs">4</a>
          </div> */}
          <div id="item1" className="group w-full relative">
                <div className="border h-full w-full absolute text-black flex ite1  ms-center justify-center">
                  <p className="text-6xl"><b>Text on image</b></p>
                </div>
                <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" className="w-full"/>    
          </div>
        </div>
        
        <div className="w-full h-120 bg-blue-900 flex justify-end">
          <div className="center w-2/3 h-full text-5xl hover:text-6xl duration-300 block inset-0 z-10 flex items-center text-white">
          <p className="px-10 font-semibold">Eureka Hall</p>
            <div className="vl center"></div>
            <a className="px-10 text-[24px]">Hogwarts, Melaka</a>
          </div>
        </div>
        <div className="w-full h-120 bg-cyan-400 flex justify-end">
          {/* <div className="absolute inset-0 bg-cover bg-center z-0"></div> */}
          <div className="w-2/3 h-full text-5xl hover:text-6xl duration-300 block inset-0 z-10 flex items-center text-white">
            <p className="px-10 font-semibold">Hudan Hall</p>
            <div className="vl center"></div>
            <p className="px-10 text-[24px]">Narnia, JB</p>
          </div>
        </div>
        <div className="overflow-hidden font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <title>Front Page</title>
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <p className="text-black text-2xl">Base contents</p>
          </main >
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          </footer>
        </div>
        <script lang="ts">
        </script>
    </div>
  );
}