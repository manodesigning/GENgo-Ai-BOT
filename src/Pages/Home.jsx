import React, { useState } from "react";
import ChatBox from "../Components/ChatBox/ChatBox";
import NavBar from "../Components/Nav/NavBar";
import Spline from "@splinetool/react-spline";
const Home = () => {
  const [message, setMessage] = useState(""); // State to hold the message for the chat box

  // Function to send message to ChatBox
  const sendMessage = (msg) => {
    setMessage(msg); // Update the message state with the clicked button's label
  };

  return (
    <div className="min-h-screen flex flex-col items-center relative">
      {/* Fullscreen Spline 3D Scene */}
      <div className="absolute top-0 left-0 w-full h-full">
      <Spline scene="https://prod.spline.design/zecFQJtHeLN8WCIH/scene.splinecode" />
      </div>
      {/* Content Container */}
      <div className="bg-white bg-opacity-10 relative z-10 w-full max-w-screen-xl mt-20 p-6 rounded-lg shadow-md">
        <NavBar />
        {/* Heading of the app */}
        <h3 className="text-center text-3xl font-extralight text-white mb-6">
          Start writing with <span className="font-bold">GENgo AI BOT</span>
        </h3>
        {/* ChatBox Input */}
        <ChatBox message={message} /> {/* Pass the message to ChatBox */}
      </div>
    </div>
  );
};

export default Home;
