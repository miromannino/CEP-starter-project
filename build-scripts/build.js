const fs = require('fs-extra');
const path = require('path');
const utils = require('./utils.js');
const cp = require('child_process');
const pkgConfig = require('../package.json');
const manifestBuilder = require('./manifest-builder');
const debugConfigBuilder = require('./debug-config-builder');

utils.deleteFolderRecursive('./dist');
fs.mkdirSync('./dist');
fs.copySync('./src/index.html', './dist/index.html');
fs.copySync('./src/imgs', './dist/imgs');
fs.copySync('./src/jsx', './dist/jsx');
fs.copySync('./src/style', './dist/style');
fs.mkdirSync('./dist/CSXS');
fs.mkdirSync('./dist/js');


let manifestFile = fs.createWriteStream('./dist/CSXS/manifest.xml');
manifestFile.write(manifestBuilder(pkgConfig));
manifestFile.end();

let debugConfFile = fs.createWriteStream('./dist/.debug');
debugConfFile.write(debugConfigBuilder(pkgConfig));
debugConfFile.end();

var child = cp.spawn('webpack', ['--mode=development']);
child.stdout.on('data', data => process.stdout.write(data.toString()));
child.stderr.on('data', data => process.stderr.write(data.toString()));

