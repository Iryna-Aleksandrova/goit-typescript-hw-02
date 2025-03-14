import toast from "react-hot-toast";
import { FcSearch } from "react-icons/fc";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.text;
    if (!value) {
      toast.error("Complete the search form, please!");
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
