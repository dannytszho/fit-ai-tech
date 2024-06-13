import TrainingForm from "@/components/shared/TrainingForm";
import { createTrainingPlan } from "@/lib/actions/trainingPlan.actions";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";

const TrainingPageMenu = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

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
          "use server";
          const response = await fetch(`${process.env.URL}/api/chat-gpt`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: `As a professional fitness coach, generate a detailed and comprehensive training plan in JSON format for a user based on the following characteristics: Age: ${age}, Gender: Male, Skill Level: ${level}, Sport: ${sport}, Duration: ${duration} weeks. 
              The plan must address: 1. Age and fitness level appropriate exercises, ensuring safe and effective training. 2. Sport-specific skills and conditioning required for ${sport}. Your expert advice should be evident in the structured breakdown of the plan, which should include the number of weeks, sport, skill level, and a detailed schedule of training days and exercises for each day. Ensure the response is strictly in the following JSON format. The only acceptable variables in the below JSON format is that if the user is a beginner, it should generate a 2-3 days per week training plan, if the user is intermediate, it should generate a 3-4 days per week training plan, and if the user is advanced, it should generate a 4-5 days per week training plan, if the user is an expert, i≈t should generate a 5-6 days per week training plan:
              
              {
                "trainingPlan": {
                    "userInfo": {
                        "age": 25,
                        "gender": "Male",
                        "skillLevel": "Intermediate",
                        "sport": "Basketball",
                        "duration": "2 weeks"
                    },
                    "exercisePlan": {
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
          if (!response.ok) {
            throw new Error("Failed to fetch from API: " + response.statusText);
          }

          const result = await response.json();
          const trainingPlan = await JSON.parse(
            result.choices[0].message.content
          );

          // Assuming the API response includes the complete training plan in a property named 'trainingPlan'

          if (result && result.choices) {
            await createTrainingPlan(trainingPlan, user._id);
          }
        }}
      />
    </>
  );
};

export default TrainingPageMenu;
