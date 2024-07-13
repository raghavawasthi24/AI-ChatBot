import React from "react";
import { RxCross1 } from "react-icons/rx";


import { IoIosFlash } from "react-icons/io";
import { AiOutlineScissor } from "react-icons/ai";
import { BsPinAngleFill } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineMarkChatUnread } from "react-icons/md";

import { FaWandMagicSparkles } from "react-icons/fa6";
import { TbSend2 } from "react-icons/tb";
import { VscMention } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";

export default function App() {
  return (
    <div className="w-80 p-2">
      <div className="flex gap-4">
        <p>Help Ai Chat Bot</p>
        <RxCross1 className="w-5 h-5 text-red-500" />
      </div>
      <hr />

      <div className="bg-blue-100 p-2 grid gap-4 rounded-lg">
        <p>
          The smartest and fastest AI yet? Invite friends to try Claude 3.5
          Sonnet for fee!
        </p>

        <div className="flex gap-4">
          <button className="text-sky-400 font-bold">Try Now</button>
          <button className="text-gray-400">Dismiss</button>
        </div>
      </div>

      <div>
        <h1>How can I assist you today?</h1>

        <div>
          <p className="bg-gray-100 p-2">
            Tell me something about Big Bang Theory so that I can explain it to
            my 5 year -old child
          </p>
        </div>
      </div>

      <br />

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
            <TbSend2 className="w-5 h-5 text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
