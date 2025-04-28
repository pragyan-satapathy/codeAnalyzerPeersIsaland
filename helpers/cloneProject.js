const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const cloneRepoAndGetRoot = (url) => new Promise((resolve, reject) => {
    const rootFolder = url.split('/').pop().replace(/\.git$/, '');
    const folderPath = path.join(process.cwd(), rootFolder);

    if (fs.existsSync(folderPath)) {
        console.log(`Folder "${rootFolder}" already exists. Deleting it...`);
        fs.rmSync(folderPath, { recursive: true, force: true });
    }

    exec(`git clone ${url}`, (error, stdout, stderr) => {
        if (error) return reject(`Clone error: ${error.message}`);
        if (stderr) console.warn(`Git warning: ${stderr}`);

        resolve(rootFolder);
    });
});

module.exports = {
    cloneRepoAndGetRoot
};
