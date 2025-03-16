import toast from "react-hot-toast";
import { FcSearch } from "react-icons/fc";
import React, { FormEvent } from "react";
import s from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (newQuery: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const textElement = target.elements.namedItem(
      "text"
    ) as HTMLInputElement | null;

    if (!textElement) {
      toast.error("The text input element was not found.");
      return;
    }
    const value = textElement.value;
    if (!value) {
      toast.error("Fill out the search form, please!");
      return;
    }
    onSearch(value);
  };

  return (
    <header className={s.header}>
      <form className={s.wrapper} onSubmit={handleSubmit}>
        <button className={s.btn} type="submit">
          <FcSearch className={s.icon} />
        </button>
        <input
          className={s.input}
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
