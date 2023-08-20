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
    <div className="fixed bottom-0 w-screen bg-green-400 px-10 pb-8 pt-5">
      <h3 className="text-center text-2xl font-bold text-white">Add a book</h3>
      <form className="grid grid-flow-col gap-2" onSubmit={handleSubmit}>
        <div className="grid grid-flow-col items-center justify-center">
          <label className="hidden" htmlFor="title">
            Title
          </label>
          <input
            className="w-28 rounded-full bg-green-100 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
            type="text"
            id="title"
            name="title"
            placeholder="Enter a book"
            value={title}
            onChange={handleChange}
          />
        </div>

        <button
          disabled={!title}
          className="inline-block rounded-full bg-green-200 px-4 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 active:bg-green-500 disabled:cursor-not-allowed disabled:bg-stone-400"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};
