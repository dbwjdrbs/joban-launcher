import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  sendRequest: (channel: string, data?: any) => {
    const validChannels = ['minimizeApp', 'closeApp', 'maximizeApp', 'restoreApp']; // 유효한 채널
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    } else {
      console.error(`Invalid channel: ${channel}`);
    }
  },
  sendWindowStateChange: (state: boolean) => {
    ipcRenderer.send('window-state-change', state);
  },
  onWindowStateChanged: (callback: (state: boolean) => void) => {
    const listener = (event: IpcRendererEvent, state: boolean) => {
      callback(state);
    };
    
    ipcRenderer.on('window-state-changed', listener);
    
    // 리스너 제거 기능 추가
    return () => {
      ipcRenderer.off('window-state-changed', listener);
    };
  },
});
