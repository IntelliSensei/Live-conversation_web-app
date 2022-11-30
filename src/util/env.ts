export interface IEnv {
    SKIP_PREFLIGHT_CHECK: string
    WEBSOCKET: string
    APOLLO: string
}

// if(!process.env.WEBSOCKET) {
//     throw new Error("WEBSOCKET is required")
// }
// if(!process.env.APOLLO) {
//     throw new Error("APOLLO is required")
// } ask bardia where this should be 

export const environment = {
    APOLLO: process.env.REACT_APP_APOLLO,
    WEBSOCKET: process.env.REACT_APP_WEBSOCKET,
} as IEnv