export const config = {
    developer: {
        name: "Thianchai",
        fullName: "Thianchai Chamnan",
        title: "Software Developer",
        description: "Full-stack Web Developer specializing in Angular and .NET, building enterprise-grade systems for government and industrial clients."
    },
    social: {
        email: "thianchaichamnan@gmail.com",
        phone: "093-1177457",
        location: "Ladyao, Chatuchak, Bangkok"
    },
    about: {
        title: "About Me",
        description: "I am a Full-stack Web Developer specializing in Angular and .NET, building enterprise-grade systems for government and industrial clients such as Thai Oil. I design scalable architecture and integrate complex systems (Azure AD, SAP, Oracle) to deliver reliable, user-focused solutions from requirement gathering all the way to production. I hold a Bachelor of Computer Science from Mahasarakham University and enjoy turning complicated business workflows into software people actually want to use."
    },
    experiences: [
        {
            position: "Software Developer",
            company: "Advanced Digital Business (ADB)",
            companyUrl: "http://adb-thailand.com/",
            period: "Present",
            location: "Bangkok, Thailand",
            description: "Developed and maintained enterprise-grade web applications for Thai Oil, one of Thailand's largest energy companies, supporting mission-critical safety, operations, and corporate travel functions.",
            responsibilities: [
                "Engineered e-PHA (Electronic Process Hazard Analysis), a platform for identifying and assessing operational risks and hazards across industrial production processes",
                "Delivered RMIS (Risk Management Information System) to centralize risk tracking, reporting, and analytics",
                "Designed and built a full-stack Car Service Management System for vehicle booking and dispatch with multi-level approvals and automated reporting",
                "Built TOP e-Biz, an enterprise travel & expense platform covering the full trip lifecycle, integrated with SAP, Azure AD, and Exchange",
                "Architected system workflows, relational database schemas, and responsive user interfaces to ensure scalability and maintainability",
                "Collaborated with cross-functional stakeholders to translate business requirements into reliable, production-ready solutions"
            ],
            technologies: ["Angular", ".NET 8", "C#", "Oracle", "Azure AD SSO", "SAP"]
        },
        {
            position: "Web Developer",
            company: "RisePlus Technology",
            companyUrl: "https://riseplus.tech/",
            period: "2024",
            location: "Thailand",
            description: "Built web and mobile systems for public sector, healthcare, and agriculture clients, working end to end from UX/UI through backend delivery.",
            responsibilities: [
                "Developed a student transportation management system deployed across Khon Kaen province to coordinate school commutes",
                "Designed and implemented the UX/UI for a Parkinson's disease screening system, focusing on accessibility and ease of use for patients and clinicians",
                "Built a satellite image management system integrated with GISTDA (Geo-Informatics and Space Technology Development Agency)",
                "Contributed to the development of Smart Farm and POS systems",
                "Collaborated with cross-functional teams to deliver scalable, user-friendly solutions"
            ],
            technologies: ["Angular", "PHP", "MySQL", "Flutter", "UX/UI"]
        },
        {
            position: "Bachelor of Computer Science",
            company: "Mahasarakham University",
            companyUrl: "",
            period: "2023",
            location: "Maha Sarakham, Thailand",
            description: "Graduated with a Bachelor of Computer Science. Senior project: a full-stack system to manage and track agricultural pest outbreaks with real-time data collection and map-based monitoring.",
            responsibilities: [
                "Developed a full-stack system to manage and track agricultural pest outbreaks, supporting real-time data collection and monitoring",
                "Integrated the Google Maps API to visualize outbreak locations and map the geographic spread of infestations",
                "Built cross-platform mobile and backend applications using Flutter, PHP, and MySQL",
                "Designed the data model and workflows around usability and efficient data management for practical agricultural use"
            ],
            technologies: ["Flutter", "PHP", "MySQL", "Google Maps API"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "TOP e-Biz",
            category: "Enterprise / Travel & Expense",
            technologies: "Angular, .NET 8, Oracle, SAP, Azure AD, Exchange",
            image: "/images/adb/ebiz.png",
            description: "An enterprise travel & expense management platform covering the full trip lifecycle — requests, multi-level approvals, bookings, and reimbursements — integrated with SAP, Azure AD, and Exchange.",
            link: ""
        },
        {
            id: 2,
            title: "TOP e-PHA",
            category: "Enterprise / Process Safety",
            technologies: "Angular, .NET, Oracle, Azure AD SSO",
            image: "/images/adb/epha.png",
            description: "Electronic Process Hazard Analysis — a platform for identifying and assessing operational risks and hazards across industrial production processes, strengthening safety compliance and decision-making.",
            link: ""
        },
        {
            id: 3,
            title: "TOP RMIS",
            category: "Enterprise / Risk Management",
            technologies: "Angular, .NET, Oracle, Reporting & Analytics",
            image: "/images/adb/rmis.png",
            description: "Risk Management Information System that centralizes risk tracking, reporting, and analytics, enabling data-driven organizational decision-making.",
            link: ""
        },
        {
            id: 4,
            title: "Car Service Management",
            category: "Enterprise / Full-Stack",
            technologies: "Angular, .NET, Oracle, Azure AD SSO",
            image: "/images/adb/carservice.png",
            description: "A full-stack vehicle booking and dispatch system featuring driver/vehicle assignment, multi-level approvals, calendar scheduling, and automated reporting.",
            link: ""
        },
        {
            id: 5,
            title: "IGS Tool",
            category: "GIS / Government",
            technologies: "Web Application, GIS, GISTDA Integration",
            image: "/images/riseplus/gisda.png",
            description: "A satellite image management system integrated with GISTDA (Geo-Informatics and Space Technology Development Agency) for storing, browsing, and managing imagery.",
            link: ""
        },
        {
            id: 6,
            title: "KKVS Admin",
            category: "Government / Web System",
            technologies: "Web Application, PHP, MySQL, Maps",
            image: "/images/riseplus/kkvs.png",
            description: "A student transportation management system deployed across Khon Kaen province to coordinate school commutes for students, drivers, and schools.",
            link: "https://kkvs.dev.riseplus.tech/"
        },
        {
            id: 7,
            title: "KKU PD",
            category: "Healthcare / UX-UI",
            technologies: "UX/UI Design, Accessibility, Web Application",
            image: "/images/riseplus/parkinson.png",
            description: "UX/UI design and implementation for a Parkinson's disease screening system, focused on accessibility and ease of use for both patients and clinicians.",
            link: "https://pd.kku.ac.th/home"
        },
        {
            id: 8,
            title: "Smart Farm & POS",
            category: "IoT / Retail",
            technologies: "Web Application, PHP, MySQL, REST API",
            image: "/images/placeholder.webp",
            description: "Contributed to the development of Smart Farm monitoring and point-of-sale systems, delivering scalable and user-friendly solutions with cross-functional teams.",
            link: ""
        },
        {
            id: 9,
            title: "Pest Outbreak Tracker",
            category: "Agriculture / Mobile",
            technologies: "Flutter, PHP, MySQL, Google Maps API",
            image: "/images/placeholder.webp",
            description: "A full-stack system to manage and track agricultural pest outbreaks with real-time data collection, plus Google Maps visualization of outbreak locations and geographic spread.",
            link: ""
        }
    ],
    contact: {
        email: "thianchaichamnan@gmail.com",
        phone: "093-1177457",
        location: "230/12 Ladyao, Chatuchak, Bangkok"
    },
    skills: {
        develop: {
            title: "FULL-STACK",
            description: "Enterprise web applications end to end",
            details: "Building enterprise-grade systems with Angular on the front end and .NET / ASP.NET Core on the back end — from requirement gathering and workflow design through responsive UI, REST APIs, and production deployment.",
            tools: ["Angular", "TypeScript", "RxJS", "Angular Material", "TailwindCSS", "C#", ".NET / ASP.NET Core", "EF Core", "Dapper", "REST API"]
        },
        design: {
            title: "SYSTEMS & DATA",
            description: "Architecture, databases & integration",
            details: "Designing relational database schemas and system workflows for scalability and maintainability, and integrating enterprise platforms such as Azure AD SSO, SAP, and Exchange with reliable deployment on Docker and Windows/Linux servers.",
            tools: ["Oracle", "SQL Server", "PostgreSQL", "MySQL", "Azure AD (SSO)", "SAP Integration", "Docker", "Git", "VPS (Ubuntu / Windows Server)", "RDP"]
        }
    }
};
