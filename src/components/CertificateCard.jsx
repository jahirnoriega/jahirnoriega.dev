import { useState } from "react";
import Spinner from "./Spinner";

function CertificateCard(data) {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  const { certificate_name, desc, cover, url } = data.data;
  return (
    <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500 my-8 hover:opacity-100 dark:hover:text-midnight dark:hover:bg-whiter rounded-lg hover:bg-white  ">
      <a href={url} target="_blank">
        <div className="md:flex mb-3 rounded">
          <div className="md:w-1/3 flex justify-center items-center">
            {isLoading && <Spinner />}
            <img
              src={cover}
              alt={certificate_name}
              className=" h-full object-cover rounded-lg"
              onLoad={handleImageLoad}
            />
          </div>
          <div className="md:w-2/3 px-2">
            <h4 className="text-2xl font-extrabold my-2">{certificate_name}</h4>
            <p className="text-sm my-3">{desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CertificateCard;
