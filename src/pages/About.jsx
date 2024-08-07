/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { jobs_info } from "../data/jobs";
import Button from "../components/Button";
import JobCard from "../components/JobCard";
import ImagesGallery from "../components/ImagesGallery";

export function loader() {
  return jobs_info;
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
              <p className="mb-8">
                I'm Jahir Noriega, and I'm passionate about coding. I live in
                Mexico and I'm bilingual. I love to learn new thing. I have a
                deep love for front-end development and enjoy creating visually
                appealing designs.
              </p>
            </td>
          </tr>
          <tr className="items-baseline align-top my-5">
            <td className="w-1/4 "></td>
            <td className="w-3/4 ">
              <p className="mb-8">
                Fluent in multiple programming languages, I possess
                certifications in JavaScript, HTML, , PHP, MySQL and React. My
                ongoing learning experiences have equipped me with in-depth
                knowledge and the ability to proficiently execute projects in
                these diverse languages and BI.
              </p>
            </td>
          </tr>
          <tr className="items-baseline align-top">
            <td className="w-1/4 ">Connect</td>
            <td className="w-3/4 ">
              <p className="mb-8">
                Have a question? Feel free to email me. You can also explore the
                following links for more information.
              </p>
            </td>
          </tr>
          <Button />
          <tr className="items-baseline align-top">
            <td className="w-1/4 ">Work</td>
            <td className="w-3/4 ">
              <p className="mb-8">
                + 4 years learning different development languages
              </p>
            </td>
          </tr>
          <tr className="items-baseline align-top">
            <td className="w-1/4 "></td>
            <td className="w-3/4 ">
              <p className="mb-8">
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
