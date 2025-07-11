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
* [Login History](https://help.salesforce.com/s/articleView?language=en_US&id=sf.users_login_history.htm) shows all successful and failed access attempts,
* [Field History Tracking](https://help.salesforce.com/s/articleView?language=en_US&id=sf.tracking_field_history.htm) logs changes to sensitive fields,
* [Setup Audit Trail](https://help.salesforce.com/s/articleView?language=en_US&id=sf.admin_monitorsetup.htm) records configuration changes,
* **Event Monitoring** provides detailed usage data for compliance and threat detection.

# [2. Control Access to the Org](https://trailhead.salesforce.com/content/learn/modules/data_security/data_security_org)

### Manual Configurations Completed:

* **User Management**

  * Created a new user with specific role and profile,
  * Verified login behavior for the new user,
  * Deactivated the user as part of the exercise.

* **Password Policies**

  * Enforced password complexity (minimum 8 characters, mixed character types),
  * Enabled password expiration and reuse restrictions,
  * Configured account lockout after multiple failed login attempts.

* **Login IP Ranges**

  * Set trusted IP ranges under **Network Access**,
  * Restricted login IPs for specific profiles (e.g., System Administrator),
  * Tested access denial when logging in from an untrusted IP.

* **Login Hours**

  * Defined login hours for a profile to restrict access outside business hours,
  * Verified that access was blocked outside permitted time.

### Important
* These configurations are **not retrievable** via metadata API or `package.xml`,
* They are **org-level settings and data**, not source-tracked in Salesforce DX,
* For tracking and reproducibility, this summary serves as documentation of manual steps completed in the Dev Org.

# [3. Control Access to Objects](https://trailhead.salesforce.com/content/learn/modules/data_security/data_security_objects)

### Profiles vs Permission Sets vs Permission Set Groups
* **Profiles** define a user’s baseline access: apps, record types, layouts, and object permissions. Each user gets exactly one,
* **Permission Sets** add additional permissions (object, field, app access). Users can have multiple sets,
* **Permission Set Groups** bundle multiple permission sets into a cohesive “persona” (e.g., Sales Rep). Users can have multiple groups, and sets can be reused across groups.

*Best practice*: Use a minimal-access profile (e.g., *Minimum Access – Salesforce*) and layer additional permissions via permission sets/groups).

### Object Permissions
You can configure Create, Read, Edit, and Delete rights per object. The module illustrates access needs for different roles in a *Recruiting App*:
* **Recruiters**: full CRUD on Positions, Candidates, Applications, Reviews,
* **Hiring Managers**: limited access (e.g., no edit on lookups or sensitive fields),
* **Interviewers & Standard Employees**: view access with further restrictions (e.g., masking SSNs and bonus fields).

### Configuring Profiles
Profiles are best used for defining broad, stable attributes: default apps, login restrictions, and baseline permissions.
* Clone standard profiles (like Minimum Access), modify as needed, then assign to users,
* Assign additional rights via permission sets/groups rather than bloating the profile.

### Permission Sets & Groups
* Create targeted permission sets (e.g., *Access and Manage Reviews* for object-level review access),
* Group them into role-aligned sets (e.g., *Recruiters, Hiring Managers, Interviewers*),
* Assign to users (or set expiration dates for temporary access).

### Reviewing Access
Use Developer Org tools to audit permissions:
* **Object Manager → Object Access**: shows which profiles, perm sets/groups grant access to an object,
* **User Detail → View Summary**: shows all permissions a user has,
* **Permission Set / Group Summary**: shows permissions bundled within each set or group.

### Example Workflow in Recruiting App
1. **Profile Setup**
   * Start with *Minimum Access* profile,
   * Clone and tweak for job-function needs (if needed).
2. **Permission Sets Creation**: e.g., *Access and Manage Reviews* → Grants R/E/CU on the Review object.
3. **Permission Set Groups**: Create groups like *Recruiters, Hiring Managers, Interviewers*, adding appropriate sets to each.
4. **Assign Permissions**: Temporarily assign groups to users (e.g., interviewers for the duration they help).
5. **Audit and Monitor**: Ensure permissions align with role requirements using Object and User access summaries.

### Why It Matters
* **Modularity & Scalability**: Avoids hundreds of custom profiles—reuse permission sets as building blocks,
* **Principle of Least Privilege**: Start with minimal access and build up only what’s needed,
* **Auditability**: Built-in summaries help troubleshoot and document security.

# [4. Control Access to Fields](https://trailhead.salesforce.com/content/learn/modules/data_security/data_security_fields?trail_id=force_com_admin_intermediate)

### Why Use Field-Level Security?
* Field-level security adds a stronger layer of protection than page layouts, safeguarding sensitive data across Salesforce (e.g., list views, searches, reports, APIs),
* Use cases:

  * Hide salary‐related bonus fields from certain roles,
  * Mask personal data like SSNs or private notes from unauthorized users.

### Configuring Permissions
* Field permissions govern whether users can **read** or **edit** a field,
* Best applied using **Permission Sets** (and groups), mirroring object-level practices,
* Example workflow:

  1. Create a Permission Set (e.g., `Update Candidate Records`),
  2. Enable object-level **Read** permission,
  3. Grant **Read/Edit** access to specific fields (e.g., checkboxes), while hiding extra sensitive ones like SSNs.

### Bulk Field Configuration
* Use *Field Accessibility* settings or enable *Field-Level Security for Permission Sets during field creation* to set permissions across multiple permission sets at once,
* This saves time when adding new fields or updating access controls.

# [5. Control Access to Records](https://trailhead.salesforce.com/content/learn/modules/data_security/data_security_records?trail_id=force_com_admin_intermediate)

### Record‑Level Security: Four Tiers
1. **Organization‑Wide Defaults (OWD)** – Baseline access for users who don’t own records,
2. **Role Hierarchy** – Ensures managers inherit access of their subordinates,
3. **Sharing Rules** – Automatically grant broader access based on criteria or group,
4. **Manual Sharing** – Record owners or designated users can share individual records.

(These mechanisms layer on top of each other. Start with the strictest OWD, then selectively open access where needed).

### Organization‑Wide Defaults (OWDs)
* Define the minimum access level for each object (e.g., Private, Public Read Only, Public Read/Write, Controlled by Parent),
* Always start by asking:
  1. Who is the most restricted user?
  2. Should this user see or edit every record?
* OWDs apply separately to standard vs. external users and can’t grant permissions beyond object-level security.

### Hands‑On: Setting OWDs in the Developer Org
1. Navigate to **Setup → Sharing Settings**,
2. Click **Edit** under Organization‑Wide Defaults,
3. Define internal & external access per object (e.g., Private, Public Read Only),
4. Optionally disable **Grant Access Using Hierarchies** for custom objects,
5. Save — changes trigger automatic sharing recalculation.

# [6. Create a Role Hierarchy](https://trailhead.salesforce.com/content/learn/modules/data_security/data_security_roles?trail_id=force_com_admin_intermediate)

### Role Hierarchy Basics
* Roles define layers of data access; higher roles can access data owned by users below them,
* A hierarchy does not have to mirror company org charts—it should reflect record access needs.

### Automatic Access via Hierarchy
Users inherit access to subordinate-owned records (default behavior unless disabled for custom objects).

### Configuring the Hierarchy
* Within **Setup → Roles**, use **Tree View** for easy visualization,
* Add top-level roles (e.g., CEO), then create child roles under them,
* Assign users to their respective roles once roles are created.

### Recruiting App Example
* **Example hierarchy**: CEO → VP, HR → Recruiting Manager → Recruiter,
* Each level gains access to all records owned by levels beneath it, simplifying business record access.

### Why It Matters
* Centralizes and simplifies access permissions,
* Reduces manual sharing, prevents redundant configuration,
* Ensures consistent, secure visibility across user roles.

# [6. Define Sharing Rules](https://trailhead.salesforce.com/content/learn/modules/data_security/data_security_sharing_rules?trail_id=force_com_admin_intermediate)
