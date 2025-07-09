# Wiremock Server and tests with playwright

This is the automation framework to test a wiremock server that is testing with Playwright library and Playwright Test Runner.
## Documentation

If you want to know more about Playwright and Playwright/Test please visit:
[Playwright Docs](https://playwright.dev/docs/intro)

## Installation

1.  You need to have **Node.js version 14** installed or above and **npm version greather than 7.0.0**. If you are working in macOS it requires 11 (Big Sur) or above. We are using the playwright library for executing tests, then you have to install the library and the supported browsers:

```bash
Install playwright
npm i -D @playwright/test
```

2. Clone this repository
   `git clone https://github.com/APAODUQS/mock.git`

3. Move to the folder:
   `cd mock`

4. Install dependencies
   `npm install `

5. Run all tests locally
   `npm run test `

If you dont get any issues at this point you are ready to use the Automation Framework

## Usage

This is an small test example:

```typescript:
// Import interfaces from playwright test
import { expect } from '@playwright/test'

// Use the test keyword to indicate you are creating a test and a proper description
// Pass the fixture you want to work in, in this case is a page that come from Playwright but you can create your own fixtures
test('basic test', async ({ request }) => {
    // Start: setting url and api request parameters
    const url = `https://playwright.dev`
    const header = {
      ContentType: 'application/json',
    }
    let response: APIResponse
    // Execute: Do the request
    try {
      response = await request.get(url, {
        headers: header,
      })
    } catch (error) {
      console.error(`Error in the request: ${error} with the url: ${url}`)
      throw error
    }
    // Assert: Test validation
    expect(response.status()).toEqual(HttpStatusCode.OK)  
})
```