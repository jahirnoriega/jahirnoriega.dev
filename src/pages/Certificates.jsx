/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { certificates_info } from "../data/certificates";
import CertificateCard from "../components/CertificateCard";

export function loader() {
  return certificates_info;
}

function Certificates() {
  const certificateData = useLoaderData();
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-midnight dark:text-whiter mt-12"
    >
      <h1 className="text-4xl font-extrabold my-3">Certificates.</h1>
      <p className="text-sm my-3">
        Here, you can see some of the certificates that I have obtained over the
        years.
      </p>
      <div className="">
        {certificateData.map((data) => (
          <CertificateCard key={data.id} data={data} />
        ))}
      </div>
    </motion.div>
  );
}

export default Certificates;
