import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaPaperPlane } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import ButtonGrid from "../ButtonGrid";
import Logo from "../../assets/react.png";

const genAI = new GoogleGenerativeAI("AIzaSyBzc4t0VWqqZ5cf3CO7YIzuepECuC4aCX0");

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (messageText) => {
    const text = messageText || input.trim();
    if (!text) return;

    const userMessage = { sender: "user", text };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: "You are Gengo, an AI developed by Mano from the GDG team at IIE.",
      });

      const chat = model.startChat({
        history: messages.map((msg) => ({
          role: msg.sender === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        })),
      });

      const result = await chat.sendMessage(userMessage.text);
      const response = await result.response.text();
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "AI", text: response },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "AI",
          text: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Event handler for "Enter" or "Shift + Enter"
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();  // Prevent form submission or newline
      sendMessage(input);  // Send message
    } else if (event.key === "Enter" && event.shiftKey) {
      // Allow new line in the input field
      setInput((prevInput) => prevInput + "\n");
    }
  };

  return (
    <div className="bg-white/30 backdrop-blur-md shadow-lg w-full flex flex-col items-center rounded-lg">
      <style>
        {`
          /* Typing Dots Animation */
          @keyframes typingDots {
            0%, 20% {
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
          .dot-1 {
            animation: typingDots 1.4s infinite steps(1) 0s;
          }
          .dot-2 {
            animation: typingDots 1.4s infinite steps(1) 0.2s;
          }
          .dot-3 {
            animation: typingDots 1.4s infinite steps(1) 0.4s;
          }

          /* Trending Glow Animation */
          @keyframes glow {
            0% {
              box-shadow: 0 0 5px rgba(0, 123, 255, 0.6);
            }
            50% {
              box-shadow: 0 0 15px rgba(0, 123, 255, 0.8);
            }
            100% {
              box-shadow: 0 0 5px rgba(0, 123, 255, 0.6);
            }
          }
          .glow {
            animation: glow 1.5s ease-in-out infinite;
          }
        `}
      </style>

      <div className=" flex-1 w-full overflow-y-auto mb-4 space-y-4 p-4  rounded-lg">
        {/* Top Button */}
        <div className="flex justify-center items-center">
          <ButtonGrid sendMessage={sendMessage} />
        </div>

        {messages.length === 0 && (
          <div className="text-center text-white mt-8">
            Start a conversation by sending a message!
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "AI" && (
              <img src={Logo} alt="AI Logo" className="h-6 w-6 mr-2 rounded-full self-start" />
            )}
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-800 p-3 rounded-lg flex">
              Thinking<span className="dot-1">.</span><span className="dot-2">.</span><span className="dot-3">.</span>
            </div>
          </div>
        )}
      </div>

      <div
        className={`w-full flex items-center bg-white p-2 rounded-full shadow-md ${
          isLoading ? "animate-glow" : ""
        }`}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
          onKeyDown={handleKeyDown}  // Add the keydown handler here
          rows="1"  // Set the height to 2 rows
          className="flex-1 p-2 border-none rounded-full focus:outline-none resize-none"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={isLoading || !input.trim()}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
