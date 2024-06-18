import Header from "@/components/shared/Header";
import { getUserPlans } from "@/lib/actions/trainingPlan.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type SearchParamProps = {
  searchParams: {
    id?: string;
  };
};

const TrainingPageMenu = async ({ searchParams }: SearchParamProps) => {
  // const page = Number(searchParams?.page) || 1;
  const page = 1;
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const plans = await getUserPlans({ page, userId: user._id });

  return (
    <>
      <Header title="Training" subtitle={""} />
      <section className="training">
        <Link href="/training/add">
          <Button className="submit-button capitalize my-4">
            Create New Training Plan
          </Button>
        </Link>

        <div>
          {plans?.data.map((plan: any) => (
            <Link
              href={`/training/${plan._id}`}
              className="flex flex-col border-2 rounded-full my-3 p-2 items-center justify-start space-x-2"
              key={plan._id}
            >
              <div>Sports: {plan.trainingPlan.userInfo.sport}</div>
              <div>Age: {plan.trainingPlan.userInfo.age}</div>
              <div>Gender: {plan.trainingPlan.userInfo.gender}</div>
              <div>Skill Level: {plan.trainingPlan.userInfo.skillLevel}</div>
              <div>Duration: {plan.trainingPlan.userInfo.duration}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default TrainingPageMenu;
