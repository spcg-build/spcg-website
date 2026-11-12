// Open roles shown on /careers. Add, edit or remove a role here; the page builds from this list.
// region must match one of the filter buttons on the careers page: 'fl' | 'travel' | 'fin'.
export type Job = {
  id: string;
  title: string;
  region: 'fl' | 'travel' | 'fin';
  location: string;
  type: string;
  pay?: string;
  summary: string;
  doList: string[];
  bring: string[];
  plus: string[];
  extra?: string;
};

export const JOBS: Job[] = [
  {
    id: 'pm-central-florida',
    title: 'Project Manager',
    region: 'fl',
    location: 'Central Florida · Orlando and Tampa Bay',
    type: 'Full-time · Office and field',
    summary:
      'Lead commercial buildouts and renovations, typically $1M to $5M, from contract through closeout. You will be one of the first members of our Florida team, with a real hand in how we grow here.',
    doList: [
      'Own schedule, budget and buyout on your projects, from preconstruction handoff to closeout',
      'Buy out and manage subcontractors: scopes, contracts and change orders',
      'Run owner-architect-contractor meetings and send owners clear weekly reports',
      'Manage RFIs, submittals, change orders and pay applications in Procore',
      'Forecast cost monthly with our finance team and protect the margin',
      'Work hand in hand with your superintendent on safety, quality and logistics',
      'Build relationships with owners, architects, brokers and trade partners across Central Florida',
    ],
    bring: [
      '5+ years managing commercial projects for a general contractor',
      'Interior buildout, healthcare or occupied-building experience',
      'Strong command of contracts, scheduling, cost control and change management',
      'Procore or a similar platform, plus Excel and Microsoft 365',
      'Clear, timely communication with owners and your team',
      'Degree in construction management or engineering, or equivalent experience',
    ],
    plus: ['Healthcare or ambulatory surgery center work', 'Florida permitting and inspections', 'An existing Central Florida subcontractor network', 'OSHA 30'],
  },
  {
    id: 'super-central-florida',
    title: 'Superintendent',
    region: 'fl',
    location: 'Central Florida · Orlando and Tampa Bay',
    type: 'Full-time · Field',
    summary:
      'Run the job site day to day on commercial buildouts and renovations across Central Florida, often in occupied buildings where safety, cleanliness and communication matter as much as the schedule.',
    doList: [
      'Lead daily field operations, manpower and subcontractor coordination',
      'Build and hold the three-week look-ahead schedule',
      'Own site safety: pre-task planning, toolbox talks and OSHA compliance',
      'Schedule and walk inspections with building officials',
      'Check work against drawings and specs, and raise issues early',
      'Keep daily reports, photos and logs current in Procore',
      'Keep owners, tenants and building management informed',
      'Drive punch list and closeout to an on-time turnover',
    ],
    bring: [
      '5+ years as a commercial superintendent or assistant superintendent for a GC',
      'Interior buildout experience; healthcare is a plus',
      'OSHA 30, or the ability to earn it within 90 days',
      'Reads drawings and runs a schedule',
      'Comfortable using Procore on a phone or tablet',
      'Valid driver’s license',
    ],
    plus: ['Healthcare or clinical buildouts', 'Florida building department experience', 'First Aid and CPR'],
  },
  {
    id: 'traveling-superintendent',
    title: 'Traveling Superintendent',
    region: 'travel',
    location: 'East Coast · MD, DC, VA, NC, MA and FL',
    type: 'Full-time · Field · Regular travel',
    summary:
      'Lead projects wherever we build, from multifamily corridor refreshes in Boston and Charlotte to healthcare and retail buildouts in the Mid-Atlantic and Florida. You mobilize fast, set up local trade partners and leave every job better than you found it.',
    doList: [
      'Mobilize new projects quickly and stand up the site, logistics and local subcontractors',
      'Run daily field operations, safety and quality across projects of varying size',
      'Phase work floor by floor in occupied multifamily buildings, with clear resident notices',
      'Hold the schedule and keep the PM and owner current with daily reports in Procore',
      'Lead inspections, punch and closeout, then hand off a clean turnover',
    ],
    bring: [
      '7+ years running commercial projects for a GC, independently',
      'Comfortable with regular overnight travel',
      'Multifamily, hospitality or retail rollout experience',
      'OSHA 30, reads drawings and runs a schedule',
      'Valid driver’s license and a clean driving record',
    ],
    plus: ['Experience in several states and jurisdictions', 'Occupied-building and after-hours work', 'Bilingual English and Spanish'],
    extra: '[Travel, lodging and per diem details to be added]',
  },
  {
    id: 'precon-estimating-assistant',
    title: 'Preconstruction & Estimating Assistant',
    region: 'fin',
    location: 'Remote · East Coast',
    type: 'Full-time · Office',
    summary:
      'Help our preconstruction team turn drawings into budgets and bids that owners can rely on. You will work alongside our Senior Estimator on commercial buildouts, healthcare and renovation projects, and learn estimating from the ground up.',
    doList: [
      'Set up bids: download plans and specs, organize bid documents and track due dates',
      'Run quantity takeoffs with Togal.AI and Bluebeam, and check them against the drawings',
      'Send bid invitations through BuildingConnected and follow up with subcontractors for coverage',
      'Level subcontractor proposals and flag scope gaps, exclusions and outliers',
      'Build and update budget and bid spreadsheets with the estimating team',
      'Keep historical cost and subcontractor data organized for future estimates',
      'Help hand off awarded projects to the project team in Procore',
    ],
    bring: [
      '1 to 2 years in construction estimating, project engineering or a related role, or a construction degree',
      'Comfort reading commercial drawings and specifications',
      'Strong Excel and attention to detail',
      'Organized, reliable and able to juggle several bid deadlines at once',
      'Clear, professional communication with subcontractors and vendors',
      'Interest in technology and AI tools that make estimating faster and more accurate',
    ],
    plus: ['Togal.AI, Bluebeam or PlanSwift', 'BuildingConnected', 'Interior buildout or healthcare experience', 'An existing subcontractor network in MD, DC, VA or Florida'],
  },
  {
    id: 'project-accountant',
    title: 'Project Accountant',
    region: 'fin',
    location: 'Remote · East Coast',
    type: 'Full-time · Office',
    summary:
      'Keep the money side of our projects accurate and on time, from subcontractor invoices to owner billings. You will work closely with our project managers and report to our VP of Finance & Business Strategy.',
    doList: [
      'Process subcontractor and vendor invoices and code them to the right job and cost code',
      'Prepare monthly owner pay applications (AIA G702/G703) and track retainage',
      'Collect lien waivers and keep subcontractor insurance certificates and W-9s current',
      'Reconcile job cost reports with project managers each month',
      'Track change orders, commitments and billings through closeout',
      'Help keep our accounting system and Procore clean and in sync',
      'Use AI tools and automation to cut manual entry and speed up the monthly cycle',
    ],
    bring: [
      '2+ years in construction or project-based accounting',
      'Experience with AIA billing, retainage and lien waivers',
      'Experience with a construction accounting system such as Sage 100 Contractor or Sage Intacct',
      'Strong Excel and attention to detail',
      'Comfort with technology and an interest in using AI tools to work smarter',
      'Clear communication with PMs and subcontractors',
    ],
    plus: ['Procore', 'Multi-state work', 'Degree in accounting or finance', 'Experience automating accounting workflows', 'Working knowledge of a data warehouse such as Snowflake or SQL Server'],
  },
  {
    id: 'senior-accountant',
    title: 'Senior Accountant',
    region: 'fin',
    location: 'Remote · East Coast',
    type: 'Full-time · Office',
    summary:
      'Own the monthly close and the reporting that owners, our bank and our surety rely on. You will help build the finance function of a fast-growing general contractor and report to our VP of Finance & Business Strategy.',
    doList: [
      'Run the month-end close: journal entries, accruals and account reconciliations',
      'Reconcile bank and credit accounts and keep cash reporting current',
      'Prepare the monthly WIP schedule, over and under billings, and percentage-of-completion revenue',
      'Produce monthly financial statements and job profitability reporting',
      'Support year-end, tax, audit or review, and surety and bank requests',
      'Improve processes and controls, and mentor the project accounting team',
      'Help lead our adoption of AI and automation across accounting and reporting',
    ],
    bring: [
      '5+ years in accounting, including construction or project-based work',
      'Strong command of WIP, percentage-of-completion and revenue recognition',
      'Experience with a construction accounting system such as Sage 100 Contractor or Sage Intacct',
      'Advanced Excel; comfortable working with data and reports',
      'A strong affinity for technology and hands-on use of AI tools in your work',
      'Degree in accounting or finance',
    ],
    plus: ['CPA or working toward it', 'CCIFP', 'Experience with surety and bank reporting', 'Power BI or similar reporting tools', 'Experience with a data warehouse such as Snowflake or SQL Server', 'Experience building automations or AI-assisted workflows'],
  },
];
