
declare global {
  interface Window {
    xProductBrowser: (...args: string[]) => void;
  }
}

export {}
