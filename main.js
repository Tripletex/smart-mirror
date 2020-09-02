//const { app, BrowserWindow } = require('electron');

const electron = require('electron')
const {app, BrowserWindow} = electron


function createWindow () {
	require('electron-reload')(__dirname)

	// Create the browser window.
	win = new BrowserWindow({ fullscreen: false, frame: false })

	// and load the index.html of the app.
	//win.loadFile('./dist/index.html');
	win.loadURL(`file://${__dirname}/dist/index.html`);
}

app.on('ready', createWindow)
