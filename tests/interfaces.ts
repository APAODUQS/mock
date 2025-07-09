export interface WeatherResponse {
    city: string
    temperature: number
    conditions: string
    forecasts: Forescast[]
  }

export interface Forescast {
    date: string
    temperature: number
    conditions: string
}