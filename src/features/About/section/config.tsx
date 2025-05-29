import ICONS from "@/constants/icons";
import { IDATA_ORGANIZATION, IDATA_WORK_EXPERIENCE } from "./types";

export const DATA_WORK_EXPERIENCE: IDATA_WORK_EXPERIENCE[] = [
  {
    title: "Senior Fullstack Developer",
    url: "https://broilerx.com/",
    company: "BroilerX",
    date: "Jan 2025 - Present",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Led a team of engineers in developing a web-based dashboard system to
          streamline operational processes for BroilerX to support
          administrative needs across regions and its poultry farm partners.
        </li>
        <li>
          Reviewed code submitted by the engineering team to ensure clean code
          architecture principles, resulting in faster development time and a
          significant reduction in potential bugs across the web application.
        </li>
        <li>
          Actively contributed to the full development cycle, ensuring
          high-quality code and architecture while managing team collaboration
          and task execution.
        </li>
        <li>
          Successfully resolved urgent production bugs under tight deadlines,
          ensuring system stability and minimizing downtime.
        </li>

        <br />
        <span>
          <b>Highlight:</b>
        </span>
        <li>
          Successfully deployed the dashboard application, now actively used by
          administrators across multiple regions and units.
        </li>
        <li>
          Enabled mobile app usage by farmers for real-time field operations.
        </li>
        <li>
          Reduced bug reports by 45% after implementing stricter code review and
          testing routines.
        </li>
        <li>
          Improved delivery speed by 30% through better team coordination and
          modularization.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "Javascript",
        icon: ICONS.javascript,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "React Query",
        icon: ICONS.reactQueryLogo,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Shadcn UI",
        icon: ICONS.shadcn,
      },
      {
        name: "Storybook",
        icon: ICONS.storybook,
      },
      {
        name: "Spring Boot",
        icon: ICONS.springboot,
      },
      {
        name: "PostgreSQL",
        icon: ICONS.postgreSQL,
      },
      {
        name: "MongoDB",
        icon: ICONS.mongodb,
      },
    ],
  },
  {
    title: "Fullstack Developer",
    url: "https://broilerx.com/",
    company: "BroilerX",
    date: "Oct 2023 - Dec 2024",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Successfully developed the{" "}
          <a
            href="https://www.broilerx.com/"
            className="text-underline"
            target="_blank"
            rel="noreferrer"
          >
            BroilerX
          </a>{" "}
          landing page using Next.js
        </li>
        <li>
          Developed web-based dashboard applications to support multi-regional
          operational processes and collaboration with poultry farm partners at
          BroilerX.
        </li>
        <li>
          Designed and implemented APIs to support seamless integration with
          mobile applications used in field operations.
        </li>
        <li>
          Integrated IoT devices such as smart scales and smart climate control
          systems with the platform using the MQTT protocol via ThingsBoard.
        </li>
        <li>
          Enabled real-time data synchronization between IoT devices and
          applications, improving monitoring accuracy and operational
          efficiency.
        </li>
        <br />
        <span>
          <b>Highlight:</b>
        </span>
        <li>
          Delivered integrated system enhancing poultry operations and data
          collection.
        </li>
        <li>
          Improved real-time monitoring and efficiency for field operations.
        </li>
        <li>
          Enabled IoT integration across 100+ farms, increasing data visibility
          and operational insight.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "Javascript",
        icon: ICONS.javascript,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "React Query",
        icon: ICONS.reactQueryLogo,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Shadcn UI",
        icon: ICONS.shadcn,
      },
      {
        name: "Storybook",
        icon: ICONS.storybook,
      },
      {
        name: "Spring Boot",
        icon: ICONS.springboot,
      },
      {
        name: "PostgreSQL",
        icon: ICONS.postgreSQL,
      },
      {
        name: "MongoDB",
        icon: ICONS.mongodb,
      },
    ],
  },
  {
    title: "Freelance Full Stack Developer (Remote – Contract)",
    url: "https://arcticgrey.com/",
    company: "Arctic Grey Ltd.",
    date: "Jan 2024 - Present",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Developed BulkHours V1: A dashboard syncing time-tracking data from
          Time Doctor with Monday.com boards, managing project hours and
          budgets.
        </li>
        <li>
          Developed BulkHours V2: An upgraded system for client access to time
          reports and admin dashboards, integrating multiple platforms.
        </li>
        <br />
        <span>
          <b>Highlight:</b>
        </span>
        <li>Reduced sync latency by 70% through backend optimization.</li>
        <li>
          Reduced API sync failures by 40% with optimized Redis caching layer.
        </li>
        <li>
          Enabled cross-department time reporting for over 400 client project
          boards.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "Javascript",
        icon: ICONS.javascript,
      },
      {
        name: "Bootstrap",
        icon: ICONS.bootstrap,
      },

      {
        name: "Express",
        icon: ICONS.express,
      },
      {
        name: "MySQL",
        icon: ICONS.mysqlDb,
      },
      {
        name: "MongoDB",
        icon: ICONS.mongodb,
      },
      {
        name: "Redis",
        icon: ICONS.redis,
      },
      {
        name: "AWS",
        icon: ICONS.aws,
      },
    ],
  },
  {
    title: "Freelance Backend Engineer (Remote – Contract) ",
    url: "https://ragdalion.com",
    company: "Ragdalion",
    date: "Dec 2024 - Feb 2025",
    description: (
      <ul className="list-inside list-disc">
        <span>Sikomo HR & Attendance System</span>
        <li>
          Built core backend features for HR and attendance management using
          Domain-Driven Design.
        </li>
        <li>Implemented employee, attendance, leave, and overtime modules.</li>
        <li>
          Integrated JWT authentication, RBAC system, and mobile GPS + face
          recognition support.
        </li>
        <br />
        <span>
          <b>Highlight:</b>
        </span>
        <li>
          Delivered 10+ backend modules with full test coverage and
          transactional integrity.
        </li>
        <li>
          Reduced attendance error rate by enabling face verification and
          geolocation matching.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "Express",
        icon: ICONS.express,
      },
      {
        name: "PostgreSQL",
        icon: ICONS.postgreSQL,
      },
      {
        name: "Redis",
        icon: ICONS.redis,
      },
    ],
  },
  {
    title: "Fullstack Developer",
    url: "",
    company: "Sefeo English Community",
    date: "Jan 2023 - Sept 2023",
    description: (
      <>
        <p>
          Developed web applications that serve as advertising media, manage
          membership data, and handle program-related information for learning
          activities within the Sefeo English Community.
          <br /> <br />
          <span>
            <b>Highlight:</b>
          </span>
          <li>
            Delivered robust internal tools to improve education operations.
          </li>
          <li>Contributed to increased outreach effectiveness.</li>
        </p>
      </>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "React Query",
        icon: ICONS.reactQueryLogo,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Material UI",
        icon: ICONS.materialUI,
      },
      {
        name: "Express",
        icon: ICONS.express,
      },
      {
        name: "Firebase",
        icon: ICONS.firebase,
      },
      {
        name: "PostgreSQL",
        icon: ICONS.postgreSQL,
      },
    ],
  },
  {
    title: "Fullstack Developer",
    url: "",
    company: "DPMK Papua Barat",
    date: "Jan 2021 - Dec 2021",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Successfully delivered multiple digital solutions to support various
          government business processes in West Papua, serving primarily as a
          Full Stack Developer while also handling backend and database
          development responsibilities.
        </li>
        <li>
          Developed a Village Product Potential Mapping System, enabling the
          identification of economically valuable local products to boost
          village productivity and economic growth.
        </li>
        <li>
          Built a Village-Owned Business Entity Registration System,
          streamlining the legal registration of local enterprises across West
          Papua province.
        </li>
        <li>
          Delivered SNIPER (Program and Activity Planning Information System) to
          manage and submit program and activity data to the national SIPD
          system, improving regional development planning.
        </li>
        <li>
          Created a Digital Office System for internal document management at
          DPMK, facilitating the digital processing and archiving of official
          correspondence.
        </li>
        <li>
          Engineered the backend and database of SIKAMPUNG (Village Information
          System) to process data from 1.15 million residents, generating
          real-time statistics on population, stunting, sanitation, poverty, and
          village assets, integrated with the national DUKCAPIL system.
        </li>
        <li>
          Frequently entrusted with handling urgent issues and cross-functional
          tasks, demonstrating adaptability and commitment to delivering
          high-impact government platforms under tight timelines.
        </li>
        <br />
        <span>
          <b>Highlight:</b>
        </span>
        <li>
          Delivered real-time demographic analytics system for 1.15M+ residents.
        </li>
        <li>
          Helped reduce paperwork processing by 70% through digital
          correspondence tools.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Express",
        icon: ICONS.express,
      },
      {
        name: "NestJS",
        icon: ICONS.nestjs,
      },
      {
        name: "Laravel",
        icon: ICONS.laravel,
      },
      {
        name: "MySQL",
        icon: ICONS.mysqlDb,
      },
    ],
  },
  {
    title: "Web Developer",
    url: "https://egovernment.papuabaratprov.go.id",
    company: "Kominfo Papua Barat",
    date: "Feb 2019 - Dec 2021",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Delivered multiple web-based systems for various West Papua Provincial
          Government agencies, taking on full stack, backend, frontend, and
          database roles due to small team constraints.
        </li>
        <li>
          Developed the E-Catalog BALITBANGDA, a digital platform to store and
          showcase research outputs from local experts across West Papua.
        </li>
        <li>
          Built the SIKM Monitoring System for the Department of Transportation
          to track and control entry/exit access into West Papua.
        </li>
        <li>
          Created the PPID (Public Information Management) system for KOMINFO,
          enabling citizens to request data, submit feedback, and access public
          information.
        </li>
        <li>
          Developed SITANDA, a digital document and correspondence system to
          streamline the sending, receiving, and archiving of official letters
          between institutions.
        </li>
        <li>
          Built the BAPPEDA Sectoral Data System, allowing for structured input
          and validation of legal audit forms to support government planning.
        </li>
        <li>
          Delivered a CMS Website for DPRD and other West Papua institutions,
          enabling content management and publishing for government websites.
        </li>
        <li>
          Developed the E-Planning System, improving transparency and regulatory
          compliance in regional planning aligned with national and provincial
          laws.
        </li>
        <li>
          Built the E-Musrenbang System, a digital platform for public
          development planning forums to gather citizen and stakeholder input.
        </li>
        <li>
          Developed the E-Budgeting System to manage and monitor provincial
          budgeting processes, enhancing financial transparency and security.
        </li>
        <br />
        <span>
          <b>Highlight:</b>
        </span>
        <li>
          Contributed to transparency and efficiency in government services.
        </li>
        <li>
          Shortened travel permit processing time from 3 days to under 1 hour
          via SIKM platform.
        </li>
        <li>
          Delivered systems with strong security and usability compliance.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "VueJS",
        icon: ICONS.vue,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Bootstrap",
        icon: ICONS.bootstrap,
      },
      {
        name: "Laravel",
        icon: ICONS.laravel,
      },
      {
        name: "PostgreSQL",
        icon: ICONS.postgreSQL,
      },
      {
        name: "MySQL",
        icon: ICONS.mysqlDb,
      },
      {
        name: "MongoDB",
        icon: ICONS.mongodb,
      },
    ],
  },
  {
    title: "Fullstack Developer Intern",
    url: "https://www.pertamina.com/",
    company: "PT Pertamina RU IV",
    date: "Jan 2018 - Apr 2018",
    description: (
      <p>
        Developed an application that handles network monitoring issues
        throughout the Pertamina RU IV area as a Full Stack Developer.
        <ul>
          <br />
          <span>
            <b>Highlight:</b>
          </span>
          <li>
            Decreased network issue resolution time by enabling centralized
            alerts and logs.
          </li>
        </ul>
      </p>
    ),
    techs: [
      {
        name: "PHP",
        icon: ICONS.php,
      },
      {
        name: "Laravel",
        icon: ICONS.laravel,
      },
      {
        name: "MongoDB",
        icon: ICONS.mysqlDb,
      },
    ],
  },
  {
    title: "Fullstack Developer Intern",
    url: "https://www.bintangku.com/",
    company: "PT Bintang Komunikasi Utama",
    date: "Feb 2012 - Jun 2012",
    description: (
      <p>
        Developed an inventory module for stock items in the warehouse as a Full
        Stack Developer.
        <ul>
          <br />
          <span>
            <b>Highlight:</b>
          </span>
          <li>
            Reduced manual stock errors by 30% through system digitization.
          </li>
        </ul>
      </p>
    ),
    techs: [
      {
        name: ".Net Framework",
        icon: ICONS.netFramework,
      },
      {
        name: "MySQL",
        icon: ICONS.mysqlDb,
      },
    ],
  },
];

export const DATA_ORGANIZATION: IDATA_ORGANIZATION[] = [
  {
    title: "Public Relation Coordinator",
    url: "https://www.instagram.com/labinfor.uii/",
    organization: "Informatics Laboratory",
    date: "Aug 2017 - Jun 2018",
    description: (
      <>
        <li>
          Manage the informatics lab media with the help of other assistants (4
          people) to provide information announcements related to the practicum
          for one semester. Compile information whenever there is something that
          needs to be announced throughout the semester. Coordinate with
          department staff and lecturers to ensure that information related to
          the practicum announcements is conveyed properly.
        </li>
      </>
    ),
  },
  {
    title: "Laboratory Assistant",
    url: "https://www.instagram.com/labinfor.uii/",
    organization: "Informatics Laboratory",
    date: "Apr 2016 - Jan 2018",
    description: (
      <>
        <li>
          Responsible for handling the activities of approximately 250 lab
          participants in several practicum classes (Database Engineering,
          Object-Oriented Programming , Web Engineering). Collaborated with
          lecturers, and graded the students practicum evaluations.
        </li>
      </>
    ),
  },
];
