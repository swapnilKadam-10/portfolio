import { profilePic } from "../assets";
import { AppText } from "../constants";
import TypingEffect from "../features/TypingEffect";

export const Home = () => {
  const downloadFile = () => {
    // Path to the file
    const fileUrl = "./resume.pdf";

    // Create a temporary link element
    const link = document.createElement("a");

    // Set the link's href to the file URL
    link.href = fileUrl;

    // filename name
    link.download = "swapnilKadam.pdf";

    //  link to trigger the download
    link.click();
  };

  return (
    <section id="home">
      <div className="mt-7 px-4 flex flex-col items-center md:flex-row justify-between">
        <div className="w-[460px] ">
          <h1 className="text-4xl font-bold">{AppText.hello}</h1>
          
          <div className="flex flex-col sm:flex-row">
          <h1 className="text-4xl font-bold">
            {AppText.Iam} &nbsp;
            </h1>
            <h1 className="text-4xl font-bold">
            <span className="mt-4 text-purple-500">
              <TypingEffect
                words={[
                  "Swapnil Kadam.",
                  "Frontend Developer.",
                  "Java Developer.",
                ]}
              />
            </span>
            </h1>
          
          </div>

          <button
            onClick={() => downloadFile()}
            className="mt-4 bg-purple-600 p-2 px-3 rounded-md text-white transition-all ease-in-out hover:scale-110"
          >
            Resume
          </button>
        </div>
        <img
          src={profilePic}
          alt="homeImage"
          className="w-60 mt-5 rounded-full md:mr-20"
        />
      </div>
    </section>
  );
};
