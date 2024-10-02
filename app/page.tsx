"use client"; 

import { useState } from "react";
import styled from "styled-components";

const Button = styled.button<{ $primary: boolean }>`
  background-color: ${({ $primary }) => ($primary ? "#0070f3" : "#333")};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: ${({ $primary }) => ($primary ? "#005bb5" : "#555")};
  }

  &::before {
   color : yellow;
  }

  &:: after {
    background-color : pink;
  }
`;

export default function HomePage() {
  const [isPrimary, setIsPrimary] = useState(false);

  console.log("isPrimary:", isPrimary);

  return (
    <div>
      <p>Current state: {isPrimary ? "true" : "false"}</p>

      <h1>This page is SSR with Next.js</h1>
      <Button $primary={isPrimary}>Click me</Button>

      <button onClick={() => setIsPrimary(!isPrimary)}>Toggle Style</button>
    </div>
  );
}
