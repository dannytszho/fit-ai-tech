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
      const matches = [...choices[0].message.content.matchAll(exerciseRegex)];
      const exercises = matches.map((match) => match[1].trim());
      return { day, exercises };
    });

    // Create the training plan object
    const trainingPlan = {
      numberOfWeeks,
      sport,
      skillLevel,
      daysOfTraining,
      exercisesByDay,
    };
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
              prompt: `As a professional fitness coach, generate a detailed and comprehensive training plan in JSON format for a user based on the following characteristics: Age: ${age}, Gender: Male, Skill Level: ${level}, Sport: ${sport}, Duration: ${duration} weeks. 
              The plan must address: 1. Age and fitness level appropriate exercises, ensuring safe and effective training. 2. Sport-specific skills and conditioning required for ${sport}. Your expert advice should be evident in the structured breakdown of the plan, which should include the number of weeks, sport, skill level, and a detailed schedule of training days and exercises for each day. Ensure the response is strictly in the following JSON format. The only acceptable variables in the below JSON format is that if the user is a beginner, it should generate a 2-3 days per week training plan, if the user is intermediate, it should generate a 3-4 days per week training plan, and if the user is advanced, it should generate a 4-5 days per week training plan, if the user is an expert, it should generate a 5-6 days per week training plan:
              
              {
                "training_plan": {
                    "user_info": {
                        "age": 25,
                        "gender": "Male",
                        "skill_level": "Intermediate",
                        "sport": "Basketball",
                        "duration": "2 weeks"
                    },
                    "exercise_plan": {
                        "week_1": {
                            "day_1": {
                                "exercises": [
                                    {
                                        "name": "Warm-up",
                                        "description": "5-10 minutes of light cardio to prepare the body for exercise"
                                    },
                                    {
                                        "name": "Bodyweight Squats",
                                        "description": "3 sets of 12 reps to build lower body strength for dribbling and jumping"
                                    },
                                    {
                                        "name": "Push-ups",
                                        "description": "3 sets of 10 reps to strengthen the chest, shoulders, and arms for passing and shooting"
                                    },
                                    {
                                        "name": "Planks",
                                        "description": "3 sets of 30 seconds to improve core stability for better balance and control"
                                    }
                                ]
                            },
                            "day_2": {
                                "exercises": [
                                    {
                                        "name": "Warm-up",
                                        "description": "5-10 minutes of light cardio"
                                    },
                                    {
                                        "name": "Lunges",
                                        "description": "3 sets of 12 reps to enhance leg strength and stability for defensive movements"
                                    },
                                    {
                                        "name": "Dumbbell Rows",
                                        "description": "3 sets of 10 reps to develop upper back and arm strength for rebounding"
                                    },
                                    {
                                        "name": "Russian Twists",
                                        "description": "3 sets of 15 reps to improve rotational power for passes and shots"
                                    }
                                ]
                            },
                            "day_3": {
                                "exercises": [
                                    {
                                        "name": "Rest or Active Recovery",
                                        "description": "Take a day off or engage in light stretching or yoga for recovery"
                                    }
                                ]
                            }
                        },
                        "week_2": {
                            "day_1": {
                                "exercises": [
                                    {
                                        "name": "Warm-up",
                                        "description": "5-10 minutes of light cardio to prepare the body for exercise"
                                    },
                                    {
                                        "name": "Deadlifts",
                                        "description": "3 sets of 10 reps to strengthen the posterior chain for explosive movements"
                                    },
                                    {
                                        "name": "Shoulder Press",
                                        "description": "3 sets of 10 reps to build shoulder strength for shooting"
                                    },
                                    {
                                        "name": "Side Planks",
                                        "description": "3 sets of 30 seconds on each side to improve lateral core stability"
                                    }
                                ]
                            },
                            "day_2": {
                                "exercises": [
                                    {
                                        "name": "Warm-up",
                                        "description": "5-10 minutes of light cardio to prepare the body for exercise"
                                    },
                                    {
                                        "name": "Calf Raises",
                                        "description": "3 sets of 15 reps to strengthen the calves for quick, agile movements"
                                    },
                                    {
                                        "name": "Pull-ups",
                                        "description": "3 sets of 8 reps to improve upper body strength for various basketball movements"
                                    },
                                    {
                                        "name": "Medicine Ball Throws",
                                        "description": "3 sets of 10 reps to enhance power and explosiveness for passing and shooting"
                                    }
                                ]
                            },
                            "day_3": {
                                "exercises": [
                                    {
                                        "name": "Sport-specific Skills Practice",
                                        "description": "Spend time practicing dribbling, shooting, passing, and defensive drills"
                                    }
                                ]
                            }
                        }
                    }
                }
            }`,
              max_tokens: 1000,
              stop: ["}"],
            }),
          });
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
          return <p key={choice.index}>{choice.message.content}</p>;
        }
      )}
    </>
  );
};

export default TrainingPageMenu;
