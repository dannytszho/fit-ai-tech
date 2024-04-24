"use client";
import TrainingForm from "@/components/shared/TrainingForm";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const TrainingPageMenu = () => {
  const [choices, setChoices] = React.useState([]);

  const extractChoices = (choices: any) => {
    const weeksRegex = /\b(\d+)-week\b/;
    const sportRegex =
      /(?:an? (beginner|intermediate|advanced|expert) (\w+)) player/;
    const daysRegex = /Day (\d+)/g;

    // Extract number of weeks

    const weeksMatch = weeksRegex.exec(choices[0].message.content);
    const numberOfWeeks = weeksMatch ? parseInt(weeksMatch[1]) : null;

    // Extract sport
    const sportMatch = sportRegex.exec(choices[0].message.content);
    console.log("sportMatch", sportMatch);
    const skillLevel = sportMatch ? sportMatch[1] : null;
    const sport = sportMatch ? sportMatch[2] : null;

    // Extract days of training
    const daysOfTraining = [];
    let match;
    while ((match = daysRegex.exec(choices[0].message.content)) !== null) {
      daysOfTraining.push(match[1]);
    }

    // Extract exercises for each day
    const exercisesByDay = daysOfTraining.map((day) => {
      const exerciseRegex = new RegExp(
        `(?:\\*\\*Day ${day}: |Day ${day}: - )(.*?)(?=(?:\\*\\*Day \\d+: |Day \\d+: - )|$)`,
        "gs"
      );
      console.log("exerciseRegex", exerciseRegex);
      const matches = [...choices[0].message.content.matchAll(exerciseRegex)];
      console.log("matches", matches);
      const exercises = matches.map((match) => match[1].trim());
      return { day, exercises };
    });

    console.log(exercisesByDay);

    // Create the training plan object
    const trainingPlan = {
      numberOfWeeks,
      sport,
      skillLevel,
      daysOfTraining,
      exercisesByDay,
    };
    console.log("trainingPlan", trainingPlan);
    return trainingPlan;
  };

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
          extractChoices(result.choices);
        }}
      />
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
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
