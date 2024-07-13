import React from 'react';
import { RxCross1 } from "react-icons/rx";


export default function PopUp1() {
    const [hide, setHide] = React.useState(false);
  return (
    <div className="bg-blue-100 p-2 grid gap-4 rounded-lg relative" style={{display:hide?"none":"grid"}}>
      <p>
        The smartest and fastest AI yet? Invite friends to try Claude 3.5 Sonnet
        for fee!
      </p>

      <div className="flex gap-4">
        <button className="text-sky-400 font-bold">Try Now</button>
        <button className="text-gray-400">Dismiss</button>
      </div>

      <RxCross1
       className="w-4 h-4 absolute top-0 right-0 bg-gray-100 p-1 rounded-full m-1" 
       onClick={() => setHide(true)}
      />
    </div>
  );
}
