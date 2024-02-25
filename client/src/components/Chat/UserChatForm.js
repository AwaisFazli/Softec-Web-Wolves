import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import axiosInstance from "../../services/MakeBackendRequests";
import ChatForm from "./ChatForm";
import { getCookie } from "../../services/CookieManager";

const UserChatForm = ({ chatOpenHandler }) => {
  const [ws, setWs] = useState();
  const [messages, setMessages] = useState([]);
  const [logedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const token = getCookie("userAccessToken");
    document.cookie = "token=" + token;

    const ws = new WebSocket(`ws://localhost:3002`);
    setWs(ws);

    ws.addEventListener("message", handleMessage);

    return () => {
      ws.close();
    };
  }, []);

  const handleMessage = (e) => {
    const messageData = JSON.parse(e.data);
    console.log(messageData);

    setMessages((prev) => [
      ...prev,
      {
        text: messageData.messageData?.chat,
        sender: messageData.messageData?.sender,
        receiver: messageData.messageData?.receiver,
      },
    ]);
  };

  const getUser = async () => {
    try {
      const response = await axiosInstance.get("/getUser");
      setLoggedInUser(response.data._id);
    } catch (error) {
      console.log();
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="h-[500px] w-[300px] z-[90] bg-white fixed bottom-7 right-7 rounded-lg overflow-hidden">
      <div className="flex justify-end p-2">
        <span className="cursor-pointer" onClick={() => chatOpenHandler(false)}>
          <IoCloseSharp size={32} />
        </span>
      </div>
      <div className="message-section flex flex-grow grow flex-col">
        {messages.map((message, index) => {
          const alignment = message.sender === logedInUser ? "end" : "start";
          return (
            <div className="comment" justifyContent={alignment} key={index}>
              {/* <img src={message.user?.imageUrl} alt="" /> */}
              <div className="content">
                <div>
                  <p className="text">{message.text}</p>
                </div>
                <div className="footer" justifyContent={alignment}></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-auto">
      <ChatForm
        ws={ws}
        selectedContact={"65d9dab0c05b05456575e5e1"}
        setMessages={setMessages}
        sender={logedInUser}
        receiver={"65d9dab0c05b05456575e5e1"}
      />
      </div>
    </div>
  );
};

export default UserChatForm;
