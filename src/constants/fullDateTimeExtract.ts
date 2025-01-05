export interface IDate {
    year: number,
    day: string,
    month: string,
    dayNum: number,
    time?: string,
    country?: string
}

export function getCurrentDate(): IDate {
    const date = new Date()
    const day = date.toLocaleDateString("en-US", { weekday: "short" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const dayNumber = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();


    // Default locale time
    const fullTime = date.toLocaleTimeString();
    console.log('Full Time:', fullTime);
    // Example Output: "2:35:12 PM" or "14:35:12" (depending on locale settings)

    // ? Custom locale and options
    // const options: Intl.DateTimeFormatOptions = { hour12: false };
    // ? 24-hour format
    // const fullTime24Hour = date.toLocaleTimeString('en-US', options);
    // console.log('Full Time (24-hour):', fullTime24Hour);
    return { day: day, month: month, year: year, dayNum: +dayNumber, time: fullTime }
}


console.log(getCurrentDate());


