import { useState } from "react";
import { BookCreate } from "./components/BookCreate";
import { Book } from "./commonTypes";

export const App = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const createBook = (title: string): void => {
    console.log("Need to add book with title:", title);
  };

  return (
    <>
      <BookCreate onCreate={createBook} />
    </>
  );
};
