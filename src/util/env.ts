export interface IEnv {
    SKIP_PREFLIGHT_CHECK: string
    WEBSOCKET: string
    APOLLO: string
}

export const environment = {
    APOLLO: process.env.REACT_APP_APOLLO || "localhost:4000",
    WEBSOCKET: process.env.REACT_APP_WEBSOCKET || "localhost:8999",
} as IEnv