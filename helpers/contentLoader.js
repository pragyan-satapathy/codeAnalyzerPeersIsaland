const { promises: fs } = require('fs');
const path = require('path');

const scanFiles = async (dir) => {
  let entries = await fs.readdir(dir, { withFileTypes: true });
  let fileArr = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
        const subFiles = await scanFiles(fullPath);
        fileArr = fileArr.concat(subFiles);
    } else if (entry.isFile() && fullPath.endsWith('.java')) {
      const content = await fs.readFile(fullPath, 'utf8');
      fileArr.push({ filename: path.basename(fullPath), data: content });
    }
  }
  return fileArr;
};

module.exports = { scanFiles };