const { ChatOpenAI } = require("@langchain/openai");

const buildOpenAIPrompt = (systemMessage, userMessage) => ([
  { role: "system", content: systemMessage },
  { role: "user", content: userMessage }
])

const fetchChatGPTResponse = async (systemMessage, userMessage) => {
  const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    modelName: "gpt-4",
    temperature: 1,
    responseFormat: "json"
  });
  const prompt = buildOpenAIPrompt(systemMessage, userMessage);
  const response = await model.invoke(prompt);
  return response.content;
};

module.exports = {
  fetchChatGPTResponse,
}