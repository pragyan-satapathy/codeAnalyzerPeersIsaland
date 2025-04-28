
const { splitIntoChunks } = require('./helpers/chunkGenerator');
const { fetchChatGPTResponse } = require('./helpers/fetchChatGPTResponse');
const {objectToJson} = require('./helpers/objectToJson');
const { SYSTEM_MSG_FILE, USER_MSG_FILE } = require('./helpers/promt');

const getAllFileData = async (contents) => {
    const allFileData = [];
    for (const { filename, data } of contents) {
        const chunks = await splitIntoChunks(data);
        for (const chunk of chunks) {
            const result = await fetchChatGPTResponse( SYSTEM_MSG_FILE, USER_MSG_FILE(chunk))
            try {
                const resultObject = JSON.parse(result);
                resultObject.filename = filename;
                allFileData.push(resultObject);
            } catch (err) {
                console.error(`Failed to parse response for file ${filename}:`, err.message);
            }
        }
    }

    await objectToJson('allFileData.json', allFileData)
    return allFileData
}

module.exports = {
    getAllFileData,
}