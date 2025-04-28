import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

export default function Contact({ name, number }) {
  return (
    <div className={css.card}>
      <div>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <div>
        <button className={css.button}>Delete</button>
      </div>
    </div>
  );
}
