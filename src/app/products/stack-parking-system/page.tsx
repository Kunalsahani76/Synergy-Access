'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Phone, Mail, MapPin } from "lucide-react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

const heroImg = '/access-parking/park-access-2500.svg';
const engineeringImg = '/access-parking/high-performance-engineering.png';
const generalPartsImg = '/access-parking/general-parts.svg';
const specImg = '/access-parking/specification.svg';
const ctaImg = '/access-parking/maximize-your-parking-space-today.svg';

const orange = "#f15a24";

const darkGradient = "linear-gradient(180deg, #372B1F 0%, #030303 100%)";



export default function ParkAccess2500() {
    const router = useRouter();
    return (
        <div className="w-full bg-white font-sans text-gray-900 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] md:h-[800px] bg-[#2d3134] flex items-center overflow-hidden">
                <Image
                    src={heroImg}
                    alt="Park-Access 2500 Hero"
                    fill
                    priority
                    className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-black/40 md:bg-black/20"></div>

                <div className="container mx-auto px-2 relative z-10 flex flex-col items-end">
                    <div className="max-w-xl md:max-w-[2xl] text-right md:text-left md:ml-auto">
                        <div className="md:pl-10">
                            <h1 className="text-4xl md:text-[55px] font-bold mb-2 text-white">
                                Park-Access <span className="text-[#f15a24]">2500</span>
                            </h1>
                            <h2 className="text-xl md:text-3xl font-semibold mb-8 text-white">
                                Heavy Duty Four Post Parking Lift
                            </h2>

                            {/* Slanted Banner */}
                            <div className="relative mb-8 flex justify-end md:justify-start">
                                <div className="bg-[#f15a24] text-white py-3 px-8 md:px-12 relative skew-x-[-12deg] shadow-xl">
                                    <span className="text-lg md:text-[20px] font-bold uppercase tracking-tight skew-x-[12deg] inline-block">
                                        Design For Parking More Space
                                    </span>
                                </div>
                            </div>

                            {/* Description with Vertical Bar */}
                            <div className="flex items-center justify-end md:justify-start gap-6 mb-10">
                                <div className="h-24 w-2 bg-[#f15a24] hidden md:block"></div>
                                <p className="text-base md:text-[18px] text-gray-100 leading-relaxed font-medium max-w-lg">
                                    The ultimate heavy-duty four-post parking lift. Engineered for maximum safety, durability, and space efficiency in commercial and residential settings.
                                </p>
                                <div className="h-24 w-2 bg-[#f15a24] md:hidden"></div>
                            </div>

                            <div className="flex justify-end md:justify-start">
                                <button onClick={() => router.push("/contact")} className="bg-[#f15a24] hover:bg-[#d44d1d] text-white font-bold py-4 px-10 rounded shadow-lg transition-all active:scale-95 uppercase tracking-wide">
                                    Request Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* High-Performance Engineering Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <Image
                                src={engineeringImg}
                                alt="High-Performance Engineering"
                                width={800}
                                height={500}
                                className="w-full h-auto drop-shadow-2xl rounded-lg"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#1a202c] mb-4">High-Performance Engineering</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    <span className="font-bold text-gray-800">Park-Access 2500</span> is a heavy-duty four-post parking lift designed to maximize parking efficiency in residential and commercial spaces. It features extra-wide runways, strong structural design, and advanced safety mechanisms to ensure reliable and secure vehicle storage.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: "/access-parking/3600kg-lifting-capacity.svg",
                                        title: "3600kg Lifting Capacity",
                                        desc: "Robust structural steel design capable of handling heavy SUVs and light commercial vehicles with ease."
                                    },
                                    {
                                        icon: "/access-parking/reinforced-wide-runways.svg",
                                        title: "Reinforced Wide Runways",
                                        desc: "Specially designed wide runways accommodate various wheelbases and provide maximum parking stability."
                                    },
                                    {
                                        icon: "/access-parking/hydraulic-precision.svg",
                                        title: "Hydraulic Precision",
                                        desc: "Commercial-grade hydraulic cylinders ensure smooth, quiet, and reliable lifting cycles every time."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all">
                                        <div className="mt-1 p-2">
                                            <Image
                                                src={item.icon}
                                                // src="/access-parking/Icon.svg" 
                                                width={50} height={50} alt="Icon" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* General Parts & Safety Devices Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-8">
                        <div className="bg-[#cdd3d9] py-3 px-6 border-l-8 border-[#f15a24]">
                            <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">General Parts</h3>
                        </div>
                        <div className="bg-[#cdd3d9] py-3 px-6 border-l-8 border-[#f15a24] md:border-l-0 md:ml-4">
                            <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Saftey Devices</h3>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-full lg:w-1/3 bg-[#fff9f7] p-8 rounded-2xl border border-[#feece5]">
                            <ul className="space-y-4">
                                {[
                                    "Limit switch",
                                    "Dynamic anti-fall lock",
                                    "Emergency stop button",
                                    "Buzzer",
                                    "Pressure relief valve",
                                    "Self-restore key switch",
                                    "24v electric control",
                                    "Overload protection"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Image

                                            src="/access-parking/Icon.svg"
                                            width={24} height={24} alt="Icon" />
                                        <span className="text-gray-800 font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-2/3 flex justify-center">
                            <Image
                                src={generalPartsImg}
                                alt="General Parts"
                                width={800}
                                height={500}
                                className="w-full max-w-2xl h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Specification & Dimensions Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-8">
                        <div className="bg-[#cdd3d9] py-3 px-6 border-l-8 border-[#f15a24]">
                            <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Specification</h3>
                        </div>
                        <div className="bg-[#cdd3d9] py-3 px-6 border-l-8 border-[#f15a24] md:border-l-0 md:ml-4">
                            <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Dimensions</h3>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start gap-12 bg-white rounded-xl">
                        <div className="w-full lg:w-1/2 p-4">
                            <Image
                                src={specImg}
                                alt="Specification"
                                width={700}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 border rounded-xl overflow-hidden shadow-md">
                            <div className="grid grid-cols-2 bg-[#2d3748] text-white">
                                <div className="py-4 px-6 font-bold text-xl uppercase border-r border-gray-700">Model</div>
                                <div className="py-4 px-6 font-bold text-xl uppercase bg-[#edf2f7] text-[#2d3748]">Park-Acess-2500</div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {[
                                    { label: "Lifting capacity", val: "3600kg" },
                                    { label: "System length", val: "4566mm" },
                                    { label: "System width", val: "2560mm" },
                                    { label: "Platform width", val: "2166mm" },
                                    { label: "Lifting height", val: "2100mm | 1800mm | 1600mm" },
                                    { label: "Drive mode", val: "Hydraulic cylinder + cable" },
                                    { label: "Pump power", val: "2.2kw" }
                                ].map((row, i) => (
                                    <div key={i} className="grid grid-cols-2">
                                        <div className="py-4 px-6 font-semibold text-gray-700 flex items-center gap-3">
                                            <Image

                                                src="/access-parking/Icon.svg"
                                                width={24} height={24} alt="Icon" />
                                            {row.label}
                                        </div>
                                        <div className="py-4 px-6 text-gray-800 font-bold border-l flex items-center gap-3 bg-gray-50/50">
                                            <Image

                                                src="/access-parking/Icon.svg"
                                                width={24} height={24} alt="Icon" />
                                            {row.val}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Uncompromising Safety Section */}
            <section className="py-20 bg-[#f7f9fc]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Uncompromising Safety</h2>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Safety is the core of Synergy Access engineering. Every unit is tested beyond standard operational limits.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Dynamic Anti-fall Lock",
                                    desc: "Mechanical locking system that automatically prevents platform descent in case of cable failure.",
                                    icon: "/access-parking/shield.svg"
                                },
                                {
                                    title: "Emergency Stop",
                                    desc: "Instant cut-off emergency button located on the control panel for total operator control.",
                                    icon: "/access-parking/emergency.svg"
                                }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: "#F967060D", border: "1px solid #F9670633"
                                }} className=" p-8 rounded-[12px] hover:shadow-2xl transition-all border  flex flex-row gap-4">
                                    <div className="text-4xl"><Image src={item.icon} alt="" width={50} height={50} /></div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Call to Action */}
            <section style={{ background: darkGradient, borderTopRightRadius: "100px", borderTopLeftRadius: "100px", border: "1px solid #F9670680", }} className="relative  w-full min-h-[500px] flex items-center justify-center py-20">


                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
                        Maximize Your Parking Space Today
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
                        Connect with our engineering team for a customized parking solution and free site assessment.
                    </p>
                    <button onClick={() => router.push("/contact")} className="bg-[#f15a24] hover:bg-[#d44d1d] text-white font-bold py-4 px-12 rounded-full text-xl transition-transform hover:scale-105 shadow-2xl">
                        Request a Consultation
                    </button>
                </div>
            </section>


        </div>
    );
}
