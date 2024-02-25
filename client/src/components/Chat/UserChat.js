import React, { useState } from "react";
import { IoChatbubblesSharp } from "react-icons/io5";
import UserChatForm from "./UserChatForm";

const UserChat = () => {
  const [chatFormModal, setChatFormModal] = useState(false);

  const chatOpenHandler = (toggle) => {
    setChatFormModal(toggle)
  }
  return (
    <>
      {chatFormModal ? (
        <UserChatForm chatOpenHandler={chatOpenHandler} />
      ) : (
        <div
          className="fixed bottom-8 right-8 z-50 rounded-full bg-white p-5 shadow-2xl cursor-pointer"
          onClick={() => chatOpenHandler(true)}
        >
          <IoChatbubblesSharp size={32} />
        </div>
      )}
    </>
  );
};

export default UserChat;
