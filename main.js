const electron = require('electron');
const url = require('url');
const path= require('path');

const { app, BrowserWindow } = electron;

let mainWindow;
let prinWindow

app.on('ready', function() {

  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))

  
  // Abrir o inspecionar Elemento
  mainWindow.webContents.openDevTools()
})



