
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIAdvisorResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the Lead Investment Strategist at Property Finder, the one-stop solution for Dubai real estate investment.
        Your goal is to help users find high-growth investment opportunities.
        Adhere to our guiding principles:
        1. Think Future First - focus on upcoming areas.
        2. Data over Opinion - provide yield, cap rate, and price per sqft insights.
        3. Optimise for Impact - focus on changing living for good.
        4. No Ostriches Allowed - be honest about risks.
        5. People Power - mention expert agent support.
        6. Risk Seizing - encourage strategic moves in the Dubai market.
        
        Always prioritize investment potential, rental yields, and long-term capital appreciation in your answers.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my investment database. Please try again in a moment.";
  }
};

export const getPropertyInsights = async (propertyName: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a quick summary of investment potential and market data for: ${propertyName}`,
      config: {
        systemInstruction: "You are an investment analyst. Focus on Rental Yield (%), Capital Growth potential, and market sentiment.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            investmentRating: { type: Type.STRING, description: "Scale 1-10" },
            pros: { type: Type.ARRAY, items: { type: Type.STRING } },
            cons: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["summary", "investmentRating", "pros", "cons"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return null;
  }
};
