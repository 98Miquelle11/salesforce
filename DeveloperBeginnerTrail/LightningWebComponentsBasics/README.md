This README summarizes  units from the [Lightning Web Components Basics](https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics) Trailhead module.

# [0. Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components)

### Everything is explained [here](https://github.com/98Miquelle11/Salesforce/blob/main/DeveloperBeginnerTrail/LightningWebComponentsBasics/QuickStartLightningWebComponents/README.md).

# [1. Discover Lightning Web Components](https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics/discover-lightning-web-components?trail_id=force_com_dev_beginner)

### Explain the Lightning Web Components programming model
The Lightning Web Components (capitalized) programming model is built on modern web standards—using:
* standard **HTML** (provides the structure for your component),
* **ES6+ JavaScript** (defines the core business logic and event handling),
* **CSS** (provides the look, feel, and animation for your component).
Lightning Web Components uses core [Web Components](https://github.com/WICG/webcomponents) standards and provides only what's necessary to perform well in browsers supported by Salesforce. You create components with just a JavaScript file, an HTML template, and (optionally) a CSS file, and Salesforce compiles and renders them efficiently.

### List the benefits of using Lightning web components
* **High performance**: Runs using native browser APIs—lightweight and fast,
* **Web standards aligned**: You use the same languages and patterns familiar from general web development,
* **Developer productivity**: Easier to find solutions, reuse code, and on‑board developers with modern skills,
* **Full encapsulation**: Components are self-contained and modular,
* **Backward compatibility**: Works with existing Aura components, easing migration,
* **Efficient tooling**: Benefits from the Salesforce CLI, VS Code extensions, Salesforce DX, scratch orgs, and playgrounds.

### Find what you need to get started developing Lightning web components
To develop Lightning web components efficiently, use the following tools and environments:
* Salesforce [DevOps Center](https://help.salesforce.com/s/articleView?id=platform.devops_center_overview.htm&type=5) provides an improved experience around change and release management that brings DevOps best practices to your development team, regardless of where you fall on the low-code to pro-code spectrum,
* Salesforce [Code Builder](https://developer.salesforce.com/docs/platform/code-builder/guide/codebuilder-overview.html) is a web-based integrated development environment that has all the power and flexibility of Visual Studio Code, Salesforce Extensions for VS Code, and Salesforce CLI in your web browser,
* **Dev Hub and Scratch Orgs**: Scratch orgs are disposable Salesforce orgs to support development and testing. Dev Hub is a feature that manages your scratch orgs. Both are part of the Salesforce DX tool set. Salesforce DX is an integrated set of development tools built and supported by Salesforce.

  * **Salesforce Command Line Interface (CLI)**: The Salesforce CLI provides a quick way to run operations for creating and configuring scratch orgs, and also for deploying components. This is also part of the Salesforce DX tool set.
  * **Lightning Component Library**: The reference for both Aura and Lightning web components and how to use them is found [here](https://developer.salesforce.com/docs/component-library/overview/components).

* **GitHub**: We share extensions, samples, and more through GitHub repos. Get a GitHub account to make sure you can take advantage of these offerings.

  * [Visual Studio Code Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode),
  * [Lightning Web Components Recipes](https://github.com/trailheadapps/lwc-recipes): We provide a GitHub repo to help you see how Lightning web components work. You can clone, tinker, and publish this mix of samples to your own scratch org and see them in action,
  * [E-Bikes Demo](https://github.com/trailheadapps/ebikes-lwc): This GitHub repo is another great way to see how Lightning web components work. The e-bikes demo is an end-to-end implementation of Lightning web components to create an app.
  * [Lightning Data Service (LDS)](https://developer.salesforce.com/docs/platform/lwc/guide/data-ui-api): Base Lightning components that work with data are built on LDS. Customize your own components to take advantage of LDS caching, change-tracking, performance, and more,
  * **Lightning Locker**: Lightning web components that belong to one namespace are secure from components in a different namespace through [Security with Lightning Locker](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/locker-intro.html). Lightning Locker also promotes best practices that improve the supportability of your code by only allowing access to supported APIs and eliminating access to nonpublished framework internals.

# [2. Deploy Lightning Web Component Files](https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics/push-lightning-web-component-files)
