"use server";
import { revalidatePath } from "next/cache";
import User from "../database/models/user.model";
import TrainingPlan from "../database/models/trainingPlan.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

interface Exercise {
  name: string;
  description: string;
}

interface Day {
  dayNumber: number;
  exercises: Exercise[];
}

interface Week {
  week: number;
  days: Day[];
}

export interface CreateTrainingPlanParams {
  age: number;
  gender: string;
  level: string;
  sport: string;
  duration: number;
  exercises: Week[];
}

export interface UpdateTrainingPlanParams {
  age?: number;
  gender?: string;
  level?: string;
  sport?: string;
  duration?: number;
  exercises?: Week[];
}

const populateUser = (query: any) =>
  query.populate({
    path: "author",
    model: User,
    select: "_id firstName lastName clerkId",
  });

// CREATE
export async function createTrainingPlan(
  trainingPlan: CreateTrainingPlanParams,
  userId: string
) {
  try {
    await connectToDatabase();

    const author = await User.findById(userId);
    if (!author) {
      throw new Error("User not found");
    }

    const newTrainingPlan = await TrainingPlan.create({
      ...trainingPlan,
      author: author._id,
    });

    return JSON.parse(JSON.stringify(newTrainingPlan));
  } catch (error) {
    handleError(error);
  }
}

// GET PLANS BY USER
export async function getUserPlans({
  limit = 9,
  page = 1,
  userId,
}: {
  limit?: number;
  page: number;
  userId: string;
}) {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;

    const plans = await populateUser(TrainingPlan.find({ author: userId }))
      .sort({ updatedAt: -1 })
      .skip(skipAmount)
      .limit(limit);

    const totalPlans = await TrainingPlan.find({
      author: userId,
    }).countDocuments();

    return {
      data: JSON.parse(JSON.stringify(plans)),
      totalPages: Math.ceil(totalPlans / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getTrainingPlanById(planId: string) {
  try {
    await connectToDatabase();

    const trainingPlan = await populateUser(TrainingPlan.findById(planId));

    if (!trainingPlan) throw new Error("Training Plan not found");

    return JSON.parse(JSON.stringify(trainingPlan));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateTrainingPlan(
  planId: string,
  planUpdates: UpdateTrainingPlanParams
) {
  try {
    await connectToDatabase();

    const updatedPlan = await TrainingPlan.findByIdAndUpdate(
      planId,
      planUpdates,
      {
        new: true,
      }
    );

    if (!updatedPlan) throw new Error("Training plan update failed");

    return JSON.parse(JSON.stringify(updatedPlan));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteTrainingPlan(planId: string) {
  try {
    await connectToDatabase();

    // Find training plan to delete
    const planToDelete = await TrainingPlan.findById(planId);

    if (!planToDelete) {
      throw new Error("Training plan not found");
    }

    // Delete training plan
    const deletedPlan = await TrainingPlan.findByIdAndDelete(planId);
    revalidatePath("/");

    return deletedPlan ? JSON.parse(JSON.stringify(deletedPlan)) : null;
  } catch (error) {
    handleError(error);
  }
}
