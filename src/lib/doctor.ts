export const DOCTOR = {
  honorific: "Dr.",
  firstName: "Shravan",
  lastName: "Shetty",
  fullName: "Dr. Shravan Shetty",
  title: "Associate Professor",
  secondaryTitle: "Consultant Orthodontist",
  coordinatorRole: "Coordinator — Center for Digital Dentistry",
  department: "Orthodontics & Dentofacial Orthopaedics",
  institution: "Manipal College of Dental Sciences",
  institutionShort: "MCODS",
  city: "Mangaluru",
  startYear: 2017,
  practiceYears: 10,
  email: "shravan.shetty@manipal.edu",
  secondaryEmail: "Digitalorthodonticworld@gmail.com",
  phoneDisplay: "+91 74111 97827",
  phoneTel: "+917411197827",
  linkedin: "https://linkedin.com/in/dr-shravan-shetty-a0a016276",
  linkedinHandle: "dr-shravan-shetty",
  googleScholar:
    "https://scholar.google.com/citations?user=f4Vs1jwAAAAJ&hl=en",
  tagline:
    "Bridging clinical orthodontics with digital workflow design — biomechanics, aligners, and a research practice rooted in evidence.",
  shortTagline:
    "Orthodontic biomechanics, clear aligner therapy and digital workflow research.",
  photo: "./images/dr-shravan-shetty.jpg",
};

export const SPECIALTIES = [
  {
    code: "01",
    title: "Clear Aligner Therapy",
    blurb:
      "Digital case planning, attachment design, staging and clinical finishing across the full aligner workflow.",
    keywords: ["staging", "attachments", "refinement"],
  },
  {
    code: "02",
    title: "Orthodontic Biomechanics",
    blurb:
      "Force-system design, anchorage planning, bracket prescription and mechanics tailored to each malocclusion.",
    keywords: ["forces", "moments", "anchorage"],
  },
  {
    code: "03",
    title: "Lingual Orthodontics",
    blurb:
      "Aesthetic appliance therapy hidden behind the teeth — indirect bonding, customised mechanics and bite management.",
    keywords: ["indirect bonding", "customisation", "aesthetics"],
  },
  {
    code: "04",
    title: "Micro-Implant Research",
    blurb:
      "Resonance frequency analysis, primary stability evaluation and in-vivo behaviour of orthodontic mini-implants.",
    keywords: ["RFA", "stability", "in-vivo"],
  },
];

export const ROTATING_TITLES = [
  "Clear Aligner Therapy.",
  "Orthodontic Biomechanics.",
  "Lingual Orthodontics.",
  "Micro-Implant Research.",
  "Digital Workflow Design.",
];

export const QUALIFICATIONS = [
  {
    degree: "MDS",
    field: "Orthodontics & Dentofacial Orthopaedics",
    institution:
      "SDMCDS (Sri Dharmasthala Manjunatheshwara College of Dental Sciences)",
    location: "Dharwad, India",
    affiliation:
      "Affiliated to Rajiv Gandhi University of Health Sciences, Karnataka, India",
    year: "2013 – 2016",
  },
  {
    degree: "BDS",
    field: "Bachelor of Dental Surgery",
    institution: "Yenepoya Dental College, Deralakatte, Mangalore, India",
    location: "Mangalore",
    affiliation:
      "Affiliated to Rajiv Gandhi University of Health Sciences, Karnataka, India",
    year: "2007 – 2012",
  },
  {
    degree: "PGCP",
    field: "Post Graduate Certificate Program in Data Science and Machine Learning",
    institution: "Manipal Institute of Technology, Manipal",
    location: "Manipal",
    affiliation:
      "Affiliated to Manipal Academy of Higher Education, Manipal, Karnataka, India",
    year: "2025",
  },
];

export const TEACHING = {
  subject: "Orthodontics & Dentofacial Orthopaedics",
  cohorts: ["3rd Year BDS", "4th Year BDS", "PG Mentoring"],
};

export const AFFILIATIONS = [
  {
    name: "Indian Orthodontic Society",
    short: "IOS",
    status: "Life Member",
    note: "National professional body for orthodontists",
  },
  {
    name: "Indian Dental Association",
    short: "IDA",
    status: "Life Member",
    note: "Premier body of dental professionals in India",
  },
  {
    name: "Mangalore Orthodontic Study Group",
    short: "MOSG",
    status: "Member",
    note: "Regional study group for orthodontic practice & research",
  },
  {
    name: "Dakshina Kannada Cosmetologists Association",
    short: "DKCA",
    status: "Member",
    note: "Regional association of cosmetic dental professionals",
  },
];

export const INTERNATIONAL_WORKSHOPS = [
  {
    role: "Resource Person",
    title:
      "Orthodontic Clear Aligners — International Workshop",
    host:
      "European School of Oral Rehabilitation, Implantology and Biomaterials (ESORIB)",
    location: "Madrid, Spain",
    date: "May 15 – 17, 2023",
    photo: "./images/photo-1.jpeg",
  },
  {
    role: "Resource Person",
    title:
      "International Workshop on Orthodontic Clear Aligners",
    host: "Age Solutions s.r.l",
    location: "Pontedera, Italy",
    date: "December 8 – 9, 2023",
    photo: "./images/photo-2.jpeg",
  },
  {
    role: "Presenter",
    title:
      "Association of Orthodontists Singapore Congress 2025 & AEEDEC Dubai 2026",
    host: "International Conferences",
    location: "Singapore & Dubai",
    date: "2025 – 2026",
    photo: "./images/photo-3.jpeg",
  },
];

export type Publication = {
  id: string;
  year: number;
  title: string;
  authors: string;
  journal: string;
  volume: string;
  tag: "clinical" | "research" | "review" | "device";
  abstract?: string;
  featured?: boolean;
  photo?: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "P-001",
    year: 2019,
    title:
      "Digital India, Digitizing the Orthodontic Office — Our Experience with Design and Implementation of a Contemporary Patient Management System",
    authors: "Jose NP, Shetty S, Naik DG, Shetty S, Desai A, Ashith MV, Mary L",
    journal: "Indian Journal of Public Health Research & Development",
    volume: "10(4): 278–282",
    tag: "research",
    featured: true,
    abstract:
      "A practice report on the design and rollout of a contemporary patient management system inside an academic orthodontic department — covering scheduling, clinical records, imaging integration, and reporting. The paper outlines design choices, workflow shifts and lessons learned from migrating an established clinic onto a fully digital stack.",
    photo: "./images/aligner-masterclass.jpg",
  },
  {
    id: "P-002",
    year: 2019,
    title:
      "A Comparative Evaluation of Reliability of an Android-based App and Computerised Cephalometric Tracing Program for Orthodontic Cephalometric Analysis",
    authors: "Shettigar P, Shetty S, Naik RD, Basavaraddi SM, Patil AK",
    journal: "Biomedical & Pharmacology Journal",
    volume: "12(1): 341–346",
    tag: "research",
    featured: true,
    abstract:
      "The study assessed the Android smartphone-based OneCeph app against the gold-standard Dolphin Imaging system across 50 cephalometric radiographs with 20 landmarks and 15 skeletal, dental and soft-tissue parameters. Only four parameters showed statistically significant differences; eleven demonstrated strong positive correlation — establishing the smartphone app as clinically viable for routine cephalometric work.",
    photo: "./images/orthobyte-2020.jpg",
  },
  {
    id: "P-003",
    year: 2018,
    title: "A Simple Aligner Removal Tool",
    authors: "Shetty S",
    journal: "Journal of Aligner Orthodontics",
    volume: "2(2): 151",
    tag: "device",
  },
  {
    id: "P-004",
    year: 2017,
    title: "Facile Stabilizer for Lingual Retainer Wires",
    authors: "Shetty S, Naik RD, Patil AK",
    journal: "International Journal of Orthodontics (Milwaukee)",
    volume: "28(1): 43–45",
    tag: "device",
  },
  {
    id: "P-005",
    year: 2016,
    title:
      "Evaluation of Orthodontic Micro-Implant Stability using Resonance Frequency Analysis: An In Vivo Study",
    authors: "Shetty S, Naik R, Patil A",
    journal: "Journal of Contemporary Orthodontics",
    volume: "1(1): 5–12",
    tag: "research",
  },
  {
    id: "P-006",
    year: 2012,
    title:
      "Evaluation of Efficacy of Microwave Oven Irradiation in Disinfection of Patient-Derived Dental Cast",
    authors: "Bhat V, Shenoy K, Shetty S",
    journal: "International Journal of Infection Control",
    volume: "8(3): 1–4",
    tag: "clinical",
  },
];

export const TEACHING_GALLERY = [
  {
    src: "./images/aligner-masterclass.jpg",
    title: "In-House Aligner Masterclass",
    venue: "Amrita Institute of Medical Sciences",
    kind: "Masterclass",
    year: "2023",
  },
  {
    src: "./images/workshop.jpg",
    title: "Clinical Aligner Workshop",
    venue: "Practitioner Workshop",
    kind: "Workshop",
    year: "2022",
  },
  {
    src: "./images/orthobyte-2020.jpg",
    title: "Orthobyte · Digital Orthodontics",
    venue: "IOS · SMILE 2020",
    kind: "Conference",
    year: "2020",
  },
  {
    src: "./images/photo-4.jpeg",
    title: "Clinical Session",
    venue: "Department of Orthodontics, MCODS Mangaluru",
    kind: "Teaching",
    year: "",
  },
  {
    src: "./images/photo-5.jpeg",
    title: "Academic Engagement",
    venue: "MCODS Mangaluru",
    kind: "Faculty",
    year: "",
  },
  {
    src: "./images/photo-6.jpeg",
    title: "Postgraduate Mentorship",
    venue: "MCODS Mangaluru",
    kind: "Mentorship",
    year: "",
  },
  {
    src: "./images/photo-7.jpeg",
    title: "Workshop Moment",
    venue: "Practitioner Workshop",
    kind: "Workshop",
    year: "",
  },
  {
    src: "./images/photo-8.jpeg",
    title: "Conference Presentation",
    venue: "Academic Conference",
    kind: "Conference",
    year: "",
  },
  {
    src: "./images/photo-9.jpeg",
    title: "Clinical Demonstration",
    venue: "Hands-on Session",
    kind: "Masterclass",
    year: "",
  },
  {
    src: "./images/photo-10.jpeg",
    title: "Faculty Engagement",
    venue: "MCODS Mangaluru",
    kind: "Faculty",
    year: "",
  },
  {
    src: "./images/photo-11.jpeg",
    title: "Academic Event",
    venue: "MCODS Mangaluru",
    kind: "Event",
    year: "",
  },
];

export const RESEARCH_FOCUS = [
  { label: "Micro-Implant Stability", code: "RFA" },
  { label: "Aligner Therapy Evidence", code: "CAT" },
  { label: "Digital Cephalometry", code: "DCG" },
  { label: "Clinic Digitisation", code: "DWF" },
];

export const TIMELINE = [
  {
    year: 2017,
    end: "present",
    title: "Associate Professor & Consultant Orthodontist",
    org: "Manipal College of Dental Sciences",
    location: "Mangaluru",
    detail:
      "Faculty teaching, research supervision, infection control committee, and clinical practice.",
  },
  {
    year: 2016,
    end: 2016,
    title: "MDS Orthodontics — Graduated",
    org: "SDM College of Dental Sciences",
    location: "Dharwad",
    detail:
      "Postgraduate residency in Orthodontics & Dentofacial Orthopaedics.",
  },
  {
    year: 2012,
    end: 2012,
    title: "BDS — Graduated",
    org: "Yenepoya Dental College",
    location: "RGUHS",
    detail:
      "Bachelor of Dental Surgery, including organising committee for 5th National ISPRP Conference.",
  },
];
