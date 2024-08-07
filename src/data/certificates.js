// IMAGES
import jsCertificate from "../img/certificates/JavaScriptCertificate.webp";
import excelCertificate from "../img/certificates/UdemyCertificateExcel.webp";
import talentCertiifcate from "../img/certificates/TalentLand.webp";
import toeflCertificate from "../img/certificates/soon.webp";
//PDF
import jsCertificatePDF from "../pdf/JavaScript.pdf";
import excelCertificatePDF from "../pdf/UdemyCertificateExcel.pdf";
import talentCertiifcatePDF from "../pdf/TalentLand.pdf";
import toeflCertificatePDF from "../pdf/Resume - Jahir Noriega.pdf";

export const certificates_info = [
  {
    id: 1,
    certificate_name: "Excel Course",
    desc: "During the course, I picked up VBA skills and learned how to handle macros.",
    cover: excelCertificate,
    url: excelCertificatePDF,
  },
  {
    id: 2,
    certificate_name: "JavaScript",
    desc: "During this course, I was able to familiarize myself with the JavaScript tool, where I learned its fundamentals and carried out projects applying what I learned.",
    cover: jsCertificate,
    url: jsCertificatePDF,
  },
  {
    id: 3,
    certificate_name: "TalentLand",
    desc: "This certificate acknowledges my attendance at Talent Land in Guadalajara, Mexico. ",
    cover: talentCertiifcate,
    url: talentCertiifcatePDF,
  },
  {
    id: 4,
    certificate_name: "TOEFL iBT",
    desc: "I successfully completed the TOEFL iBT, achieving a 570 score. This certification attests to my strong proficiency in English.",
    cover: toeflCertificate,
    url: "",
  },
];
