/* eslint-disable react/prop-types */
import {
  FaThreads,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaInbox,
  FaIdCard,
} from "react-icons/fa6";
import cv from "../pdf/Resume - Jahir Noriega.pdf";

function Button() {
  return (
    <>
      <tr className="items-baseline align-top">
        <td className="w-1/4 "></td>
        <td className="w-3/4 ">
          <div className="flex justify-between h-8 mb-4">
            <button
              className="flex pl-1 w-[47%] border border-midnight dark:border-whiter transparent shadow items-center transition ease-in-out delay-200 hover:scale-110 duration-500 p-2 dark:hover:text-midnight dark:hover:bg-whiter rounded-lg hover:bg-midnight hover:text-whiter "
              onClick={() => window.open("mailto:noriegajahir@gmail.com")}
            >
              <FaInbox className="h-5 w-auto border-midnight dark:border-whiter mx-3 my-1.5" />
              Mail
            </button>
            <button
              className="flex pl-1 w-[47%] border border-midnight dark:border-whiter transparent shadow items-center transition ease-in-out delay-200 hover:scale-110 duration-500  p-2 dark:hover:text-midnight dark:hover:bg-whiter rounded-lg hover:bg-midnight hover:text-whiter "
              onClick={() => window.open(cv)}
            >
              <FaIdCard className="h-5 w-auto border-midnight dark:border-whiter mx-3 my-1.5" />
              CV
            </button>
          </div>
        </td>
      </tr>
      <tr className="items-baseline align-top">
        <td className="w-1/4 "></td>
        <td className="w-3/4 ">
          <div className="flex justify-between h-8 mb-4">
            <button
              className="flex pl-1 w-[47%] border border-midnight dark:border-whiter transparent shadow items-center transition ease-in-out delay-200 hover:scale-110 duration-500 p-2 dark:hover:text-midnight dark:hover:bg-whiter rounded-lg hover:bg-midnight hover:text-whiter  "
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jahir-noriega-63723218a/"
                )
              }
            >
              <FaLinkedin className="h-5 w-auto border-midnight dark:border-whiter mx-3 my-1.5" />
              LinkedIn
            </button>
            <button
              className="flex pl-1 w-[47%] border border-midnight dark:border-whiter transparent shadow items-center transition ease-in-out delay-200 hover:scale-110 duration-500 p-2 dark:hover:text-midnight dark:hover:bg-whiter rounded-lg hover:bg-midnight hover:text-whiter "
              onClick={() => window.open("https://github.com/jahirnoriega")}
            >
              <FaGithub className="h-5 w-auto border-midnight dark:border-whiter mx-3 my-1.5" />
              GitHub
            </button>
          </div>
        </td>
      </tr>
      <tr className="items-baseline align-top">
        <td className="w-1/4 "></td>
        <td className="w-3/4 ">
          <div className="flex justify-between h-8 mb-4">
            <button
              className="flex pl-1 w-[47%] border border-midnight dark:border-whiter transparent shadow items-center transition ease-in-out delay-200 hover:scale-110 duration-500 p-2 dark:hover:text-midnight dark:hover:bg-whiter rounded-lg hover:bg-midnight hover:text-whiter"
              onClick={() =>
                window.open("https://www.instagram.com/jahir_noriega/")
              }
            >
              <FaInstagram className="h-5 w-auto border-midnight dark:border-whiter mx-3 my-1.5" />
              Instagram
            </button>
            <button
              className="flex pl-1 w-[47%] border border-midnight dark:border-whiter transparent shadow items-center transition ease-in-out delay-200 hover:scale-110 duration-500 p-2 dark:hover:text-midnight dark:hover:bg-whiter rounded-lg hover:bg-midnight hover:text-whiter "
              onClick={() =>
                window.open("https://www.threads.net/@jahir_noriega")
              }
            >
              <FaThreads className="h-5 w-auto border-midnight dark:border-whiter mx-3 my-1.5" />
              Threads
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Button;
