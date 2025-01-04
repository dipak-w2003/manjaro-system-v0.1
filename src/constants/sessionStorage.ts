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
