import { Fragment } from "react";
import PropTypes from "prop-types";

export const Header = () => {
  return (
    <>
      <header>
        <div className="w-full flex justify-between px-4 py-7">
          <div className="logo font-semibold text-4xl">@JosxLuis</div>
          <div class="flex items-center">
            <span class="bg-white w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#ef4060] text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class=" text-3xl "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

// Portfolio.PropTypes = {
//     title: PropTypes.string
// }
