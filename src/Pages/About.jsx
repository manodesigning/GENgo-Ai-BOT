import React from "react";
import Spline from "@splinetool/react-spline"; // Ensure this is installed

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center relative">
      {/* Fullscreen Spline 3D Scene */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Spline scene="https://prod.spline.design/zecFQJtHeLN8WCIH/scene.splinecode" />
      </div>
      {/* Content Container */}
      <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg relative z-10 w-full max-w-screen-md mt-20 p-6 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-300">
          About GENgo AI BOT
        </h2>
        <div className="p-6 rounded-lg shadow-md">
          <p className="text-lg leading-7 mb-4">
            GENgo AI BOT is an advanced artificial intelligence chatbot developed by the GDG Team at IEE, led by Mano. Our bot is designed to assist users by understanding and responding to their queries with high accuracy and relevance.
          </p>
          <p className="text-lg leading-7 mb-4">
            Our mission is to create AI solutions that can think and act like humans, providing useful and meaningful interactions. GENgo AI BOT leverages cutting-edge AI technologies to provide a seamless and engaging user experience.
          </p>
          <p className="text-lg leading-7 mb-4">
            Whether you need help with writing social media posts, creating video scripts, or designing database schemas, GENgo AI BOT is here to assist you. Our goal is to make AI accessible and helpful to everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
