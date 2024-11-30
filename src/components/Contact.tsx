import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div className="space-y-8">
          <h2 className="text-5xl">Get in Touch</h2>
          <p className="text-gray-600 text-[18px] pt-2">
            Feel free to drop a message or feedback.
          </p>

          {/* Email */}
          <div className="flex gap-3 items-center">
            <a
              href="mailto:arih.hira123@gmail.com"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <AiOutlineMail size={30} />
            </a>
          </div>

          {/* GitHub */}
          <div className="flex gap-3 items-center">
            <a
              href="https://github.com/Hira-Mohammad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-gray-900"
            >
              <AiFillGithub size={30} />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex gap-3 items-center">
            <a
              href="https://www.linkedin.com/in/rizwana-shireen-91b5362b7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-gray-900"
            >
              <IoLogoLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="space-y-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-accent"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-accent"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="msg">Message</label>
            <textarea
              className="bg-transparent border border-accent"
              id="msg"
              rows={9}
            ></textarea>
          </div>
          <button className="bg-green-600 p-2 px-6">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
