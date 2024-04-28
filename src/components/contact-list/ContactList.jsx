import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import Contact from "../contact/Contact";
import Loader from "../loader/Loader.jsx";
import ErrorMessage from "../error-message/ErrorMessage.jsx";
import css from "./ContactList.module.css";

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const visibleContactList = useSelector(selectFilteredContacts);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ul className={css["contact-list"]}>
        {visibleContactList.map((contactInfo) => {
          return (
            <li key={contactInfo.id}>
              <Contact contactInfo={contactInfo} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
