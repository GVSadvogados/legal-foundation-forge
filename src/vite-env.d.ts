/// <reference types="vite/client" />

declare interface Worker {}
declare var Worker: {
  prototype: Worker;
  new (): Worker;
};
