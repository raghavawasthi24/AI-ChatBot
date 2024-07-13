import React from 'react'
import { chats } from '../constant';

export default function Chats({activechats}) {
  
  return (
    <div className="grid gap-2">
      {activechats.map((chat, index) => (
        <p key={index} className="bg-gray-100 p-2 rounded-lg">
          {chat}
        </p>
      ))}
    </div>
  );
}
