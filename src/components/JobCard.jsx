import { Link } from "react-router-dom";

function JobCard(data) {
  const { companyName, position, start, end, link, cover } = data.data;
  return (
    <div className=" transition ease-in-out delay-200 hover:scale-110 duration-500 dark:hover:text-midnight dark:hover:bg-whiter rounded-xl hover:bg-white">
      <Link to={link} target="_blank" rel="noreferrer">
        <div className="flex rounded justify-center align-center mb-1">
          <img
            src={cover}
            className=" max-w-16 rounded-full h-1/5"
            alt={companyName}
            loading="lazy"
          />
          <div className="w-4/5 px-3">
            <h4 className="text-justify">{companyName}</h4>
            <p className="text-justify">{position}</p>
          </div>
          <h4>
            {start}-{end}
          </h4>
        </div>
      </Link>
    </div>
  );
}

export default JobCard;
