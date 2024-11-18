import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";




const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                   <h2 className='text-5xl'>Get in Touch</h2>
                <p className='text-gray-600 text-[18px] pt-2'>
                   Feel free to drop a message or feedback.
                </p> 
            <div className='flex gap-3 items-center' >
                   <p> <AiOutlineMail size={30} />
                       <a href="mailto:arih.hira123@gmail.com"
                          aria-label="Email">
                       </a> 
                  </p>
            </div>

            <div className='flex gap-3 items-center'>
                   <p> <AiFillGithub size={30} />
                       <a href="https://github.com/Hira-Mohammad"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub">
                       </a>
                   </p>
            </div>

            <div className='flex gap-3 items-center'>
                   <p> <IoLogoLinkedin size={30} />
                       <a href="https://www.linkedin.com/in/rizwana-shireen-91b5362b7/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn">
                       </a>
                    </p>
            </div>
        </div>  

            <div className='space-y-8'>
                 <div className='flex flex-col gap-1'>
                      <label htmlFor="name">Name</label>
                      <input type="text"
                      className='h-[40px] bg-transparent border border-accent'
                      id='name'/>
                 </div>
                 <div className='flex flex-col gap-1'>
                      <label htmlFor="email">Email</label>
                      <input type="text"
                      className='h-[40px] bg-transparent border border-accent'
                      id='email'/>
                 </div>
                 <div className='flex flex-col gap-1'>
                      <label htmlFor="msg">Message</label>
                      <textarea
                         className='bg-transparent border border-accent'
                         id='msg'  rows={9}>
                      </textarea>
                </div>      
                <button className='bg-green-600  p-2 px-6'>Send</button>
            </div>
         </div>
    </div>
  )
}

export default Contact












// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// export default function Contact() {
//   return (
//     <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
//       {/* GitHub Icon */}
//       <a
//         href="https://github.com/your-github-username"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="GitHub"
//       >
//         <FaGithub size={30} style={{ color: '#333' }} />
//       </a>

//       {/* LinkedIn Icon */}
//       <a
//         href="https://www.linkedin.com/in/your-linkedin-username/"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="LinkedIn"
//       >
//         <FaLinkedin size={30} style={{ color: '#0e76a8' }} />
//       </a>

//       {/* Email Icon */}
//       <a
//         href="mailto:your-email@example.com"
//         aria-label="Email"
//       >
//         <FaEnvelope size={30} style={{ color: '#D44638' }} />
//       </a>
//     </div>
//   );
// }
