import { laptop, wave } from "../assets";
import { aboutSection, AppText } from "../constants";

export const AboutMe = () => {
  return (
    <section id="about">
      <div className="mt-40">
        {" "}
        <img src={wave} alt="" className="w-screen absolute" />
        <img src={laptop} className="absolute mt-[-120px] w-52 md:w-72" />
        <div className=" w-full bg-purple-600 text-white p-4 px-4 pt-20">
          <h2 className=" text-3xl md:text-5xl text-center font-bold">
            About <span className="text-black">Me</span>
          </h2>
          <h2 className="p-10 px-6 md:px-24">{AppText.aboutMeDescripion} </h2>
        </div>
        <div className="mb-5 px-7 pb-7 flex flex-col md:flex-row items-center  justify-around mt-[-40px] text-center cursor-pointer">
          {aboutSection.map((item) => (
            <div
              key={item.id}
              className="px-5 w-72  md:w-80 group hover:bg-purple-600  items-center rounded-xl"
            >
              <img
                src={item.image}
                alt=""
                className="w-80  h-72   rounded-2xl p-3 "
              />
              <h2 className="font-bold text-2xl py-2 px-2 group-hover:text-white">
                {item.title}
              </h2>
              <h2 className="pb-3 px-2 text-gray-500 group-hover:text-white">
                {item.desc}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
