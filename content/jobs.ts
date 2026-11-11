// Open roles shown on /careers. Add, edit or remove a role here; the page builds from this list.
// region must match one of the filter buttons on the careers page: 'fl' | 'travel' | 'mid'.
export type Job = {
  id: string;
  title: string;
  region: 'fl' | 'travel' | 'mid';
  location: string;
  type: string;
  pay: string;
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
    pay: '[Pay range to be added]',
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
    pay: '[Pay range to be added]',
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
    pay: '[Pay range to be added]',
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
];
