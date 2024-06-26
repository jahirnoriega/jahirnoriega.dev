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
    desc: "During the course, I picked up VBA skills and learned how to handle macros. Excel is a powerhouse, and it's pretty much a must-have for anyone looking to stand out in their professional game.",
    cover: excelCertificate,
    url: excelCertificatePDF,
  },
  {
    id: 2,
    certificate_name: "JavaScript",
    desc: "During this course, I was able to familiarize myself with the JavaScript tool, where I learned its fundamentals and carried out projects applying what I learned. Additionally, I delved into more advanced topics in this course, which I can apply in various projects and tasks.",
    cover: jsCertificate,
    url: jsCertificatePDF,
  },
  {
    id: 3,
    certificate_name: "TalentLand",
    desc: "This certificate acknowledges my attendance at Talent Land in Guadalajara, Mexico. This event is dedicated to talent development, providing a platform to connect with technology experts through conferences and booths, fostering inspiration and networking opportunities.",
    cover: talentCertiifcate,
    url: talentCertiifcatePDF,
  },
  {
    id: 4,
    certificate_name: "TOEFL iBT",
    desc: "I successfully completed the TOEFL iBT, achieving a 570 score. This certification attests to my strong proficiency in English, demonstrating my ability to comprehend and communicate effectively in academic and professional settings.",
    cover: toeflCertificate,
    url: "",
  },
];
