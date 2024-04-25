import React from "react";

function HeroButton({ title, discriptions, button, link }) {
  return (
    <div className="flex justify-between container mx-auto py-2">
      <div className="flex gap-2">
        <h1 className="font-bold">{title}</h1>
        <h1>{discriptions}</h1>
      </div>
      <div>
        <a href={link} className="border rounded-full px-2">
          {button}
        </a>
      </div>
    </div>
  );
}

export default HeroButton;
