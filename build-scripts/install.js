const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const utils = require('./utils');
const pkgConfig = require('../package.json');

let extPath = path.join(utils.getExtensionsPath(), pkgConfig.extensionId);

console.log('Removing already existing extension in path...');
try {
    fs.unlinkSync(extPath);
    utils.deleteFolderRecursive(extPath);
} catch(e) {
    console.log(e);
}

console.log('Enable debug mode in Photoshop...');
if (utils.isMSWindows()) {
    cp.execSync('REG ADD HKEY_CURRENT_USER\\Software\\Adobe\\CSXS.8 /v PlayerDebugMode /t REG_SZ /d 1 /f');
    cp.execSync('REG ADD HKEY_CURRENT_USER\\Software\\Adobe\\CSXS.9 /v PlayerDebugMode /t REG_SZ /d 1 /f');
} else {
    cp.execSync('defaults write com.adobe.CSXS.8 PlayerDebugMode 1', { stdio: [0, 1, 2] });
    cp.execSync('defaults write com.adobe.CSXS.9 PlayerDebugMode 1', { stdio: [0, 1, 2] });
}

console.log('Installing extension as symlink...');
fs.symlinkSync(path.resolve('./dist'), extPath, utils.isMSWindows() ? 'junction' : 'dir');
