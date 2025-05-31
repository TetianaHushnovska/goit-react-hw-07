import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter, setFilter } from "../../redux/filtersSlice";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectNameFilter);

  const debounced = useDebouncedCallback(
    (value) => dispatch(setFilter(value.trim())),
    400
  );

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.filter}
        defaultValue={filteredContacts}
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  );
}
