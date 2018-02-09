export interface WeatherDetails {
    weather: Weather[],
    main: Main
}

export interface Weather {
    description: string,
    icon: string

}
export interface Main {

    temp: string,
    pressure: string

}
