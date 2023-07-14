import banner from "../assets/banner.png";
import HomeBookCard from "../components/HomeBookCard";
const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center mx-auto">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            BOOK CATALOG <br />
            LEARN TO MOVE
          </h1>
          <p className=" text-secondary font-semibold text-xl">
            Book Catalog regularly publishes fascinating features
          </p>
          <p className=" text-secondary font-semibold text-xl">
            about a huge variety of bookish subjects.
          </p>
          <div className="text-primary mt-20">
            <p>The latest book read everyone and post a feedback.</p>
            <p>Precise 143 Amoled display for clear visuals</p>
          </div>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-xl rounded-lg px-5 py-2.5 text-center mr-2 mb-2 mt-4"
          >
            Learn More...
          </button>
        </div>
        <div className="relative -right-30">
          <img className="w-[80%] mx-auto" src={banner} alt="" />
        </div>
      </div>

      <div className="mb-4">
        <h1 className="text-3xl text-center font-semibold m-0">
          The Latest Books Here
        </h1>
        <hr className="w-[320px] mx-auto border-2 border-[#0F15A2]" />

        <div className="">
          <HomeBookCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
