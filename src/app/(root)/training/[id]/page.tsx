"use client";
import React from "react";
// import { auth } from "@clerk/nextjs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { trainingPlans } from "@/constants";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
// import soccer from "/@assets/icons/soccer.svg";
// import running from "@/assets/icons/running.svg";

const TrainingDetails = () => {
  // const { userId } = auth();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  console.log("date", date);

  // Flatten the training plans into an array of objects representing each day of training
  const flattenedTrainingPlan = trainingPlans.flatMap((plan, index) => {
    return Object.entries(plan.exercisesByDay).map(([day, exercises]) => ({
      index,
      day,
      exercises,
      sport: plan.sport,
      skillLevel: plan.skillLevel,
    }));
  });

  // const getSportIcon = (sport: string) => {
  //   switch (sport) {
  //     case "soccer":
  //       return soccer;
  //     case "running":
  //       return running;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
      <Carousel className="w-full">
        <CarouselContent>
          {flattenedTrainingPlan.map(
            ({ index, day, exercises, sport, skillLevel, date }, i) => (
              <CarouselItem key={i}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex-col aspect-square items-center justify-center text-center p-6">
                      <h2>🗓️ {day}</h2>
                      <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold mb-2">{sport}</h2>
                        <Image
                          className="mx-auto"
                          src={`/assets/icons/${sport}.svg`}
                          alt="logo"
                          width={60}
                          height={24}
                        />
                      </div>
                      {/* Render plan details */}
                      <div>
                        <div className="text-4xl font-semibold">
                          {index + 1}
                        </div>
                        <p>{`Skill Level: ${skillLevel} 🚀`}</p>
                        {/* Render day and exercises */}
                        <div>
                          <ul>
                            {exercises.map(
                              (exercise: string, exerciseIndex: any) => (
                                <li key={exerciseIndex}>· {exercise}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default TrainingDetails;
