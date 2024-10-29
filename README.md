# playwright-assesment

### Required software
 - Node 18.14 version or latest
 - Typescript

### dotEnv requirements
Please create a .env in the root directory with contents

```sh
WEB_PORTAL=https://www.saucedemo.com
PASSWORD=secret_sauce
```

### Installation
After pulling or cloning the repo, run the command below for test environment dependency
```sh
npm install
```

### Run test commands

To run all test in headless mode.
```sh
npm run test
```

Run with UI
```sh
npm run test-ui
```

Run in headed mode
```sh
npm run test-headed
```

Run with last failed test
```sh
npm run test-last-failed-test
```

Run and generate report
```sh
npm run test-html-reporter
```

### Contents
This automation test covers scenarios like Login, Add Cart and removing item from Cart.
The test was configured to run into chrome browser. However it can be updated under "playwright.config.ts".
Screenshots are enable only for failed test.


### Screenshots
Terminal test run summary:
![image](https://github.com/user-attachments/assets/9c0a61df-7997-4a88-88db-0e200e911d34)

HTML reporter failed test:
![image](https://github.com/user-attachments/assets/86eef1c1-a903-43c2-9f59-6ee3cd522f71)

Overall test:
![image](https://github.com/user-attachments/assets/6cdb3851-0d49-4c45-a83b-1c3289c1223c)






