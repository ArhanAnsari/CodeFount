// app/api/generate/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// Define the model and API key
const MODEL_NAME = "gemini-1.5-pro";
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("Gemini API key is missing.");
}

// Initialize Google Generative AI client
const genAI = new GoogleGenerativeAI(API_KEY);

// Function to call Google Generative AI (Gemini) API
async function runChat(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    // Generate content from AI
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
      safetySettings,
    });

    // Extract text response
    const generatedText =
      result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";

    return generatedText;
  } catch (error) {
    console.error("Error generating AI content with Gemini:", error);
    throw new Error("AI content generation failed.");
  }
}

// POST handler for the API route
export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
    }

    // Run the AI chat function to generate content
    const generatedContent = await runChat(prompt);

    return NextResponse.json({ generatedContent }, { status: 200 });
  } catch (error) {
    console.error("Error in API POST request:", error);
    return NextResponse.json({ error: "An error occurred while generating content." }, { status: 500 });
  }
}
