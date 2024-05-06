import clsx from "clsx";
import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={clsx(style.loreMoreBtn)} type="button" onClick={onClick}>
      <span>Load more</span>
    </button>
  );
};

export default LoadMoreBtn;
