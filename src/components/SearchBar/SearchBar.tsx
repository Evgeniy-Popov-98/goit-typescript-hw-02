import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { search } = form.elements;
    if (search.value.length === 0) {
      toast.error("The input field is empty! Please write a word to search.", {
        icon: "😰",
      });
    } else {
      onSubmit(search.value);
    }
  };
  return (
    <header className={clsx(style.headerBox)}>
      <form className={clsx(style.headerForm)} onSubmit={handleSubmit}>
        <input
          className={clsx(style.headerInput)}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={clsx(style.formButton)} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
