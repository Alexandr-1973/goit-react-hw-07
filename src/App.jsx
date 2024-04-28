import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps.js";
import { useDispatch } from "react-redux";
import ContactForm from "./components/contact-form/ContactForm.jsx";
import SearchBox from "./components/search-box/SearchBox.jsx";
import ContactList from "./components/contact-list/ContactList.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
