import React, { useState } from "react";


const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="bg-black w-screen min-h-screen p-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end py-5">
          <button onClick={togglePopup} className="px-6 text-lg font-semibold text-[#cd7f32] font-lora hover:text-blue-600">
            Contact Me
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-5 items-center mb-10">
          <div className="pr-4 pt-12 md:px-12 lg:px-2">
            <img src={`${import.meta.env.BASE_URL}images/Avatar.svg`} alt="avatar" className="w-full h-full rounded-full " />
          </div>

          <div className="p-5">
            <h1 className="text-4xl py-4 font-royale">
              <span className="text-white">Hi,</span>
              <br />
              <span className="text-[#cd7f32] font-dancing">I'm Sarah</span>
            </h1>

            <div>
              <p className="text-white font-garamond text-lg md:text-2xl leading-relaxed">
                A Software Developer based in Ghana. I have a serious <br /> passion
                for solving problems, developing, and creating <br /> software
                applications.
              </p>

              <p className="text-white font-garamond text-lg md:text-2xl leading-relaxed mt-2">
                Well-organized person, problem solver, independent <br /> employee
                with high attention to detail.
              </p>
              <p className="text-white font-garamond text-lg md:text-2xl leading-relaxed mt-2">
                Interested in the entire development spectrum and working <br /> on
                ambitious projects with positive people.
              </p>
            </div> 
          </div>
        </div> 

        <div className="hidden lg:block">
          <h2 className="text-[#cd7f32] font-lora font-bold text-2xl text-center">
            Technologies I use
          </h2>

          <div className="mt-10">
            <div className="flex justify-center gap-10 items-center">
              <div className="md:w-24 h-24">
                <img src={`${import.meta.env.BASE_URL}images/HTML.png`} alt="HTML" />
              </div>

              <div>
                <img src={`${import.meta.env.BASE_URL}images/css-logo.png`} alt="CSS" className="md:w-24 h-24" />
              </div>

              <div>
                <img src={`${import.meta.env.BASE_URL}images/Javascript logo.webp`} alt="Javascript" className="md:w-24 h-24" />
              </div>

              <div>
                <img src={`${import.meta.env.BASE_URL}images/react.png`} alt="React" className="md:w-24 h-24" />
              </div>

              <div>
                <img src={`${import.meta.env.BASE_URL}images/Tailwind CSS.png`} alt="Tailwind CSS" className="md:w-24 h-24" />
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white font-lora px-4 md:px-8 pb-8 rounded-lg max-w-wd mx-auto sm:px-6 relative shadow-lg border border-[#cd7f32] w-80 h-100">
              <h2 className="text-2xl text-center font-semi-bold py-8 text-[#cd7f32]">Send Me a Message</h2>

              <button onClick={togglePopup} className="absolute -top-8 -right-8 w-20 h-20 text-red-500 font-bold text-xl hover:text-red-700">&times;</button>

              <form className="space-y-4">
                <label htmlFor="fullname" className="block text-[#cd7f32]">Full Name</label>
                <input type="text" name="fullname" id="fullname" required placeholder="Full Name" className="w-full p-3 rounded-md border border-[#cd7f32]" />

                <label htmlFor="email" className="block text-[#cd7f32]">Email</label>
                <input type="text" name="email" id="email" required placeholder="Email" className="w-full p-3 rounded-md border border-[#cd7f32]" />

                <label htmlFor="message" className="block text-[#cd7f32]">Message</label>
                <textarea placeholder="Message" name="message" id="message" className="w-full border border-[#cd7f32] p-3 rounded-md"></textarea>

                <button type="submit" className="bg-[#cd7f32] text-white w-full py-2 rounded hover:bg-[#b66d2b]">Send Message</button>
              </form>
            </div>
          </div>
        )}

        <div className="py-6 md:px-12 lg:mt-8">
          <nav className="flex justify-end items-center">
            <ul className="flex gap-2 md:gap-10">
              <li>
                <a href="https://github.com/SarahDomson" target="_blank" rel="noreferrer">
                  <img src={`${import.meta.env.BASE_URL}images/github.png`} alt="GitHub" className="w-10 h-10 md:w-16 md:h-16 transform transition-transform duration-300 hover:translate-x-2 hover:translate-y-2" />
                </a>
              </li>
              <li>
                <a href="https://x.com/Ama_Domson?t=uxkbnLiauun68q9yfsxVRw&s=09" target="_blank" rel="noreferrer">
                  <img src={`${import.meta.env.BASE_URL}images/X logo.png`} alt="X" className="w-10 h-10 md:w-16 md:h-16 transform transition-transform duration-300 hover:translate-x-2 hover:translate-y-2" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sarah-domson-5749661a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                  <img src={`${import.meta.env.BASE_URL}images/linkedin.png`} alt="LinkedIn" className="w-10 h-10 md:w-16 md:h-16 transform transition-transform duration-300 hover:translate-x-2 hover:translate-y-2" />
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/users/20094295/sarah-domson" target="_blank" rel="noreferrer">
                  <img src={`${import.meta.env.BASE_URL}images/stackoverflow.png`} alt="Stack Overflow" className="w-10 h-10 md:w-16 md:h-16 transform transition-transform duration-300 hover:translate-x-2 hover:translate-y-2" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
