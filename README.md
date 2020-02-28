# CEP-starter-project
Starter project for Adobe CEP extensions using Javascript, Webpack and SASS

# How to start a project from this repository

## Clone this project:

You can either download this project or clone using git:

```
git clone git@github.com:miromannino/CEP-starter-project.git my-cep-extension
cd my-cep-extension
```

## Getting started:

First of all install all needed dependencies:

```
yarn install
```

Now you can change your CEP essential properties, such as ID and extension name editing `package.json`:

```
{
  "name": "my-super-panel",
  "panelReadableName": "My Super Panel",
  "description": "My super panel short description",
  "extensionId": "com.super.panel",
  ...
```  

## Compile the extension

To compile the project the script in `build-scripts/build.js` is executed. You can do it with:

```
yarn build-extension
```

The script is going to create a folder called `dist` where all the compiled extension files are copied.


## Install the extension

The script in `build-scripts/install.js` provides an easy installation by creating a link from Adobe extensions folder to the `dist` folder. You can do it with:

```
yarn install-extension
```

## Try the extension in Photoshop

You can restart Photoshop and open the extension from Window -> Extensions -> My Super Panel.
Now a panel will show with a minimal example.

## Debug the extension

To debug the extension the debug port can be configured from the file `package.json`:

```
...
 "debugPort": 5042,
 ...
```

In order to debug your browser might not work. It is strongly suggested to use (cefclient)[https://github.com/Adobe-CEP/CEP-Resources/tree/master/CEP_9.x].

Opening cefclient at the address `http://localhost:5042` a page will show with a link. Pressing that link Chrome's Developer Tools are opened in order to debug and read console messages.

