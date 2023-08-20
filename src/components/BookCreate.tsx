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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
};
