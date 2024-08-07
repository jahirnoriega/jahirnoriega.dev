import { Link } from "react-router-dom";

function JobCard(data) {
  const { companyName, position, start, end, link, cover } = data.data;
  return (
    <div className="justify-between  transition ease-in-out delay-200 hover:scale-110 duration-500  dark:hover:bg-hover rounded-xl hover:bg-white">
      <Link to={link} target="_blank" rel="noreferrer">
        <div className="flex rounded justify-between items-center h-20 m-1">
          <img
            src={cover}
            className=" max-w-16 rounded-full h-4/5"
            alt={companyName}
            loading="lazy"
          />
          <div className="w-3/5 px-3">
            <h2 className="text-justify">{position}</h2>
            <p className="text-justify dark:text-white text-hover">
              {companyName}
            </p>
          </div>
          <div className="w-1/3 justify-end text-right">
            <h4>
              {start}-{end}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default JobCard;
