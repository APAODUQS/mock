import { test, expect, APIResponse } from '@playwright/test'
import { HttpStatusCode } from './constants'
import { WeatherResponse } from './interfaces'

test.describe('Validate mock', () => {
  test('Validate sucessfull response', async ({ request }) => {
    const city = "Bengaluru"
    const url = `http://localhost:8080/api/v1/getWeather?city=${city}`
    const header = {
      ContentType: 'application/json',
    }
    let response: APIResponse
    try {
      response = await request.get(url, {
        headers: header,
      })
    } catch (error) {
      console.error(`Error in the request: ${error} with the url: ${url}`)
      throw error
    }
    expect.soft(response.status()).toEqual(HttpStatusCode.OK)
    const jsonResponse = await response.json() as WeatherResponse
    expect.soft(jsonResponse.city).toEqual(city)
    expect.soft(jsonResponse.conditions).toEqual("Mostly cloudy")
    expect.soft(jsonResponse.temperature).toEqual(27.1)
    expect(jsonResponse.forecasts.length).toEqual(5)
  })
})
