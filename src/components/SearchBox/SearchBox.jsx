import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="filter" id="filter" className={css.filter} />
    </div>
  );
}
