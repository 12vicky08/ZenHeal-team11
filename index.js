const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});

function createWindow () {
    console.log('Creating the main window...');
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile(path.join(__dirname, 'index.html'));
    win.webContents.openDevTools();  // Opens Developer Tools
}


    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    
    mainWindow.on('closed', () => {
        mainWindow = null;
    });


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
