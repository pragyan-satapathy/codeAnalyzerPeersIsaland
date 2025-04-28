const { RecursiveCharacterTextSplitter } = require('@langchain/textsplitters');

const createTextSplitter = (size, overLap) => {
  return new RecursiveCharacterTextSplitter({
    size,
    overLap,
  });
};

const splitIntoChunks = async (text) => {
  return await createTextSplitter(20000, 50).splitText(text);
};

module.exports = { splitIntoChunks };
