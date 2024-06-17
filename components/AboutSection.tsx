import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "material UI" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
               改めまして、中前心と申します。
              </p>
              <br />
              <p>
               大学4年次にエンジニアの勉強を独学ではじめるも挫折。
               <br />
               大学卒業後、人々の役に立てるような働き方がしたいという思いから、
              国家公務員試験を得て国税専門官として就職しました。
              <br />
              しかし、中々思うような働き方ができず、その後職業訓練校で建築を学んだりキャリアのことで色々悩んだ時期もありましたが、
              人々の役に立てること、そして自分の性格を鑑み、興味を持って長く続けられるお仕事がしたいという原点に立ち返り、再びエンジニア職を目指して、2013年10月より勉強を開始しました。
            </p>
            <br />
            <p>
             現在は、主にReact、TypeScriptを使った開発をしていますが、Next.js、Pythonなども学んでいて、幅広く知識を吸収したいと考えています。
            </p>
      
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
