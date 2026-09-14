# FraudLink

<p align="center">
  <img src="https://www.banklandmark.com/wp-content/uploads/2022/12/Online-fraud.jpg" alt="" width="100%">
</p>

<h3 align="center">AI-Powered Unified Cyber Fraud Analysis & Digital Artifact Correlator</h3>

<p align="center">
  <strong>From Evidence to Action.</strong><br>
  A forensic investigation and triage platform designed to help investigators connect fragmented cyber-fraud evidence into one explainable investigation.
</p>

---

## 📌 Project Overview

**FraudLink** is an end-to-end cyber-fraud investigation platform that transforms fragmented digital artifacts into a connected investigative view.

Cyber-fraud investigations commonly involve evidence spread across:

- CDR / call records
- IPDR / network records
- Bank transaction logs
- UPI transactions
- Email headers and EML files
- Mobile chat exports
- Device logs
- APK metadata
- Phone numbers
- IMEI / IMSI
- MAC addresses
- IP addresses
- Bank accounts
- UPI handles

FraudLink brings these artifacts together through a unified pipeline:

```text
RAW EVIDENCE
     ↓
INGESTION
     ↓
PARSING
     ↓
NORMALIZATION
     ↓
ENTITY EXTRACTION
     ↓
ENTITY RESOLUTION
     ↓
EVIDENCE FUSION
     ↓
TEMPORAL CORRELATION
     ↓
FRAUD NETWORK
     ↓
RISK ANALYSIS
     ↓
EXPLAINABLE FINDINGS
     ↓
INVESTIGATIVE REPORT
```

The objective is simple:

> **Help investigators understand the important fraud network in minutes instead of investigating every artifact independently.**

---

## 🎯 Problem Statement

Modern cyber-fraud investigations generate large amounts of heterogeneous evidence.

A single investigation may contain:

```text
Phone Number
     │
     ├── IMEI
     ├── IMSI
     ├── IP Address
     ├── Device
     └── Calls
            │
            ▼
      Bank Account
            │
            ├── UPI ID
            ├── Transactions
            └── Beneficiaries
                    │
                    ▼
              Other Accounts
                    │
                    ▼
                Cash-out
```

Traditional workflows often require investigators to manually compare these datasets.

FraudLink automates the correlation process while preserving the evidence source and explaining why relationships were detected.

---

## ⭐ Key Capabilities

### 1. Multi-Artifact Evidence Fusion

FraudLink combines multiple artifact types into unified entity clusters.

Example:

```text
CDR
Phone: +91 9871112233
        │
        ▼
Device
IMEI: 123456789012345
        │
        ▼
Bank Account
XX6721
        │
        ▼
UPI
fraud@okaxis
        │
        ▼
IPDR
103.21.45.76
        │
        ▼
Email
phishing@example.com
```

Instead of displaying these as unrelated records, FraudLink identifies their connections and presents them as one investigative cluster.

---

### 2. Explainable Entity Correlation

FraudLink does not simply state:

> "Entities are connected."

It explains the relationship.

Example:

```text
Connection:
Phone → Bank Account

Confidence: 92%

Reasons:
✓ Same UPI handle
✓ Transaction timestamp overlap
✓ Device association
✓ Repeated beneficiary
✓ Same investigation case
```

Every important correlation can contain:

- Relationship
- Confidence
- Evidence source
- Reason
- Timestamp
- Supporting records

Weak signals are never automatically treated as confirmed identities.

---

### 3. Temporal Fraud-Flow Detection

FraudLink reconstructs events chronologically.

Example:

```text
10:02:31
Phishing SMS received
        ↓
10:03:15
Suspicious APK installed
        ↓
10:05:42
UPI transaction initiated
        ↓
10:06:01
Funds received by Mule A
        ↓
10:08:19
Funds transferred to Mule B
        ↓
10:13:42
Cash-out transaction
```

The platform can identify suspicious rapid multi-hop routing using:

- Time between transactions
- Number of hops
- Amount movement
- Destination concentration
- Transaction velocity

---

### 4. Mule Network Detection

FraudLink identifies analytical indicators associated with potential mule accounts.

Signals include:

- High transaction velocity
- Multiple incoming victims
- Rapid outgoing transfers
- Multiple beneficiaries
- Short holding duration
- Repeated round amounts
- Multiple UPI IDs
- Shared device identifiers
- Shared phone identifiers

Example:

```text
Mule Indicator

Probability Indicator: 91%

17 incoming transactions
within 22 minutes

14 outgoing transfers
within 31 minutes

Average holding time:
2m 18s

Connected victims:
8
```

This is an investigative indicator, not a legal determination.

---

### 5. Device / SIM Reuse Detection

FraudLink can detect patterns such as:

```text
IMEI
356789012345678
       │
       ├── +91 9871112233
       ├── +91 9879998888
       └── +91 9988776655
```

The system can flag:

**Device Reuse Alert — HIGH**

Other indicators include:

- One IMEI associated with multiple numbers
- Subscriber changes
- Reused devices
- Shared device fingerprints

---

### 6. Fraud Campaign Detection

Multiple cases can be clustered when they share common indicators.

Possible shared attributes:

- APK hash
- UPI handle
- IP range
- Phone cluster
- Email domain
- Device
- Beneficiary
- Message template

Example:

```text
Campaign:
Fake KYC APK Campaign

Cases:       12
Victims:     43
UPI Handles: 7
Devices:     5
IP Ranges:   3

Confidence: 94%
```

---

### 7. Interactive Investigation Graph

FraudLink represents an investigation as a network graph.

Supported node categories include:

- Victim
- Person
- Phone
- IMEI
- IMSI
- Device
- IP
- Bank Account
- UPI
- Transaction
- Email
- APK
- Cash-out

Example:

```text
Victim
  │
  │ ₹50,000
  ▼
Mule Account A
  │
  │ ₹48,000
  ▼
Mule Account B
  │
  │ ₹46,500
  ▼
Cash-out Account
```

Graph intelligence can surface:

- High-degree nodes
- Central nodes
- Betweenness indicators
- Mule nodes
- Gateway nodes
- Cash-out nodes
- Connected devices
- Connected phone numbers
- Transaction velocity

---

## 🧠 Risk Engine

FraudLink uses an explainable weighted risk model.

Example signals:

| Signal | Weight |
|---|---:|
| High transaction velocity | +25 |
| Multi-hop fund routing | +20 |
| Device reuse | +15 |
| SIM switching | +15 |
| Shared suspicious IP | +10 |
| Known suspicious APK | +10 |
| Spoofed email authentication | +10 |
| Repeated victim interactions | +15 |

Risk bands:

| Score | Classification |
|---:|---|
| 0–29 | LOW |
| 30–59 | MEDIUM |
| 60–79 | HIGH |
| 80–100 | CRITICAL |

FraudLink calls this an:

**Investigative Risk Score**

It is an analytical indicator and must not be interpreted as an automatic probability of guilt.

---

# 📂 Evidence Management

## Upload Workflow

Investigators can upload:

- CSV
- Excel
- JSON
- TXT
- EML
- CDR exports
- IPDR exports
- Bank / UPI data
- Device logs
- APK metadata

Workflow:

```text
Select Case
    ↓
Add Evidence
    ↓
Upload File
    ↓
Validate File
    ↓
Calculate SHA-256
    ↓
Store Original
    ↓
Parse Read-only Copy
    ↓
Normalize Records
    ↓
Extract Entities
    ↓
Correlate
    ↓
Update Investigation
```

---

## 🔐 Evidence Integrity

Original evidence should never be modified.

FraudLink follows:

```text
Original Evidence
       ↓
SHA-256
       ↓
Immutable Evidence Record
       ↓
Read-only Parsing
       ↓
Normalized Copy
       ↓
Analysis
```

The system records:

- Original filename
- Original size
- SHA-256
- Upload timestamp
- Uploader
- Case ID
- Source
- Parser version

The Evidence Vault provides:

- Evidence listing
- Hash verification
- Metadata
- Record counts
- Original-file access
- Evidence notes

---

# ⛓️ Chain of Custody

FraudLink maintains an investigative audit trail.

Example:

```text
12 Sep 2026 14:22
Evidence uploaded

        ↓

12 Sep 2026 14:23
SHA-256 calculated

        ↓

12 Sep 2026 14:24
Evidence parsed

        ↓

12 Sep 2026 14:25
Evidence added to case

        ↓

12 Sep 2026 14:27
Investigator viewed evidence
```

Integrity status:

**Integrity Verified**

Reports are investigative summaries and do not automatically establish legal admissibility.

---

# 🔎 Entity Search

Global search supports:

```text
Phone
IMEI
IMSI
UPI
Bank Account
IP
Email
APK Hash
Transaction ID
```

An entity profile can show:

- Linked phones
- Linked IMEIs
- Linked accounts
- Linked UPI IDs
- Linked IP addresses
- Linked emails
- Transactions
- Cases
- Relationship confidence
- Supporting evidence

---

# 🤖 FraudLink Intelligence Assistant

The platform includes a local deterministic investigation assistant.

Example questions:

```text
"What are the strongest links in this case?"

"Show the money flow."

"Which account should investigators examine first?"

"Why is this phone number high risk?"

"Find common entities across uploaded evidence."

"Summarize this investigation."

"Show all evidence supporting this connection."
```

The local implementation works without an external AI API.

An LLM can optionally be connected later for enhanced natural-language analysis.

---

# 📊 Investigation Dashboard

The command-center dashboard provides:

- Total Cases
- High Priority Cases
- Entities Identified
- Mule Accounts
- Active Networks
- Risk indicators
- Case trends
- Fraud-type distribution
- Risk distribution
- Recent investigations

The interface is designed for dense but readable investigative workflows.

---

# 🗃️ Case Manager

Each case contains realistic investigative metadata.

Example:

```text
Case ID:
CYB/2026/001234

Title:
Fake KYC APK Investigation

Fraud Type:
APK Phishing

Status:
Investigation

Risk:
CRITICAL

Financial Exposure:
₹2,48,500

Entities:
31

Investigator:
Senior Investigator

Key Finding:
Multiple victim transactions converge on a
shared device and mule-account cluster.
```

Each case can be opened as a complete investigation.

---

# 🧾 Investigative Report

FraudLink generates a professional investigative brief containing:

1. Case Summary
2. Key Findings
3. Prime Entities
4. Money Flow
5. Communication Links
6. Risk Indicators
7. Evidence Integrity
8. Immediate Investigative Recommendations

Example recommendations:

- Preserve relevant CDR/IPDR records
- Verify subscriber/KYC details
- Examine linked bank accounts
- Preserve device evidence
- Investigate identified cash-out nodes

Recommendations can be traced back to supporting evidence.

---

# 🔗 Evidence-to-Recommendation Traceability

Every important recommendation should explain its basis.

Example:

```text
Recommendation:
Examine Account XX6721

Supporting Evidence:

→ 8 victim deposits
→ 5 rapid outgoing transfers
→ Linked IMEI
→ Shared UPI handle
→ High investigative risk score
```

This creates a transparent path:

```text
Evidence
   ↓
Finding
   ↓
Risk Indicator
   ↓
Recommendation
```

---

# 🗄️ Database Model

Core models include:

```text
User
Case
EvidenceFile
Person
Phone
Device
IMEI
IMSI
IP
BankAccount
UPIAccount
Transaction
CallRecord
EmailRecord
APKArtifact
EntityLink
RiskAssessment
TimelineEvent
Campaign
ChainOfCustodyEvent
InvestigationNote
```

The architecture uses Prisma ORM.

SQLite is suitable for local demonstrations, while PostgreSQL is recommended for production deployments.

---

# 🛠️ Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- Recharts
- React Flow / graph visualization

## Backend

- Next.js API routes
- TypeScript
- Server-side processing

## Database

- Prisma ORM
- SQLite for local demo
- PostgreSQL for production

## Processing

- PapaParse
- SheetJS / XLSX
- JSON parser
- TXT parser
- EML parser

## Security / Integrity

- Node.js Crypto
- SHA-256
- Input validation
- File validation
- Role checks
- Audit logging

## Reporting

- PDF generation
- JSON export

---

# 🏗️ Architecture

<p align="center">
  <img src="docs/images/fraudlink-architecture.png" alt="FraudLink Architecture" width="95%">
</p>

High-level architecture:

```text
┌─────────────────────────────────────────────┐
│              Investigator UI                │
│         Next.js / React / TypeScript        │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────▼──────────────────────┐
│            Application / API                │
│ Cases • Evidence • Search • Reports         │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────▼──────────────────────┐
│       Forensic Intelligence Engine           │
│ Parsing → Normalization → Correlation       │
│ Fusion → Temporal Analysis → Risk → Graph  │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────▼──────────────────────┐
│             Data + Integrity                │
│ Prisma • SQLite/PostgreSQL • SHA-256       │
│ Chain of Custody                            │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────▼──────────────────────┐
│             Digital Artifacts               │
│ CDR • IPDR • Bank • UPI • Email • Device   │
│ APK • Chat • Logs                           │
└─────────────────────────────────────────────┘
```

---

# 📁 Recommended Project Structure

```text
FraudLink/
│
├── app/
│   ├── dashboard/
│   ├── cases/
│   ├── ingestion/
│   ├── entities/
│   ├── graph/
│   ├── risk/
│   ├── timeline/
│   ├── evidence/
│   ├── reports/
│   └── settings/
│
├── components/
│   ├── Sidebar/
│   ├── Topbar/
│   ├── StatCard/
│   ├── EvidenceTable/
│   ├── EntityProfile/
│   ├── NetworkGraph/
│   ├── RiskGauge/
│   ├── Timeline/
│   └── ReportPreview/
│
├── lib/
│   ├── parsers/
│   ├── correlation/
│   ├── risk/
│   ├── graph/
│   ├── hashing/
│   └── reporting/
│
├── prisma/
│   └── schema.prisma
│
├── data/
│   └── demo/
│
├── public/
│
├── docs/
│   └── images/
│
├── uploads/
│
├── types/
│
└── README.md
```

---

# 🚀 Installation

## Requirements

Install:

- Node.js 20+
- npm
- Git

For production:

- PostgreSQL
- Secure object/evidence storage

---

## Install Dependencies

```bash
npm install
```

---



FraudLink's core investigation workflow with and without should work without an external AI service.



## Database Setup

For SQLite:

```bash
npx prisma generate
npx prisma db push
```

Then run:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🔑 Demo Credentials

```text
Email:
investigator@fraudlink.local

Password:
fraudlink123
```

Demo role:

```text
Investigator
```

---

# 🧪 Demo Investigation

The recommended demonstration:

```text
1. Login
      ↓
2. Dashboard
      ↓
3. Open Case Manager
      ↓
4. Select an investigation
      ↓
5. Click Investigation
      ↓
6. Add Evidence
      ↓
7. Upload CSV / JSON / EML
      ↓
8. SHA-256 generated
      ↓
9. File saved
      ↓
10. Evidence parsed
      ↓
11. Entities extracted
      ↓
12. Correlations generated
      ↓
13. Risk calculated
      ↓
14. Timeline generated
      ↓
15. Graph updated
      ↓
16. Open Risk Analysis
      ↓
17. Explain Link
      ↓
18. Generate Investigative Brief
```

---

# 📥 Supported Evidence Examples

## CDR

```text
timestamp
caller
callee
duration
imei
imsi
cell_id
```

## IPDR

```text
timestamp
phone
ip
destination_ip
port
imei
```

## Bank

```text
timestamp
sender_account
receiver_account
upi_id
amount
transaction_id
bank
status
```

## UPI

```text
transaction_id
payer
payee
upi_handle
amount
timestamp
```

## Email

```text
from
to
subject
date
message_id
received
authentication_results
source_ip
```

## Device

```text
imei
imsi
phone
mac
android_id
device_model
app_package
```

## APK

```text
package_name
sha256
permissions
certificate
source
install_time
```

---

# 🔬 Correlation Model

FraudLink uses different confidence levels.

### Strong Identifiers

```text
Exact IMEI
Exact IMSI
Exact phone number
Exact bank account
Exact UPI handle
Exact transaction ID
Exact email address
Exact APK hash
```

### Medium Identifiers

```text
IP match
MAC match
Device fingerprint
Repeated behavior
```

### Weak Identifiers

```text
Name similarity
Address similarity
Time proximity
Transaction behavior
```

Weak evidence should not be treated as confirmed identity.

---

# 🔐 Security Design

FraudLink should:

- Validate all input
- Validate file extensions
- Validate file size
- Parse files safely
- Prevent SQL injection through Prisma
- Render user content safely
- Enforce authentication
- Enforce role checks
- Maintain audit logs
- Never execute uploaded files
- Never execute APKs

APK files are treated strictly as forensic artifacts.

---

# 📴 Offline / Low Resource Mode

FraudLink is designed so core analysis can operate without internet access.

Offline-capable functionality can include:

```text
File Parsing
Hashing
Normalization
Entity Correlation
Rule-based Risk Scoring
Graph Generation
Report Generation
```

External AI is optional.

This architecture is appropriate for environments where investigators may work on isolated or low-connectivity systems.

---

# ⚡ Performance

For large investigations, the application should use:

- Pagination
- Virtualized tables
- Debounced search
- Graph filtering
- Lazy loading
- Background parsing
- Entity indexing
- Server-side filtering

Thousands of graph nodes should not be rendered simultaneously.

---

# ⚠️ Forensic Limitations

FraudLink is an investigative and triage system.

Its outputs are:

- Analytical indicators
- Correlation suggestions
- Risk scores
- Investigation summaries
- Evidence references

They are **not automatically**:

- Proof of guilt
- Legal conclusions
- Court determinations
- Automatically admissible evidence

Investigators must validate findings against the original evidence and applicable legal procedures.

---

# 🏢 Production Hardening

Before deployment in a real law-enforcement environment, implement:

- PostgreSQL
- Encrypted evidence storage
- Immutable/WORM storage
- Strong identity provider integration
- Hardware/security-key MFA
- Network isolation
- Encryption at rest
- Encryption in transit
- Key management
- Malware scanning / sandboxed file inspection
- Secure backup
- Disaster recovery
- Fine-grained RBAC
- Tamper-evident audit logs
- Evidence retention policies
- Access reviews
- Security monitoring
- Formal forensic validation

---

# 🗺️ Future Improvements

Potential future extensions:

### AI

- LLM-assisted investigative summaries
- Retrieval-augmented investigation
- Natural-language graph queries
- Automated investigative hypotheses

### Graph Analytics

- Community detection
- PageRank
- Advanced centrality
- Fraud-ring detection
- Graph embeddings

### Digital Forensics

- Android artifact extraction
- Browser artifact parsing
- Wallet analysis
- Additional telecom formats
- Malware static analysis

### Enterprise

- Multi-agency case sharing
- SSO
- Advanced RBAC
- PostgreSQL clustering
- Object storage
- Evidence retention management

---

# 🏆 FraudLink Value Proposition

FraudLink is designed around ten differentiators:

```text
1. Multi-Artifact Evidence Fusion
2. Explainable Entity Correlation
3. Temporal Fraud-Flow Detection
4. Automated Mule Network Detection
5. Fraud Campaign Clustering
6. Device/SIM Reuse Detection
7. Evidence-to-Recommendation Traceability
8. SHA-256 Evidence Integrity
9. Offline Investigation Mode
10. One-Page Field Investigation Brief
```

---

# 📌 Complete Investigation Lifecycle

```text
┌──────────────────┐
│   RAW EVIDENCE   │
└────────┬─────────┘
         ↓
┌──────────────────┐
│     INGESTION    │
└────────┬─────────┘
         ↓
┌──────────────────┐
│     PARSING      │
└────────┬─────────┘
         ↓
┌──────────────────┐
│  NORMALIZATION   │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ ENTITY EXTRACTION│
└────────┬─────────┘
         ↓
┌──────────────────┐
│ ENTITY RESOLUTION│
└────────┬─────────┘
         ↓
┌──────────────────┐
│ EVIDENCE FUSION  │
└────────┬─────────┘
         ↓
┌──────────────────┐
│TEMPORAL ANALYSIS │
└────────┬─────────┘
         ↓
┌──────────────────┐
│  FRAUD NETWORK   │
└────────┬─────────┘
         ↓
┌──────────────────┐
│  RISK ANALYSIS   │
└────────┬─────────┘
         ↓
┌──────────────────┐
│EXPLAINABLE FINDINGS│
└────────┬─────────┘
         ↓
┌──────────────────┐
│ INVESTIGATIVE    │
│     REPORT       │
└──────────────────┘
```

---

# 👨‍💻 Development

Start development server:

```bash
npm run dev
```

Production build:

```bash
npm run build
npm start
```

Prisma:

```bash
npx prisma generate
npx prisma db push
```

---

# 📜 License

This project is intended as a prototype / research and demonstration platform.

Before operational deployment, conduct appropriate security, privacy, forensic, legal, and compliance reviews.

---

<p align="center">
  <strong>FraudLink</strong><br>
  From Evidence to Action.
</p>
