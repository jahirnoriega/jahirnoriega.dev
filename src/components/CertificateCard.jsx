function CertificateCard(data) {
  const { certificate_name, desc, cover, url } = data.data;
  return (
    <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500 my-8 hover:opacity-100 dark:hover:text-midnight dark:hover:bg-whiter rounded-lg hover:bg-white  ">
      <a href={url} target="_blank" rel="noreferrer">
        <div className="md:flex mb-3 rounded">
          <img
            src={cover}
            alt={certificate_name}
            className="md:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="px-2">
            <h4 className="text-2xl font-extrabold my-2">{certificate_name}</h4>
            <p className="text-sm my-3">{desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CertificateCard;
