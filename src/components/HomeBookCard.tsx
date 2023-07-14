import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBookCard = () => {
  const fakeData = [
    { id: 1, name: "1" },
    { id: 2, name: "1" },
    { id: 3, name: "1" },
    { id: 4, name: "1" },
    { id: 5, name: "1" },
    { id: 6, name: "1" },
    { id: 7, name: "1" },
    { id: 8, name: "1" },
    { id: 9, name: "1" },
    { id: 10, name: "1" },
  ];
  return (
    <div className="my-8">
      <Slider
        slidesToShow={2}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={1500}
        pauseOnFocus={false}
        pauseOnHover={false}
      >
        {fakeData.map((item, index) => (
          <Link
            to="/"
            className=" bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100"
          >
            <div className="flex">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://i.ibb.co/4K8FGRS/R.jpg"
                alt=""
              />
              <div className=" p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBookCard;
