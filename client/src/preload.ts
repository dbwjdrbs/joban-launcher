import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  sendRequest: (channel: string, data?: any) => {
    const validChannels = ['minimizeApp', 'closeApp', 'maximizeApp', 'restoreApp']; // 유효한 채널
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  // 다른 메서드가 필요하다면 여기에 추가
});

contextBridge.exposeInMainWorld('electronAPI', {
  isWindowMaximized: () => ipcRenderer.invoke('is-window-maximized'),
  // onWindowMaximized: (callback) => {
    // ipcRenderer.on('window-maximized', (event, isMaximized) => {
      // callback(isMaximized);
    // });
  // }
});