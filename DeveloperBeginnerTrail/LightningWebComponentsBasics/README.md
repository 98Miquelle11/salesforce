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

 # [2. Create Lightning Web Components](https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics/create-lightning-web-components)

This chapter covers how to build and structure Lightning Web Components:
* Components consist of three main files:

  * `.html` — template with markup inside `<template>` tags,
  * `.js` — JavaScript class extending `LightningElement`, defining properties and logic,
  * Optional `.css` — for styling the component.

* Key JavaScript features include:

  * **Decorators**: `@api` (public properties), `@track` (reactive state), `@wire` (reactive Salesforce data or service binding),
  * **Lifecycle hooks**: e.g., `connectedCallback()` runs when component is inserted into DOM.

* Naming conventions:

  * Component folder and files use **camelCase**,
  * Component tag names use **kebab-case** (e.g., `<c-my-component>`).

* Supports modern web standards for efficient, reusable UI components.

# [3. Deploy Lightning Web Component Files](https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics/push-lightning-web-component-files)

* LWC consists of:

  * `.html` template markup,
  * `.js` component logic,
  * `.js-meta.xml` visibility/config for Lightning pages.

* Set `<isExposed>true</isExposed>` and define targets in the XML (`Home`, `Record`, `App` pages),
* Use `sf project deploy start` or `sfdx force:source:push` to deploy,
* Add your component to a Lightning page via **App Builder**,
* Save and activate the page to see your component live.

### Trusted URLs
The images we are using are hosted on an Amazon AWS site. In order to allow the images to display in our app we need to add the URL to the Trusted URLs list.
1. In Setup, enter `trusted urls` in the Quick Find box and then select **Trusted URLs**,
2. Click **New Trusted URL**,
3. Enter **API Name**, **URL**, **Description**, leave **Active**, make sure **img-src (images)** is selected, click **Save**.

# [4. Handle Events in Lightning Web Components](https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics/handle-events-in-lightning-web-components)

### Event Handling in LWC
Components respond to user interactions using **event listeners** in their templates.

Example: `<lightning-button label="Click Me" onclick={handleClick}></lightning-button>`

### Creating and Dispatching Custom Events
Use `CustomEvent` to send data from child to parent components.

Example: `this.dispatchEvent(new CustomEvent('mycustomevent'));`

Example with data:

`this.dispatchEvent(new CustomEvent('mycustomevent', {`

`  detail: { value: this.inputValue }`

`}));`

### Listening to Custom Events
Parent components listen to child events by specifying event handlers in the template:

`<c-child-component onmycustomevent={handleCustomEvent}></c-child-component>`

### Best Practices
* Property names in JavaScript are in camel case `itemName` while HTML attribute names are in kebab case (dash-separated) `item-name` to match HTML standards,
* Use custom events to pass data from child to parent,
* Handle events declaratively in the parent component’s template,
* Keep components decoupled and reusable by using event-based communication.

# [5. Add Styles and Data to a Lightning Web Component](https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics/add-styles-and-data-to-a-lightning-web-component)

###  Property Binding
Use `{}` to bind JavaScript properties to HTML in the template.
.js: `greeting = 'Hello, World!';`
.html: `<p>{greeting}</p>`

### The Wire Service Brings Data to Your App
The wire service is part of our platform and delivers a stream of data. The `@wire` decorator implements the wire service for your app. Here is the syntax:

`import { adapterId } from 'adapter-module';`

`@wire(adapterId, adapterConfig) propertyOrFunction;`

* `adapterId` (Identifier) — the identifier of the wire adapter,
* `adapter-module` (String) — The identifier of the module that contains the wire adapter function,
* `adapterConfig` (Object) — A configuration object specific to the wire adapter,
* `propertyOrFunction` — A private property or function that receives the stream of data from the wire service. If a property is decorated with `@wire`, the results are returned to the property's data property or error property. If a function is decorated with `@wire`, the results are returned in an object with a data property and an error property.

More explanations (with code) are [here](https://github.com/98Miquelle11/Salesforce/blob/main/DeveloperBeginnerTrail/LightningWebComponentsBasics/bikeCard/force-app/main/default/lwc/selector/selector.js).
