![Playwright_logo_long-1024x206](https://github.com/aldryandimas/playwright-learn/assets/74169079/f435c205-3442-42e5-8d73-4b917f48f218)

## Requirements

- [NodeJs](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

## Installation

Before you can use Playwright locally, you need to install the Playwright package

I believe you can just open the path of your cloned repo, and then:

```
npm install
```

The installation process will begin, and if you are asked which language will you use, you can just choose `Javascript`

And voila! Playwright has been installed on your machine!

## Run your test

Playwright provides 2 ways of running the test:

    1. Headed run
    2. Headless run

You can simply run your code with

```
npx playwright test
```

if you wan to run it headlessly

Also, if you want to see how is Playwright doing with its head, you can use

```
npx playwright test --ui
```

Is that all? Of course no! Playwright also does provide us with running the specified spec files

For example if you want to run your first test named `myTesting.spec.js`, you can simply run this command line

```
npx playwright test myTesting.spec.js
```

In Playwright, we don't have to copy the path of the file to run spec files

For the more completed command lines you can visit it here: https://playwright.dev/docs/next/running-tests#run-specific-tests
