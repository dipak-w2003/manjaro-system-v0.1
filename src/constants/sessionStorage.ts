
// ? ---------- Boot ---------------------------------------
export const isBootedKey: string = "isBooted";
// Function to set "isBooted" to true in sessionStorage
export const setIsBooted = (): void => {
    sessionStorage.setItem(isBootedKey, JSON.stringify(true));
};

// Function to clear "isBooted" from sessionStorage
export const setNotBooted = (): void => {
    sessionStorage.removeItem(isBootedKey);
    // Corrected from `clearItem` to `removeItem`
};

// Function to get "isBooted" from sessionStorage and parse it
export const getIsBooted = (): boolean => {
    const item = sessionStorage.getItem(isBootedKey);
    return item ? JSON.parse(item) === true : false;
};



// ? ---------- Logged ---------------------------------------
export const isLoggedKey: string = "isLogged"
export const setIsLogged = (): void => {
    sessionStorage.setItem(isLoggedKey, JSON.stringify(true));
};
export const setLogout = (): void => {
    sessionStorage.removeItem(isLoggedKey);
};
// Function to get "isBooted" from sessionStorage and parse it
export const getIsLogged = (): boolean => {
    const item = sessionStorage.getItem(isLoggedKey);
    return item ? JSON.parse(item) === true : false;
};
