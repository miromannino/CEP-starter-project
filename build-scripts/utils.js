const fs = require('fs');
const path = require('path');
const os = require('os');

function isMSWindows() {
    return process.platform.startsWith('win');
}

function getExtensionsPath() {
    let extPath = isMSWindows() 
        ? path.join(os.userInfo().homedir, '\\AppData\\Roaming\\Adobe\\CEP\\extensions')
        : path.join(os.homedir(), 'Library/Application Support/Adobe/CEP/extensions')
    if (!fs.existsSync(extPath)) fs.mkdirSync(extPath, {recursive: true});
    return extPath;
}

// https://stackoverflow.com/questions/18052762/remove-directory-which-is-not-empty/32197381
function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file, index) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
      });
      fs.rmdirSync(folderPath);
    }
}

module.exports = {
    isMSWindows,
    getExtensionsPath,
    deleteFolderRecursive
};