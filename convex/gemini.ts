import { mutation } from './_generated/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Store in .env

// AI Code Suggestion API
export const suggestCode = mutation(async ({}, { prompt }: { prompt: string }) => {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
  });

  const data = await response.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No suggestion available';
});
