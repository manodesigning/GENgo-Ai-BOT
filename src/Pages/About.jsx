import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-500">About GENgo AI BOT</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
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
  );
};

export default About;
