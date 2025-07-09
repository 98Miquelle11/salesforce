This README summarizes units from the [Event Monitoring](https://trailhead.salesforce.com/content/learn/modules/event_monitoring) bonus Trailhead module.

# [1. Get Started with Event Monitoring](https://trailhead.salesforce.com/content/learn/modules/event_monitoring/event_monitoring_intro)

### What Is Event Monitoring?
Event Monitoring is part of Salesforce Shield that gives you detailed visibility into user and system activity within your org—everything from logins and API calls to page loads and report exports. It helps you:
* Investigate suspicious activity (e.g. failed logins, odd export spikes),
* Track performance issues and user behavior trends,
* Audit data access and reduce risk.

### Core Concepts
* **Events**: Discrete actions happening in the org — e.g. a user login, API call, Lightning page view, report export, Apex execution, and more,
* **Event Log Files**: Generated when an event occurs and stored as CSV. Available after ~24 hours (or hourly with Shield),
* **Data Retention by Edition**:

  * Developer Edition: free access to all logs, retained for 1 day,
  * Enterprise/Unlimited/Performance: limited free logs (login, logout, basic API), full logs available with Shield add-on, up to 1-year retention.

### Use Cases
1. **Security Monitoring**: Detect anomalies like multiple logins from unusual IPs, report exports by unauthorized users, or account compromise attempts,
2. **User Adoption & UX Insights**: Measure usage of features and pages to identify underused tools or areas needing UI improvements,
3. **Performance Troubleshooting**: Correlate slow performance—say, in London—with specific actions (like API usage or page loads) to pinpoint root causes.

### How It Works
1. Salesforce generates event log files (CSV format),
2. Files can be **downloaded** or accessed via **APIs** for analysis,
3. Admins/biz users visualize trends (e.g. spikes in logins or exports) to investigate deeper — e.g. “Why did ‘Adam Admin’ log in 103 times between May 4–5?”.

### Free Developer Access
Developer Edition orgs have free access to **Shield Event Monitoring**, including **hourly logs** — perfect for experimenting and prototyping.

# [2. Query Event Log Files](https://trailhead.salesforce.com/content/learn/modules/event_monitoring/event_monitoring_query)

This module builds on the Event Monitoring basics by showing how to access and query your org’s log data directly—either through the browser or SOQL — so you can uncover detailed insights and investigate issues.

### Why It Matters
* Enables **admin diagnostics** — for example, tracking if a former employee exported sensitive data,
* Supports **deeper security and performance audits** via both UI and API access,
* Serves as the foundation for more advanced work: downloading and visualizing log files externally.

# [3. Download and Visualize Event Log Files](https://trailhead.salesforce.com/content/learn/modules/event_monitoring/event_monitoring_download)

### How to Download Logs
1. **Browser (ELF Browser in Setup)**: Select date/time, choose an event type, and click **Download as CSV**. Files include hourly logs for Event Monitoring orgs or daily for standard ones. CSV fields like `USER_ID` and `URI` help track critical events — e.g., identifying who exported a report and which report was used,
2. **Automated via cURL**:
  * Use Salesforce credentials (via OAuth),
  * Run REST API query to fetch logs,
  * Parse and save CSV files, enabling scheduled downloads and custom formatting.

3. **Programmatic via Python**:
  * Ideal for Windows users,
  * Leverages Salesforce REST API,
  * Scripts can be adapted and scheduled for automated ingestion.

### Visualizing the Data
* **Event Monitoring Analytics App**: Built-in dashboards that automatically display key insights like login trends or export activity,
* **Third-party Tools**:

  * **Splunk App for Salesforce**: Ingest and visualize event data for security/performance analysis,
  * **FairWarning**: Aggregates across multiple orgs with real‑time alerts,
  * **New Relic Insights**: Load data for custom dashboards and deeper performance insights.

### Why It’s Valuable
* Automates log retrieval for trend monitoring or forensic investigations,
* Enables proactive identification of security issues (e.g. unusual exports),
* Platforms for data visualization bring plain CSVs to life and empower data-driven decisions.
