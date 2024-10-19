import { AppText, skillsList } from "../constants";

export const Skills = () => {
  return (
    <section id="skills" className="text-center">
      <h1 className="text-4xl font-bold text-purple-600 mb-10 stroke-red-400 underline">
        {AppText.Skills}
      </h1>
      <div className="flex max-w-[1280px] flex-wrap justify-evenly border rounded-xl cursor-pointer">
        {skillsList.map((skill) => (
          <div
            key={skill.id}
            className="w-40  m-5 p-5 transition-all ease-in-out hover:scale-105 rounded-xl hover:bg-purple-600 text-gray-500 hover:text-white border-2"
          >
            <img src={skill.icon} className="w-36 h-28  items-center" />
            <h3 className=" font-semibold  pt-4">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
