# codeAnalyzerPeersIsaland

A Node.js tool to clone a GitHub repository, scan its files, and extract project details for analysis.

## Prerequisites

- Node.js 
- npm (Node package manager)

## Installation

Clone this repository and install dependencies:

```bash
npm install
```

## setup
Create a .env file in root folder with below data:
OPENAI_API_KEY=<Your API KEY>


## Usage

Run the tool with the GitHub repository URL as a command line argument:

```bash
node index.js -gitUrl <GitHub repository URL>
```

Example:

```bash
node index.js -gitUrl https://github.com/user/repository.git
```

The tool will clone the specified repository into a local folder, scan all files, and extract project details.

## Project Structure

- `index.js`: Main entry point of the application.
- `helpers/`: Contains helper modules for cloning repos, scanning files, and other utilities.
- `allFileData.js`: Module to process and gather data from files.
- `getProjectDetails.js`: Module to extract and display project details.

## JSON file
- allFileData.json: refer for all file data
- projectDetails.json: refer for project details 

## Dependencies

- `@langchain/core`
- `@langchain/openai`
- `dotenv`
- `globby`
- `langchain`

## License

This project is licensed under the ISC License.
