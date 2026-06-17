import React from "react";

export default function RgbText({ title }: { title: string }) {
  return (
    <div className="relative inline-block">
      {/* Blurred glow behind the text */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 animate-rgb-flow rgb-gradient blur-xl md:blur-2xl opacity-70 select-none"
      >
        {title}
      </span>

      {/* Foreground text */}
      <span className="relative z-10 animate-rgb-flow rgb-gradient">
        {title}
      </span>
    </div>
  );
}
