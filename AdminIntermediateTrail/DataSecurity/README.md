This README summarizes  units from the [Data Security](https://trailhead.salesforce.com/content/learn/modules/data_security?trail_id=force_com_admin_intermediate) Trailhead module.

# [1. Overview of Data Security](https://trailhead.salesforce.com/content/learn/modules/data_security/data_security_overview?trail_id=force_com_admin_intermediate)

### Plan Your Data Model
Building a secure model starts with understanding your data and your users’ needs.

**Example:** In a recruiting app, sensitive data like SSNs and reviews should only be visible to recruiters, not interviewers.

### Four Levels of Data Access
* **Organization**: Manage who can log in (user list, password policies, login restrictions),
* **Fields**: Restrict visibility or editability of sensitive fields (e.g., bonus amount, SSN) independent of object access,
* **Records**: Fine-tune who can see or modify specific records using:

  * **Organization-Wide Defaults** – baseline visibility,
  * **Role Hierarchies** – managers inherit access,
  * **Sharing Rules** – automated access exceptions,
  * **Manual Sharing** – individual record-level grants.

### Audit and Monitor Access
Effective security also means tracking it:
* **Record modification fields** automatically track who created or edited data,
* **Login History** shows all successful and failed access attempts,
* **Field History Tracking** logs changes to sensitive fields,
* **Setup Audit Trail** records configuration changes,
* **Event Monitoring** provides detailed usage data for compliance and threat detection.

# [2. Control Access to the Org](https://trailhead.salesforce.com/content/learn/modules/data_security/data_security_org)
