declare global {
    interface Window {
      electron: {
        sendRequest: (channel: string, data?: any) => void;
        receiveResponse: (channel: string, func: (...args: any[]) => void) => void;
        isWindowMaximized: () => boolean;
      };
    }
  }
  
  export {};
  