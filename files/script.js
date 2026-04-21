/**
 * AZURE EXAM LAB — script.js
 *
 * Question bank sourced from / verified against:
 *   AZ-900: https://learn.microsoft.com/en-us/certifications/azure-fundamentals/
 *   AZ-104: https://learn.microsoft.com/en-us/certifications/azure-administrator/
 *   AZ-305: https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/
 *
 * Question types:
 *   mc       – single-select multiple choice  (4 options, 1 correct)
 *   ms       – multi-select                   (pick all that apply)
 *   tf       – true / false
 *   drag     – drag items into category zones
 *   order    – arrange items in correct sequence
 *   cmd      – complete an Azure CLI / PowerShell command
 */

"use strict";

/* ═══════════════════════════════════════════════════════════
   QUESTION BANK
═══════════════════════════════════════════════════════════ */
const QUESTIONS = {
  /* ─────────────────────── AZ-900 ────────────────────────── */
  AZ900: [
    // ── Multiple Choice ──────────────────────────────────────
    {
      id: "az900-mc-01",
      type: "mc",
      objective: "Describe cloud concepts — types of cloud",
      text: "A company wants to migrate workloads to the cloud but must keep customer data within a specific geographic boundary. The company also requires full control of the underlying hardware. Which cloud deployment model should the company use?",
      options: [
        "Public cloud",
        "Private cloud",
        "Hybrid cloud",
        "Community cloud",
      ],
      correct: 1,
      explanation:
        "A private cloud is hosted either on-premises or in a dedicated environment managed exclusively for one organisation. It provides full hardware control and can enforce geographic data residency requirements that public cloud regions cannot guarantee.",
      doc: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/considerations/fundamental-concepts",
    },

    {
      id: "az900-mc-02",
      type: "mc",
      objective: "Describe cloud concepts — shared responsibility",
      text: "Which of the following best describes the Shared Responsibility Model for a Software-as-a-Service (SaaS) offering such as Microsoft 365?",
      options: [
        "The customer is responsible for the operating system, runtime, and application.",
        "Microsoft is responsible for everything from the physical host to the application; the customer is responsible only for data and user access.",
        "The customer shares equal responsibility with Microsoft for network controls and identity management.",
        "Microsoft is responsible only for the physical hardware; all other layers are the customer's responsibility.",
      ],
      correct: 1,
      explanation:
        "In a SaaS model, the cloud provider (Microsoft) manages the infrastructure, platform, and application. The customer retains responsibility only for their data, endpoints, and identity/access management. This contrasts with IaaS, where customers manage far more layers.",
      doc: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility",
    },

    {
      id: "az900-mc-03",
      type: "mc",
      objective: "Describe cloud concepts — benefits — scalability",
      text: "A retail company experiences significant traffic spikes during seasonal sales. The company wants a cloud solution that automatically increases compute resources during peak hours and reduces them afterward without manual intervention. Which cloud benefit does this scenario illustrate?",
      options: [
        "High availability",
        "Disaster recovery",
        "Elasticity",
        "Geo-redundancy",
      ],
      correct: 2,
      explanation:
        "Elasticity is the ability to dynamically acquire resources when demand increases and release them when demand decreases. Azure enables this through autoscaling features in services such as Azure Virtual Machine Scale Sets and Azure App Service.",
      doc: "https://learn.microsoft.com/en-us/azure/well-architected/scalability/design-scale",
    },

    {
      id: "az900-mc-04",
      type: "mc",
      objective: "Describe Azure core services — compute",
      text: "A developer needs to run event-driven code without provisioning or managing servers, paying only when the code executes. Which Azure compute service best meets this requirement?",
      options: [
        "Azure Virtual Machines",
        "Azure Container Instances",
        "Azure Functions",
        "Azure App Service",
      ],
      correct: 2,
      explanation:
        "Azure Functions is a serverless compute service that executes code in response to triggers. You are billed only for execution time and the number of executions—there are no charges when the function is idle. This is a core scenario for serverless and event-driven architectures.",
      doc: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    },

    {
      id: "az900-mc-05",
      type: "mc",
      objective: "Describe Azure core services — networking",
      text: "A company has an on-premises network and wants to connect it to Azure over the public internet with traffic encrypted at the IP layer. Which Azure service provides this capability at the lowest cost?",
      options: [
        "Azure ExpressRoute",
        "Azure VPN Gateway with a Site-to-Site connection",
        "Azure Bastion",
        "Azure Virtual WAN",
      ],
      correct: 1,
      explanation:
        "Azure VPN Gateway with a Site-to-Site (S2S) connection uses IPsec/IKE to encrypt traffic between an on-premises VPN device and Azure over the public internet. It is lower cost than ExpressRoute, which provides private dedicated connectivity. Azure Bastion is for secure RDP/SSH browser access—not site connectivity.",
      doc: "https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways",
    },

    {
      id: "az900-mc-06",
      type: "mc",
      objective: "Describe Azure management tools — Azure Resource Manager",
      text: "Which Azure feature allows you to logically group Azure services, apply policies, and control access across multiple Azure subscriptions within a single organisation?",
      options: [
        "Azure Resource Groups",
        "Azure Management Groups",
        "Azure Policy",
        "Azure Blueprints",
      ],
      correct: 1,
      explanation:
        "Azure Management Groups sit above subscriptions in the hierarchy (Tenant Root → Management Groups → Subscriptions → Resource Groups → Resources). They allow organisations to apply governance, access, and policy controls across multiple subscriptions consistently.",
      doc: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    },

    // ── Multi-Select ─────────────────────────────────────────
    {
      id: "az900-ms-01",
      type: "ms",
      objective: "Describe cloud concepts — benefits of cloud",
      text: "Which TWO of the following are direct benefits of cloud computing compared to on-premises data centres? (Choose two.)",
      options: [
        "Eliminates all IT operational costs",
        "Converts capital expenditure (CapEx) to operational expenditure (OpEx)",
        "Provides access to virtually unlimited, scalable resources on demand",
        "Guarantees zero latency for all applications",
        "Eliminates the need for network security",
      ],
      correct: [1, 2],
      explanation:
        "Cloud computing shifts infrastructure spend from large up-front capital purchases (CapEx, e.g., buying servers) to ongoing operational costs (OpEx, e.g., pay-as-you-go). It also removes capacity constraints—organisations can scale resources up or down virtually without limit. It does not eliminate all IT costs, guarantee zero latency, or remove the need for security.",
      doc: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/strategy/cloud-accounting",
    },

    {
      id: "az900-ms-02",
      type: "ms",
      objective: "Describe Azure core services — storage",
      text: "A developer needs to store unstructured data (images and videos) accessible via HTTP globally. Which TWO Azure Storage services are appropriate for this use case? (Choose two.)",
      options: [
        "Azure Blob Storage",
        "Azure Queue Storage",
        "Azure Static Website hosting (in a storage account)",
        "Azure Table Storage",
        "Azure File Storage",
      ],
      correct: [0, 2],
      explanation:
        "Azure Blob Storage is the primary service for storing large unstructured objects like images and videos accessible over HTTP. Static Website hosting within a storage account serves static content via HTTP/HTTPS, making it suitable for front-end assets. Queue and Table Storage serve messaging and NoSQL tabular data scenarios respectively.",
      doc: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction",
    },

    // ── True / False ──────────────────────────────────────────
    {
      id: "az900-tf-01",
      type: "tf",
      objective: "Describe Azure pricing and SLAs",
      text: "An Azure free account provides 12 months of free access to popular Azure services for all Azure customers, regardless of how long they have had an Azure account.",
      correct: false,
      explanation:
        "The Azure free account with 12 months of free services is only available to new Azure customers. Existing customers must use the Pay-As-You-Go or other offer types. Always-free services (e.g., 5 GB of Blob storage, Azure Functions 1M executions) are available to all customers.",
      doc: "https://azure.microsoft.com/en-us/free/",
    },

    {
      id: "az900-tf-02",
      type: "tf",
      objective:
        "Describe Azure core services — regions and availability zones",
      text: "Azure Availability Zones are physically separate data centres within the same Azure region, each with independent power, cooling, and networking.",
      correct: true,
      explanation:
        "Availability Zones (AZs) are distinct physical locations within a single Azure region. Each zone is made up of one or more data centres equipped with independent power, cooling, and networking. Zone-redundant services replicate data across zones to protect from single data centre failures.",
      doc: "https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview",
    },

    // ── Drag and Drop ─────────────────────────────────────────
    {
      id: "az900-drag-01",
      type: "drag",
      objective: "Describe Azure core services — cloud service types",
      text: "Match each Azure service to its correct cloud service model.",
      items: [
        { id: "svc1", label: "Azure Virtual Machines" },
        { id: "svc2", label: "Azure App Service" },
        { id: "svc3", label: "Microsoft 365" },
        { id: "svc4", label: "Azure SQL Database" },
      ],
      zones: [
        { id: "iaas", label: "Infrastructure as a Service (IaaS)" },
        { id: "paas", label: "Platform as a Service (PaaS)" },
        { id: "saas", label: "Software as a Service (SaaS)" },
      ],
      correctMapping: {
        svc1: "iaas",
        svc2: "paas",
        svc3: "saas",
        svc4: "paas",
      },
      explanation:
        "Azure VMs are IaaS — you manage the OS and above. Azure App Service and Azure SQL Database are PaaS — Microsoft manages the platform; you deploy code/data. Microsoft 365 is SaaS — fully managed end-to-end application delivered over the internet.",
      doc: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/considerations/fundamental-concepts",
    },

    // ── Order ─────────────────────────────────────────────────
    {
      id: "az900-order-01",
      type: "order",
      objective: "Describe Azure management tools — Azure Resource Manager",
      text: "Arrange the Azure organisational hierarchy from largest scope (top) to smallest scope (bottom).",
      items: [
        { id: "o1", label: "Azure Active Directory Tenant" },
        { id: "o2", label: "Management Group" },
        { id: "o3", label: "Subscription" },
        { id: "o4", label: "Resource Group" },
        { id: "o5", label: "Individual Resource (e.g., VM)" },
      ],
      correctOrder: ["o1", "o2", "o3", "o4", "o5"],
      explanation:
        "The hierarchy is: AAD Tenant → Management Groups → Subscriptions → Resource Groups → Resources. Policies and access applied at higher levels are inherited downward.",
      doc: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-setup-guide/organize-resources",
    },
  ], // end AZ900

  /* ─────────────────────── AZ-104 ────────────────────────── */
  AZ104: [
    // ── Multiple Choice ──────────────────────────────────────
    {
      id: "az104-mc-01",
      type: "mc",
      objective: "Manage Azure identities — Microsoft Entra ID",
      text: "An administrator needs to enforce that all users in a Microsoft Entra ID (formerly Azure AD) tenant must use Multi-Factor Authentication when signing in from outside the corporate network. The solution must not require per-user MFA licences. What is the recommended approach?",
      options: [
        "Enable per-user Multi-Factor Authentication from the Microsoft Entra admin centre.",
        "Create a Conditional Access policy that requires MFA for all users when the sign-in location is outside named locations.",
        "Enable Microsoft Entra ID Security Defaults.",
        "Configure Smart Lockout to block sign-ins from untrusted IPs.",
      ],
      correct: 1,
      explanation:
        "A Conditional Access policy provides fine-grained control — requiring MFA only from outside named/trusted network locations. Security Defaults require MFA for all sign-ins without location conditions. Per-user MFA doesn't use Conditional Access and is the older, less flexible approach. Conditional Access requires at least Microsoft Entra ID P1 licensing.",
      doc: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/howto-conditional-access-policy-all-users-mfa",
    },

    {
      id: "az104-mc-02",
      type: "mc",
      objective: "Manage Azure identities — RBAC",
      text: "A security team requires read-only access to all resources in a subscription, but must NOT be able to make any changes or manage access. Which built-in Azure RBAC role should be assigned?",
      options: ["Owner", "Contributor", "Reader", "User Access Administrator"],
      correct: 2,
      explanation:
        "The Reader role grants read access to all Azure resources within the assigned scope without the ability to create, update, delete, or manage role assignments. Owner and Contributor allow write actions; User Access Administrator grants the ability to manage access assignments.",
      doc: "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader",
    },

    {
      id: "az104-mc-03",
      type: "mc",
      objective: "Implement and manage storage",
      text: "An administrator creates an Azure Storage account with the default settings. A developer reports they cannot access blobs using the account's access key. The administrator checks and finds that Shared Key access is disabled on the account. What must the administrator do to restore access key–based connectivity without enabling Shared Key access?",
      options: [
        "Regenerate the storage account access keys.",
        "Assign the developer the Storage Blob Data Contributor role and use Azure AD–based authentication.",
        "Change the storage account replication to Geo-Redundant Storage (GRS).",
        "Enable hierarchical namespace on the storage account.",
      ],
      correct: 1,
      explanation:
        "When Shared Key access is disabled, access key–based and SAS token authentication are blocked. The recommended alternative is Azure AD–based authentication via data-plane RBAC roles such as Storage Blob Data Contributor. This requires assigning the appropriate role to the developer's identity.",
      doc: "https://learn.microsoft.com/en-us/azure/storage/common/shared-key-authorization-prevent",
    },

    {
      id: "az104-mc-04",
      type: "mc",
      objective: "Deploy and manage Azure compute resources — virtual machines",
      text: "A VM is running in Azure and an administrator needs to change the VM's size from Standard_D2s_v3 to Standard_D4s_v3 to increase CPU and memory. The VM is currently running. What will happen when the resize is initiated?",
      options: [
        "The VM size changes instantly with no downtime.",
        "The VM is restarted to apply the new size; a brief period of downtime occurs.",
        "A snapshot of the VM is created and a new VM is deployed with the target size.",
        "The resize fails because running VMs cannot be resized.",
      ],
      correct: 1,
      explanation:
        "Resizing a VM in Azure requires the VM to be stopped (deallocated) and restarted if the target size is on a different underlying hardware cluster. Even within the same cluster, a reboot is required. This results in a brief outage. For HA, use Availability Zones or Scale Sets with rolling updates.",
      doc: "https://learn.microsoft.com/en-us/azure/virtual-machines/resize-vm",
    },

    {
      id: "az104-mc-05",
      type: "mc",
      objective: "Configure and manage virtual networking",
      text: "Two Azure Virtual Networks (VNets) in the same region need to communicate with each other using private IP addresses. Resources in both VNets are in different subscriptions under the same Azure AD tenant. Which connectivity solution should an administrator use?",
      options: [
        "VNet-to-VNet VPN Gateway connection",
        "Azure Virtual Network Peering",
        "Azure ExpressRoute",
        "Service Endpoints",
      ],
      correct: 1,
      explanation:
        "VNet Peering supports cross-subscription peering within the same or different Azure AD tenants. It routes traffic over the Microsoft backbone at low latency without gateway devices or public internet. VNet-to-VNet VPN uses encrypted tunnels and incurs gateway costs. Service Endpoints do not enable general VM-to-VM connectivity.",
      doc: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    },

    {
      id: "az104-mc-06",
      type: "mc",
      objective: "Monitor and maintain Azure resources — Azure Monitor",
      text: "An administrator wants to be notified via email when the CPU utilisation of a virtual machine exceeds 85% for more than 5 minutes. Which Azure Monitor feature provides this capability?",
      options: [
        "Diagnostic Settings",
        "Log Analytics query alert",
        "Metric alert rule",
        "Azure Advisor recommendation",
      ],
      correct: 2,
      explanation:
        "Metric alert rules evaluate platform metrics (such as Percentage CPU) at defined intervals with configurable thresholds and time windows. When the metric exceeds the threshold for the specified evaluation period, an alert is fired and an action group (e.g., email) is triggered. Diagnostic settings route data to destinations but do not fire alerts.",
      doc: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-metric",
    },

    // ── Command Input ─────────────────────────────────────────
    {
      id: "az104-cmd-01",
      type: "cmd",
      objective: "Deploy and manage Azure compute resources — Azure CLI",
      text: 'An administrator needs to create an Azure Resource Group named "rg-prod-eastus" in the East US region using the Azure CLI. Complete the command:',
      prefix: "az",
      answer: "group create --name rg-prod-eastus --location eastus",
      acceptableAnswers: [
        "group create --name rg-prod-eastus --location eastus",
        "group create -n rg-prod-eastus -l eastus",
        "group create --location eastus --name rg-prod-eastus",
      ],
      hints: ["group", "create", "--name", "--location"],
      explanation:
        'The correct command is: az group create --name <name> --location <region>. Short flags -n and -l are also accepted. The location value can be the region display name or internal name (e.g., "East US" or "eastus").',
      doc: "https://learn.microsoft.com/en-us/cli/azure/group#az-group-create",
    },

    {
      id: "az104-cmd-02",
      type: "cmd",
      objective: "Implement and manage storage — Azure CLI",
      text: 'Complete the Azure CLI command to list all storage accounts in the resource group "rg-storage-prod":',
      prefix: "az",
      answer: "storage account list --resource-group rg-storage-prod",
      acceptableAnswers: [
        "storage account list --resource-group rg-storage-prod",
        "storage account list -g rg-storage-prod",
        "storage account list --resource-group rg-storage-prod --output table",
      ],
      hints: ["storage", "account", "list", "--resource-group"],
      explanation:
        "az storage account list --resource-group <rg-name> lists all storage accounts within the specified resource group. Adding --output table formats results in a readable table. Omitting --resource-group lists accounts across all accessible subscriptions.",
      doc: "https://learn.microsoft.com/en-us/cli/azure/storage/account#az-storage-account-list",
    },

    // ── Multi-Select ─────────────────────────────────────────
    {
      id: "az104-ms-01",
      type: "ms",
      objective:
        "Configure and manage virtual networking — Network Security Groups",
      text: "Which TWO statements about Azure Network Security Groups (NSGs) are correct? (Choose two.)",
      options: [
        "An NSG can be associated with both a subnet and a network interface simultaneously.",
        "NSG rules are stateless — you must explicitly define both inbound and outbound rules for each connection.",
        "Inbound traffic is processed using the following order of evaluation: subnet NSG then NIC NSG.",
        "The default NSG rules cannot be deleted, but custom rules with a lower priority number override them.",
        "NSGs can be associated with Virtual Network Gateways.",
      ],
      correct: [0, 3],
      explanation:
        "NSGs can be applied to both a NIC and its subnet; both sets of rules are evaluated. Default rules (AllowVNetInBound, AllowAzureLoadBalancerInBound, DenyAllInBound etc.) cannot be deleted, but rules with a lower priority number (higher precedence) override them. NSG rule processing IS stateful for TCP — return traffic is automatically allowed. NSGs cannot be associated with VNet Gateways.",
      doc: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview",
    },

    // ── Drag and Drop ─────────────────────────────────────────
    {
      id: "az104-drag-01",
      type: "drag",
      objective: "Implement and manage storage — storage redundancy",
      text: "Match each Azure Storage redundancy option to its correct replication scope.",
      items: [
        { id: "r1", label: "Locally Redundant Storage (LRS)" },
        { id: "r2", label: "Zone-Redundant Storage (ZRS)" },
        { id: "r3", label: "Geo-Redundant Storage (GRS)" },
        { id: "r4", label: "Geo-Zone-Redundant Storage (GZRS)" },
      ],
      zones: [
        { id: "single-dc", label: "Single data centre, same region" },
        { id: "multi-az", label: "Multiple Availability Zones, same region" },
        {
          id: "paired-region",
          label: "Primary region + paired secondary region",
        },
        {
          id: "az-and-geo",
          label: "Availability Zones + secondary paired region",
        },
      ],
      correctMapping: {
        r1: "single-dc",
        r2: "multi-az",
        r3: "paired-region",
        r4: "az-and-geo",
      },
      explanation:
        "LRS replicates 3 copies within a single data centre. ZRS replicates across 3 AZs in the same region. GRS replicates to a secondary paired region (LRS in each region). GZRS combines ZRS in the primary region with geo-replication to a secondary region.",
      doc: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy",
    },

    // ── True / False ──────────────────────────────────────────
    {
      id: "az104-tf-01",
      type: "tf",
      objective: "Deploy and manage Azure compute resources — availability",
      text: "Placing two VMs in the same Availability Zone guarantees that at least one VM will remain available during planned maintenance.",
      correct: false,
      explanation:
        "Availability Zones protect against data centre–level failures, but Microsoft may perform planned maintenance on VMs in the same zone. To protect against planned maintenance, VMs should be placed in different Availability Zones (cross-zone) or in an Availability Set, which uses update domains to stagger reboots.",
      doc: "https://learn.microsoft.com/en-us/azure/virtual-machines/availability",
    },
  ], // end AZ104

  /* ─────────────────────── AZ-305 ────────────────────────── */
  AZ305: [
    // ── Multiple Choice ──────────────────────────────────────
    {
      id: "az305-mc-01",
      type: "mc",
      objective: "Design identity, governance, and monitoring solutions",
      text: "A financial organisation must ensure that all Azure deployments in their environment conform to regulatory standards, including requiring encryption at rest, approved VM SKUs, and allowed resource types. Violations should be automatically remediated where possible. Which combination of Azure services achieves this at scale across multiple subscriptions?",
      options: [
        "Azure Blueprints and Resource Locks",
        "Azure Policy with DeployIfNotExists and Modify effects, assigned at a Management Group",
        "Azure Security Centre Regulatory Compliance dashboard with auto-provisioning agents",
        "ARM templates deployed via Azure DevOps with required parameter values",
      ],
      correct: 1,
      explanation:
        "Azure Policy at management group scope applies governance across all child subscriptions. The DeployIfNotExists effect automatically deploys required resources (e.g., diagnostic settings) if absent, and the Modify effect can add or update resource properties. Blueprints are deprecated in favour of Template Specs + Policy. ARM templates enforce compliance at deploy time but cannot remediate existing resources.",
      doc: "https://learn.microsoft.com/en-us/azure/governance/policy/overview",
    },

    {
      id: "az305-mc-02",
      type: "mc",
      objective: "Design data storage solutions — relational",
      text: "An architect is designing a multi-region application that requires a relational database with 99.999% SLA, automatic failover, and the ability to read from any region with minimal replication lag. Which Azure database service best meets these requirements?",
      options: [
        "Azure SQL Database with Active Geo-Replication",
        "Azure SQL Database Hyperscale",
        "Azure SQL Managed Instance Business Critical tier with auto-failover groups",
        "Azure Cosmos DB for NoSQL",
      ],
      correct: 2,
      explanation:
        "Azure SQL Managed Instance Business Critical tier provides built-in high availability using Always On availability groups across 4 replicas and supports auto-failover groups for cross-region automatic failover with a 99.99% SLA. For 99.999%, the Business Critical tier with zone redundancy achieves this. Azure SQL DB Active Geo-Replication provides read replicas but failover is manual by default. Cosmos DB is a NoSQL service.",
      doc: "https://learn.microsoft.com/en-us/azure/azure-sql/managed-instance/failover-group-sql-mi",
    },

    {
      id: "az305-mc-03",
      type: "mc",
      objective: "Design business continuity solutions — backup and recovery",
      text: "A solution architect needs to design a backup strategy for Azure Virtual Machines that meets an RPO (Recovery Point Objective) of 4 hours and an RTO (Recovery Time Objective) of 2 hours. Cost must be minimised. What backup configuration should be recommended?",
      options: [
        "Azure Backup with daily backup policy and Locally Redundant Storage vault",
        "Azure Backup with enhanced policy (hourly snapshots, 4-hour frequency) and Zone-Redundant Storage vault",
        "Azure Site Recovery with continuous replication to a secondary region",
        "VM snapshots stored in an Azure Storage account taken every 4 hours via an Automation runbook",
      ],
      correct: 1,
      explanation:
        "The Enhanced Backup policy for Azure VMs supports hourly backup frequency (1–4 hours), meeting the 4-hour RPO. Zone-Redundant Storage (ZRS) vault provides resilience within the region at a lower cost than GRS. Azure Site Recovery meets tighter RPO/RTO requirements but is more expensive and designed for disaster recovery, not routine backup. DIY snapshots via Automation are operationally complex and lack centralised monitoring.",
      doc: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-enhanced-policy",
    },

    {
      id: "az305-mc-04",
      type: "mc",
      objective: "Design infrastructure solutions — application architecture",
      text: "A company needs to decouple a high-volume order processing system from its fulfilment backend. Orders must not be lost, and each order must be processed exactly once in the order received. Message size can reach 500 KB. Which Azure messaging service is most appropriate?",
      options: [
        "Azure Event Grid",
        "Azure Event Hubs",
        "Azure Service Bus with a queue using sessions",
        "Azure Queue Storage",
      ],
      correct: 2,
      explanation:
        "Azure Service Bus queues with sessions guarantee FIFO (first-in, first-out) ordering and exactly-once delivery through duplicate detection and message lock mechanisms. Service Bus supports messages up to 100 MB (Premium tier) or 256 KB (Standard). Azure Queue Storage does not guarantee ordering or exactly-once delivery. Event Grid is for event-driven reactive scenarios, not guaranteed ordered messaging. Event Hubs is a streaming ingestion service optimised for high-throughput telemetry.",
      doc: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
    },

    {
      id: "az305-mc-05",
      type: "mc",
      objective: "Design network solutions — hybrid connectivity",
      text: "An enterprise requires consistent sub-10ms network latency between on-premises data centres and Azure-hosted workloads, and the connection must NOT traverse the public internet for compliance reasons. Which connectivity option should an architect specify?",
      options: [
        "Azure VPN Gateway with active-active configuration",
        "Azure ExpressRoute with a Private Peering circuit",
        "Azure Virtual WAN with branch connectivity",
        "Azure Bastion with private IP routing",
      ],
      correct: 1,
      explanation:
        "Azure ExpressRoute provides a dedicated private connection from on-premises to Azure via a connectivity provider or colocation facility. Traffic never traverses the public internet, meeting compliance requirements. Private Peering connects to Azure VNets. Bandwidth up to 100 Gbps is available, with low, consistent latency. VPN Gateways always use the public internet as the transport medium.",
      doc: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    },

    {
      id: "az305-mc-06",
      type: "mc",
      objective:
        "Design identity, governance, and monitoring solutions — landing zones",
      text: "An organisation is adopting Azure at scale and wants a proven, prescriptive architecture that includes network topology, identity, security, governance, and management baselines. Which Microsoft framework should the architect recommend?",
      options: [
        "Azure Well-Architected Framework",
        "Microsoft Cloud Adoption Framework — Azure landing zones",
        "Azure Security Benchmark",
        "Microsoft Zero Trust Architecture",
      ],
      correct: 1,
      explanation:
        "The Microsoft Cloud Adoption Framework's Azure Landing Zone architecture provides a fully integrated, at-scale foundation including platform management groups, connectivity (hub-and-spoke or Virtual WAN), identity, policy governance, and security. Well-Architected Framework guides the design of individual workloads. Security Benchmark provides security controls. Zero Trust is a security model, not a full landing zone architecture.",
      doc: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/",
    },

    // ── Multi-Select ─────────────────────────────────────────
    {
      id: "az305-ms-01",
      type: "ms",
      objective: "Design data storage solutions — non-relational",
      text: "A solutions architect is designing a globally distributed application requiring single-digit millisecond reads, multi-region writes, and automatic failover. Which TWO Azure Cosmos DB features directly support these requirements? (Choose two.)",
      options: [
        "Serverless capacity mode",
        "Multi-region writes (multi-master)",
        "Analytical store (HTAP)",
        "Automatic indexing of all properties",
        "Availability Zone redundancy for the primary region",
      ],
      correct: [1, 4],
      explanation:
        "Multi-region writes allow applications to write to any configured region with automatic conflict resolution, enabling low-latency writes worldwide and automatic failover. Availability Zone redundancy ensures the primary region itself is resilient to data centre failures, contributing to the high availability SLA. Serverless is for bursty low-traffic workloads, not globally distributed writes. Analytical store and automatic indexing are distinct features unrelated to the stated requirements.",
      doc: "https://learn.microsoft.com/en-us/azure/cosmos-db/distribute-data-globally",
    },

    // ── Order ─────────────────────────────────────────────────
    {
      id: "az305-order-01",
      type: "order",
      objective: "Design business continuity solutions — site recovery",
      text: "An architect is designing an Azure Site Recovery failover plan. Arrange the following steps in the correct sequence for executing an unplanned failover of an Azure VM to a secondary region.",
      items: [
        {
          id: "s1",
          label: "Verify replication health and review recovery points in ASR",
        },
        {
          id: "s2",
          label:
            "Initiate Test Failover to validate the recovery plan without impacting production",
        },
        {
          id: "s3",
          label:
            "Execute the planned/unplanned Failover, selecting the desired recovery point",
        },
        {
          id: "s4",
          label:
            "Update DNS or Traffic Manager to redirect traffic to the secondary region",
        },
        {
          id: "s5",
          label:
            "Commit the failover to finalise replication and remove the recovery point dependency",
        },
      ],
      correctOrder: ["s1", "s2", "s3", "s4", "s5"],
      explanation:
        "Best practice sequence: (1) Verify replication is healthy. (2) Test Failover to validate without disruption. (3) Execute the actual Failover selecting an appropriate recovery point. (4) Update routing (DNS/Traffic Manager) to send users to the secondary. (5) Commit the failover to clean up old recovery points and complete the process.",
      doc: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-failover",
    },

    // ── Drag and Drop ─────────────────────────────────────────
    {
      id: "az305-drag-01",
      type: "drag",
      objective: "Design infrastructure solutions — compute",
      text: "Match each workload description to the most appropriate Azure compute service.",
      items: [
        {
          id: "w1",
          label:
            "Containerised microservices requiring auto-scaling and service mesh",
        },
        {
          id: "w2",
          label:
            "Batch processing jobs that run for minutes/hours and can be interrupted",
        },
        {
          id: "w3",
          label: "Event-triggered stateless function running for seconds",
        },
        {
          id: "w4",
          label:
            "Legacy Windows application requiring full OS control and specific drivers",
        },
      ],
      zones: [
        { id: "aks", label: "Azure Kubernetes Service (AKS)" },
        { id: "spot", label: "Azure Spot VMs / Batch" },
        { id: "functions", label: "Azure Functions" },
        { id: "vm", label: "Azure Virtual Machines (IaaS)" },
      ],
      correctMapping: {
        w1: "aks",
        w2: "spot",
        w3: "functions",
        w4: "vm",
      },
      explanation:
        "AKS is purpose-built for containerised microservices with Kubernetes orchestration and service mesh support (e.g., Istio add-on). Azure Spot VMs / Batch offer significant discounts for interruptible workloads. Azure Functions is the serverless, event-driven compute choice for short-lived stateless code. IaaS VMs are required when applications need direct OS access, specific hardware drivers, or licensed software tied to a specific environment.",
      doc: "https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree",
    },

    // ── True / False ──────────────────────────────────────────
    {
      id: "az305-tf-01",
      type: "tf",
      objective: "Design network solutions — application delivery",
      text: "Azure Front Door and Azure Application Gateway can both terminate TLS, perform path-based routing, and provide Web Application Firewall (WAF) protection; however, Azure Front Door operates at the global level while Azure Application Gateway operates at the regional level.",
      correct: true,
      explanation:
        "This statement is correct. Azure Front Door is a global, cloud-native CDN and load balancer that operates at Microsoft's edge PoPs worldwide. Azure Application Gateway is a regional Layer-7 load balancer deployed within a VNet. Both support TLS termination, URL-path–based routing, and WAF. Architects choose Front Door for multi-region active-active workloads and App Gateway for regional ingress.",
      doc: "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview",
    },
  ], // end AZ305
}; // end QUESTIONS

/* ═══════════════════════════════════════════════════════════
   QUIZ STATE
═══════════════════════════════════════════════════════════ */
const state = {
  exam: null,
  questions: [],
  index: 0,
  score: 0,
  results: [], // { question, correct: bool }
  dragState: {}, // item-id → zone-id map
  sortItems: [], // current sorted order for order questions
  dragOver: null,
};

/* ═══════════════════════════════════════════════════════════
   DOM HELPERS
═══════════════════════════════════════════════════════════ */
const $ = (id) => document.getElementById(id);
const show = (el) => el && el.classList.add("visible");
const hide = (el) => el && el.classList.remove("visible");
const screens = {
  home: $("screen-home"),
  quiz: $("screen-quiz"),
  results: $("screen-results"),
};

function goToScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

/* ═══════════════════════════════════════════════════════════
   HOME SCREEN
═══════════════════════════════════════════════════════════ */
document.querySelectorAll(".btn-start").forEach((btn) => {
  btn.addEventListener("click", () => startExam(btn.dataset.exam));
});

function startExam(examKey) {
  state.exam = examKey;
  state.questions = shuffle([...QUESTIONS[examKey]]);
  state.index = 0;
  state.score = 0;
  state.results = [];

  $("quiz-exam-label").textContent = examKey.replace(/(\d)/, "-$1");
  updateHeader();
  goToScreen("quiz");
  renderQuestion();
}

/* ═══════════════════════════════════════════════════════════
   HEADER
═══════════════════════════════════════════════════════════ */
function updateHeader() {
  const total = state.questions.length;
  const cur = state.index + 1;
  $("progress-text").textContent = `${Math.min(cur, total)} / ${total}`;
  $("progress-fill").style.width = `${((cur - 1) / total) * 100}%`;
  $("score-display").textContent = state.score;
}

/* ═══════════════════════════════════════════════════════════
   RENDER QUESTION
═══════════════════════════════════════════════════════════ */
function renderQuestion() {
  const q = state.questions[state.index];
  if (!q) {
    showResults();
    return;
  }

  // Clear feedback
  const fb = $("feedback-banner");
  fb.classList.add("hidden");
  fb.classList.remove("correct-fb", "wrong-fb");

  // Meta
  $("q-type-badge").textContent = typeName(q.type);
  $("q-objective").textContent = q.objective;
  $("q-doc-link").href = q.doc;
  $("q-text").textContent = q.text;

  // Hide all zones
  [
    "zone-mc",
    "zone-ms",
    "zone-drag",
    "zone-cmd",
    "zone-tf",
    "zone-order",
  ].forEach((id) => {
    hide($(id));
    $(id).classList.remove("visible");
  });

  updateHeader();

  switch (q.type) {
    case "mc":
      renderMC(q);
      break;
    case "ms":
      renderMS(q);
      break;
    case "tf":
      renderTF(q);
      break;
    case "drag":
      renderDrag(q);
      break;
    case "order":
      renderOrder(q);
      break;
    case "cmd":
      renderCmd(q);
      break;
  }
}

function typeName(t) {
  return (
    {
      mc: "Multiple Choice",
      ms: "Multi-Select",
      tf: "True / False",
      drag: "Drag & Drop",
      order: "Sequence",
      cmd: "Command Input",
    }[t] || t
  );
}

/* ─── Multiple Choice ──────────────────────────────────── */
function renderMC(q) {
  const zone = $("zone-mc");
  const container = $("mc-options");
  container.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "mc-option";
    btn.innerHTML = `<span class="mc-option-letter">${"ABCD"[i]}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => {
      if (container.querySelector(".correct, .wrong")) return;
      container
        .querySelectorAll(".mc-option")
        .forEach((b) => b.classList.add("disabled"));
      const isCorrect = i === q.correct;
      btn.classList.add(isCorrect ? "correct" : "wrong");
      if (!isCorrect)
        container
          .querySelectorAll(".mc-option")
          [q.correct].classList.add("correct");
      recordResult(q, isCorrect);
      showFeedback(q, isCorrect);
    });
    container.appendChild(btn);
  });

  show(zone);
}

/* ─── Multi-Select ──────────────────────────────────────── */
function renderMS(q) {
  const zone = $("zone-ms");
  const container = $("ms-options");
  container.innerHTML = "";
  $("ms-hint").textContent =
    `Select all that apply. (${q.correct.length} correct answers)`;

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "mc-option";
    btn.dataset.index = i;
    btn.innerHTML = `<span class="mc-option-letter">${"ABCDE"[i]}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => {
      if (!btn.classList.contains("disabled")) btn.classList.toggle("selected");
    });
    container.appendChild(btn);
  });

  const submitBtn = $("ms-submit");
  submitBtn.onclick = () => {
    const selected = [...container.querySelectorAll(".selected")].map(
      (b) => +b.dataset.index,
    );
    container
      .querySelectorAll(".mc-option")
      .forEach((b) => b.classList.add("disabled"));
    const isCorrect = arraysEqual(selected.sort(), [...q.correct].sort());
    container.querySelectorAll(".mc-option").forEach((b) => {
      const idx = +b.dataset.index;
      if (q.correct.includes(idx)) b.classList.add("correct");
      else if (selected.includes(idx)) b.classList.add("wrong");
    });
    recordResult(q, isCorrect);
    showFeedback(q, isCorrect);
  };

  show(zone);
}

/* ─── True / False ──────────────────────────────────────── */
function renderTF(q) {
  const zone = $("zone-tf");
  zone.querySelectorAll(".tf-btn").forEach((btn) => {
    btn.className = "tf-btn";
    btn.onclick = () => {
      zone
        .querySelectorAll(".tf-btn")
        .forEach((b) => b.classList.add("disabled"));
      const val = btn.dataset.val === "true";
      const isCorrect = val === q.correct;
      btn.classList.add(isCorrect ? "correct" : "wrong");
      const other = zone.querySelector(`.tf-btn[data-val="${q.correct}"]`);
      if (!isCorrect) other.classList.add("correct");
      recordResult(q, isCorrect);
      showFeedback(q, isCorrect);
    };
  });
  show(zone);
}

/* ─── Drag & Drop ───────────────────────────────────────── */
function renderDrag(q) {
  const zone = $("zone-drag");
  const pool = $("drag-pool");
  const targets = $("drag-targets");
  pool.innerHTML = "";
  targets.innerHTML = "";
  state.dragState = {};

  // Render items in pool
  shuffle([...q.items]).forEach((item) => {
    const el = createDragItem(item);
    pool.appendChild(el);
  });

  // Render target zones
  q.zones.forEach((zone) => {
    const zoneEl = document.createElement("div");
    zoneEl.className = "drag-target-zone";
    zoneEl.dataset.zoneId = zone.id;
    zoneEl.innerHTML = `<div class="drag-target-label">${zone.label}</div>`;
    makeDragTarget(zoneEl, q);
    targets.appendChild(zoneEl);
  });

  // Pool also as a drop target
  pool.addEventListener("dragover", (e) => {
    e.preventDefault();
    pool.classList.add("drag-over");
  });
  pool.addEventListener("dragleave", () => pool.classList.remove("drag-over"));
  pool.addEventListener("drop", (e) => {
    e.preventDefault();
    pool.classList.remove("drag-over");
    const itemId = e.dataTransfer.getData("text/plain");
    const itemEl = document.querySelector(
      `.drag-item[data-item-id="${itemId}"]`,
    );
    if (itemEl) {
      pool.appendChild(itemEl);
      delete state.dragState[itemId];
    }
  });

  $("drag-submit").onclick = () => checkDrag(q);

  show(zone);
}

function createDragItem(item) {
  const el = document.createElement("div");
  el.className = "drag-item";
  el.draggable = true;
  el.dataset.itemId = item.id;
  el.textContent = item.label;
  el.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", item.id);
    el.classList.add("dragging");
  });
  el.addEventListener("dragend", () => el.classList.remove("dragging"));
  return el;
}

function makeDragTarget(zoneEl, q) {
  zoneEl.addEventListener("dragover", (e) => {
    e.preventDefault();
    zoneEl.classList.add("drag-over");
  });
  zoneEl.addEventListener("dragleave", () =>
    zoneEl.classList.remove("drag-over"),
  );
  zoneEl.addEventListener("drop", (e) => {
    e.preventDefault();
    zoneEl.classList.remove("drag-over");
    const itemId = e.dataTransfer.getData("text/plain");
    const itemEl = document.querySelector(
      `.drag-item[data-item-id="${itemId}"]`,
    );
    if (itemEl) {
      zoneEl.appendChild(itemEl);
      state.dragState[itemId] = zoneEl.dataset.zoneId;
    }
  });
}

function checkDrag(q) {
  let allCorrect = true;
  q.items.forEach((item) => {
    const placed = state.dragState[item.id];
    const expected = q.correctMapping[item.id];
    const itemEl = document.querySelector(
      `.drag-item[data-item-id="${item.id}"]`,
    );
    if (placed !== expected) allCorrect = false;
  });

  // Highlight zones
  document.querySelectorAll(".drag-target-zone").forEach((zoneEl) => {
    const zoneId = zoneEl.dataset.zoneId;
    const itemsHere = [...zoneEl.querySelectorAll(".drag-item")].map(
      (el) => el.dataset.itemId,
    );
    const anyWrong = itemsHere.some((id) => q.correctMapping[id] !== zoneId);
    zoneEl.classList.add(anyWrong ? "wrong-zone" : "correct-zone");
  });
  document
    .querySelectorAll(".drag-item")
    .forEach((el) => (el.draggable = false));
  $("drag-submit").disabled = true;

  recordResult(q, allCorrect);
  showFeedback(q, allCorrect);
}

/* ─── Sequence / Order ──────────────────────────────────── */
function renderOrder(q) {
  const zone = $("zone-order");
  const list = $("sortable-list");
  list.innerHTML = "";
  state.sortItems = shuffle([...q.items]);

  state.sortItems.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = "sortable-item";
    li.draggable = true;
    li.dataset.itemId = item.id;
    li.innerHTML = `<span class="sortable-handle">⠿</span><span>${item.label}</span>`;
    setupSortable(li, list, q.items);
    list.appendChild(li);
  });

  $("order-submit").onclick = () => checkOrder(q, list);
  show(zone);
}

function setupSortable(li, list) {
  li.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", li.dataset.itemId);
    li.style.opacity = "0.5";
  });
  li.addEventListener("dragend", () => (li.style.opacity = "1"));
  li.addEventListener("dragover", (e) => {
    e.preventDefault();
    li.classList.add("drag-over-item");
    const draggingId = state.currentDragId;
    if (draggingId && draggingId !== li.dataset.itemId) {
      const draggingEl = list.querySelector(`[data-item-id="${draggingId}"]`);
      if (draggingEl) {
        const bounding = li.getBoundingClientRect();
        const offset = bounding.y + bounding.height / 2;
        if (e.clientY < offset) list.insertBefore(draggingEl, li);
        else list.insertBefore(draggingEl, li.nextSibling);
      }
    }
  });
  li.addEventListener("dragleave", () => li.classList.remove("drag-over-item"));
  li.addEventListener("dragstart", (e) => {
    state.currentDragId = li.dataset.itemId;
  });
}

function checkOrder(q, list) {
  const placed = [...list.querySelectorAll(".sortable-item")].map(
    (el) => el.dataset.itemId,
  );
  const isCorrect = placed.every((id, i) => id === q.correctOrder[i]);

  list.querySelectorAll(".sortable-item").forEach((el, i) => {
    const id = el.dataset.itemId;
    const correct = q.correctOrder[i] === id;
    el.classList.add(correct ? "correct-item" : "wrong-item");
    el.draggable = false;
  });
  $("order-submit").disabled = true;

  recordResult(q, isCorrect);
  showFeedback(q, isCorrect);
}

/* ─── Command Input ─────────────────────────────────────── */
function renderCmd(q) {
  const zone = $("zone-cmd");
  $("cmd-prefix").textContent = q.prefix;
  const input = $("cmd-input");
  input.value = "";
  input.disabled = false;

  const hintsEl = $("cmd-hints");
  hintsEl.innerHTML = q.hints
    .map((h) => `<span class="cmd-hint-chip">${h}</span>`)
    .join("");

  const check = () => {
    const val = input.value.trim();
    const isCorrect = q.acceptableAnswers.some(
      (a) =>
        val.toLowerCase().replace(/\s+/g, " ") ===
        a.toLowerCase().replace(/\s+/g, " "),
    );
    input.disabled = true;
    input.style.color = isCorrect ? "var(--green)" : "var(--red)";
    recordResult(q, isCorrect);
    showFeedback(q, isCorrect);
  };

  $("cmd-submit").onclick = check;
  input.onkeydown = (e) => {
    if (e.key === "Enter") check();
  };
  input.focus();

  show(zone);
}

/* ═══════════════════════════════════════════════════════════
   FEEDBACK
═══════════════════════════════════════════════════════════ */
function showFeedback(q, isCorrect) {
  const banner = $("feedback-banner");
  const verdict = $("feedback-verdict");
  const explain = $("feedback-explain");
  const docLink = $("feedback-doc");

  banner.classList.remove("hidden");
  verdict.className =
    "feedback-verdict " + (isCorrect ? "correct-v" : "wrong-v");
  verdict.textContent = isCorrect ? "✓ Correct!" : "✗ Incorrect";
  explain.textContent = q.explanation;
  docLink.href = q.doc;

  banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

$("btn-next").addEventListener("click", () => {
  state.index++;
  if (state.index >= state.questions.length) {
    showResults();
    return;
  }
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ═══════════════════════════════════════════════════════════
   RECORD / SCORE
═══════════════════════════════════════════════════════════ */
function recordResult(q, isCorrect) {
  if (isCorrect) state.score++;
  state.results.push({ question: q, correct: isCorrect });
  $("score-display").textContent = state.score;
}

/* ═══════════════════════════════════════════════════════════
   RESULTS SCREEN
═══════════════════════════════════════════════════════════ */
function showResults() {
  const total = state.results.length;
  const correct = state.score;
  const pct = Math.round((correct / total) * 100);

  $("stat-correct").textContent = correct;
  $("stat-wrong").textContent = total - correct;
  $("stat-total").textContent = total;
  $("ring-pct").textContent = pct + "%";
  $("results-badge").textContent = pct >= 80 ? "🏆" : pct >= 60 ? "📘" : "📖";

  // Animated ring
  const circumference = 2 * Math.PI * 50; // r=50 → 314.16
  const offset = circumference - (pct / 100) * circumference;
  const ring = $("ring-fill");
  ring.style.stroke =
    pct >= 80 ? "var(--green)" : pct >= 60 ? "var(--azure)" : "var(--red)";
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference;
  setTimeout(() => (ring.style.strokeDashoffset = offset), 100);

  // Breakdown
  const bd = $("results-breakdown");
  bd.innerHTML = "";
  state.results.forEach((r) => {
    const row = document.createElement("div");
    row.className = "breakdown-row";
    row.innerHTML = `
      <span class="breakdown-icon">${r.correct ? "✅" : "❌"}</span>
      <span class="breakdown-q">${r.question.text.slice(0, 80)}…</span>
      <span class="breakdown-result ${r.correct ? "c" : "w"}">${r.correct ? "CORRECT" : "WRONG"}</span>
    `;
    bd.appendChild(row);
  });

  goToScreen("results");
}

/* ─── Results actions ──────────────────────────────────── */
$("btn-retry").addEventListener("click", () => startExam(state.exam));
$("btn-back-home").addEventListener("click", () => goToScreen("home"));
$("btn-home").addEventListener("click", () => goToScreen("home"));

/* ═══════════════════════════════════════════════════════════
   UTILITIES
═══════════════════════════════════════════════════════════ */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
}
