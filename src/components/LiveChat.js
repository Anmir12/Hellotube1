import React, { useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateString } from "../utils/helper";

const LiveChat = () => {
  const [chatMsg, setChatMsg] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateString(20),
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll ">
        {chatMessages.map((c, i) => (
          <ChatMessages name={c.name} message={c.message} key={i} />
        ))}
      </div>
      <form
        className="w-full border border-black mt-1 ml-1 rounded-sm shadow-2xl bg-slate-200"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Anmir",
              message: chatMsg,
            })
          );
          setChatMsg("");
        }}
      >
        <input
          className="border border-black w-80 rounded-md h-8 ml-2 my-1 shadow-lg p-2 text-lg"
          type="text"
          value={chatMsg}
          onChange={(e) => {
            setChatMsg(e.target.value);
          }}
        />
        <button className="ml-1 font-extrabold  rounded-sm text-xm text-red-700 shadow-2xl">
          SEND
        </button>
      </form>
    </>
  );
};

export default LiveChat;
