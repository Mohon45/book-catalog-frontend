import "flowbite";
const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-[#0F15A2] border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-6">
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Flowbite
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <div className="relative inline-flex items-center justify-center w-10 h-10 p-4 overflow-hidden bg-gray-100 rounded-full  ring-2 ring-gray-300">
                <span className="font-medium text-xl text-gray-600">Md</span>
              </div>
            </button>
            {/* Dropdown menu  */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-red-500 divide-y divide-gray-100 rounded-lg shadow"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-red-700">Bonnie Green</span>
                <span className="block text-sm  text-gray-500 truncate">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 border-b-2 border-b-[#0F15A2] md:bg-transparent md:p-0 text-[#ffffffb2] md:hover:text-white  md:focus:text-white md:hover:border-b-[#EEEEEE] md:focus:border-b-[#EEEEEE] text-xl"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 border-b-2 border-b-[#0F15A2] md:bg-transparent md:p-0 text-[#ffffffb2] md:hover:text-white  md:focus:text-white md:hover:border-b-[#EEEEEE] md:focus:border-b-[#EEEEEE] text-xl"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 border-b-2 border-b-[#0F15A2] md:bg-transparent md:p-0 text-[#ffffffb2] md:hover:text-white  md:focus:text-white md:hover:border-b-[#EEEEEE] md:focus:border-b-[#EEEEEE] text-xl"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 border-b-2 border-b-[#0F15A2] md:bg-transparent md:p-0 text-[#ffffffb2] md:hover:text-white  md:focus:text-white md:hover:border-b-[#EEEEEE] md:focus:border-b-[#EEEEEE] text-xl"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 border-b-2 border-b-[#0F15A2] md:bg-transparent md:p-0 text-[#ffffffb2] md:hover:text-white  md:focus:text-white md:hover:border-b-[#EEEEEE] md:focus:border-b-[#EEEEEE] text-xl"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
