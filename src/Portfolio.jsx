import { Fragment } from "react";
import PropTypes from "prop-types";

export const Portfolio = () => {
  return (
    <>
        
      <div className="personal-details w-full md:col-span-4 bg-white rounded-lg px-6">
        <div className="personal-header flex flex-col items-center">
          <h1 className="mt-6 text-3xl font-semibold text-center">
            José Luis <br />
            Aguilar Nucamendi
          </h1>
          <h3 className="mb-4 px-5 py-1.5 inline-block rounded-lg">
            Software Engineering
          </h3>
        </div>

        <div className="social-media">
          <div className="flex justify-center space-x-3">

            <a href="https://github.com/josxluis" target={"_blank"}>
              <span className="socialbtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </span>
            </a>

            <a href="https://www.linkedin.com/in/jose-luis-aguilar-nucamendi" target={"_blank"}>
              <span className="socialbtn">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="information p-7 mt-7 rounded-2xl">
          <div className="flex border pb-2.5 ">
            <span class="flex-shrink-0 socialbtn bg-white shadow-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
              </svg>
            </span>
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p>
              <p class="dark:text-white break-all">
                {" "}
                <a
                  class=""
                  href="tel:+1234567890"
                >
                  +123 456 7890
                </a>
              </p>
            </div>
          </div>
          <div className="flex border pb-2.5 ">
            <span class="flex-shrink-0 socialbtn bg-white shadow-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
              </svg>
            </span>
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
              <p class="dark:text-white break-all">
                {" "}
                <a
                  class=""
                  href="tel:+1234567890"
                >
                  luisaguilarnucamendi@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex border pb-2.5 ">
            <span class="flex-shrink-0 socialbtn bg-white shadow-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
              </svg>
            </span>
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p>
              <p class="dark:text-white break-all">
                {" "}
                <a
                  class=""
                  href="tel:+1234567890"
                >
                  +123 456 7890
                </a>
              </p>
            </div>
          </div>
          <div className="flex border pb-2.5 ">
            <span class="flex-shrink-0 socialbtn bg-white shadow-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
              </svg>
            </span>
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Age</p>
              <p class="dark:text-white break-all">
                {" "}
                <a
                  class=""
                  href="tel:+1234567890"
                >
                  22
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="download-cv flex items-center">
          <a
            href="#"
            download=""
            class="inline-flex mx-auto px-8 py-3 bg-black text-lg text-white rounded-[35px] mt-6 mb-6"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

// Portfolio.PropTypes = {
//     title: PropTypes.string
// }
