// Project Images
import mulih from "@images/mulih.webp";
import travel from "@images/travel.webp";
import bookshelf from "@images/bookshelf.webp";
import notes from "@images/notes.webp";
import treede from "@images/3d.webp";
import abinawa from "@images/abinawa.webp";
import inpoums from "@images/inpoums.webp";
import portfolio_v1 from "@images/portfolio-v1.webp";
import bertumbuh from "@images/bertumbuh.webp";
import coffe_bean from "@images/coffe-bean.webp";
import dapbunda from "@images/dapbunda.webp";
import hpcjapan from "@images/hpc-japan.webp";
import ceritain from "@images/ceritain.webp";
import pinarak_resto from "@images/pinarak_resto.webp";

// Gif Images
import dapbundaGif from "@gif/dapbunda.gif";
import coffebeanGif from "@gif/coffe-bean.gif";
import portfolioGif from "@gif/portfolio.gif";
import notesGif from "@gif/notes.gif";
import abinawaGif from "@gif/abinawa.gif";
import bookshelfGif from "@gif/bookshelf.gif";
import sakurajapanGif from "@gif/sakura-japan.gif";
import ceritainGif from "@gif/ceritain.gif";
import pinarakrestoGif from "@gif/pinarak-resto.gif";
import ICONS from "@/constants/icons";
import { StaticImageData } from "next/image";

const tools = {
  Git: { name: "Git", src: ICONS.git, level: "Version control" },
  Gitlab: { name: "Gitlab", src: ICONS.gitlab, level: "Git hosting" },
  Github: { name: "Github", src: ICONS.github, level: "Git hosting" },
  NPM: { name: "PNPM", src: ICONS.npm, level: "Depedencies manager" },
  VSCode: { name: "VSCode", src: ICONS.vscodeCodeEditor, level: "Code editor" },
  Figma: { name: "Figma", src: ICONS.figma, level: "UIUX Design tool" },
  Firebase: {
    name: "Firebase",
    src: ICONS.firebase,
    level: "Database,Auth,Realtime",
  },
  MongoDB: {
    name: "MongoDB",
    src: ICONS.mongodb,
    level: "NoSQL database",
  },
  MySQL: {
    name: "MySQL",
    src: ICONS.mysqlDb,
    level: "Relational database",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    src: ICONS.postgreSQL,
    level: "Relational database",
  },
};

interface IStack {
  name: string;
  src: string | StaticImageData;
  level: "Beginer" | "Intermediate" | "Advanced" | "Expert";
}

const stacks: Record<string, IStack> = {
  HTML: { name: "HTML", src: ICONS.html5, level: "Expert" },
  CSS: { name: "CSS", src: ICONS.css3, level: "Expert" },
  JS: { name: "Javascript", src: ICONS.js, level: "Expert" },
  Typescript: {
    name: "Typescript",
    src: ICONS.typescriptTsLogo,
    level: "Expert",
  },
  // Styling / UI Frameworks
  Tailwind: { name: "TailwindCSS", src: ICONS.tailwind, level: "Expert" },
  Bootstrap: { name: "Bootstrap", src: ICONS.bootstrap, level: "Expert" },
  MaterialUI: {
    name: "MaterialUI",
    src: ICONS.materialUI,
    level: "Advanced",
  },
  Shadcn: { name: "Shadcn", src: ICONS.shadcn, level: "Expert" },

  // 3. JavaScript Frameworks & Libraries
  React: { name: "React", src: ICONS.react, level: "Expert" },
  NextJS: { name: "Next", src: ICONS.nextjs, level: "Expert" },
  Vue: { name: "Vue", src: ICONS.vue, level: "Intermediate" },
  Vite: { name: "Vite", src: ICONS.vite, level: "Advanced" },
  Webpack: { name: "Webpack", src: ICONS.webpackBundler, level: "Advanced" },
  Storybook: { name: "Storybook", src: ICONS.storybook, level: "Advanced" },
  ReactQuery: {
    name: "React Query",
    src: ICONS.reactQueryLogo,
    level: "Expert",
  },

  // 4. Backend / Fullstack Technologies
  SpringBoot: {
    name: "Spring Boot",
    src: ICONS.springboot,
    level: "Intermediate",
  },
  Express: { name: "Express", src: ICONS.express, level: "Expert" },
  Nest: { name: "NestJS", src: ICONS.nestjs, level: "Advanced" },
  WebSocket: {
    name: "WebSocket",
    src: ICONS.websocket,
    level: "Intermediate",
  },
  Laravel: { name: "Laravel", src: ICONS.laravel, level: "Intermediate" },
  NetFramework: {
    name: ".Net",
    src: ICONS.netFramework,
    level: "Intermediate",
  },

  // 5. Databases & ORMs
  PrismaORM: {
    name: "Prisma ORM",
    src: ICONS.prismaOrm,
    level: "Intermediate",
  },

  // 6. Cloud & DevOps
  AWS: { name: "AWS", src: ICONS.aws, level: "Advanced" },
  Docker: { name: "Docker", src: ICONS.docker, level: "Advanced" },
};

const projects = [];

export { tools, stacks, projects };
