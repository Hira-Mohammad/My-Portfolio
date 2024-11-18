"use client";
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
            <h2 className='text-4xl md:text-5xl text-center' data-aos="zoom-in-up">Technological Experties</h2>
            <p className='text-gray-500 font-size-50 pt-2'> Hello! <br />
                &quot;welcome to My Web development Portfolio &quot;<br />
                I am an enthusiastic web developer with a strong foundation in HTML, CSS, JavaScript, and TypeScript, as well as experience with frameworks like Next.js and exploring more through projects. I focus on crafting web experiences that are intuitive and enjoyable, with attention to both aesthetics and functionality.</p>
         </div>
         <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">TypeScript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>

                </div>

                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>

                </div>


            </div>
         </div>
        </div>
    </div>
  )
}

export default Skills
