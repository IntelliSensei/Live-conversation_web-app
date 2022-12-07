export interface IEnv {
  SKIP_PREFLIGHT_CHECK: string;
  WEBSOCKET: string;
  APOLLO: string;
  WS_PATH_REL: boolean;
}

if(!process.env.REACT_APP_WEBSOCKET) {
    throw new Error("WEBSOCKET is required")
}
if(!process.env.REACT_APP_APOLLO) {
    throw new Error("APOLLO is required")
}

export const environment = {
  APOLLO: process.env.REACT_APP_APOLLO || "localhost:4000",
  WEBSOCKET: process.env.REACT_APP_WEBSOCKET || "ws://localhost:8999",
  WS_PATH_REL: Boolean(process.env.REACT_APP_WS_PATH_REL),
} as IEnv;
