import React, { useState, useRef, useEffect } from 'react';
import { SiGoogletranslate } from "react-icons/si";

const HomePage = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutRef = useRef(null);

  const items = [
    { title: "Chat.", path: "/chat", description: "Start a conversation with our AI assistant", bgColor: "bg-[#FFE5C2]" },
    { title: "FAQ", path: "/faq", description: "Find answers to common questions", bgColor: "bg-[#C2FFD0]" },
    { title: null, path: "https://translate.google.com", description: "Translate", bgColor: "bg-[#C2F0FF]", icon: SiGoogletranslate },
    { title: "About", path: "", description: "Discover additional features", bgColor: "bg-[#E8C8F1]" },
    { title: "More", path: "/more", description: "Discover additional features", bgColor: "bg-[#DACBFC]" },
    { title: "More", path: "/more", description: "Discover additional features", bgColor: "bg-[#EFFFC2]" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAboutClick = () => {
    setIsAboutOpen(true);
  };

  const handleCloseAbout = () => {
    setIsAboutOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#C9ABEF] to-[#7FE7EE] relative">
      <h1 className="text-5xl font-bold font-[dosis] text-white mb-8">
        Fruit.Ai
      </h1>
      <h2 className="text-3xl font-semibold font-[dosis] text-white mb-12">
        "Be healthy!"
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 font-[dosis] z-10">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`${item.bgColor} rounded-lg shadow-2xl p-4 flex flex-col justify-center text-center cursor-pointer min-h-20`} 
            onClick={() => item.title === "About" ? handleAboutClick() : window.location.href = item.path}
          >
            {item.icon && <><item.icon className="text-5xl m-auto" />
              <p className="hidden sm:block text-gray-600">{item.description || ''}</p>
            </>}
            {!item.icon && <>
              <h3 className="text-2xl font-semibold mb-2">{item.title || ''}</h3>
              <p className="hidden sm:block text-gray-600">{item.description || ''}</p>
            </>}
          </div>
        ))}
      </div>

      {/* About Popup */}
      <div className={`fixed left-0 right-0 bottom-0 transform transition-transform duration-500 ease-out ${isAboutOpen ? 'translate-y-0' : 'translate-y-full'} z-20`}>
        {isAboutOpen && (
          <div ref={aboutRef} className="bg-white border rounded-t-3xl shadow-md p-6 w-full md:w-2/3 mx-auto h-[62vh] overflow-y-auto transition-all duration-300 ease-in-out font-[dosis]">
            <button onClick={handleCloseAbout} className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700">
              &times;
            </button>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold mb-4">About Fruit.Ai</h2>
              <p className="text-gray-600 w-96 text-center">Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.</p>
            <button className='bg-black px-12 py-3 rounded-2xl mt-8 text-white'>About</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
