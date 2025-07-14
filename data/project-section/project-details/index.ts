import { StaticImageData } from 'next/image';

export interface ProjectDetail {
  title: string;
  image: string;
  service: string;
  categories: string[];
  technologies: string[];
  overview: string;
  keyFeatures: {
    title: string;
    features: {
      title: string;
      items: string[];
    }[];
  };
  impact: string;
}

// Default project details that will be shown for all projects until individual data is added
export const defaultProjectDetail: ProjectDetail = {
  title: "Bayhawk Chatbot",
  image: "/assets/images/project/1.png",
  service: "Generative AI and Machine Learning",
  categories: ["AI-Powered Academic Assistant", "University Chatbot", "Multilingual Support System"],
  technologies: ["OpenAI GPT", "LangChain", "Whisper", "TTS", "Email APIs", "Python", "React"],
  overview: "SFBU Bayhawk ChatBot is an intelligent, AI-powered assistant created for San Francisco Bay University (SFBU). Designed to support students, faculty, and visitors, the chatbot delivers personalized, multilingual, and context-aware assistance 24/7. It leverages the latest in LLMs and automation to improve campus-wide engagement and operational efficiency.",
  keyFeatures: {
    title: "Key Features",
    features: [
      {
        title: "General Capabilities",
        items: [
          "24/7 Availability: AI support around the clock—no human intervention required.",
          "Multimodal Inputs: Handles text, audio, PDFs, YouTube transcripts, and web pages.",
          "Multilingual Communication: Understands and responds in multiple languages with real-time translation."
        ]
      },
      {
        title: "Student-Focused Tools",
        items: [
          "Smart Q&A Engine: Answers academic questions using memory and context.",
          "Escalation & Ticketing: Generates tickets for unresolved or complex queries.",
          "IT Help Integration: Assists students with tech-related problems.",
          "Follow-Up Automation: Sends status updates via email for pending issues."
        ]
      },
      {
        title: "Faculty-Centric Tools",
        items: [
          "MCQ Generator: Auto-generates multiple-choice questions from any input.",
          "Slide Deck Builder: Converts written content into polished presentations.",
          "Syllabus Generator: Helps faculty quickly design structured course plans.",
          "Faculty IT Support: Responds to classroom or admin tech issues."
        ]
      },
      {
        title: "Advanced AI Capabilities",
        items: [
          "Voice Chat Support: Real-time conversation using Whisper (speech-to-text) and OpenAI TTS (text-to-speech).",
          "Dynamic Prompting: Adapts responses based on SFBU-specific tone and intent.",
          "Content Moderation: Ensures appropriate, factual responses.",
          "Email Notifications: Summarizes interactions and notifies relevant departments (admissions, visitor desk, etc.)."
        ]
      }
    ]
  },
  impact: "The Bayhawk ChatBot transforms traditional university support into a scalable, AI-enhanced experience. By combining generative AI, automation, and user-focused design, it creates a smart, inclusive, and responsive campus environment."
};

// Map to store project details by slug
export const projectDetailsMap: Record<string, ProjectDetail> = {
  // Bayhawk Chatbot details
  '/project/bayhawk-chatbot': {
    title: "Bayhawk Chatbot",
    image: "/assets/images/project/1.png",
    service: "Generative AI and Machine Learning",
    categories: ["AI-Powered Academic Assistant", "University Chatbot", "Multilingual Support System"],
    technologies: ["OpenAI GPT", "LangChain", "Whisper", "TTS", "Email APIs", "Python", "React"],
    overview: "SFBU Bayhawk ChatBot is an intelligent, AI-powered assistant created for San Francisco Bay University (SFBU). Designed to support students, faculty, and visitors, the chatbot delivers personalized, multilingual, and context-aware assistance 24/7. It leverages the latest in LLMs and automation to improve campus-wide engagement and operational efficiency.",
    keyFeatures: {
      title: "Key Features",
      features: [
        {
          title: "General Capabilities",
          items: [
            "24/7 Availability: AI support around the clock—no human intervention required.",
            "Multimodal Inputs: Handles text, audio, PDFs, YouTube transcripts, and web pages.",
            "Multilingual Communication: Understands and responds in multiple languages with real-time translation."
          ]
        },
        {
          title: "Student-Focused Tools",
          items: [
            "Smart Q&A Engine: Answers academic questions using memory and context.",
            "Escalation & Ticketing: Generates tickets for unresolved or complex queries.",
            "IT Help Integration: Assists students with tech-related problems.",
            "Follow-Up Automation: Sends status updates via email for pending issues."
          ]
        },
        {
          title: "Faculty-Centric Tools",
          items: [
            "MCQ Generator: Auto-generates multiple-choice questions from any input.",
            "Slide Deck Builder: Converts written content into polished presentations.",
            "Syllabus Generator: Helps faculty quickly design structured course plans.",
            "Faculty IT Support: Responds to classroom or admin tech issues."
          ]
        },
        {
          title: "Advanced AI Capabilities",
          items: [
            "Voice Chat Support: Real-time conversation using Whisper (speech-to-text) and OpenAI TTS (text-to-speech).",
            "Dynamic Prompting: Adapts responses based on SFBU-specific tone and intent.",
            "Content Moderation: Ensures appropriate, factual responses.",
            "Email Notifications: Summarizes interactions and notifies relevant departments (admissions, visitor desk, etc.)."
          ]
        }
      ]
    },
    impact: "The Bayhawk ChatBot transforms traditional university support into a scalable, AI-enhanced experience. By combining generative AI, automation, and user-focused design, it creates a smart, inclusive, and responsive campus environment."
  },
  
  // Cloud-Native Microservices Deployment details
  '/project/cloud-native-microservices-deployment-using-azure-aks-acr': {
    title: "Cloud-Native Microservices Deployment Using Azure AKS & ACR",
    image: "/assets/images/project/8.png",
    service: "Cloud Infrastructure & DevOps",
    categories: ["Kubernetes Deployment", "Azure DevOps", "Microservices Architecture"],
    technologies: ["Azure AKS", "Azure Container Registry (ACR)", "Docker", "Kubernetes", "Helm", "GitHub Actions"],
    overview: "This project delivers a cloud-native deployment architecture for scalable microservices using Azure Kubernetes Service (AKS) and Azure Container Registry (ACR). The goal was to streamline CI/CD, container management, and service scaling for enterprise-level applications. Our implementation focused on automation, observability, and secure image handling using Azure-native tools and modern DevOps practices.",
    keyFeatures: {
      title: "Key Features",
      features: [
        {
          title: "Kubernetes-Based Microservices",
          items: [
            "Deployed loosely coupled services in AKS clusters with autoscaling, high availability, and fault tolerance, following microservices best practices."
          ]
        },
        {
          title: "Container Image Management via ACR",
          items: [
            "Used Azure Container Registry (ACR) to securely store, version, and manage Docker container images for all services, enabling faster and safer deployments."
          ]
        },
        {
          title: "CI/CD Pipeline with GitHub Actions",
          items: [
            "Built robust CI/CD pipelines to automate testing, containerization, and deployment workflows — ensuring seamless updates from code to cluster."
          ]
        },
        {
          title: "Infrastructure-as-Code with Helm Charts",
          items: [
            "Defined Kubernetes deployment configurations and environment-specific variables using Helm, allowing consistent and repeatable infrastructure deployments."
          ]
        },
        {
          title: "Secrets & Identity Management",
          items: [
            "Integrated Azure Key Vault for secure storage of API keys, credentials, and connection strings; used Azure AD for RBAC and secure access control."
          ]
        },
        {
          title: "Monitoring & Auto-Healing",
          items: [
            "Enabled observability using Azure Monitor and Log Analytics with auto-healing configurations to restart failing pods or reschedule workloads on healthy nodes."
          ]
        }
      ]
    },
    impact: "The solution enabled the client to reduce deployment time, increase fault tolerance, and confidently scale microservices in a production-grade environment. It also established a strong DevOps foundation, lowering release risks and operational costs."
  },
  
  // Salesforce CRM Integration details
  '/project/salesforce-crm-integration-for-a-growing-ecommerce-company': {
    title: "Salesforce CRM Integration for a Growing E-Commerce Company",
    image: "/assets/images/project/7.png",
    service: "Salesforce Integration & Automation",
    categories: ["CRM for E-Commerce", "Lead Management", "Sales & Support Alignment"],
    technologies: ["Salesforce Sales Cloud", "Service Cloud", "REST APIs", "Apex", "Flow Builder"],
    overview: "This project focused on integrating Salesforce CRM into the tech stack of a rapidly growing e-commerce company. The goal was to unify sales, marketing, and customer support operations through a centralized platform. Our implementation ensured seamless lead tracking, automated workflows, real-time customer insights, and better alignment across teams — ultimately boosting conversion rates and support efficiency.",
    keyFeatures: {
      title: "Key Features",
      features: [
        {
          title: "Unified Lead Capture",
          items: [
            "Integrated Salesforce with website and marketing forms to automatically capture and assign leads.",
            "Leads were routed to appropriate sales reps based on product interest, region, or campaign source."
          ]
        },
        {
          title: "Sales Pipeline Automation",
          items: [
            "Designed custom opportunity stages and automated deal flows using Salesforce Flows and Apex triggers, helping the sales team manage prospects more efficiently and predict revenue better."
          ]
        },
        {
          title: "Customer Support Case Management",
          items: [
            "Enabled the support team to manage customer queries from multiple channels in one place.",
            "Built a Service Cloud module with case creation, escalation rules, and SLA tracking."
          ]
        },
        {
          title: "Order & Contact Sync",
          items: [
            "Connected Salesforce with the e-commerce backend (e.g., Shopify or WooCommerce) via REST API, enabling real-time sync of customer orders, contact details, and service history."
          ]
        },
        {
          title: "AI-Powered Insights",
          items: [
            "Activated Einstein Activity Capture and report dashboards to deliver smart insights on customer behavior, follow-ups, and top-performing reps."
          ]
        },
        {
          title: "Custom Dashboards & Reports",
          items: [
            "Delivered interactive dashboards for sales managers and execs to track lead sources, conversion rates, deal velocity, and support case volume."
          ]
        }
      ]
    },
    impact: "The Salesforce CRM integration helped the e-commerce business streamline operations, reduce manual tasks, and ensure that sales, marketing, and support teams worked from a single source of truth. The result: faster response times, higher lead-to-customer conversions, and happier customers."
  },
  
  // Project Cost, Delay & Vendor Analysis details
  '/project/project-cost-delay-vendor-analysis': {
    title: "Project Cost, Delay & Vendor Analysis (Power BI)",
    image: "/assets/images/project/6.png",
    service: "Data Analytics & Visualization",
    categories: ["Business Intelligence Dashboard", "Project Management Analytics", "Vendor Performance Insights"],
    technologies: ["Power BI", "DAX", "Excel", "SQL", "Data Modeling"],
    overview: "This Power BI dashboard provides real-time insights into project budget overruns, delay risks, and vendor performance. Built for project managers, operations teams, and decision-makers, the tool helps businesses stay on top of costs, timelines, and supplier efficiency. With clear visuals and drill-down capabilities, it transforms raw data into actionable intelligence.",
    keyFeatures: {
      title: "Key Features",
      features: [
        {
          title: "Budget Overrun Tracking",
          items: [
            "Visualize actual vs. planned spend across multiple projects.",
            "Instantly detect budget overruns and explore cost deviations by category or timeline."
          ]
        },
        {
          title: "Delay Risk Monitoring",
          items: [
            "Monitor projected vs. actual timelines with delay indicators.",
            "Use trend lines and warning flags to assess time-based risks and their root causes."
          ]
        },
        {
          title: "Vendor Performance Scorecard",
          items: [
            "Compare and rank vendors based on cost efficiency, delivery timeliness, and quality metrics.",
            "Identify underperforming suppliers and optimize sourcing strategies."
          ]
        },
        {
          title: "Dynamic KPI Dashboard",
          items: [
            "Track key performance indicators like project cost variance, schedule performance index (SPI), and cost performance index (CPI) — all in one place."
          ]
        },
        {
          title: "Timeline & Milestone Visualization",
          items: [
            "Get a high-level view of project phases and milestones, color-coded by risk level or progress.",
            "Great for stakeholder reporting and planning sessions."
          ]
        },
        {
          title: "Real-Time Data Refresh",
          items: [
            "Integrates with SQL databases or Excel files to auto-refresh data, ensuring that stakeholders always see the latest numbers."
          ]
        }
      ]
    },
    impact: "This dashboard enables project stakeholders to make data-driven decisions, mitigate risks before they escalate, and improve vendor negotiations through performance transparency. It's a must-have tool for teams aiming to stay on schedule, within budget, and ahead of potential issues."
  },
  
  // AI-Powered Recruitment Agent details
  '/project/ai-powered-recruitment-agent': {
    title: "AI-Powered Recruitment Agent",
    image: "/assets/images/project/5.png",
    service: "Generative AI Solutions, Automation Tools",
    categories: ["AI Recruitment Assistant", "HR Automation", "Candidate Screening"],
    technologies: ["NLP", "GPT Models", "Python", "Node.js", "ATS Integration"],
    overview: "The AI-Powered Recruitment Agent is a smart assistant tool designed to automate and enhance the hiring process. It helps HR teams and recruiters by screening resumes, ranking candidates, generating interview questions, and even scheduling interviews — all powered by natural language processing and intelligent automation. This tool reduces human bias, saves time, and helps organizations find the best-fit candidates faster.",
    keyFeatures: {
      title: "Key Features",
      features: [
        {
          title: "Resume Screening & Scoring",
          items: [
            "Automatically parses and scores resumes based on predefined role requirements using AI algorithms, saving hours of manual review time."
          ]
        },
        {
          title: "AI-Generated Interview Questions",
          items: [
            "Generates role-specific, skill-based, and behavioral interview questions using LLMs, enabling structured and unbiased interviews."
          ]
        },
        {
          title: "Candidate Ranking",
          items: [
            "Ranks candidates based on qualification match, experience, and skills extracted from their CVs using semantic analysis."
          ]
        },
        {
          title: "Interview Scheduling Assistant",
          items: [
            "Integrates with calendar APIs to automatically schedule interviews between candidates and panelists, eliminating back-and-forth coordination."
          ]
        },
        {
          title: "Smart Chat Agent",
          items: [
            "Candidates can interact with a chat-based interface to ask questions about the company, job description, or next steps — creating a smooth candidate experience."
          ]
        },
        {
          title: "Recruiter Dashboard",
          items: [
            "A real-time dashboard for HR teams to monitor pipeline status, see top candidates, track communication, and manage next actions with clarity."
          ]
        },
        {
          title: "Bias Detection & Fairness Checks",
          items: [
            "Flags potentially biased job descriptions or screening results and suggests neutral alternatives to promote inclusive hiring."
          ]
        }
      ]
    },
    impact: "This agent revolutionizes traditional recruitment by making it faster, smarter, and more inclusive. It reduces the administrative burden on recruiters, enhances candidate engagement, and helps companies hire top talent with data-backed, AI-assisted decisions."
  },
  
  // University Housing Management System details
  '/project/university-housing-management-system': {
    title: "University Housing Accommodation",
    image: "/assets/images/project/4.png",
    service: "Web App Development, Campus Solutions",
    categories: ["Student Housing Management", "Booking System", "Maintenance Portal"],
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
    overview: "This project is a comprehensive university housing management system designed to streamline the entire student accommodation lifecycle—from room booking and allocation to maintenance and communication. Built for both students and administrators, the platform ensures transparency, ease of use, and operational efficiency for managing housing at educational institutions.",
    keyFeatures: {
      title: "Key Features",
      features: [
        {
          title: "Booking System",
          items: [
            "Students can browse available accommodations, filter by room type or location, and book rooms in real time.",
            "The system ensures up-to-date availability and prevents overbooking."
          ]
        },
        {
          title: "Admin Management Panel",
          items: [
            "Admins can easily manage housing units, update room availability, assign rooms to students, and view overall occupancy statistics via a secure dashboard."
          ]
        },
        {
          title: "Maintenance Request Portal",
          items: [
            "Students can submit requests for repairs or issues related to their housing.",
            "Admins receive instant notifications and can track request status through a dedicated backend system."
          ]
        },
        {
          title: "Move-In/Move-Out Scheduler",
          items: [
            "Enables students to schedule preferred move-in and move-out dates, reducing congestion and ensuring smoother check-in/check-out processes."
          ]
        },
        {
          title: "Notification System",
          items: [
            "Automated email or SMS notifications for booking confirmations, maintenance updates, important deadlines, and general announcements help keep students informed and engaged."
          ]
        },
        {
          title: "Occupancy Reports & Analytics",
          items: [
            "Generates real-time reports on housing occupancy, maintenance logs, and student allocations, helping the administration make data-driven decisions."
          ]
        },
        {
          title: "Document Upload & Verification",
          items: [
            "Students can upload required documents (e.g., ID proof, enrollment letters) during booking.",
            "Admins can verify and approve them through the platform."
          ]
        },
        {
          title: "Secure Login & Role-Based Access",
          items: [
            "Supports secure login for both students and admins.",
            "Each role has customized access and permissions to ensure privacy and system integrity."
          ]
        },
        {
          title: "Room Preferences & Matching",
          items: [
            "Students can enter room preferences (e.g., shared/private, quiet/study-friendly) and the system suggests best-fit accommodations using predefined matching logic."
          ]
        }
      ]
    },
    impact: "The University Housing Accommodation system helps universities deliver a seamless housing experience—improving student satisfaction, minimizing admin workload, and ensuring efficient use of available facilities."
  },
  
  // Techgram details
  '/project/techgram': {
    title: "Techgram – AI Social Media for Tech Enthusiasts",
    image: "/assets/images/project/3.png",
    service: "Generative AI and Web App Development",
    categories: ["AI-Powered Social Platform", "Tech Community", "Content Creation"],
    technologies: ["React", "Node.js", "Python", "Gen AI", "JavaScript", "SCSS", "HTML"],
    overview: "Techgram is an AI-powered social media platform built for the next generation of tech and business enthusiasts. Unlike traditional platforms that serve mixed content, Techgram delivers a focused, curated, and intelligent experience. It empowers users to consume, create, and share meaningful tech-focused content with the help of AI agents, smart writing tools, trending AI toolkits, and short-form video features.\n\nThe platform supports both web and mobile views and includes personalized feeds, content creation assistance, and community features, making it a powerful hub for professional tech engagement.",
    keyFeatures: {
      title: "Key Features",
      features: [
        {
          title: "AI-Powered News Feed",
          items: [
            "Curated tech updates in 60 words or less with visuals and reliable source links.",
            "Stay ahead in the tech world without information overload."
          ]
        },
        {
          title: "Help Me Write with AI",
          items: [
            "Easily create, upload, and share blog posts or social content using built-in AI writing assistance.",
            "Perfect for tech creators and professionals."
          ]
        },
        {
          title: "AI Tool Discover",
          items: [
            "Explore the AI Tools Box to find and adopt trending tools that enhance productivity, creativity, and automation."
          ]
        },
        {
          title: "Reels for Tech",
          items: [
            "Watch and share short, bite-sized videos focused on tech innovations, product breakdowns, and business insights—optimized for mobile engagement."
          ]
        },
        {
          title: "Interactive Learning",
          items: [
            "Ask built-in AI Agents for curated learning resources, tutorials, and guides to accelerate your professional growth—all in one place."
          ]
        },
        {
          title: "Teels (AI-Powered Micro Features)",
          items: [
            "Use micro-tools within the app to perform niche tasks like summarizing content, formatting posts, generating hashtags, or identifying trending keywords."
          ]
        }
      ]
    },
    impact: "Techgram transforms how professionals consume, learn, and share tech and business content. By blending social interactivity with AI intelligence, it offers a distraction-free, growth-focused alternative to mainstream platforms."
  },
  
  // NowDo App details
  '/project/nowdo': {
    title: "NowDo – Productivity App",
    image: "/assets/images/project/2.png",
    service: "Mobile App Development, Personal Productivity Tools",
    categories: ["Task Manager", "Habit Tracker", "Time Management App"],
    technologies: ["Expo (React Native)", "Supabase", "Redux Toolkit", "React Native Paper"],
    overview: "NowDo is a modern productivity app designed to help users take control of their time, build consistent habits, and beat procrastination. Developed using React Native with Expo, the app offers an all-in-one solution for managing tasks, tracking progress, and staying focused with scientifically backed tools like the Pomodoro timer and Eisenhower Matrix.\n\nWhether you're a student, professional, or entrepreneur, NowDo helps you stay organized and motivated throughout the day.",
    keyFeatures: {
      title: "Key Features",
      features: [
        {
          title: "Authentication",
          items: [
            "Securely log in using your email and password or sign in effortlessly via Google OAuth, powered by Supabase Auth.",
            "This ensures both convenience and data protection, giving users control over their productivity environment."
          ]
        },
        {
          title: "Task Management",
          items: [
            "Create, organize, and track tasks with the ability to set priorities, deadlines, and detailed notes.",
            "Users can manage their to-do lists with clarity and focus, enhancing day-to-day execution of personal and professional goals."
          ]
        },
        {
          title: "Habit Tracker",
          items: [
            "Develop and maintain healthy routines by logging daily activities through a built-in habit tracker.",
            "Users can monitor consistency, build streaks, and visualize habit strength over time to stay motivated."
          ]
        },
        {
          title: "Pomodoro Timer",
          items: [
            "Maximize focus and efficiency using a customizable Pomodoro timer with break intervals.",
            "This scientifically proven technique helps reduce distractions and promotes deep work sessions throughout the day."
          ]
        },
        {
          title: "Priority Matrix",
          items: [
            "Organize and assess tasks using the Eisenhower Matrix, categorizing work by urgency and importance.",
            "This smart productivity tool helps users focus on what truly matters and avoid burnout from busywork."
          ]
        },
        {
          title: "Calendar View",
          items: [
            "Visualize your tasks and habits in a calendar-based layout, making it easier to plan ahead.",
            "Users can track progress, manage deadlines, and maintain a balanced schedule with clear visual feedback."
          ]
        },
        {
          title: "Theme Support",
          items: [
            "Enjoy an aesthetically pleasing and adaptive UI with automatic light and dark theme switching.",
            "The design responds to system preferences for better readability and user comfort across different lighting conditions."
          ]
        }
      ]
    },
    impact: "NowDo empowers users to boost productivity, develop mindful routines, and stay on top of their goals. With elegant UI, seamless performance, and thoughtful design, it's a smart companion for anyone looking to work smarter—not harder."
  }
};

// Function to get project details by slug
export const getProjectDetailsBySlug = (slug: string): ProjectDetail => {
  // Return specific project details if available, otherwise return default
  return projectDetailsMap[slug] || defaultProjectDetail;
};
