/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/index.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/index.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  color: black;\n  background-color: white; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/js/CSInterface.js":
/*!*********************************************************!*\
  !*** ./node_modules/raw-loader!./src/js/CSInterface.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**************************************************************************************************\n*\n* ADOBE SYSTEMS INCORPORATED\n* Copyright 2013 Adobe Systems Incorporated\n* All Rights Reserved.\n*\n* NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the\n* terms of the Adobe license agreement accompanying it.  If you have received this file from a\n* source other than Adobe, then your use, modification, or distribution of it requires the prior\n* written permission of Adobe.\n*\n**************************************************************************************************/\n\n/** CSInterface - v9.4.0 */\n\n/**\n * Stores constants for the window types supported by the CSXS infrastructure.\n */\nfunction CSXSWindowType()\n{\n}\n\n/** Constant for the CSXS window type Panel. */\nCSXSWindowType._PANEL = \"Panel\";\n\n/** Constant for the CSXS window type Modeless. */\nCSXSWindowType._MODELESS = \"Modeless\";\n\n/** Constant for the CSXS window type ModalDialog. */\nCSXSWindowType._MODAL_DIALOG = \"ModalDialog\";\n\n/** EvalScript error message */\nEvalScript_ErrMessage = \"EvalScript error.\";\n\n/**\n * @class Version\n * Defines a version number with major, minor, micro, and special\n * components. The major, minor and micro values are numeric; the special\n * value can be any string.\n *\n * @param major   The major version component, a positive integer up to nine digits long.\n * @param minor   The minor version component, a positive integer up to nine digits long.\n * @param micro   The micro version component, a positive integer up to nine digits long.\n * @param special The special version component, an arbitrary string.\n *\n * @return A new \\c Version object.\n */\nfunction Version(major, minor, micro, special)\n{\n    this.major = major;\n    this.minor = minor;\n    this.micro = micro;\n    this.special = special;\n}\n\n/**\n * The maximum value allowed for a numeric version component.\n * This reflects the maximum value allowed in PlugPlug and the manifest schema.\n */\nVersion.MAX_NUM = 999999999;\n\n/**\n * @class VersionBound\n * Defines a boundary for a version range, which associates a \\c Version object\n * with a flag for whether it is an inclusive or exclusive boundary.\n *\n * @param version   The \\c #Version object.\n * @param inclusive True if this boundary is inclusive, false if it is exclusive.\n *\n * @return A new \\c VersionBound object.\n */\nfunction VersionBound(version, inclusive)\n{\n    this.version = version;\n    this.inclusive = inclusive;\n}\n\n/**\n * @class VersionRange\n * Defines a range of versions using a lower boundary and optional upper boundary.\n *\n * @param lowerBound The \\c #VersionBound object.\n * @param upperBound The \\c #VersionBound object, or null for a range with no upper boundary.\n *\n * @return A new \\c VersionRange object.\n */\nfunction VersionRange(lowerBound, upperBound)\n{\n    this.lowerBound = lowerBound;\n    this.upperBound = upperBound;\n}\n\n/**\n * @class Runtime\n * Represents a runtime related to the CEP infrastructure.\n * Extensions can declare dependencies on particular\n * CEP runtime versions in the extension manifest.\n *\n * @param name    The runtime name.\n * @param version A \\c #VersionRange object that defines a range of valid versions.\n *\n * @return A new \\c Runtime object.\n */\nfunction Runtime(name, versionRange)\n{\n    this.name = name;\n    this.versionRange = versionRange;\n}\n\n/**\n* @class Extension\n* Encapsulates a CEP-based extension to an Adobe application.\n*\n* @param id              The unique identifier of this extension.\n* @param name            The localizable display name of this extension.\n* @param mainPath        The path of the \"index.html\" file.\n* @param basePath        The base path of this extension.\n* @param windowType          The window type of the main window of this extension.\n                 Valid values are defined by \\c #CSXSWindowType.\n* @param width           The default width in pixels of the main window of this extension.\n* @param height          The default height in pixels of the main window of this extension.\n* @param minWidth        The minimum width in pixels of the main window of this extension.\n* @param minHeight       The minimum height in pixels of the main window of this extension.\n* @param maxWidth        The maximum width in pixels of the main window of this extension.\n* @param maxHeight       The maximum height in pixels of the main window of this extension.\n* @param defaultExtensionDataXml The extension data contained in the default \\c ExtensionDispatchInfo section of the extension manifest.\n* @param specialExtensionDataXml The extension data contained in the application-specific \\c ExtensionDispatchInfo section of the extension manifest.\n* @param requiredRuntimeList     An array of \\c Runtime objects for runtimes required by this extension.\n* @param isAutoVisible       True if this extension is visible on loading.\n* @param isPluginExtension   True if this extension has been deployed in the Plugins folder of the host application.\n*\n* @return A new \\c Extension object.\n*/\nfunction Extension(id, name, mainPath, basePath, windowType, width, height, minWidth, minHeight, maxWidth, maxHeight,\n                   defaultExtensionDataXml, specialExtensionDataXml, requiredRuntimeList, isAutoVisible, isPluginExtension)\n{\n    this.id = id;\n    this.name = name;\n    this.mainPath = mainPath;\n    this.basePath = basePath;\n    this.windowType = windowType;\n    this.width = width;\n    this.height = height;\n    this.minWidth = minWidth;\n    this.minHeight = minHeight;\n    this.maxWidth = maxWidth;\n    this.maxHeight = maxHeight;\n    this.defaultExtensionDataXml = defaultExtensionDataXml;\n    this.specialExtensionDataXml = specialExtensionDataXml;\n    this.requiredRuntimeList = requiredRuntimeList;\n    this.isAutoVisible = isAutoVisible;\n    this.isPluginExtension = isPluginExtension;\n}\n\n/**\n * @class CSEvent\n * A standard JavaScript event, the base class for CEP events.\n *\n * @param type        The name of the event type.\n * @param scope       The scope of event, can be \"GLOBAL\" or \"APPLICATION\".\n * @param appId       The unique identifier of the application that generated the event.\n * @param extensionId     The unique identifier of the extension that generated the event.\n *\n * @return A new \\c CSEvent object\n */\nfunction CSEvent(type, scope, appId, extensionId)\n{\n    this.type = type;\n    this.scope = scope;\n    this.appId = appId;\n    this.extensionId = extensionId;\n}\n\n/** Event-specific data. */\nCSEvent.prototype.data = \"\";\n\n/**\n * @class SystemPath\n * Stores operating-system-specific location constants for use in the\n * \\c #CSInterface.getSystemPath() method.\n * @return A new \\c SystemPath object.\n */\nfunction SystemPath()\n{\n}\n\n/** The path to user data.  */\nSystemPath.USER_DATA = \"userData\";\n\n/** The path to common files for Adobe applications.  */\nSystemPath.COMMON_FILES = \"commonFiles\";\n\n/** The path to the user's default document folder.  */\nSystemPath.MY_DOCUMENTS = \"myDocuments\";\n\n/** @deprecated. Use \\c #SystemPath.Extension.  */\nSystemPath.APPLICATION = \"application\";\n\n/** The path to current extension.  */\nSystemPath.EXTENSION = \"extension\";\n\n/** The path to hosting application's executable.  */\nSystemPath.HOST_APPLICATION = \"hostApplication\";\n\n/**\n * @class ColorType\n * Stores color-type constants.\n */\nfunction ColorType()\n{\n}\n\n/** RGB color type. */\nColorType.RGB = \"rgb\";\n\n/** Gradient color type. */\nColorType.GRADIENT = \"gradient\";\n\n/** Null color type. */\nColorType.NONE = \"none\";\n\n/**\n * @class RGBColor\n * Stores an RGB color with red, green, blue, and alpha values.\n * All values are in the range [0.0 to 255.0]. Invalid numeric values are\n * converted to numbers within this range.\n *\n * @param red   The red value, in the range [0.0 to 255.0].\n * @param green The green value, in the range [0.0 to 255.0].\n * @param blue  The blue value, in the range [0.0 to 255.0].\n * @param alpha The alpha (transparency) value, in the range [0.0 to 255.0].\n *      The default, 255.0, means that the color is fully opaque.\n *\n * @return A new RGBColor object.\n */\nfunction RGBColor(red, green, blue, alpha)\n{\n    this.red = red;\n    this.green = green;\n    this.blue = blue;\n    this.alpha = alpha;\n}\n\n/**\n * @class Direction\n * A point value  in which the y component is 0 and the x component\n * is positive or negative for a right or left direction,\n * or the x component is 0 and the y component is positive or negative for\n * an up or down direction.\n *\n * @param x     The horizontal component of the point.\n * @param y     The vertical component of the point.\n *\n * @return A new \\c Direction object.\n */\nfunction Direction(x, y)\n{\n    this.x = x;\n    this.y = y;\n}\n\n/**\n * @class GradientStop\n * Stores gradient stop information.\n *\n * @param offset   The offset of the gradient stop, in the range [0.0 to 1.0].\n * @param rgbColor The color of the gradient at this point, an \\c #RGBColor object.\n *\n * @return GradientStop object.\n */\nfunction GradientStop(offset, rgbColor)\n{\n    this.offset = offset;\n    this.rgbColor = rgbColor;\n}\n\n/**\n * @class GradientColor\n * Stores gradient color information.\n *\n * @param type          The gradient type, must be \"linear\".\n * @param direction     A \\c #Direction object for the direction of the gradient\n                (up, down, right, or left).\n * @param numStops          The number of stops in the gradient.\n * @param gradientStopList  An array of \\c #GradientStop objects.\n *\n * @return A new \\c GradientColor object.\n */\nfunction GradientColor(type, direction, numStops, arrGradientStop)\n{\n    this.type = type;\n    this.direction = direction;\n    this.numStops = numStops;\n    this.arrGradientStop = arrGradientStop;\n}\n\n/**\n * @class UIColor\n * Stores color information, including the type, anti-alias level, and specific color\n * values in a color object of an appropriate type.\n *\n * @param type          The color type, 1 for \"rgb\" and 2 for \"gradient\".\n                The supplied color object must correspond to this type.\n * @param antialiasLevel    The anti-alias level constant.\n * @param color         A \\c #RGBColor or \\c #GradientColor object containing specific color information.\n *\n * @return A new \\c UIColor object.\n */\nfunction UIColor(type, antialiasLevel, color)\n{\n    this.type = type;\n    this.antialiasLevel = antialiasLevel;\n    this.color = color;\n}\n\n/**\n * @class AppSkinInfo\n * Stores window-skin properties, such as color and font. All color parameter values are \\c #UIColor objects except that systemHighlightColor is \\c #RGBColor object.\n *\n * @param baseFontFamily        The base font family of the application.\n * @param baseFontSize          The base font size of the application.\n * @param appBarBackgroundColor     The application bar background color.\n * @param panelBackgroundColor      The background color of the extension panel.\n * @param appBarBackgroundColorSRGB     The application bar background color, as sRGB.\n * @param panelBackgroundColorSRGB      The background color of the extension panel, as sRGB.\n * @param systemHighlightColor          The highlight color of the extension panel, if provided by the host application. Otherwise, the operating-system highlight color.\n *\n * @return AppSkinInfo object.\n */\nfunction AppSkinInfo(baseFontFamily, baseFontSize, appBarBackgroundColor, panelBackgroundColor, appBarBackgroundColorSRGB, panelBackgroundColorSRGB, systemHighlightColor)\n{\n    this.baseFontFamily = baseFontFamily;\n    this.baseFontSize = baseFontSize;\n    this.appBarBackgroundColor = appBarBackgroundColor;\n    this.panelBackgroundColor = panelBackgroundColor;\n    this.appBarBackgroundColorSRGB = appBarBackgroundColorSRGB;\n    this.panelBackgroundColorSRGB = panelBackgroundColorSRGB;\n    this.systemHighlightColor = systemHighlightColor;\n}\n\n/**\n * @class HostEnvironment\n * Stores information about the environment in which the extension is loaded.\n *\n * @param appName   The application's name.\n * @param appVersion    The application's version.\n * @param appLocale The application's current license locale.\n * @param appUILocale   The application's current UI locale.\n * @param appId     The application's unique identifier.\n * @param isAppOnline  True if the application is currently online.\n * @param appSkinInfo   An \\c #AppSkinInfo object containing the application's default color and font styles.\n *\n * @return A new \\c HostEnvironment object.\n */\nfunction HostEnvironment(appName, appVersion, appLocale, appUILocale, appId, isAppOnline, appSkinInfo)\n{\n    this.appName = appName;\n    this.appVersion = appVersion;\n    this.appLocale = appLocale;\n    this.appUILocale = appUILocale;\n    this.appId = appId;\n    this.isAppOnline = isAppOnline;\n    this.appSkinInfo = appSkinInfo;\n}\n\n/**\n * @class HostCapabilities\n * Stores information about the host capabilities.\n *\n * @param EXTENDED_PANEL_MENU True if the application supports panel menu.\n * @param EXTENDED_PANEL_ICONS True if the application supports panel icon.\n * @param DELEGATE_APE_ENGINE True if the application supports delegated APE engine.\n * @param SUPPORT_HTML_EXTENSIONS True if the application supports HTML extensions.\n * @param DISABLE_FLASH_EXTENSIONS True if the application disables FLASH extensions.\n *\n * @return A new \\c HostCapabilities object.\n */\nfunction HostCapabilities(EXTENDED_PANEL_MENU, EXTENDED_PANEL_ICONS, DELEGATE_APE_ENGINE, SUPPORT_HTML_EXTENSIONS, DISABLE_FLASH_EXTENSIONS)\n{\n    this.EXTENDED_PANEL_MENU = EXTENDED_PANEL_MENU;\n    this.EXTENDED_PANEL_ICONS = EXTENDED_PANEL_ICONS;\n    this.DELEGATE_APE_ENGINE = DELEGATE_APE_ENGINE;\n    this.SUPPORT_HTML_EXTENSIONS = SUPPORT_HTML_EXTENSIONS;\n    this.DISABLE_FLASH_EXTENSIONS = DISABLE_FLASH_EXTENSIONS; // Since 5.0.0\n}\n\n/**\n * @class ApiVersion\n * Stores current api version.\n *\n * Since 4.2.0\n *\n * @param major  The major version\n * @param minor  The minor version.\n * @param micro  The micro version.\n *\n * @return ApiVersion object.\n */\nfunction ApiVersion(major, minor, micro)\n{\n    this.major = major;\n    this.minor = minor;\n    this.micro = micro;\n}\n\n/**\n * @class MenuItemStatus\n * Stores flyout menu item status\n *\n * Since 5.2.0\n *\n * @param menuItemLabel  The menu item label.\n * @param enabled        True if user wants to enable the menu item.\n * @param checked        True if user wants to check the menu item.\n *\n * @return MenuItemStatus object.\n */\nfunction MenuItemStatus(menuItemLabel, enabled, checked)\n{\n    this.menuItemLabel = menuItemLabel;\n    this.enabled = enabled;\n    this.checked = checked;\n}\n\n/**\n * @class ContextMenuItemStatus\n * Stores the status of the context menu item.\n *\n * Since 5.2.0\n *\n * @param menuItemID     The menu item id.\n * @param enabled        True if user wants to enable the menu item.\n * @param checked        True if user wants to check the menu item.\n *\n * @return MenuItemStatus object.\n */\nfunction ContextMenuItemStatus(menuItemID, enabled, checked)\n{\n    this.menuItemID = menuItemID;\n    this.enabled = enabled;\n    this.checked = checked;\n}\n//------------------------------ CSInterface ----------------------------------\n\n/**\n * @class CSInterface\n * This is the entry point to the CEP extensibility infrastructure.\n * Instantiate this object and use it to:\n * <ul>\n * <li>Access information about the host application in which an extension is running</li>\n * <li>Launch an extension</li>\n * <li>Register interest in event notifications, and dispatch events</li>\n * </ul>\n *\n * @return A new \\c CSInterface object\n */\nfunction CSInterface()\n{\n}\n\n/**\n * User can add this event listener to handle native application theme color changes.\n * Callback function gives extensions ability to fine-tune their theme color after the\n * global theme color has been changed.\n * The callback function should be like below:\n *\n * @example\n * // event is a CSEvent object, but user can ignore it.\n * function OnAppThemeColorChanged(event)\n * {\n *    // Should get a latest HostEnvironment object from application.\n *    var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;\n *    // Gets the style information such as color info from the skinInfo,\n *    // and redraw all UI controls of your extension according to the style info.\n * }\n */\nCSInterface.THEME_COLOR_CHANGED_EVENT = \"com.adobe.csxs.events.ThemeColorChanged\";\n\n/** The host environment data object. */\nCSInterface.prototype.hostEnvironment = window.__adobe_cep__ ? JSON.parse(window.__adobe_cep__.getHostEnvironment()) : null;\n\n/** Retrieves information about the host environment in which the\n *  extension is currently running.\n *\n *   @return A \\c #HostEnvironment object.\n */\nCSInterface.prototype.getHostEnvironment = function()\n{\n    this.hostEnvironment = JSON.parse(window.__adobe_cep__.getHostEnvironment());\n    return this.hostEnvironment;\n};\n\n/** Loads binary file created which is located at url asynchronously\n*\n*@param urlName url at which binary file is located. Local files should start with 'file://'\n*@param callback Optional. A callback function that returns after binary is loaded\n\n*@example\n* To create JS binary use command ./cep_compiler test.js test.bin\n* To load JS binary asyncronously\n*   var CSLib = new CSInterface();\n*   CSLib.loadBinAsync(url, function () { });\n*/\nCSInterface.prototype.loadBinAsync = function(urlName,callback)\n{\n    try\n    {\n        var xhr = new XMLHttpRequest();\n        xhr.responseType = 'arraybuffer'; // make response as ArrayBuffer\n        xhr.open('GET', urlName, true);\n        xhr.onerror = function ()\n        {\n  \t\t  console.log(\"Unable to load snapshot from given URL\");\n  \t\t  return false;\n\t\t};\n        xhr.send();\n        xhr.onload = () => {\n            window.__adobe_cep__.loadSnapshot(xhr.response);\n            if (typeof callback === \"function\")\n            {\n                callback();\n            }\n            else if(typeof callback !== \"undefined\")\n            {\n                console.log(\"Provided callback is not a function\");\n            }\n        }\n    }\n    catch(err)\n    {\n        console.log(err);\n        return false;\n    }\n\n\treturn true;\n};\n\n/** Loads binary file created synchronously\n*\n*@param pathName the local path at which binary file is located\n\n*@example\n* To create JS binary use command ./cep_compiler test.js test.bin\n* To load JS binary syncronously\n*   var CSLib = new CSInterface();\n*   CSLib.loadBinSync(path);\n*/\nCSInterface.prototype.loadBinSync  = function(pathName)\n{\n    try\n    {\n        var OSVersion = this.getOSInformation();\n        if(pathName.startsWith(\"file://\"))\n        {\n            if (OSVersion.indexOf(\"Windows\") >= 0)\n            {\n               pathName = pathName.replace(\"file:///\", \"\");\n            }\n            else if (OSVersion.indexOf(\"Mac\") >= 0)\n            {\n                pathName = pathName.replace(\"file://\", \"\");\n            }\n            window.__adobe_cep__.loadSnapshot(pathName);\n            return true;\n        }\n    }\n    catch(err)\n    {\n        console.log(err);\n        return false;\n    }\n    //control should not come here\n    return false;\n};\n\n/** Closes this extension. */\nCSInterface.prototype.closeExtension = function()\n{\n    window.__adobe_cep__.closeExtension();\n};\n\n/**\n * Retrieves a path for which a constant is defined in the system.\n *\n * @param pathType The path-type constant defined in \\c #SystemPath ,\n *\n * @return The platform-specific system path string.\n */\nCSInterface.prototype.getSystemPath = function(pathType)\n{\n    var path = decodeURI(window.__adobe_cep__.getSystemPath(pathType));\n    var OSVersion = this.getOSInformation();\n    if (OSVersion.indexOf(\"Windows\") >= 0)\n    {\n      path = path.replace(\"file:///\", \"\");\n    }\n    else if (OSVersion.indexOf(\"Mac\") >= 0)\n    {\n      path = path.replace(\"file://\", \"\");\n    }\n    return path;\n};\n\n/**\n * Evaluates a JavaScript script, which can use the JavaScript DOM\n * of the host application.\n *\n * @param script    The JavaScript script.\n * @param callback  Optional. A callback function that receives the result of execution.\n *          If execution fails, the callback function receives the error message \\c EvalScript_ErrMessage.\n */\nCSInterface.prototype.evalScript = function(script, callback)\n{\n    if(callback === null || callback === undefined)\n    {\n        callback = function(result){};\n    }\n    window.__adobe_cep__.evalScript(script, callback);\n};\n\n/**\n * Retrieves the unique identifier of the application.\n * in which the extension is currently running.\n *\n * @return The unique ID string.\n */\nCSInterface.prototype.getApplicationID = function()\n{\n    var appId = this.hostEnvironment.appId;\n    return appId;\n};\n\n/**\n * Retrieves host capability information for the application\n * in which the extension is currently running.\n *\n * @return A \\c #HostCapabilities object.\n */\nCSInterface.prototype.getHostCapabilities = function()\n{\n    var hostCapabilities = JSON.parse(window.__adobe_cep__.getHostCapabilities() );\n    return hostCapabilities;\n};\n\n/**\n * Triggers a CEP event programmatically. Yoy can use it to dispatch\n * an event of a predefined type, or of a type you have defined.\n *\n * @param event A \\c CSEvent object.\n */\nCSInterface.prototype.dispatchEvent = function(event)\n{\n    if (typeof event.data == \"object\")\n    {\n        event.data = JSON.stringify(event.data);\n    }\n\n    window.__adobe_cep__.dispatchEvent(event);\n};\n\n/**\n * Registers an interest in a CEP event of a particular type, and\n * assigns an event handler.\n * The event infrastructure notifies your extension when events of this type occur,\n * passing the event object to the registered handler function.\n *\n * @param type     The name of the event type of interest.\n * @param listener The JavaScript handler function or method.\n * @param obj      Optional, the object containing the handler method, if any.\n *         Default is null.\n */\nCSInterface.prototype.addEventListener = function(type, listener, obj)\n{\n    window.__adobe_cep__.addEventListener(type, listener, obj);\n};\n\n/**\n * Removes a registered event listener.\n *\n * @param type      The name of the event type of interest.\n * @param listener  The JavaScript handler function or method that was registered.\n * @param obj       Optional, the object containing the handler method, if any.\n *          Default is null.\n */\nCSInterface.prototype.removeEventListener = function(type, listener, obj)\n{\n    window.__adobe_cep__.removeEventListener(type, listener, obj);\n};\n\n/**\n * Loads and launches another extension, or activates the extension if it is already loaded.\n *\n * @param extensionId       The extension's unique identifier.\n * @param startupParams     Not currently used, pass \"\".\n *\n * @example\n * To launch the extension \"help\" with ID \"HLP\" from this extension, call:\n * <code>requestOpenExtension(\"HLP\", \"\"); </code>\n *\n */\nCSInterface.prototype.requestOpenExtension = function(extensionId, params)\n{\n    window.__adobe_cep__.requestOpenExtension(extensionId, params);\n};\n\n/**\n * Retrieves the list of extensions currently loaded in the current host application.\n * The extension list is initialized once, and remains the same during the lifetime\n * of the CEP session.\n *\n * @param extensionIds  Optional, an array of unique identifiers for extensions of interest.\n *          If omitted, retrieves data for all extensions.\n *\n * @return Zero or more \\c #Extension objects.\n */\nCSInterface.prototype.getExtensions = function(extensionIds)\n{\n    var extensionIdsStr = JSON.stringify(extensionIds);\n    var extensionsStr = window.__adobe_cep__.getExtensions(extensionIdsStr);\n\n    var extensions = JSON.parse(extensionsStr);\n    return extensions;\n};\n\n/**\n * Retrieves network-related preferences.\n *\n * @return A JavaScript object containing network preferences.\n */\nCSInterface.prototype.getNetworkPreferences = function()\n{\n    var result = window.__adobe_cep__.getNetworkPreferences();\n    var networkPre = JSON.parse(result);\n\n    return networkPre;\n};\n\n/**\n * Initializes the resource bundle for this extension with property values\n * for the current application and locale.\n * To support multiple locales, you must define a property file for each locale,\n * containing keyed display-string values for that locale.\n * See localization documentation for Extension Builder and related products.\n *\n * Keys can be in the\n * form <code>key.value=\"localized string\"</code>, for use in HTML text elements.\n * For example, in this input element, the localized \\c key.value string is displayed\n * instead of the empty \\c value string:\n *\n * <code><input type=\"submit\" value=\"\" data-locale=\"key\"/></code>\n *\n * @return An object containing the resource bundle information.\n */\nCSInterface.prototype.initResourceBundle = function()\n{\n    var resourceBundle = JSON.parse(window.__adobe_cep__.initResourceBundle());\n    var resElms = document.querySelectorAll('[data-locale]');\n    for (var n = 0; n < resElms.length; n++)\n    {\n       var resEl = resElms[n];\n       // Get the resource key from the element.\n       var resKey = resEl.getAttribute('data-locale');\n       if (resKey)\n       {\n           // Get all the resources that start with the key.\n           for (var key in resourceBundle)\n           {\n               if (key.indexOf(resKey) === 0)\n               {\n                   var resValue = resourceBundle[key];\n                   if (key.length == resKey.length)\n                   {\n                        resEl.innerHTML = resValue;\n                   }\n                   else if ('.' == key.charAt(resKey.length))\n                   {\n                        var attrKey = key.substring(resKey.length + 1);\n                        resEl[attrKey] = resValue;\n                   }\n               }\n           }\n       }\n    }\n    return resourceBundle;\n};\n\n/**\n * Writes installation information to a file.\n *\n * @return The file path.\n */\nCSInterface.prototype.dumpInstallationInfo = function()\n{\n    return window.__adobe_cep__.dumpInstallationInfo();\n};\n\n/**\n * Retrieves version information for the current Operating System,\n * See http://www.useragentstring.com/pages/Chrome/ for Chrome \\c navigator.userAgent values.\n *\n * @return A string containing the OS version, or \"unknown Operation System\".\n * If user customizes the User Agent by setting CEF command parameter \"--user-agent\", only\n * \"Mac OS X\" or \"Windows\" will be returned.\n */\nCSInterface.prototype.getOSInformation = function()\n{\n    var userAgent = navigator.userAgent;\n\n    if ((navigator.platform == \"Win32\") || (navigator.platform == \"Windows\"))\n    {\n        var winVersion = \"Windows\";\n        var winBit = \"\";\n        if (userAgent.indexOf(\"Windows\") > -1)\n        {\n            if (userAgent.indexOf(\"Windows NT 5.0\") > -1)\n            {\n                winVersion = \"Windows 2000\";\n            }\n            else if (userAgent.indexOf(\"Windows NT 5.1\") > -1)\n            {\n                winVersion = \"Windows XP\";\n            }\n            else if (userAgent.indexOf(\"Windows NT 5.2\") > -1)\n            {\n                winVersion = \"Windows Server 2003\";\n            }\n            else if (userAgent.indexOf(\"Windows NT 6.0\") > -1)\n            {\n                winVersion = \"Windows Vista\";\n            }\n            else if (userAgent.indexOf(\"Windows NT 6.1\") > -1)\n            {\n                winVersion = \"Windows 7\";\n            }\n            else if (userAgent.indexOf(\"Windows NT 6.2\") > -1)\n            {\n                winVersion = \"Windows 8\";\n            }\n            else if (userAgent.indexOf(\"Windows NT 6.3\") > -1)\n            {\n                winVersion = \"Windows 8.1\";\n            }\n            else if (userAgent.indexOf(\"Windows NT 10\") > -1)\n            {\n                winVersion = \"Windows 10\";\n            }\n\n            if (userAgent.indexOf(\"WOW64\") > -1 || userAgent.indexOf(\"Win64\") > -1)\n            {\n                winBit = \" 64-bit\";\n            }\n            else\n            {\n                winBit = \" 32-bit\";\n            }\n        }\n\n        return winVersion + winBit;\n    }\n    else if ((navigator.platform == \"MacIntel\") || (navigator.platform == \"Macintosh\"))\n    {\n        var result = \"Mac OS X\";\n\n        if (userAgent.indexOf(\"Mac OS X\") > -1)\n        {\n            result = userAgent.substring(userAgent.indexOf(\"Mac OS X\"), userAgent.indexOf(\")\"));\n            result = result.replace(/_/g, \".\");\n        }\n\n        return result;\n    }\n\n    return \"Unknown Operation System\";\n};\n\n/**\n * Opens a page in the default system browser.\n *\n * Since 4.2.0\n *\n * @param url  The URL of the page/file to open, or the email address.\n * Must use HTTP/HTTPS/file/mailto protocol. For example:\n *   \"http://www.adobe.com\"\n *   \"https://github.com\"\n *   \"file:///C:/log.txt\"\n *   \"mailto:test@adobe.com\"\n *\n * @return One of these error codes:\\n\n *      <ul>\\n\n *          <li>NO_ERROR - 0</li>\\n\n *          <li>ERR_UNKNOWN - 1</li>\\n\n *          <li>ERR_INVALID_PARAMS - 2</li>\\n\n *          <li>ERR_INVALID_URL - 201</li>\\n\n *      </ul>\\n\n */\nCSInterface.prototype.openURLInDefaultBrowser = function(url)\n{\n    return cep.util.openURLInDefaultBrowser(url);\n};\n\n/**\n * Retrieves extension ID.\n *\n * Since 4.2.0\n *\n * @return extension ID.\n */\nCSInterface.prototype.getExtensionID = function()\n{\n     return window.__adobe_cep__.getExtensionId();\n};\n\n/**\n * Retrieves the scale factor of screen.\n * On Windows platform, the value of scale factor might be different from operating system's scale factor,\n * since host application may use its self-defined scale factor.\n *\n * Since 4.2.0\n *\n * @return One of the following float number.\n *      <ul>\\n\n *          <li> -1.0 when error occurs </li>\\n\n *          <li> 1.0 means normal screen </li>\\n\n *          <li> >1.0 means HiDPI screen </li>\\n\n *      </ul>\\n\n */\nCSInterface.prototype.getScaleFactor = function()\n{\n    return window.__adobe_cep__.getScaleFactor();\n};\n\n/**\n * Retrieves the scale factor of Monitor.\n *\n * Since 8.5.0\n *\n * @return value >= 1.0f\n * only available for windows machine\n */\n if(navigator.appVersion.toLowerCase().indexOf(\"windows\") >= 0) {\n    CSInterface.prototype.getMonitorScaleFactor = function()\n    {\n        return window.__adobe_cep__.getMonitorScaleFactor();\n    };\n}\n\n/**\n * Set a handler to detect any changes of scale factor. This only works on Mac.\n *\n * Since 4.2.0\n *\n * @param handler   The function to be called when scale factor is changed.\n *\n */\nCSInterface.prototype.setScaleFactorChangedHandler = function(handler)\n{\n    window.__adobe_cep__.setScaleFactorChangedHandler(handler);\n};\n\n/**\n * Retrieves current API version.\n *\n * Since 4.2.0\n *\n * @return ApiVersion object.\n *\n */\nCSInterface.prototype.getCurrentApiVersion = function()\n{\n    var apiVersion = JSON.parse(window.__adobe_cep__.getCurrentApiVersion());\n    return apiVersion;\n};\n\n/**\n * Set panel flyout menu by an XML.\n *\n * Since 5.2.0\n *\n * Register a callback function for \"com.adobe.csxs.events.flyoutMenuClicked\" to get notified when a\n * menu item is clicked.\n * The \"data\" attribute of event is an object which contains \"menuId\" and \"menuName\" attributes.\n *\n * Register callback functions for \"com.adobe.csxs.events.flyoutMenuOpened\" and \"com.adobe.csxs.events.flyoutMenuClosed\"\n * respectively to get notified when flyout menu is opened or closed.\n *\n * @param menu     A XML string which describes menu structure.\n * An example menu XML:\n * <Menu>\n *   <MenuItem Id=\"menuItemId1\" Label=\"TestExample1\" Enabled=\"true\" Checked=\"false\"/>\n *   <MenuItem Label=\"TestExample2\">\n *     <MenuItem Label=\"TestExample2-1\" >\n *       <MenuItem Label=\"TestExample2-1-1\" Enabled=\"false\" Checked=\"true\"/>\n *     </MenuItem>\n *     <MenuItem Label=\"TestExample2-2\" Enabled=\"true\" Checked=\"true\"/>\n *   </MenuItem>\n *   <MenuItem Label=\"---\" />\n *   <MenuItem Label=\"TestExample3\" Enabled=\"false\" Checked=\"false\"/>\n * </Menu>\n *\n */\nCSInterface.prototype.setPanelFlyoutMenu = function(menu)\n{\n    if (\"string\" != typeof menu)\n    {\n        return;\n    }\n\n    window.__adobe_cep__.invokeSync(\"setPanelFlyoutMenu\", menu);\n};\n\n/**\n * Updates a menu item in the extension window's flyout menu, by setting the enabled\n * and selection status.\n *\n * Since 5.2.0\n *\n * @param menuItemLabel The menu item label.\n * @param enabled       True to enable the item, false to disable it (gray it out).\n * @param checked       True to select the item, false to deselect it.\n *\n * @return false when the host application does not support this functionality (HostCapabilities.EXTENDED_PANEL_MENU is false).\n *         Fails silently if menu label is invalid.\n *\n * @see HostCapabilities.EXTENDED_PANEL_MENU\n */\nCSInterface.prototype.updatePanelMenuItem = function(menuItemLabel, enabled, checked)\n{\n    var ret = false;\n    if (this.getHostCapabilities().EXTENDED_PANEL_MENU)\n    {\n        var itemStatus = new MenuItemStatus(menuItemLabel, enabled, checked);\n        ret = window.__adobe_cep__.invokeSync(\"updatePanelMenuItem\", JSON.stringify(itemStatus));\n    }\n    return ret;\n};\n\n\n/**\n * Set context menu by XML string.\n *\n * Since 5.2.0\n *\n * There are a number of conventions used to communicate what type of menu item to create and how it should be handled.\n * - an item without menu ID or menu name is disabled and is not shown.\n * - if the item name is \"---\" (three hyphens) then it is treated as a separator. The menu ID in this case will always be NULL.\n * - Checkable attribute takes precedence over Checked attribute.\n * - a PNG icon. For optimal display results please supply a 16 x 16px icon as larger dimensions will increase the size of the menu item.\n     The Chrome extension contextMenus API was taken as a reference.\n     https://developer.chrome.com/extensions/contextMenus\n * - the items with icons and checkable items cannot coexist on the same menu level. The former take precedences over the latter.\n *\n * @param menu      A XML string which describes menu structure.\n * @param callback  The callback function which is called when a menu item is clicked. The only parameter is the returned ID of clicked menu item.\n *\n * @description An example menu XML:\n * <Menu>\n *   <MenuItem Id=\"menuItemId1\" Label=\"TestExample1\" Enabled=\"true\" Checkable=\"true\" Checked=\"false\" Icon=\"./image/small_16X16.png\"/>\n *   <MenuItem Id=\"menuItemId2\" Label=\"TestExample2\">\n *     <MenuItem Id=\"menuItemId2-1\" Label=\"TestExample2-1\" >\n *       <MenuItem Id=\"menuItemId2-1-1\" Label=\"TestExample2-1-1\" Enabled=\"false\" Checkable=\"true\" Checked=\"true\"/>\n *     </MenuItem>\n *     <MenuItem Id=\"menuItemId2-2\" Label=\"TestExample2-2\" Enabled=\"true\" Checkable=\"true\" Checked=\"true\"/>\n *   </MenuItem>\n *   <MenuItem Label=\"---\" />\n *   <MenuItem Id=\"menuItemId3\" Label=\"TestExample3\" Enabled=\"false\" Checkable=\"true\" Checked=\"false\"/>\n * </Menu>\n */\nCSInterface.prototype.setContextMenu = function(menu, callback)\n{\n    if (\"string\" != typeof menu)\n    {\n        return;\n    }\n\n    window.__adobe_cep__.invokeAsync(\"setContextMenu\", menu, callback);\n};\n\n/**\n * Set context menu by JSON string.\n *\n * Since 6.0.0\n *\n * There are a number of conventions used to communicate what type of menu item to create and how it should be handled.\n * - an item without menu ID or menu name is disabled and is not shown.\n * - if the item label is \"---\" (three hyphens) then it is treated as a separator. The menu ID in this case will always be NULL.\n * - Checkable attribute takes precedence over Checked attribute.\n * - a PNG icon. For optimal display results please supply a 16 x 16px icon as larger dimensions will increase the size of the menu item.\n     The Chrome extension contextMenus API was taken as a reference.\n * - the items with icons and checkable items cannot coexist on the same menu level. The former take precedences over the latter.\n     https://developer.chrome.com/extensions/contextMenus\n *\n * @param menu      A JSON string which describes menu structure.\n * @param callback  The callback function which is called when a menu item is clicked. The only parameter is the returned ID of clicked menu item.\n *\n * @description An example menu JSON:\n *\n * {\n *      \"menu\": [\n *          {\n *              \"id\": \"menuItemId1\",\n *              \"label\": \"testExample1\",\n *              \"enabled\": true,\n *              \"checkable\": true,\n *              \"checked\": false,\n *              \"icon\": \"./image/small_16X16.png\"\n *          },\n *          {\n *              \"id\": \"menuItemId2\",\n *              \"label\": \"testExample2\",\n *              \"menu\": [\n *                  {\n *                      \"id\": \"menuItemId2-1\",\n *                      \"label\": \"testExample2-1\",\n *                      \"menu\": [\n *                          {\n *                              \"id\": \"menuItemId2-1-1\",\n *                              \"label\": \"testExample2-1-1\",\n *                              \"enabled\": false,\n *                              \"checkable\": true,\n *                              \"checked\": true\n *                          }\n *                      ]\n *                  },\n *                  {\n *                      \"id\": \"menuItemId2-2\",\n *                      \"label\": \"testExample2-2\",\n *                      \"enabled\": true,\n *                      \"checkable\": true,\n *                      \"checked\": true\n *                  }\n *              ]\n *          },\n *          {\n *              \"label\": \"---\"\n *          },\n *          {\n *              \"id\": \"menuItemId3\",\n *              \"label\": \"testExample3\",\n *              \"enabled\": false,\n *              \"checkable\": true,\n *              \"checked\": false\n *          }\n *      ]\n *  }\n *\n */\nCSInterface.prototype.setContextMenuByJSON = function(menu, callback)\n{\n    if (\"string\" != typeof menu)\n    {\n        return;\n    }\n\n    window.__adobe_cep__.invokeAsync(\"setContextMenuByJSON\", menu, callback);\n};\n\n/**\n * Updates a context menu item by setting the enabled and selection status.\n *\n * Since 5.2.0\n *\n * @param menuItemID    The menu item ID.\n * @param enabled       True to enable the item, false to disable it (gray it out).\n * @param checked       True to select the item, false to deselect it.\n */\nCSInterface.prototype.updateContextMenuItem = function(menuItemID, enabled, checked)\n{\n    var itemStatus = new ContextMenuItemStatus(menuItemID, enabled, checked);\n    ret = window.__adobe_cep__.invokeSync(\"updateContextMenuItem\", JSON.stringify(itemStatus));\n};\n\n/**\n * Get the visibility status of an extension window.\n *\n * Since 6.0.0\n *\n * @return true if the extension window is visible; false if the extension window is hidden.\n */\nCSInterface.prototype.isWindowVisible = function()\n{\n    return window.__adobe_cep__.invokeSync(\"isWindowVisible\", \"\");\n};\n\n/**\n * Resize extension's content to the specified dimensions.\n * 1. Works with modal and modeless extensions in all Adobe products.\n * 2. Extension's manifest min/max size constraints apply and take precedence.\n * 3. For panel extensions\n *    3.1 This works in all Adobe products except:\n *        * Premiere Pro\n *        * Prelude\n *        * After Effects\n *    3.2 When the panel is in certain states (especially when being docked),\n *        it will not change to the desired dimensions even when the\n *        specified size satisfies min/max constraints.\n *\n * Since 6.0.0\n *\n * @param width  The new width\n * @param height The new height\n */\nCSInterface.prototype.resizeContent = function(width, height)\n{\n    window.__adobe_cep__.resizeContent(width, height);\n};\n\n/**\n * Register the invalid certificate callback for an extension.\n * This callback will be triggered when the extension tries to access the web site that contains the invalid certificate on the main frame.\n * But if the extension does not call this function and tries to access the web site containing the invalid certificate, a default error page will be shown.\n *\n * Since 6.1.0\n *\n * @param callback the callback function\n */\nCSInterface.prototype.registerInvalidCertificateCallback = function(callback)\n{\n    return window.__adobe_cep__.registerInvalidCertificateCallback(callback);\n};\n\n/**\n * Register an interest in some key events to prevent them from being sent to the host application.\n *\n * This function works with modeless extensions and panel extensions.\n * Generally all the key events will be sent to the host application for these two extensions if the current focused element\n * is not text input or dropdown,\n * If you want to intercept some key events and want them to be handled in the extension, please call this function\n * in advance to prevent them being sent to the host application.\n *\n * Since 6.1.0\n *\n * @param keyEventsInterest      A JSON string describing those key events you are interested in. A null object or\n                                 an empty string will lead to removing the interest\n *\n * This JSON string should be an array, each object has following keys:\n *\n * keyCode:  [Required] represents an OS system dependent virtual key code identifying\n *           the unmodified value of the pressed key.\n * ctrlKey:  [optional] a Boolean that indicates if the control key was pressed (true) or not (false) when the event occurred.\n * altKey:   [optional] a Boolean that indicates if the alt key was pressed (true) or not (false) when the event occurred.\n * shiftKey: [optional] a Boolean that indicates if the shift key was pressed (true) or not (false) when the event occurred.\n * metaKey:  [optional] (Mac Only) a Boolean that indicates if the Meta key was pressed (true) or not (false) when the event occurred.\n *                      On Macintosh keyboards, this is the command key. To detect Windows key on Windows, please use keyCode instead.\n * An example JSON string:\n *\n * [\n *     {\n *         \"keyCode\": 48\n *     },\n *     {\n *         \"keyCode\": 123,\n *         \"ctrlKey\": true\n *     },\n *     {\n *         \"keyCode\": 123,\n *         \"ctrlKey\": true,\n *         \"metaKey\": true\n *     }\n * ]\n *\n */\nCSInterface.prototype.registerKeyEventsInterest = function(keyEventsInterest)\n{\n    return window.__adobe_cep__.registerKeyEventsInterest(keyEventsInterest);\n};\n\n/**\n * Set the title of the extension window.\n * This function works with modal and modeless extensions in all Adobe products, and panel extensions in Photoshop, InDesign, InCopy, Illustrator, Flash Pro and Dreamweaver.\n *\n * Since 6.1.0\n *\n * @param title The window title.\n */\nCSInterface.prototype.setWindowTitle = function(title)\n{\n    window.__adobe_cep__.invokeSync(\"setWindowTitle\", title);\n};\n\n/**\n * Get the title of the extension window.\n * This function works with modal and modeless extensions in all Adobe products, and panel extensions in Photoshop, InDesign, InCopy, Illustrator, Flash Pro and Dreamweaver.\n *\n * Since 6.1.0\n *\n * @return The window title.\n */\nCSInterface.prototype.getWindowTitle = function()\n{\n    return window.__adobe_cep__.invokeSync(\"getWindowTitle\", \"\");\n};\n"

/***/ }),

/***/ "./node_modules/script-loader/addScript.js":
/*!*************************************************!*\
  !*** ./node_modules/script-loader/addScript.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),

/***/ "./node_modules/script-loader/index.js!./src/js/CSInterface.js":
/*!************************************************************!*\
  !*** ./node_modules/script-loader!./src/js/CSInterface.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !./node_modules/raw-loader!./src/js/CSInterface.js */ "./node_modules/raw-loader/index.js!./src/js/CSInterface.js"))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/style/index.scss":
/*!*************************************!*\
  !*** ./src/assets/style/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var script_loader_CSInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! script-loader!./CSInterface.js */ "./node_modules/script-loader/index.js!./src/js/CSInterface.js");
/* harmony import */ var script_loader_CSInterface_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(script_loader_CSInterface_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/style/index.scss */ "./src/assets/style/index.scss");
/* harmony import */ var _assets_style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);
 // Execute JS script once in global context





var csInterface = new CSInterface();

Object(_utils__WEBPACK_IMPORTED_MODULE_1__["writeCiaoInRoot"])();


/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function writeCiaoInRoot() {
    var root = document.querySelector("#root");
    root.innerHTML = 'CIAO2!';
}

module.exports = {
    writeCiaoInRoot
}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map