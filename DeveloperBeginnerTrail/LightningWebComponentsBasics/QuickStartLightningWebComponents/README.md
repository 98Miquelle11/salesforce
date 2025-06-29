This README summarizes  units from the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components) Trailhead module.

# [1. Set Up Your Salesforce DX Environment](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/set-up-salesforce-dx)

## Introduction
The **Salesforce Developer Experience (DX)** is a set of tools that streamlines the entire development life cycle. It improves team development and collaboration, facilitates automated testing and continuous integration, and makes the release cycle more efficient and agile.

## Install Salesforce Command Line Interface (CLI)
1. Launch Trailhead Playground,
2. Click the **Get Your Login Credentials** tab,
3. Click **Reset My Password**. This sends an email to the address associated with your username,
4. Reset password by link sent to your email,
5. Install the CLI from [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli) (See the [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm) for complete installation instructions),
6. Confirm the CLI is properly installed and on the latest version by running the following command from the command line: `sf update` (You should see output like `Updating CLI....`).

# [2. Set Up Visual Studio Code](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/set-up-visual-studio-code)

## Install Salesforce Extensions for Visual Studio Code
1. Download and install the latest version of [Visual Studio Code](https://code.visualstudio.com/) for your operating system,
2. Launch **Visual Studio Code**,
3. On the left toolbar, click the **Extensions** icon,
4. Search for *Salesforce Extension Pack* and click **Install**,

## Ensure Your Development Environment Is Ready
1. In Visual Studio Code, open the Command Palette by pressing **Ctrl+Shift+P** (Windows) or **Cmd+Shift+P** (macOS),
2. Enter `sfdx` to filter for commands provided by the Salesforce Extensions.

# [3. Create a Hello World Lightning Web Component](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/create-a-hello-world-lightning-web-component)

## Create a Salesforce DX Project
1. In Visual Studio Code, open the Command Palette by pressing **Ctrl+Shift+P** (Windows) or **Cmd+Shift+P** (macOS),
2. Enter `sfdx` to filter for commands provided by the Salesforce Extensions,
3. Select **SFDX: Create Project**,
4. Press **Enter** to accept the standard option,
5. Enter some name (it is recommended to be made by combine words, all of them starting with capital letter) as the project name,
6. Press **Enter**,
7. Select a folder to store the project,
8. Click **Create Project**.

## Authorize Your Trailhead Playground
1. Select **SFDX: Authorize an Org**,
2. Press **Enter** to accept the Project Default login URL option,
3. Press **Enter** to accept the default alias (this opens the Salesforce login in a separate browser window),
4. Log in using your Trailhead Playground credentials,
5. If prompted to allow access, click **Allow**,
6. After you authenticate in the browser, the CLI remembers your credentials.

## Create a Lightning Web Component
1. In VSC, in the Command Palette, select **SFDX: Create Lightning Web Component**,
2. Enter some name for the new component,
3. Press **Enter** to accept the defaulu `force-app/main/default/lwc.`, then press **Enter** again,
4. Make improvements in HTML and JavaScript files, then save those files.

## Deploy to Your Trailhead Playground
1. Right-click the `default` folder under `force-app/main`,
2. Click **SFDX: Deploy Source to Org**,
3. In the Output tab of the integrated terminal, view the results of your deployment. If the command ran successfully, a Deployed Source message lists the three files that were uploaded to the org.

## Add Component to App in Lightning Experience
1. In VSC, in the Command Palette, select **SFDX: Open Default Org** (this opens your Trailhead Playground in a separate browser),
2. Click **Setup**, then in Quick Find, enter `Home`, then seect **Home** in the feature settings section,
3. Continue manual from the tutorial.
