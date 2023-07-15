/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import LoadingOverlay from "react-loading-overlay";
import { useGetBooksQuery } from "../redux/books/bookApi";
import { setSearchTerm, setPublicationYear } from "../redux/books/bookSlice";
import { IBook } from "../type/globalTypes";
import BookCard from "../components/BookCard";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Books = () => {
  const years = Array.from({ length: 50 }, (_, index) => 2023 - index);
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  const { searchTerm, publicationYear } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();
  let filtedData = null;
  if (searchTerm !== "") {
    const searchMatch = data?.data.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    filtedData = searchMatch;
  } else if (publicationYear) {
    const yearMatch = data?.data.filter(
      (book) => book.publicationYear === publicationYear
    );
    filtedData = yearMatch;
  } else {
    filtedData = data?.data;
  }

  return (
    <LoadingOverlay active={isLoading}>
      <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
        <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
          <div>
            <div>
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                  placeholder="Search"
                />
              </div>
              <h1 className="mt-8 mb-4 text-xl font-semibold">Filter</h1>

              <div>
                <label
                  htmlFor="years"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Publication Year
                </label>
                <select
                  id="years"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => dispatch(setPublicationYear(e.target.value))}
                >
                  <option selected>Choose a Year</option>
                  {years.map((year) => (
                    <option value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="genre"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Genre
                </label>
                <select
                  id="genre"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option selected>Choose a Genre</option>
                  <option value="nature">Nature</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {filtedData?.map((book: IBook) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default Books;
