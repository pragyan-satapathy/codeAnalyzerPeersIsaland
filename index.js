require('dotenv').config();
const { cloneRepoAndGetRoot } = require('./helpers/cloneProject');
const { scanFiles } = require('./helpers/contentLoader');
const { getAllFileData } = require('./allFileData');
const { getProjectDetails } = require('./getProjectDetails');

const mainFunc = async () => {
    try {
        // get github url from command line args
        const gitUrlIndex = process.argv.indexOf("-gitUrl");
        const gitUrl = (gitUrlIndex !== -1) ? process.argv[gitUrlIndex + 1] : null;
        if (!gitUrl) throw new Error("git url not provided");

        // clone the github url in current repo
        const basePath = await cloneRepoAndGetRoot(gitUrl);
        console.log("clone successfully", basePath)

        // read all files
        let contents = await scanFiles(basePath);

        // get all file data        
        const allFileData = await getAllFileData(contents);

        // get project details
        await getProjectDetails(allFileData)
    } catch (error) {
        console.log(error.message);
    }
}



mainFunc()