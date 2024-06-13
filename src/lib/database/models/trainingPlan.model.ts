import { Schema, model, models } from "mongoose";

const trainingPlanSchema = new Schema(
  {
    userInfo: {
      age: { type: Number, required: false },
      gender: { type: String, required: false },
      skillLevel: { type: String, required: false },
      sport: { type: String, required: false },
      duration: { type: String, required: false },
    },
    exercisePlan: {
      type: Map,
      of: {
        type: Map,
        of: {
          exercises: [
            {
              name: { type: String, required: false },
              description: { type: String, required: false },
            },
          ],
        },
      },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { strict: false }
);

const TrainingPlan =
  models?.TrainingPlan || model("TrainingPlan", trainingPlanSchema);

export default TrainingPlan;
