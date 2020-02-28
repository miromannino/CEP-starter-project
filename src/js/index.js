import 'script-loader!./CSInterface.js'; // Execute JS script once in global context

import {writeCiaoInRoot} from './utils';

import '../assets/style/index.scss';

var csInterface = new CSInterface();

writeCiaoInRoot();
