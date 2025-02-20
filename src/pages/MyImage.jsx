import React from "react";
import sea from "../assets/images/sea.jpg";
import RotatingText from "../animetion/skillShow";

function MyImage() {
  return (
    <>
      <div className="flex justify-center items-center w-[80%] m-auto mb-4">
        <div className="bg-white dark:bg-[#3a5a40] rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl">
          {/* Image Section */}
          <div className="md:w-1/2 p-10 animate-fade-up">
            <img
              src={sea}
              alt="Placeholder"
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
          {/* Text Section */}
          <div className="p-3 md:w-1/2 flex flex-col justify-center text-center md:text-start font-mono">
            <span className="flex justify-center items-center md:flex md:justify-start md:items-center text-black dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 animate-spin"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <p className="text-sm underline">Web developer</p>
            </span>

            <h1 className="text-2xl text-black dark:text-white font-bold mb-4">
              Hello I'm <p className="text-green-700 dark:text-green-400">Nuon Thanith</p>
            </h1>
            <div className="mb-4 m-auto">
              <div className="flex items-center gap-3 font-bold text-lg lg:text-2xl">
                <p className="text-black dark:text-white">MY Skill</p>
                <RotatingText
                  texts={["Tailwind Css", "Html", "Css", "C++", "Reaact JS"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg bg-green-700 border-2"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </div>
            <p className="text-gray-600 dark:text-white mb-6 font-mono">
              I am a Junior Front-End Web Developer specializing in creating
              dynamic and user-friendly websites. My primary focus is on
              delivering engaging experiences that users enjoy. Currently, I am
              enhancing my skills in API integration and state management with
              Redux. I am eager to contribute to innovative projects and open to
              new job opportunities.
            </p>

            <a href="https://www.canva.com/design/DAGXAjIESag/O_k1IdMJEn1u4QvYvQGu9A/view?utm_content=DAGXAjIESag&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2de4b78108">
              <button className="w-full border-2 mt-2 dark:border-white rounded-lg p-2 dark:text-white hover:scale-95 transition flex justify-center items-center gap-3">
                <div>My CV</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyImage;
