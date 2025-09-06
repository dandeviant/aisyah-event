// import Head from "next/head";
// import Link from "next/link";
'use client'
import React from "react";

export function Description() {return (
		<div>
			<p className="text-3xl"><b>Sub title or motto, whatever</b></p>
			<br></br>
			<p className="">(Subtext) Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua. (include YouTube embed)</p>
		</div>
);}

export function Video() { return(
		<iframe src="https://www.youtube.com/embed/Hif2fdPpvcc?si=SKtHp3eptUlG0roB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
);}

export default function Home() {
  return (
    // MASTER DIV
    <div className="bg-white text-black">
		<style jsx>{`
			.vl {border-left: 6px solid white; height: 40%;}
			.vl2 {border-left: 6px solid white; height: 100%;}
			iframe {width:600px; height:100%;}

			@media only screen and (max-width: 500px) {}
				iframe {width:700px; height:100%;}
			`}
		</style>
		<div className="bg-black h-100vh sm:h-screen">
			<div className="flex items-center justify-center align-middle text-white h-3/10">
				<p className="text-6xl font-bold transition duration-150 hover:text-cyan-400">
					<b>Main Title</b>
				</p>
			</div>
			<div className="lg:flex items-center justify-center align-middle text-white ">  
				<div className="h-40 sm:h-100 flex items-center justify-end sm:justify-center">
					<div className="h-full lg:w-4/5 px-10 sm:pr-0 sm:pl flex lg:text-right text-center justify-center items-center">
						<Description></Description>
					</div>
				</div>
				{/* VERT LINE */}
				{/* <div className="flex w-1/20 h-2/5 items-center justify-center">
				<div className="vl2"></div>
				</div>  */}
				<div className="relative sm:flex lg:w-1/2 w-screen h-100 sm:text-left sm:items-left sm:pl-10 px-1/2">
					<div className="w-full h-[50vw] sm:h-full sm:w-[30vw] flex items-center justify-center">
						<iframe src="https://www.youtube.com/embed/Hif2fdPpvcc?si=SKtHp3eptUlG0roB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
					</div>
				</div>
			</div>
		</div>
        {/* IMAGE CAROUSEL */}
		<div className="relative sm:flex">
			<div id="item1" className="group w-full relative md:flex ">
				<div className="h-full w-full absolute ">
					<div className="h-full text-black text-6xl flex items-center justify-center ">
						<b>Text on image</b>
					</div>
				</div>
				<img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" className="w-full"/>    
			</div>
		</div>
		<div className="w-full h-120 bg-blue-900 flex justify-end">
			<div className="w-2/3 h-full text-5xl hover:text-6xl duration-300 block inset-0 z-10 flex items-center text-white">
				<p className="px-10 font-semibold">Eureka Hall</p>
				<div className="vl center"></div>
				<a className="px-10 text-[24px]">Hogwarts, Melaka</a>
			</div>
		</div>
		<div className="w-full h-120 bg-cyan-400 flex justify-end">
			<div className="w-2/3 h-full text-5xl hover:text-6xl duration-300 block inset-0 z-10 flex items-center text-white">
				<p className="px-10 font-semibold">Hudan Hall</p>
				<div className="vl center"></div>
				<p className="px-10 text-[24px]">Narnia, JB</p>
			</div>
		</div>
		<div className="overflow-hidden font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<title>Eureka Event Hall</title>
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<p className="text-black text-2xl">Base contents</p>
			</main >
		</div>
    </div>
    
  );
}