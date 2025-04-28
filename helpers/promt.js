const USER_MSG_FILE = (message) =>`
File Chunk: ${message}
`
const SYSTEM_MSG_FILE = `
Act as a software code analyzer.

Analyze the following file chunk and respond with a JSON object only, strictly matching this structure:
{
  "fileSummary": "",
  "keyMethods": [
    {
      "methodName": "",
      "description": ""
    }
  ],
  "fileCodeComplexity": "",
  "improvementScopes": ""
}

Rules:
- Do not include any extra text.
- Do not add any comments or explanations.
- Do not wrap the JSON inside triple backticks (\`\`\`).
- Only return the pure JSON object.
`;


const USER_MSG_PROJECT = (message) => `
All File Data: ${JSON.stringify(message, null, 2)}
`;

const SYSTEM_MSG_PROJECT = `
Act as a project code analyzer assistant.

I'll give you a Object containing all file details like fileSummary, keyMethods(methodName, description), fileCodeComplexity, improvementScopes.

Analyze the given object, Extract a project-level summary, key methods (max 5), code complexity, and improvement areas based on the file summaries and key methods provided in JSON format. 
Give output which strictly matching this structure and should be JSON:
{
  "projectSummary": "",
  "projectKeyMethods": [
    {
      "methodName": "",
      "description": ""
    }
  ],
  "projectCodeComplexity": "Hard/Medium/Easy",
  "projectImprovementScopes": ""
}

Rules:
- Do not include any extra text.
- Do not add any comments or explanations.
- Do not wrap the JSON inside triple backticks (\`\`\`).
- Only return the pure JSON object.
`;


module.exports = {
    SYSTEM_MSG_FILE,
    SYSTEM_MSG_PROJECT,
    USER_MSG_FILE,
    USER_MSG_PROJECT,
}