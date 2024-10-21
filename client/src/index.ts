import { app, BrowserWindow, ipcMain } from 'electron';
import store from './redux/store';
import { setWindowState } from './redux/reducers';
import { useSelector } from 'react-redux';

// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const path = require('path');

  const win = new BrowserWindow({
    height: 600,
    width: 1100,
    minWidth: 1100,
    minHeight: 600,
    icon: path.join(__dirname, './assets/icons/120x120.ico'),
    frame: false, // 타이틀바 제거
    // maximizable: false,
    backgroundColor: '#1b1b1b',  // 배경색 설정 (창과 동일한 색상)
    webPreferences: {
      // devTools: false, // 배포시 활성화
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      webSecurity: true,
      nodeIntegration: false, // Node.js 통합 활성화
      contextIsolation: true,
    },
  });
  // const path = require('path');
  // and load the index.html of the app.

  win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  // win.webContents.openDevTools();

  const ipc: Electron.IpcMain = ipcMain;


  // 이벤트 리스너 등록
  win.on('maximize', () => {
    console.log("maximize");
    // store.dispatch(setWindowState(true));
    win.webContents.send('window-state-changed', true); // IPC 통신
  });

  win.on('unmaximize', () => {
    console.log("unmaximize");
    // store.dispatch(setWindowState(false));
    win.webContents.send('window-state-changed', false);
  });

  ipc.on('minimizeApp', () => {
    win.minimize();
  });

  ipc.on('maximizeApp', () => {
    win.maximize();
  });

  ipc.on('restoreApp', () => {
    win.restore();
  });

  ipc.on('closeApp', (e) => {
    win.close();
  });

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
