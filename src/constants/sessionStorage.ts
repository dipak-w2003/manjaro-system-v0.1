export const isBooted: string = "isBooted"
export const setIsBooted = (): void => { sessionStorage.setItem(isBooted, JSON.stringify(true)) }
export const setNotBooted = (): void => { sessionStorage.setItem(isBooted, JSON.stringify(false)) }
export const getIsBooted = JSON.parse(sessionStorage.getItem("isBooted"))