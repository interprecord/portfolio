import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
// JavaScript,React,Material-UI,Firebase(Cloud FireStore,Authentication,Hosting)"
interface projectType {
  name: string;
  description: string;
  function: string;
  referenceSiteName?: string;
  referenceSite?: string;
  technologyName: string;
  technology: string[];
  image: string;
  github: string;
  link: string;
}
const projects: projectType[] = [
  {
    name: "QuestionApp",
    description:
      "QuestionAppはシンプルなアンケートアプリです。以前就業していた会社で使用していた紙のアンケートをデジタル化してみました。",
    function: "主な機能: Google認証機能, FireStoreによるデータ管理",
    // referenceSiteName: "参考:",
    // referenceSite: ,

    technologyName: "使用技術:",
    technology: [
      "JavaScript",
      "TypeScript",
      "React",
      "Material-UI",
      "Firebase",
      "FireStore",
      "Authentication",
      "firebaseHosting",
    ],
    image: "/questionApp.png",
    github: "https://github.com/interprecord/questionnaireApp.git",
    link: "https://questionnaireapp-2462e.web.app/",
  },
  {
    name: "PortfolioCloneApp",
    description:
      "「写真家の石田真澄さんのポートフォリオサイトのコードを見ずに再現する」をコンセプトに作りました。",
    function:
      "主な機能: レスポンシブ対応, 時間、スクロールによるダークモード切替 ",
    referenceSiteName: "参考:",
    referenceSite: "http://masumiishida.com/",
    technologyName: "使用技術:",
    technology: [
      "JavaScript",
      "TypeScript",
      "React",
      "Material-UI",
      "Vercel",
      "microCMS",
    ],
    image: "/MASUMI ISHIDA.jpg",
    github: "https://github.com/interprecord/ishida-masumi-clone-app.git",
    link: "https://ishida-masumi-clone-app-p2up.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 items-center">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-l leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    {project.referenceSiteName && project.referenceSite && (
                      <div className="mt-2">
                        <a className="text-9l font-bold mb-6">
                          {project.referenceSiteName}
                        </a>
                        <Link  href={project.referenceSite} target="_blank" rel="noopener noreferrer">
                          <p className="mt-3 text-sky-400 ">
                            {project.referenceSite}
                          </p>
                        </Link>
                      </div>
                    )}
                    <p className="text-9l font-bold mb-6 mt-3">{project.function}</p>
                    <p className="text-9l font-bold mt-6">
                      {project.technologyName}
                    </p>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                      {project.technology.map((item) => {
                        return (
                          <p
                            key={idx}
                            className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                    <div className="flex flex-row align-bottom space-x-4 my-5">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
