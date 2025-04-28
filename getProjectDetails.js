const { fetchChatGPTResponse } = require('./helpers/fetchChatGPTResponse');
const { objectToJson } = require('./helpers/objectToJson');
const { SYSTEM_MSG_PROJECT, USER_MSG_PROJECT } = require('./helpers/promt');
const fs = require('fs').promises

const getProjectDetails = async (allFileData) => {
    const response = await fetchChatGPTResponse( SYSTEM_MSG_PROJECT, USER_MSG_PROJECT(allFileData))
    await objectToJson('projectDetails.json', JSON.parse(response))
    return response
}

module.exports = {
  getProjectDetails
}