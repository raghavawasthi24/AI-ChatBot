import React from "react";
import { RxCross1 } from "react-icons/rx";
import PopUp1 from "./components/PopUp1";
import PopUp2 from "./components/PopUp2";
import Chats from "./components/Chats";
import Toolbar from "./components/Toolbar";
import { chats } from "./constant";

export default function App() {
  const [activechats, setActiveChats] = React.useState(chats);
  return (
    <div className="w-96 p-2 grid gap-4">
      <div className="flex gap-4 text-xl font-bold justify-center items-center">
        <p>Help Ai Chat Bot</p>
        <RxCross1 className="w-5 h-5" />
      </div>
      <hr />

      <p className="text-center font-bold text-4xl text-blue-500">Techstack </p>

      <div className="grid gap-2">
        <h1 className="text-center text-2xl font-bold text-gray-600">
          How can I assist you today?
        </h1>

        <PopUp1 />
        <Chats activechats={activechats}/>
      </div>
      <PopUp2 />
      <br />
      <Toolbar setActiveChats={setActiveChats} activechats={activechats}/>
    </div>
  );
}
