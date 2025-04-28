const fs = require('fs').promises

const objectToJson = async (fileName, data) => {
    try {
        await fs.writeFile(fileName, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`Successfully written all data into ${fileName}`);
    } catch (err) {
        console.error(`Failed to write ${fileName}: ${err.message}`);
    }
}

module.exports ={
    objectToJson
}