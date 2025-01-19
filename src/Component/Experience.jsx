import frame from "../assets/frame.png";
import { FaArrowUpLong } from "react-icons/fa6";
import bgTryMe from "../assets/bg-tryMe.png";
const Experience = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div id="education" className=" container mx-auto space-y-6 mb-16">
      <div className="pt-10">
        <h3 className="text-center text-mainColor font-semibold mb-2">
          Education and Experience
        </h3>
        <h1 className="text-center text-4xl font-semibold mb-10">
          Education & Experience
        </h1>
        <div className=" flex justify-between pt-10">
          <div className="flex">
            <img src={frame} alt="" className="mr-5" />
            <div className="w-[85%]">
              <div className="mb-4">
                <h1 className="text-lg font-bold">Experince Designer</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  ratione?
                </p>
              </div>
              <div className="mb-4">
                <h1 className="text-lg font-bold">Experince Designer</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis, placeat!
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <div>
              <div className="mb-4">
                <h1 className="text-lg font-bold">Experince Designer</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, repellendus!
                </p>
              </div>
              <div className="mb-4">
                <h1 className="text-lg font-bold">Experince Designer</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Unde, dolores.
                </p>
              </div>
            </div>
            <img src={frame} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full text-right">
        <button
          onClick={scrollToTop}
          className="bg-mainColor p-2 text-white rounded-md"
        >
          <FaArrowUpLong />
        </button>
      </div>

      <div className="">
        <div
          className="w-[90%] mx-auto p-[100px] text-white"
          style={{
            backgroundImage: `url(${bgTryMe})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        >
          <div className="flex items-center justify-between h-full ">
            <div className="w-1/2">
              <h1 className="text-4xl mb-2 font-bold">
                Try me out, risk free!
              </h1>
              <p className="">
                If you’re not happy with the design after the first draft, I’ll
                refund your deposit,
                <span className="font-bold ">no questions asked</span>
              </p>
            </div>
            <button className="bg-[#7DE0EA] text-white p-2 px-3 rounded">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
