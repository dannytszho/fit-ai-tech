"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomField } from "./CustomField";
import { ageOptions, levelOptions, sportOptions } from "@/constants";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const formSchema = z.object({
  sport: z.string(),
  age: z.string().optional(),
  level: z.string().optional(),
  duration: z.string().optional(),
  // height: z.number().optional(),
  // weight: z.number().optional(),
});

const TrainingForm = ({
  onclick,
}: {
  onclick: (
    sport: string,
    level: string,
    age: string,
    duration: string
  ) => void;
}) => {
  const [sport, setSport] = useState("baseball");
  const [age, setAge] = useState("25");
  const [level, setLevel] = useState("beginner");
  const [duration, setDuration] = useState("1");
  const [isCreating, setIsCreating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sport: "baseball",
      level: "beginner",
      age: "25",
      duration: "1",
    },
  });

  // Todo: Add a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      onclick(sport, level, age, duration);
      // router.push(`/training`);
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  }

  const onSelectFieldHandler = (
    value: string,
    onChangeField: (value: string) => void
  ) => {
    return onChangeField(value);
  };

  const onCreateHandler = async () => {
    setIsCreating(true);
    onclick(sport, level, age, duration);
  };

  return (
    <div className="relative">
      {isCreating && (
        <div className="flex flex-col justify-center items-center absolute inset-0 bg-white bg-opacity-50">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-300"></div>
          <div className="text-lg mt-4">Loading...</div>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomField
            control={form.control}
            name="sport"
            formLabel="Sport"
            className="w-full"
            render={({ field }) => (
              <Select
                onValueChange={(value) => {
                  onSelectFieldHandler(value, field.onChange);
                  setSport(value);
                }}
                value={field.value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a sport" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(sportOptions).map((sport) => (
                    <SelectItem
                      key={sport}
                      value={sport}
                      className="select-item"
                    >
                      {sportOptions[sport as keyof typeof sportOptions]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <CustomField
            control={form.control}
            name="level"
            formLabel="Level"
            className="w-full"
            render={({ field }) => (
              <Select
                onValueChange={(value) => {
                  onSelectFieldHandler(value, field.onChange);
                  setLevel(value);
                }}
                value={field.value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a sport" />
                </SelectTrigger>
                <SelectContent>
                  {levelOptions.map((level) => (
                    <SelectItem
                      key={level}
                      value={level}
                      className="select-item"
                    >
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <div className="flex justify-between">
            <CustomField
              control={form.control}
              name="age"
              formLabel="Age"
              className="w-[180px]"
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    onSelectFieldHandler(value, field.onChange);
                    setAge(value);
                  }}
                  value={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your age" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(ageOptions).map((age) => (
                      <SelectItem key={age} value={age} className="select-item">
                        {ageOptions[age as unknown as keyof typeof ageOptions]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <CustomField
              control={form.control}
              name="duration"
              formLabel="Duaration (weeks)"
              className="w-[180px]"
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    3;
                    onSelectFieldHandler(value, field.onChange);
                    setDuration(value);
                  }}
                  value={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your age" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(ageOptions).map((age) => (
                      <SelectItem key={age} value={age} className="select-item">
                        {ageOptions[age as unknown as keyof typeof ageOptions]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <Button
            type="submit"
            className="submit-button capitalize"
            disabled={isCreating}
            onClick={onCreateHandler}
          >
            {isCreating
              ? "Creating a training plan..."
              : "Create a training plan"}
          </Button>
          {/* <Button
          type="submit"
          className="submit-button capitalize"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Save Training Plan"}
        </Button> */}
        </form>
      </Form>
    </div>
  );
};

export default TrainingForm;
