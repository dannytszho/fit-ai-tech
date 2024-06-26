import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const params = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an AI personal trainer for different sports, answer any questions to the best of your ability.",
      },
      {
        role: "user",
        content: params.prompt,
      },
    ],
    temperature: 0,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return NextResponse.json(response);
}
