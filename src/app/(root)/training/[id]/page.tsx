"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format, startOfDay } from "date-fns";
import { getTrainingPlanById } from "@/lib/actions/trainingPlan.actions";
import { useParams } from "next/navigation";

type Exercise = {
  name: string;
  duration: string;
};

type DayDetails = {
  date: string;
  exercises: Exercise[];
  sport: string;
  skillLevel: string;
};

type ExerciseDetails = {
  [key: string]: DayDetails;
};

const TrainingDetails = () => {
  const { id } = useParams();

  const startOfCurrentWeek = startOfDay(new Date());

  const calculateDateFromWeekAndDay = (
    weekNumber: number,
    usedDays: Set<number>
  ) => {
    let randomizedDayNumber;
    do {
      randomizedDayNumber = Math.floor(Math.random() * 7) + 1;
    } while (usedDays.has(randomizedDayNumber));

    usedDays.add(randomizedDayNumber);

    const baseDate = addDays(startOfCurrentWeek, (weekNumber - 1) * 7);
    return addDays(baseDate, randomizedDayNumber - 1); // dayNumber is 1-based index
  };

  const createTrainingPlanWithDates = (
    plan: any
  ): { datesWithExercises: Date[]; exerciseDetailsByDate: ExerciseDetails } => {
    const datesWithExercises: Date[] = [];
    const exerciseDetailsByDate: ExerciseDetails = {};

    Object.entries(plan.exercisePlan).forEach(([week, days]: [string, any]) => {
      const weekNumber = parseInt(week.split("_")[1]);
      const usedDays = new Set<number>();
      Object.entries(days).forEach(([day, dayDetails]: [string, any]) => {
        const dayNumber = parseInt(day.split("_")[1]);
        const date = calculateDateFromWeekAndDay(weekNumber, usedDays);
        const dateKey = format(date, "yyyy-MM-dd");

        if (dayDetails.exercises.length > 0) {
          datesWithExercises.push(date);
          exerciseDetailsByDate[dateKey] = {
            date: dateKey,
            exercises: dayDetails.exercises,
            sport: plan.userInfo.sport,
            skillLevel: plan.userInfo.skillLevel,
          };
        }
      });
    });

    return {
      datesWithExercises,
      exerciseDetailsByDate,
    };
  };

  const [trainingPlan, setTrainingPlan] = useState<any>({});

  const [systemSelectedDates, setsystemSelectedDates] = useState<any>([]);
  const [userSelectedDates, setUserSelectedDates] = useState<Date>();
  const [exerciseDetails, setExerciseDetails] = useState<any>({});

  useEffect(() => {
    const fetchTrainingPlan = async () => {
      try {
        const res = await getTrainingPlanById(id as string); // Cast 'id' to string
        setTrainingPlan(res.trainingPlan);
      } catch (error) {
        console.error("Error fetching training plan", error);
      }
    };
    fetchTrainingPlan();
  }, []);

  useEffect(() => {
    const allDatesWithExercises = [];
    const allExerciseDetails = {};
    if (Object.keys(trainingPlan).length !== 0) {
      const { datesWithExercises, exerciseDetailsByDate } =
        createTrainingPlanWithDates(trainingPlan);
      allDatesWithExercises.push(...datesWithExercises);
      Object.assign(allExerciseDetails, exerciseDetailsByDate);
    }

    // Sort dates, assuming a and b are date strings
    allDatesWithExercises.sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );

    setsystemSelectedDates(allDatesWithExercises);
    setExerciseDetails(allExerciseDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trainingPlan]);

  // Define modifiers based on the dates
  const modifiers: any = {
    highlighted: systemSelectedDates,
    selected: userSelectedDates,
  };

  // Define Tailwind classes for modifiers
  const modifiersClassNames = {
    highlighted: "bg-blue-500 text-white", // Permanent highlights for workout days
    selected: "bg-red-500 text-white", // User-selected dates
  };

  return (
    <>
      <Calendar
        mode="single"
        selected={userSelectedDates}
        onSelect={setUserSelectedDates}
        className="rounded-md border shadow"
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
      />

      {systemSelectedDates.map((date: any, i: any) => {
        const dateKey = format(date, "yyyy-MM-dd");
        const dayDetails = exerciseDetails[dateKey];

        // Format the user-selected date for comparison
        const selectedDateKey = userSelectedDates
          ? format(userSelectedDates, "yyyy-MM-dd")
          : null;

        // Check if the current date matches the user-selected date
        const isSelected = selectedDateKey === dateKey;

        return isSelected ? (
          <Card>
            <CardContent className="flex-col aspect-square items-center justify-center text-center p-6">
              <h2>🗓️ {dateKey}</h2>
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold mb-2">{dayDetails?.sport}</h2>
                <Image
                  className="mx-auto"
                  src={`/assets/icons/${dayDetails.sport.toLowerCase()}.svg`}
                  alt={`${dayDetails.sport} logo`}
                  width={60}
                  height={24}
                />
              </div>
              <div>
                <p className="text-lg font-semibold">{`Skill Level: ${dayDetails.skillLevel} 🚀`}</p>
                <ul>
                  {dayDetails.exercises.map((exercise: any, index: any) => (
                    <div
                      key={index}
                      className="flex border-2 rounded-full my-3 p-2 items-center justify-start space-x-2"
                    >
                      <div className="">
                        <Image
                          className="mx-auto"
                          src={`/assets/icons/${dayDetails.sport.toLowerCase()}.svg`}
                          alt={`${dayDetails.sport} logo`}
                          width={32}
                          height={20}
                        />
                      </div>
                      <div className="flex-grow flex flex-col items-center justify-center">
                        <li>{exercise.name}</li>
                        <li>{exercise.duration}</li>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ) : null;
      })}
    </>
  );
};

export default TrainingDetails;
