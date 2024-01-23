/* eslint-disable react/no-unescaped-entities */

import { useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import JobCard from "../components/JobCard";
import az from "../img/autozone.webp";
import ImagesGallery from "../components/ImagesGallery";
import { motion } from "framer-motion";

export function loader() {
  const jobs = [
    {
      id: 1,
      companyName: "AutoZone BTSSC",
      position: "Internship",
      start: 2023,
      end: "Now",
      link: "https://btssc.autozone.com",
      cover: az,
    },
  ];
  return jobs;
}

function About() {
  const jobsInfo = useLoaderData();
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-midnight dark:text-whiter mt-12 text-sm "
    >
      <ImagesGallery></ImagesGallery>
      <table className="text-justify  border-separate text-wrap overflow-ellipsis">
        <tbody>
          <tr className="items-baseline align-top">
            <td className="w-1/4 ">About Me</td>
            <td className="w-3/4 ">
              <p className="mb-4">
                I'm Jahir Noriega, and I'm passionate about coding. I live in
                Mexico and I'm bilingual. I love to learn new thing.
              </p>
            </td>
          </tr>
          <tr className="items-baseline align-top">
            <td className="w-1/4 "></td>
            <td className="w-3/4 ">
              <p className="mb-4">
                Fluent in multiple programming languages, I possess
                certifications in JavaScript, HTML, CSS, PHP, MySQL, Flutter,
                Arduino, and React. My ongoing learning experiences have
                equipped me with in-depth knowledge and the ability to
                proficiently execute projects in these diverse languages.
              </p>
            </td>
          </tr>
          <tr className="items-baseline align-top">
            <td className="w-1/4 "></td>
            <td className="w-3/4 ">
              <p className="mb-4">
                I have a deep love for front-end development and enjoy creating
                visually appealing designs.
              </p>
            </td>
          </tr>
          <tr className="items-baseline align-top">
            <td className="w-1/4 ">Connect</td>
            <td className="w-3/4 ">
              <p className="mb-4">
                Have a question? Feel free to email me. You can also explore the
                following links for more information.
              </p>
            </td>
          </tr>
          <Button />
          <tr className="items-baseline align-top">
            <td className="w-1/4 ">Work</td>
            <td className="w-3/4 ">
              <p className="mb-4">
                + 4 years learning different development languages
              </p>
            </td>
          </tr>
          <tr className="items-baseline align-top">
            <td className="w-1/4 "></td>
            <td className="w-3/4 ">
              <p className="mb-4">
                Currently, I am pursuing a university degree in engineering. I
                have secured an internship at Autozone BTSSC and am dedicated to
                expanding my knowledge and improving my skills in my role.
              </p>
            </td>
          </tr>
          <tr className="items-baseline align-top">
            <td className="w-1/4 "></td>
            <td className="w-3/4 ">
              {jobsInfo.map((job) => (
                <JobCard key={job.id} data={job} />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
}

export default About;
