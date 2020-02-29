import 'script-loader!./CSInterface.js';
import 'script-loader!./JSX.js';

import '../assets/style/index.scss';

import { writeCiaoInRoot } from './utils';

// Restarting extension
function restartExtension() {
    try {
        process.removeAllListeners();
        window.location.href = "../client/index.html";
    } catch (e) {
        window.location.href = "../client/index.html";
    }
}

function setSelectedLayerOpacity(o) {
    csInterface.evalRoutine('setSelectedLayeroOpacity')
    app.activeDocument.activeLayer.opacity = o;
}

// ----------------------------------
// Bootstrap
// ----------------------------------

var csInterface = new CSInterface();
jsx.evalFile('index.jsx', function jsxLoaded() {
    console.log('jsx loaded');
});

var restartExtensionButton = document.getElementById('#restartExtensionButton');
if (restartExtensionButton) {
    restartExtensionButton.addEventListener('click', () => restartExtension());
}