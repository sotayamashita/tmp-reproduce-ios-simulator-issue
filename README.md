## Prerequiresite

- Xcode
- Node.js

### Summary

(Summarize the bug encountered concisely)

Some parts of the keyboard displayed in the simulator are not visible in black.

### Steps to reproduce

(How one can reproduce the issue - this is very important)

1. Create a VM with 3 CPU/GPU
1. Connect to the VM with SSH
    ```
    ssh -p <SSH port> <USER>@<VM IP>
    ```
1. Clone this repo
    ```
    git clone git@github.com:sotayamashita/tmp-reproduce-ios-simulator-issue.git
    cd tmp-reproduce-ios-simulator-issue
    ```
1. Install dependencies
    ```
    npm install
    ```
1. Start Appium server
    ```
    npm run start:appium
    ```
1. Run Test
    ```
    node main.js
    ```
1. Check screenshot, screenshot.png

### What is the current *bug* behavior?

(What actually happens)

Some parts of the keyboard displayed in the simulator are not visible in black.

### What is the expected *correct* behavior?

(What you should see instead)

Can see the keyboard correctly in the simulator.

### Relevant logs and/or screenshots

(Paste any relevant logs - please use code blocks (\`\`\`) to format console output,
logs, and code as it's very hard to read otherwise.)

<img src="https://github.com/sotayamashita/tmp-reproduce-ios-simulator-issue/blob/master/log/3-screenshot.png?raw=true" width="300" />

https://github.com/sotayamashita/tmp-reproduce-ios-simulator-issue/blob/master/log/3-screenshot.png

