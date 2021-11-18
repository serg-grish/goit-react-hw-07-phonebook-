import InputForm from './Components/ContactForm';
import { ContactList } from './Components/ContactList';
import Filter from './Components/Filter';



export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <InputForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
  </>
  );
}
