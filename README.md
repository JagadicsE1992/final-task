# Negative & Edge Case Test Suite

Automated test suite for [SauceDemo](https://www.saucedemo.com/) focusing on error handling,
form validation, and wait strategies.

## Tech Stack

- [WebdriverIO](https://webdriver.io/) — test automation framework
- [Cucumber.js](https://cucumber.io/) — BDD framework (Given/When/Then)
- [Page Object Model](https://webdriver.io/docs/pageobjects/) — test architecture pattern
- Browsers: **Firefox** and **Microsoft Edge** (parallel execution)

## Project Structure

neg-edge-flow/
├── src/
│   ├── features/
│   │   ├── uc1-form-validation.feature
│   │   └── uc2-latency-handling.feature
│   ├── po/
│   │   ├── login.page.js
│   │   ├── checkout.page.js
│   │   └── inventory.page.js
│   └── step-definitions/
│       ├── common.steps.js
│       ├── uc1.steps.js
│       └── uc2.steps.js
├── src/config/
│   └── wdio.conf.js
└── README.md


## Prerequisites

- Node.js (v18 or higher)
- Firefox browser installed
- Microsoft Edge browser installed

## Installation
```bash
git clone <repository-url>
cd neg-edge-flow
npm install
```

## Running the Tests

Run the full test suite (both browsers in parallel):
```bash
npm test
```

## Test Cases

### UC-1: Form Validation (Negative Testing)

| Scenario | Expected Result |
| Login with empty username and password | "Epic sadface: Username is required" |
| Login with username only | "Epic sadface: Password is required" |
| Checkout without postal code | "Error: Postal Code is required" |

### UC-2: Handling Latency (Wait Strategies)

| Scenario | Description |
| Login with performance_glitch_user | Framework waits gracefully without sleep/pause |
| Reset App State | Via burger menu |
| Logout | Via burger menu, verifies return to login page |

## Wait Strategy

The `performance_glitch_user` has a built-in delay. Instead of hardcoded `pause()` or
`sleep()` commands, the framework uses WebdriverIO's built-in waiter:
```javascript
await this.inventoryContainer.waitForDisplayed({ timeout: 15000 });
```

This approach is robust and does not slow down the suite unnecessarily.