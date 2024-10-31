import React from "react";
import { FaFacebook, FaVideo, FaNewspaper, FaHeart, FaDatabase, FaCode } from "react-icons/fa";

const ButtonGrid = ({ sendMessage }) => {
  return (
    <div className="w-full max-w-[500px] mt-8 p-4 bg-white rounded-lg shadow-md bg-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-center">
        <Button
          icon={<FaFacebook />}
          label="Social Post"
          onClick={() => sendMessage("Write a social media post.")}
        />
        <Button
          icon={<FaVideo />}
          label="Video Script"
          onClick={() => sendMessage("Create a video script.")}
        />
        <Button
          icon={<FaNewspaper />}
          label="Press Release"
          onClick={() => sendMessage("Write a press release.")}
        />
        <Button
          icon={<FaHeart />}
          label="Health Tips"
          onClick={() => sendMessage("Provide health tips.")}
        />
        <Button
          icon={<FaDatabase />}
          label="Database Schema"
          onClick={() => sendMessage("Design a database schema.")}
        />
        <Button
          icon={<FaCode />}
          label="Frontend Code"
          onClick={() => sendMessage("Write frontend code.")}
        />
      </div>
    </div>
  );
};

const Button = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center p-2 border rounded hover:bg-gray-100 transition"
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};

export default ButtonGrid;
