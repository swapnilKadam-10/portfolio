import { contactusbg } from "../assets";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="max-w-[1280px] justify-center">
        <h1 className="text-4xl font-bold underline text-center py-5 text-purple-600">
          Contact
        </h1>
        <div className=" p-2 flex flex-col md:flex-row justify-around items-top">
          <img src={contactusbg} alt="contact image" className="w-96 " />
          <div>
            <div className="border mt-10 text-lg font-semibold flex p-3 min-w-80 rounded-xl hover:text-white hover:bg-purple-600">
              <span>
                <i className="bi bi-envelope-at-fill"></i>
              </span>
              <span className="ml-4">
                <a
                  href="mailto:kadamswapnil4259@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kadamswapnil4259@gmail.com{" "}
                </a>
              </span>
            </div>

            <div className="border text-lg font-semibold  flex p-3  min-w-80 rounded-xl hover:text-white mt-4 hover:bg-purple-600">
              <span>
                <i className="bi bi-linkedin h-8 w-5"></i>
              </span>
              <span className="ml-4">
                {" "}
                <a
                  href="https://www.linkedin.com/in/swapnil-kadam-a829472a4/"
                  target="_blank"
                >
                  Swapnil Kadam
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
