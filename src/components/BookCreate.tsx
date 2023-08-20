import React, { useState } from "react";

interface BookCreateProps {
  onCreate: (title: string) => void;
}

export const BookCreate: React.FC<BookCreateProps> = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event,
  ): void => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="fixed bottom-0 w-screen bg-green-300 px-10 pb-8 pt-5">
      <h3 className="text-center text-2xl font-bold text-white">Add a book</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <div className="relative h-10 w-full min-w-[200px]">
            <input
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
              type="text"
              id="title"
              name="title"
              placeholder=" "
              value={title}
              onChange={handleChange}
            />
            <label
              className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent"
              htmlFor="title"
            >
              Title
            </label>
          </div>
        </div>
        <button
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  sm:w-auto"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};
