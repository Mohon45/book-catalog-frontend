/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const BookCard = ({ book }) => {
  // console.log(book);
  return (
    <div>
      <div className="max-w-sm h-[400px] bg-white border border-gray-200 rounded-lg shadow">
        <a href="#" className="h-[15px]">
          <img className="rounded-t-lg w-[100%]" src={book.image} alt="" />
        </a>
        <div className="h-[250px] flex flex-col justify-between p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.title}
            </h5>
          </a>
          <div>
            <h1 className="text-xl">
              Author : <span className="font-semibold">Md. Mohon</span>
            </h1>
            <div className="flex justify-between text-sm mt-2">
              <p>Genre : Nature</p>
              <p>Publication Year : 2023</p>
            </div>
          </div>
          <div className="">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
