import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  sendRequest: (channel: string, data?: any) => {
    const validChannels = ['minimizeApp', 'closeApp']; // 유효한 채널
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  // 다른 메서드가 필요하다면 여기에 추가
});
