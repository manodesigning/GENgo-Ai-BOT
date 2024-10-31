import React, { useState } from "react";
import ChatBox from "../Components/ChatBox/ChatBox";
import NavBar from "../Components/Nav/NavBar";
import ButtonGrid from "../Components/ButtonGrid";
import Aibgvideo from "../assets/Video/Aibgvideo.mp4"

const Home = () => {
  const [message, setMessage] = useState(""); // State to hold the message for the chat box

  // Function to send message to ChatBox
  const sendMessage = (msg) => {
    setMessage(msg); // Update the message state with the clicked button's label
  };

  return (
    <div className="min-h-screen flex flex-col items-center relative">
      {/* Fullscreen Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={Aibgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 w-full max-w-screen-xl mt-20 p-6 bg-white rounded-lg shadow-md">
        
      <NavBar />
        {/* Heading of the app*/}
        <h3 className="text-center text-3xl font-extralight text-gray-700 mb-6">
          Start writing with <h1 className="font-bold">GENgo AI BOT</h1>
        </h3>
        {/* <div className="flex justify-center items-center"> */}
        <div>
  
</div>
        {/* ChatBox Input */}
        <ChatBox message={message} /> {/* Pass the message to ChatBox */}
      </div>
    </div>
  );
};

export default Home;
