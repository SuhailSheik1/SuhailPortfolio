export const PERSONAL_INFO = {
  name: "Suhail Sheik",
  title: "Computer Science Engineering Student @ OSU",
  email: "ssheik9610@gmail.com",
  phone: "614-695-7114",
  location: "Columbus, OH",
  linkedin: "https://www.linkedin.com/in/suhail-sheik/",
  github: "https://github.com/SuhailSheik1",
  education: {
    school: "The Ohio State University",
    degree: "Bachelor of Science in Computer Science Engineering",
    specialization: "Artificial Intelligence",
    minors: ["Economics", "Mathematics"],
    gpa: "3.71 / 4.00",
    graduation: "May 2027",
    awards: [
      "Winner of the JPMorgan Chase Hackathon",
      "Winner of the Nationwide Mutual Insurance Company Hackathon"
    ]
  }
};

export const EXPERIENCE = [
  {
    company: "JPMorgan Chase",
    role: "Software Engineer Intern",
    period: "May 2026 - August 2026",
    location: "Columbus, Ohio",
    description: [
      "Developed REST APIs and integrated internal microservices, enabling seamless data flow across 5+ enterprise applications and supporting 10K+ daily requests"
    ]
  },
  {
    company: "Nationwide Mutual Insurance Company",
    role: "Software Engineer Intern",
    period: "May 2025 - May 2026",
    location: "Columbus, Ohio",
    description: [
      "Built automation workflows using AWS Bedrock, Lambda, and S3 to enhance ServiceNow change-management processes through Copilot Studio and Power Platform integration.",
      "Developed and deployed AI models on AWS Bedrock and SageMaker, using AWS data pipelines to feed insights into Power BI dashboards for real-time change risk analytics and process optimization."
    ]
  },
  {
    company: "The Ohio State University",
    role: "AI Undergraduate Research Assistant",
    period: "February 2024 - Present",
    location: "Columbus, Ohio",
    description: [
      "Utilized PSMNet and BNN via PyTorch to reduce computational complexity and optimize performance in AI-driven tasks, enhancing efficiency and accuracy."
    ]
  },
  {
    company: "Happinest.AI",
    role: "AI Engineer Intern",
    period: "May 2024 - September 2024",
    location: "Tampa, Florida",
    description: [
      "Designed and configured automated workflows using Azure AI Studios and Power Automate, integrating AI to process email data into an Azure SQL Database enhancing data integration by 30%."
    ]
  }
];

export const PROJECTS = [
  {
    title: "UniBazzar",
    subtitle: "AI-Powered Campus Rental Platform",
    period: "January 2026 – Present",
    shortDescription: "Built an AI-powered, OSU-exclusive marketplace enabling students to rent items from nearby peers in real time.",
    fullDescription: "Developed a mobile-first campus rental platform that transforms underutilized student-owned items into a real-time, peer-to-peer marketplace. Implemented secure OSU authentication and location-based matching to connect borrowers with nearby lenders instantly.\n\nDesigned an intelligent matching system that recommends the best available items based on proximity, availability, and user preferences. Built the backend using Node.js and TypeScript with a lightweight database for fast queries, and integrated AI-driven features for request matching and item verification.\n\nFocused on solving a real infrastructure inefficiency on college campuses by creating a scalable system that reduces unnecessary purchases and promotes resource sharing.",
    techStack: ["Node.js", "Express", "TypeScript", "React (Vite)", "SQLite", "IBM watsonx.ai", "LLMs", "OAuth (OSU Auth)"],
    tags: ["Marketplace", "AI", "Mobile-First"]
  },
  {
    title: "Receipt Pantry",
    subtitle: "Smart Expense & Inventory Tracker",
    period: "January 2026 – May 2026",
    shortDescription: "AI-powered receipt scanner that extracts, categorizes, and tracks expenses automatically.",
    fullDescription: "Built a mobile application that automates expense tracking by extracting structured data from receipts using computer vision and natural language processing.\n\nIntegrated Google Vision API to process receipt images and convert them into usable transaction data. Designed an NLP pipeline to categorize expenses into meaningful groups, enabling users to track spending patterns without manual input.\n\nImplemented features for inventory tracking, allowing users to monitor purchased items over time. Focused on creating a frictionless experience where users simply upload a receipt and receive fully categorized financial insights.",
    techStack: ["React Native", "Google Vision API", "Python (NLP)", "REST APIs"],
    tags: ["Computer Vision", "NLP", "FinTech"]
  },
  {
    title: "Change Safety Score Solution",
    subtitle: "Risk Intelligence System",
    period: "May 2025 - June 2025",
    shortDescription: "Engineered a system that analyzes ServiceNow change requests and assigns real-time risk scores.",
    fullDescription: "Designed and implemented an enterprise-grade risk scoring system for ServiceNow Change Requests, aimed at improving change success rates and reducing production incidents.\n\nBuilt an event-driven pipeline that ingests change request data and evaluates critical fields such as implementation plans, backout strategies, and testing completeness. Developed scoring logic to quantify risk and identify high-risk changes before deployment.\n\nIntegrated Power Automate for workflow automation and Power BI for real-time dashboards, enabling stakeholders to monitor change health across platforms. Extended the system with a Copilot Studio agent that provides natural language insights and recommendations to users.\n\nThis project directly aligns with real-world enterprise change management processes and demonstrates strong experience with data-driven decision systems.",
    techStack: ["ServiceNow API", "Power Automate", "Power BI", "Copilot Studio", "Dataverse", "Python"],
    tags: ["Enterprise", "Analytics", "Automation"]
  }
];

export const SKILLS = {
  languages: ["Python", "Java", "SQL", "C", "Swift", "Assembly", "Ruby", "JavaScript", "JSON", "HTML", "CSS", "Git", "MATLAB"],
  frameworks: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Seaborn", "Flask"],
  tools: ["Azure Services", "AWS (Bedrock, SageMaker)", "Power Platform", "ServiceNow", "Copilot Studio", "Visual Studio", "Xcode", "Firebase", "Tableau", "Linux", "Unix", "Excel", "Jira"]
};
