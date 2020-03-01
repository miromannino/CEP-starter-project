import 'script-loader!./CSInterface.js';

import 'style/index.scss';

import {UI} from 'js/ui.js';


// ----------------------------------
// Init
// ----------------------------------

// Restarting extension
function restartExtension() {
    try {
        process.removeAllListeners();
        window.location.href = "../ui/index.html";
    } catch (e) {
        window.location.href = "../ui/index.html";
    }
}

var restartExtensionButton = document.getElementById('restartExtensionBtn');
if (restartExtensionButton) { // It might not be in the HTML in production
    restartExtensionButton.addEventListener('click', () => restartExtension());
}

var csInterface = new CSInterface();

// This is executed everytime the HTML panel is loaded. There is no need to restart Photoshop
csInterface.evalScript('$.evalFile("' + csInterface.getSystemPath(SystemPath.EXTENSION) + '/jsx/index.jsx")');

var ui = new UI(csInterface);