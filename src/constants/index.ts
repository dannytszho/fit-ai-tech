export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Training",
    route: "/training",
    icon: "/assets/icons/dumbbell.svg",
  },
  {
    label: "Nutrition",
    route: "/nutrition",
    icon: "/assets/icons/nutrition.svg",
  },
  {
    label: "Recovery",
    route: "/Recovery",
    icon: "/assets/icons/meditation.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const sportOptions = {
  soccer: "soccer",
  basketball: "basketball",
  tennis: "tennis",
  golf: "golf",
  cricket: "cricket",
  rugby: "rugby",
  baseball: "baseball",
  volleyball: "volleyball",
  iceHockey: "ice hockey",
  swimming: "swimming",
  cycling: "cycling",
  athletics: "athletics",
  boxing: "boxing",
  kickBoxing: "kick boxing",
  skiing: "skiing",
  snowboarding: "snowboarding",
  surfing: "surfing",
  skateboarding: "skateboarding",
  gymnastics: "gymnastics",
  wrestling: "wrestling",
  martialArts: "martial arts",
  tableTennis: "table tennis",
  badminton: "badminton",
  squash: "squash",
  rowing: "rowing",
  sailing: "sailing",
  archery: "archery",
  fencing: "fencing",
  climbing: "climbing",
  horseRacing: "horse racing",
  motorRacing: "motor racing",
};

export const levelOptions = ["beginner", "intermediate", "advanced", "expert"];

export const ageOptions = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "11",
  12: "12",
  13: "13",
  14: "14",
  15: "15",
  16: "16",
  17: "17",
  18: "18",
  19: "19",
  20: "20",
  21: "21",
  22: "22",
  23: "23",
  24: "24",
  25: "25",
  26: "26",
  27: "27",
  28: "28",
  29: "29",
  30: "30",
  31: "31",
  32: "32",
  33: "33",
  34: "34",
  35: "35",
  36: "36",
  37: "37",
  38: "38",
  39: "39",
  40: "40",
  41: "41",
  42: "42",
  43: "43",
  44: "44",
  45: "45",
  46: "46",
  47: "47",
  48: "48",
  49: "49",
  50: "50",
  51: "51",
  52: "52",
  53: "53",
  54: "54",
  55: "55",
  56: "56",
  57: "57",
  58: "58",
  59: "59",
  60: "60",
  61: "61",
  62: "62",
  63: "63",
  64: "64",
  65: "65",
  66: "66",
  67: "67",
  68: "68",
  69: "69",
  70: "70",
  71: "71",
  72: "72",
  73: "73",
  74: "74",
  75: "75",
  76: "76",
  77: "77",
  78: "78",
  79: "79",
  80: "80",
  81: "81",
  82: "82",
  83: "83",
  84: "84",
  85: "85",
  86: "86",
  87: "87",
  88: "88",
  89: "89",
  90: "90",
  91: "91",
  92: "92",
  93: "93",
  94: "94",
  95: "95",
  96: "96",
  97: "97",
  98: "98",
  99: "99",
  100: "100",
};

export const trainingPlans = [
  {
    author: {
      _id: "1",
      firstName: "Peter",
      lastName: "Pan",
    },
    user_info: {
      age: 25,
      gender: "Male",
      skill_level: "Expert",
      sport: "Soccer",
      duration: "4 weeks",
    },
    exercise_plan: {
      week_1: {
        day_1: {
          exercises: [
            {
              name: "Dynamic Warm-up",
              description:
                "10-15 min of dynamic stretching and mobility exercises to prepare the body for training",
              duration: "15 min",
            },
            {
              name: "Batting Practice",
              description:
                "Work on hitting drills focusing on technique and power",
              duration: "30 min",
            },
            {
              name: "Strength Training - Squats",
              description:
                "4 sets of 6 reps with heavy weights to build lower body strength for explosive movements",
              duration: "40 min",
            },
            {
              name: "Core Stability Exercises",
              description:
                "Planks, Russian Twists, and Leg Raises to improve core strength for rotational power and stability",
              duration: "15 min",
            },
          ],
        },
        day_2: {
          exercises: [
            {
              name: "Agility Drills",
              description:
                "Ladder drills, cone drills, and shuttle runs to improve footwork and quickness",
              duration: "15 min",
            },
            {
              name: "Pitching Practice",
              description: "Focus on pitching mechanics and accuracy",
              duration: "15 min",
            },
            {
              name: "Upper Body Strength - Bench Press",
              description:
                "4 sets of 8 reps to develop chest and arm strength for throwing and hitting",
              duration: "15 min",
            },
            {
              name: "Rotator Cuff Exercises",
              description:
                "External and internal rotation exercises to prevent shoulder injuries",
              duration: "15 min",
            },
          ],
        },
        day_3: {
          exercises: [
            {
              name: "Active Recovery",
              description:
                "Light cardio, stretching, or yoga for recovery and flexibility",
              duration: "15 min",
            },
          ],
        },
      },
      week_2: {
        day_1: {
          exercises: [
            {
              name: "Dynamic Warm-up",
              description:
                "10-15 min of dynamic stretching and mobility exercises",
              duration: "15 min",
            },
            {
              name: "Fielding Drills",
              description: "Work on fielding ground balls and pop flies",
              duration: "15 min",
            },
            {
              name: "Strength Training - Deadlifts",
              description:
                "4 sets of 6 reps to strengthen the posterior chain for power and explosiveness",
              duration: "15 min",
            },
            {
              name: "Shoulder Stability Exercises",
              description:
                "External rotations, YTWL exercises to maintain shoulder health",
              duration: "15 min",
            },
          ],
        },
        day_2: {
          exercises: [
            {
              name: "Speed Training",
              description:
                "Sprints, agility ladder drills for improving speed and reaction time",
              duration: "15 min",
            },
            {
              name: "Catching Practice",
              description:
                "Focus on receiving pitches and blocking balls in the dirt",
              duration: "15 min",
            },
            {
              name: "Power Training - Medicine Ball Throws",
              description:
                "4 sets of 8 reps to enhance explosive power for throwing and hitting",
              duration: "15 min",
            },
            {
              name: "Leg Strength - Lunges",
              description:
                "3 sets of 12 reps to improve leg strength and stability",
              duration: "15 min",
            },
          ],
        },
        day_3: {
          exercises: [
            {
              name: "Sport-specific Skills Practice",
              description:
                "Work on hitting, fielding, and throwing drills specific to baseball",
              duration: "15 min",
            },
          ],
        },
      },
      week_3: {
        day_1: {
          exercises: [
            {
              name: "Dynamic Warm-up",
              description:
                "10-15 min of dynamic stretching and mobility exercises",
              duration: "15 min",
            },
            {
              name: "Batting Practice",
              description:
                "Focus on different types of pitches and situational hitting",
              duration: "15 min",
            },
            {
              name: "Strength Training - Power Cleans",
              description:
                "4 sets of 5 reps to develop explosive power for hitting and throwing",
              duration: "15 min",
            },
            {
              name: "Core Strength - Wood Chops",
              description: "3 sets of 12 reps to improve rotational power",
              duration: "15 min",
            },
          ],
        },
        day_2: {
          exercises: [
            {
              name: "Agility Drills",
              description:
                "Improve agility and quickness with ladder drills and cone drills",
              duration: "15 min",
            },
            {
              name: "Pitching Practice",
              description: "Work on different pitches and control",
              duration: "15 min",
            },
            {
              name: "Upper Body Strength - Pull-ups",
              description: "4 sets of 8 reps to strengthen the back and arms",
              duration: "15 min",
            },
            {
              name: "Rotator Cuff Exercises",
              description:
                "External and internal rotation exercises for shoulder health",
              duration: "15 min",
            },
          ],
        },
        day_3: {
          exercises: [
            {
              name: "Active Recovery",
              description: "Light cardio, stretching, or yoga for recovery",
              duration: "15 min",
            },
          ],
        },
        day_4: {
          exercises: [
            {
              name: "Active Recovery",
              description: "Light cardio, stretching, or yoga for recovery",
              duration: "15 min",
            },
          ],
        },
        day_5: {
          exercises: [
            {
              name: "Active Recovery",
              description: "Light cardio, stretching, or yoga for recovery",
              duration: "15 min",
            },
          ],
        },
      },
    },
  },
  {
    author: {
      _id: "2",
      firstName: "Alice",
      lastName: "Wonderland",
    },
    user_info: {
      age: 25,
      gender: "Male",
      skill_level: "Expert",
      sport: "Basketball",
      duration: "4 weeks",
    },
    exercise_plan: {
      week_1: {
        day_1: {
          exercises: [
            {
              name: "Dynamic Warm-up",
              description:
                "10-15 min of dynamic stretching and mobility exercises to prepare the body for training",
            },
            {
              name: "Batting Practice",
              description:
                "Work on hitting drills focusing on technique and power",
            },
            {
              name: "Strength Training - Squats",
              description:
                "4 sets of 6 reps with heavy weights to build lower body strength for explosive movements",
            },
            {
              name: "Core Stability Exercises",
              description:
                "Planks, Russian Twists, and Leg Raises to improve core strength for rotational power and stability",
            },
          ],
        },
        day_2: {
          exercises: [
            {
              name: "Agility Drills",
              description:
                "Ladder drills, cone drills, and shuttle runs to improve footwork and quickness",
            },
            {
              name: "Pitching Practice",
              description: "Focus on pitching mechanics and accuracy",
            },
            {
              name: "Upper Body Strength - Bench Press",
              description:
                "4 sets of 8 reps to develop chest and arm strength for throwing and hitting",
            },
            {
              name: "Rotator Cuff Exercises",
              description:
                "External and internal rotation exercises to prevent shoulder injuries",
            },
          ],
        },
        day_3: {
          exercises: [
            {
              name: "Active Recovery",
              description:
                "Light cardio, stretching, or yoga for recovery and flexibility",
            },
          ],
        },
      },
      week_2: {
        day_1: {
          exercises: [
            {
              name: "Dynamic Warm-up",
              description:
                "10-15 min of dynamic stretching and mobility exercises",
            },
            {
              name: "Fielding Drills",
              description: "Work on fielding ground balls and pop flies",
            },
            {
              name: "Strength Training - Deadlifts",
              description:
                "4 sets of 6 reps to strengthen the posterior chain for power and explosiveness",
            },
            {
              name: "Shoulder Stability Exercises",
              description:
                "External rotations, YTWL exercises to maintain shoulder health",
            },
          ],
        },
        day_2: {
          exercises: [
            {
              name: "Speed Training",
              description:
                "Sprints, agility ladder drills for improving speed and reaction time",
            },
            {
              name: "Catching Practice",
              description:
                "Focus on receiving pitches and blocking balls in the dirt",
            },
            {
              name: "Power Training - Medicine Ball Throws",
              description:
                "4 sets of 8 reps to enhance explosive power for throwing and hitting",
            },
            {
              name: "Leg Strength - Lunges",
              description:
                "3 sets of 12 reps to improve leg strength and stability",
            },
          ],
        },
        day_3: {
          exercises: [
            {
              name: "Sport-specific Skills Practice",
              description:
                "Work on hitting, fielding, and throwing drills specific to baseball",
            },
          ],
        },
      },
      week_3: {
        day_1: {
          exercises: [
            {
              name: "Dynamic Warm-up",
              description:
                "10-15 min of dynamic stretching and mobility exercises",
            },
            {
              name: "Batting Practice",
              description:
                "Focus on different types of pitches and situational hitting",
            },
            {
              name: "Strength Training - Power Cleans",
              description:
                "4 sets of 5 reps to develop explosive power for hitting and throwing",
            },
            {
              name: "Core Strength - Wood Chops",
              description: "3 sets of 12 reps to improve rotational power",
            },
          ],
        },
        day_2: {
          exercises: [
            {
              name: "Agility Drills",
              description:
                "Improve agility and quickness with ladder drills and cone drills",
            },
            {
              name: "Pitching Practice",
              description: "Work on different pitches and control",
            },
            {
              name: "Upper Body Strength - Pull-ups",
              description: "4 sets of 8 reps to strengthen the back and arms",
            },
            {
              name: "Rotator Cuff Exercises",
              description:
                "External and internal rotation exercises for shoulder health",
            },
          ],
        },
        day_3: {
          exercises: [
            {
              name: "Active Recovery",
              description: "Light cardio, stretching, or yoga for recovery",
            },
          ],
        },
      },
    },
  },
  {
    author: {
      _id: "3",
      firstName: "John",
      lastName: "Doe",
    },
    user_info: {
      age: 25,
      gender: "Male",
      skill_level: "Expert",
      sport: "Baseball",
      duration: "4 weeks",
    },
    exercise_plan: {
      week_1: {
        day_1: {
          exercises: [
            {
              name: "Dynamic Warm-up",
              description:
                "10-15 min of dynamic stretching and mobility exercises to prepare the body for training",
            },
            {
              name: "Batting Practice",
              description:
                "Work on hitting drills focusing on technique and power",
            },
            {
              name: "Strength Training - Squats",
              description:
                "4 sets of 6 reps with heavy weights to build lower body strength for explosive movements",
            },
            {
              name: "Core Stability Exercises",
              description:
                "Planks, Russian Twists, and Leg Raises to improve core strength for rotational power and stability",
            },
          ],
        },
        day_2: {
          exercises: [
            {
              name: "Agility Drills",
              description:
                "Ladder drills, cone drills, and shuttle runs to improve footwork and quickness",
            },
            {
              name: "Pitching Practice",
              description: "Focus on pitching mechanics and accuracy",
            },
            {
              name: "Upper Body Strength - Bench Press",
              description:
                "4 sets of 8 reps to develop chest and arm strength for throwing and hitting",
            },
            {
              name: "Rotator Cuff Exercises",
              description:
                "External and internal rotation exercises to prevent shoulder injuries",
            },
          ],
        },
        day_3: {
          exercises: [
            {
              name: "Active Recovery",
              description:
                "Light cardio, stretching, or yoga for recovery and flexibility",
            },
          ],
        },
      },
      week_2: {
        day_1: {
          exercises: [
            {
              name: "Dynamic Warm-up",
              description:
                "10-15 min of dynamic stretching and mobility exercises",
            },
            {
              name: "Fielding Drills",
              description: "Work on fielding ground balls and pop flies",
            },
            {
              name: "Strength Training - Deadlifts",
              description:
                "4 sets of 6 reps to strengthen the posterior chain for power and explosiveness",
            },
            {
              name: "Shoulder Stability Exercises",
              description:
                "External rotations, YTWL exercises to maintain shoulder health",
            },
          ],
        },
        day_2: {
          exercises: [
            {
              name: "Speed Training",
              description:
                "Sprints, agility ladder drills for improving speed and reaction time",
            },
            {
              name: "Catching Practice",
              description:
                "Focus on receiving pitches and blocking balls in the dirt",
            },
            {
              name: "Power Training - Medicine Ball Throws",
              description:
                "4 sets of 8 reps to enhance explosive power for throwing and hitting",
            },
            {
              name: "Leg Strength - Lunges",
              description:
                "3 sets of 12 reps to improve leg strength and stability",
            },
          ],
        },
        day_3: {
          exercises: [
            {
              name: "Sport-specific Skills Practice",
              description:
                "Work on hitting, fielding, and throwing drills specific to baseball",
            },
          ],
        },
      },
      week_3: {
        day_1: {
          exercises: [
            {
              name: "Dynamic Warm-up",
              description:
                "10-15 min of dynamic stretching and mobility exercises",
            },
            {
              name: "Batting Practice",
              description:
                "Focus on different types of pitches and situational hitting",
            },
            {
              name: "Strength Training - Power Cleans",
              description:
                "4 sets of 5 reps to develop explosive power for hitting and throwing",
            },
            {
              name: "Core Strength - Wood Chops",
              description: "3 sets of 12 reps to improve rotational power",
            },
          ],
        },
        day_2: {
          exercises: [
            {
              name: "Agility Drills",
              description:
                "Improve agility and quickness with ladder drills and cone drills",
            },
            {
              name: "Pitching Practice",
              description: "Work on different pitches and control",
            },
            {
              name: "Upper Body Strength - Pull-ups",
              description: "4 sets of 8 reps to strengthen the back and arms",
            },
            {
              name: "Rotator Cuff Exercises",
              description:
                "External and internal rotation exercises for shoulder health",
            },
          ],
        },
        day_3: {
          exercises: [
            {
              name: "Active Recovery",
              description: "Light cardio, stretching, or yoga for recovery",
            },
          ],
        },
      },
    },
  },
  // Add 10 more training plans here...
];
