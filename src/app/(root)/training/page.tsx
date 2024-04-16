"use client";
import TrainingForm from "@/components/shared/TrainingForm";
import { Button } from "@/components/ui/button";
import React from "react";

const TrainingPageMenu = () => {
  const [choices, setChoices] = React.useState([]);
  return (
    <>
      <div>TrainingPageMenu</div>
      <TrainingForm
        onclick={async (
          sport: string,
          level: string,
          age: string,
          duration: string
        ) => {
          console.log("sport:", sport);
          console.log("level:", level);
          console.log("age:", age);
          console.log("duration:", duration);
          const response = await fetch("/api/chat-gpt", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: `Hi! I am a ${age} years old male ${level} ${sport} player. Can you create a ${duration} week(s) comprehensive training plan for me?`,
            }),
          });
          console.log("response", response);
          const result = await response.json();
          setChoices(result.choices);
        }}
      />
      {choices.map(
        (choice: { index: number; message: { content: string } }) => {
          console.log("choice", choice);
          return <p key={choice.index}>{choice.message.content}</p>;
        }
      )}
    </>
  );
};

export default TrainingPageMenu;
