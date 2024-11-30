"use client";
import React from 'react';
import Navbar from './Navbar';


const Hero = () => {
    return (
        <div id="hero" className="min-h-screen bg-black">
            <Navbar />
            <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] flex items-center justify-between mt-25">
                {/* Profile Picture */}
                <div className="w-95 h-95 lg:w-96 lg:h-96 ml-40 pl-30 rounded-full overflow-hidden border-4 border-black 
                style={{backgroundSize:='35%'}}">
                    <img 
                        src="/profile.PNG" 
                        alt="Hero" 
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Text Section */}
                <div className="ml-10 flex-col flex items-center pl-33 text-white text-[50px] sm:text-[80px] font-bold leading-tight">
                    <div>
                        <p data-aos="zoom-in-up">I&apos;M</p>
                        <p data-aos="zoom-in-up">Rizwana</p>
                        <p data-aos="zoom-in-up">Shiree</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
