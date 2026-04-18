
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the AI Assistant for Nick Njau's portfolio website. 
Nick is an IT Specialist, Front-End Web Developer, and AI Tools expert.
He has experience supporting NGOs to increase reach and engagement.
Key Skills: HTML, CSS, JS, Tailwind, AI Prompting, Canva, CapCut, Apps Script, and even Plumbing (Grade 1 Cert).
He is looking for roles in web dev, digital communications, or AI-assisted marketing.
He also has an official merchandise collection featuring premium tech-inspired hoodies, priced at 950 KES each. The collection features high-contrast designs with black people.

When answering:
1. Be professional, friendly, and concise.
2. If asked about projects, mention his NGO outreach work or AI content assistant.
3. If asked about contact, give his WhatsApp: +254769504732 and email: sphynick@gmail.com.
4. If asked about merchandise or hoodies, mention the "Tech Collection" available on the /hoodies page, priced at 950 KES.
5. Mention that the hoodies feature unique designs with black people.
6. Keep the persona helpful and enthusiastic about tech.
`;

export async function getGeminiResponse(userMessage: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Feel free to contact Nick directly!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble right now. Please try again or reach out to Nick via email.";
  }
}
