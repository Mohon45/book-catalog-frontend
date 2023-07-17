/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateBookMutation,
  useGetSingleBookQuery,
} from "../redux/books/bookApi";
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";

const UpdateBook = () => {
  const [date, setDate] = useState("");
  const [book, setBook] = useState({});

  interface INewBook {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
  }
  const { id } = useParams();
  const { register, handleSubmit } = useForm<INewBook>();
  const { data, isLoading, error } = useGetSingleBookQuery(id);
  //   const [createBook, { isLoading, isError, isSuccess }] =
  //     useCreateBookMutation();
  const navigate = useNavigate();
  //   if (isSuccess) {
  //     navigate("/books");
  //   }
  useEffect(() => {
    setBook(data?.data);
  }, [data?.data]);

  const onSubmitHandler = async (data) => {
    if (date) {
      data["publicationDate"] = date;
    }
    console.log(data);
    // await createBook(data);
  };
  console.log(book);
  return (
    <LoadingOverlay active={false}>
      <div className="w-[500px] mx-auto">
        <div className="w-full mx-auto max-w-sm p-4 mt-4 mb-8 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Update a Book
            </h5>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={book?.title}
                {...register("title", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
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
                {...register("genre", { required: true })}
              >
                <option selected>Choose a Genre</option>
                <option value="programming">Programming</option>
                <option value="nature">Nature</option>
                <option value="travel">Travel</option>
                <option value="genarel">Grnarel</option>
                <option value="gossiping">Gossiping</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="publicastionDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Publication Date
              </label>
              <DatePicker
                id="publicastionDate"
                className="w-[320px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                selected={(date && new Date(date)) || null}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                onChange={(date) => {
                  setDate(date?.toISOString().split("T")[0]);
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default UpdateBook;
