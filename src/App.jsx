import React from "react";

export default function App() {
  return (
    <div className="w-80">
      <div className="flex gap-4">
        <h1>Tech Stack</h1>
        <p>Help Ai Chat Bot</p>
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

    </div>
  );
}
