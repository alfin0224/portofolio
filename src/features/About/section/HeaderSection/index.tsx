import type { FC } from "react";
import Image from "next/image";
import alfin from "@images/alfin.webp";

const HeaderSection: FC = () => {
  return (
    <section className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
      <div className="flex flex-col justify-center text-primary">
        <div className="flex items-center gap-5 pb-10">
          <h1
            className="text-xl font-semibold text-secondary lg:text-2xl"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            {/* <span className="font-mono text-lg font-normal text-accent lg:text-xl">
              02.{" "}
            </span> */}
            About Me
          </h1>
          <div
            className="h-[1px] w-32 bg-primary md:w-96"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>
        <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
          {" "}
          <p data-aos="zoom-in-right">
            I'm Muhammad Alfienda Rahman, a Full Stack Web Developer with over 7
            years of industry experience, specializing in the{" "}
            <span className="text-accent">React and Node.js ecosystems</span>{" "}
            using <span className="text-accent">TypeScript/JavaScript</span>, as
            well as the{" "}
            <span className="text-accent">Spring Boot ecosystem</span> using {" "}
            <span className="text-accent">Java</span>. I have a strong track
            record of delivering modern, scalable applications using
            technologies such as React, Next.js, Spring Boot, and Node.js. My
            work is driven by a deep understanding of clean, maintainable code
            and a passion for building intuitive, high-quality user interfaces.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="100">
            My core strength lies in full stack development—crafting responsive,
            high-performance front-end applications with React, Next.js,
            Tailwind CSS, and Redux, while also engineering robust back-end
            systems using Spring Boot, Node.js, and Nest.js. I am also confident
            in DevOps practices, including deploying and managing cloud
            infrastructure on AWS.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="200">
            Throughout my career, I have successfully led engineering teams,
            integrated IoT technologies, and optimized business processes
            through impactful software solutions. From internal tools to
            large-scale production platforms, I have consistently contributed to
            projects that deliver measurable results and exceptional user
            experiences. I’m committed to continuous learning, actively mentor
            fellow engineers, and engage with the developer community to stay at
            the forefront of technology.
          </p>
        </div>
      </div>
      <div
        className="-my-20 pl-0 md:-my-40 lg:-my-0 xl:pl-24"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <div className="grayscale transition-all duration-500 hover:grayscale-0">
          <Image
            src={alfin}
            alt="alfin"
            height={2000}
            className="scale-50 lg:scale-100 2xl:scale-75"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
