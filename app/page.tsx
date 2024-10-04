"use client";
import { useState } from "react";

import { buttonStyle, primaryButtonStyle } from "styles/button/testbutton.css";

export default function Button() {
  const [isPrimary, setIsPrimary] = useState(false);

  return (
    <div>
      <p>Current state: {isPrimary ? "true" : "false"}</p>
      <h1>This page is SSR with Next.js</h1>
      <button className={isPrimary ? primaryButtonStyle : buttonStyle}>Click me</button>
      <button onClick={() => setIsPrimary(!isPrimary)}>Toggle Style</button>
    </div>
  );
}
