import React from 'react';
import { IoIosFlash } from "react-icons/io";
import { AiOutlineScissor } from "react-icons/ai";
import { BsPinAngleFill } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineMarkChatUnread } from "react-icons/md";

import { FaWandMagicSparkles } from "react-icons/fa6";
import { TbSend2 } from "react-icons/tb";
import { VscMention } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";

export default function Toolbar({ setActiveChats, activechats }) {
  const [text, setText] = React.useState("");

  function addText() {
    console.log(text);
    setActiveChats([...activechats, text]);
    setText("");
  }
  return (
    <div className="grid gap-2">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <IoIosFlash className="w-5 h-5 text-red-500" />
          <AiOutlineScissor className="w-5 h-5 text-gray-400" />
          <BsPinAngleFill className="w-5 h-5 text-gray-400" />
        </div>
        <div className="flex gap-4">
          <IoIosTimer className="w-5 h-5 text-gray-400" />
          <MdOutlineMarkChatUnread className="w-5 h-5 text-green-500" />
        </div>
      </div>
      <div className="bg-gray-100 p-2 grid gap-4">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full bg-transparent outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <FaWandMagicSparkles className="w-4 h-4 text-blue-500" />
            <VscMention className="w-6 h-6 text-blue-500" />
            <div className="flex items-center gap-2 bg-blue-200 px-3 py-1 rounded-2xl">
              <FaPlus className="w-3 h-3 text-blue-500" />
              Add Tools
            </div>
          </div>
          <TbSend2 className="w-5 h-5 text-blue-500" onClick={addText} />
        </div>
      </div>
    </div>
  );
}
