import React from "react";

const Modal = () => {
  return (
    <section className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 md:h-48 md:flex-row">
      <div className="md:flex md:w-1/2 md:items-center md:justify-center md:bg-gray-700 md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
          <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
            Sign Up For
            <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
              Project
            </span>
            Updates
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur obcaecati odio
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center pb-6 md:w-1/2 md:py-0">
        <form>
          <div className="flex flex-col overflow-hidden rounded-lg border p-1.5 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:border-gray-600 dark:focus-within:border-blue-300 lg:flex-row">
            <input
              className="bg-white px-6 py-2 text-gray-700 placeholder-gray-500 outline-none focus:placeholder-transparent dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:placeholder-transparent"
              type="text"
              name="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />

            <button className="transform rounded-md bg-gray-700 px-4 py-3 text-sm font-medium uppercase tracking-wider text-gray-100 transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Modal;
