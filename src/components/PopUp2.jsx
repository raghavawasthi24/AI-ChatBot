import React from "react";
import { RxCross1 } from "react-icons/rx";

export default function PopUp2() {
  const [hide, setHide] = React.useState(false);
  return (
    <div
     className="bg-blue-100 p-2 pr-4 grid gap-4 rounded-lg relative text-lg"
     style={{ display: hide ? "none" : "grid" }}
     >
      <p>
        Slider starts a new chat each time you reopen the sidebar. If you want
        to resume the last chat,{" "}
        <span className="text-blue-500">change this in the settings.</span>
      </p>

      <RxCross1
        className="w-4 h-4 absolute top-0 right-0 bg-gray-100 p-1 rounded-full m-1"
        onClick={() => setHide(true)}
      />
    </div>
  );
}
