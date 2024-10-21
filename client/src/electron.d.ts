declare global {
    interface Window {
      electron: {
        sendRequest: (channel: string, data?: any) => void;
        receiveResponse: (channel: string, func: (...args: any[]) => void) => void;
        sendWindowStateChange(state: boolean): void;
        onWindowStateChanged(callback: (state: boolean) => void): () => void; // 반환값은 리스너 제거 함수
      };
    }
  }
  
  export {};