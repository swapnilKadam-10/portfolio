import { portfolio } from "../constants";

export const Protfolio = () => {
  return (
    <section id="protfolio">
      <h1 className="text-4xl text-center font-bold text-purple-600 my-10 underline">
        Protfolio
      </h1>

      <div className="max-w-[1280px] flex flex-col items-center md:flex-row justify-evenly flex-wrap">
        {portfolio.map((project) => (
          <div
            key={project.id}
            className="max-w-64  my-5 border text-center rounded-xl"
          >
            <img
              src={project.imageUrl}
              alt={`image - ${project.title}`}
              className="max-w-64 h-52 rounded-t-xl object-contains"
            />
            <h2 className="p-2 text-xl font-bold">{project.title}</h2>
            <p>{project.desc}</p>

            <div className="p-5 py-10 flex justify-between text-white">
              <button className="py-1 px-5 bg-purple-600 rounded-lg ">
                <a href={project.code} target="_blank">
                  Code
                </a>
              </button>
              {project.isDemo ? (
                <button className="py-1 px-5 bg-purple-600 rounded-lg ">
                  <a href={project.demo} target="_blank">
                    Demo
                  </a>
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
